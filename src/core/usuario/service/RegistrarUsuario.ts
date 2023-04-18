import CasoDeUso from '../../shared/CasoDeUso.ts'
import ColecaoUsuario from '../model/ColecaoUsuario.ts'
import ProvedorCripto from '../model/ProvedorCripto.ts'
import Usuario from '../model/Usuario.ts'

export default class RegistrarUsuario implements CasoDeUso<Required<Usuario>, void> {
    constructor(private colecao: ColecaoUsuario, private provedorCripto: ProvedorCripto) {}

    async executar(usuario: Required<Usuario>): Promise<void> {
        const senhaCripto = await this.provedorCripto.criptografar(usuario.senha)
        const usuarioCripto = { ...usuario, senha: senhaCripto }

        await this.colecao.adicionar(usuarioCripto)
    }
}
