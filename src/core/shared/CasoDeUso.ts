export default interface CasaDeUso<IN, OUT> {
    executar(entrada: IN): Promise<OUT>
}