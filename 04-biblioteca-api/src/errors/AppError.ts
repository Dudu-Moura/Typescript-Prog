export class AppError extends Error{
    constructor(public message: string, public statusCode: number = 400){
        super(message);
        this.name = 'AppError'
    }
}

export class NotFoundError extends AppError{
    constructor(resource: string){
        super(`${resource} não disponível`, 404);
    }
}

export class ConflictError extends AppError{
    constructor(message: string){
        super(message, 409);
    }
}

export class UnauthorizedError extends AppError{
    constructor(message: string){
        super(message, 401);
    }
}