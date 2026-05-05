function carregarEnv() {
    const variaveis = {
        PORT: process.env.PORT ?? '3000',
        NODE_ENV: process.env.NODE_ENV ?? 'development',
        DATABASE_URL: process.env.DATABASE_URL
    };

    const faltando = Object.entries(variaveis)
        .filter(([_, valor]) => !valor)
        .map(([chave]) => chave);

    if (faltando.length > 0) {
        console.error(`Variáveis de ambiente faltando: ${faltando.join(', ')}`);
        process.exit(1); // encerra antes de tentar subir
    }

    return variaveis as Record<keyof typeof variaveis, string>;
}

export const env = carregarEnv();