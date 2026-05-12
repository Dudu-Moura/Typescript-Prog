jest.mock('bcryptjs', () => ({
    hash: jest.fn().mockResolvedValue('hash-fake'),
    compare: jest.fn()
}));
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserRepository } from './user.repository';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { serialize } from 'v8';


describe('AuthService', () => {
  let service: AuthService;
  let repository: jest.Mocked<UserRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UserRepository, useValue: {
          findByEmail: jest.fn(),
          create: jest.fn()
        } },
        { provide: JwtService, useValue: {
          sign: jest.fn().mockReturnValue('token-fake')
        } },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    repository = module.get(UserRepository);
  });

  it('deve retornar o token ao registrar com dados válidos', async () => {
      const usuario = { nome: 'Teste', email: 'teste@teste.com', senha: '123456789'};
      const usuarioSenhaHash = { nome: 'Teste', email: 'teste@teste.com', senha: 'hash-fake' };
      const usuarioCriado = {id: 1, ...usuario, senha: 'hash-fake', criadoEm: new Date() };

      repository.findByEmail.mockResolvedValue(null);
      repository.create.mockResolvedValue(usuarioCriado);

      const resultado = await service.registrar(usuario);

      expect(resultado).toEqual({ token: 'token-fake' });
      expect(repository.findByEmail).toHaveBeenCalledWith(usuario.email);
      expect(repository.create).toHaveBeenCalledWith(usuarioSenhaHash);  
    });

  it('deve retornar erro ao tentar registrar usuário que já existe', async () => {
      const usuario = {nome: 'Teste', email: 'teste@teste.com', senha: '123456789'};
      const usuarioEncontrado = {id: 1, ...usuario , senha: 'hash-fake', criadoEm: new Date()};
      repository.findByEmail.mockResolvedValue(usuarioEncontrado);

      await expect(service.registrar(usuario)).rejects.toThrow('Usuário já existente');

      expect(repository.findByEmail).toHaveBeenCalledWith(usuario.email);
  });

  it('deve retornar token ao logar com credenciais válidas', async () => {
      const login = {email: 'teste@teste.com', senha: '123456789'};
      const usuario = {id: 1, nome: 'Teste', email: 'teste@teste.com', senha: 'hash-fake', criadoEm: new Date()};
      
      repository.findByEmail.mockResolvedValue(usuario);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);

      const resultado = await service.login(login);

      expect(resultado).toEqual({ token: 'token-fake' });
      expect(repository.findByEmail).toHaveBeenCalledWith(login.email);
  });

  it('deve lançar erro se email não existir', async () => {
      const login = {email: 'teste@teste.com', senha: '123456789'};

      repository.findByEmail.mockResolvedValue(null);

      await expect(service.login(login)).rejects.toThrow('Email ou senha incorreto(s)');

      expect(repository.findByEmail).toHaveBeenCalledWith(login.email);
  });

  it('deve lançar erro se senha não for igual', async () => {
      const login = {email: 'teste@teste.com', senha: '123456789'};
      const usuario = {id: 1, nome: 'Teste', email: 'teste@teste.com', senha: 'hash-fake', criadoEm: new Date()};

      repository.findByEmail.mockResolvedValue(usuario);
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(service.login(login)).rejects.toThrow('Email ou senha incorreto(s)');

      expect(repository.findByEmail).toHaveBeenCalledWith(login.email);
  });
});
