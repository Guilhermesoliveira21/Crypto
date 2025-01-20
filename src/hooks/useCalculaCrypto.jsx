export const useCalcularCrypto = (valorInvestido, precoAtual, precoDaCompra) => {
    const fracao = valorInvestido / precoDaCompra;


    const valorAtual = fracao * precoAtual;

    return { fracao, valorAtual };
}