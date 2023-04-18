import Usuario from '../model/Usuario.ts'

export default interface ColecaoUsuario {
    adicionar(usuario: Usuario): Promise<void>
    buscarPorEmail(email: string): Promise<Usuario | null>
}
