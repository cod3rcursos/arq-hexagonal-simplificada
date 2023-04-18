import ProvedorCripto from "../core/usuario/model/ProvedorCripto.ts"

export default class InverterCripto implements ProvedorCripto {
    // deno-lint-ignore require-await
    async criptografar(senha: string): Promise<string> {
        return senha.split('').reverse().join('')
    }

    // deno-lint-ignore require-await
    async comparar(senha: string, senhaCripto: string): Promise<boolean> {
        return senha.split('').reverse().join('') === senhaCripto
    }
}