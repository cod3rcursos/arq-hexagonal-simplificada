export default interface CasoDeUso<IN, OUT> {
    executar(entrada: IN): Promise<OUT>
}