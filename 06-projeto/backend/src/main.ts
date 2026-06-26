import './instrument';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Origens permitidas no CORS. Dev (localhost) sempre liberado; em produção,
    // defina FRONTEND_URL (aceita várias separadas por vírgula).
    //   FRONTEND_URL=https://meu-front.up.railway.app,https://meudominio.com
    const defaultOrigins = ['http://localhost:5173', 'http://localhost:3000'];
    const envOrigins = (process.env.FRONTEND_URL ?? '')
        .split(',')
        .map((origin) => origin.trim().replace(/\/+$/, ''))
        .filter(Boolean);
    const allowedOrigins = [...new Set([...defaultOrigins, ...envOrigins])];

    app.enableCors({
        origin: (
            origin: string | undefined,
            callback: (err: Error | null, allow?: boolean) => void,
        ) => {
            // Sem Origin (curl, health checks, apps server-to-server) é liberado.
            if (
                !origin ||
                allowedOrigins.includes(origin.replace(/\/+$/, ''))
            ) {
                callback(null, true);
            } else {
                callback(
                    new Error(`Origem não permitida pelo CORS: ${origin}`),
                    false,
                );
            }
        },
        credentials: true,
    });

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    );

    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
