export default interface ProvedorCripto {
    criptografar(senha: string): Promise<string>
    comparar(senha: string, senhaCripto: string): Promise<boolean>
}
