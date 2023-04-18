import CasoDeUso from '../../shared/CasoDeUso.ts'
import ColecaoUsuario from '../model/ColecaoUsuario.ts'
import ProvedorCripto from '../model/ProvedorCripto.ts'
import Usuario from '../model/Usuario.ts'

export type LoginUsuarioEntrada = {
    email: string
    senha: string
}

export default class LoginUsuario implements CasoDeUso<LoginUsuarioEntrada, Usuario | null> {

    constructor(private colecao: ColecaoUsuario, private provedorCripto: ProvedorCripto) {}

    async executar(dto: LoginUsuarioEntrada): Promise<Usuario | null> {        
        const usuario = await this.colecao.buscarPorEmail(dto.email)
        if (!usuario) return null

        const saoIguais = await this.provedorCripto.comparar(dto.senha, usuario.senha!)
        if (!saoIguais) return null

        return {
            nome: usuario.nome,
            email: usuario.email
        }
    }
}
