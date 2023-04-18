import ColecaoUsuarioMemoria from './adapters/ColecaoUsuarioMemoria.ts'
import LoginUsuario from './core/usuario/service/LoginUsuario.ts'
import RegistrarUsuario from './core/usuario/service/RegistrarUsuario.ts'
import RealCripto from './adapters/RealCripto.ts'

const provedorCripto = new RealCripto()
const colecaoUsuario = new ColecaoUsuarioMemoria()

// Registrar usuario
const registrar = new RegistrarUsuario(colecaoUsuario, provedorCripto)
await registrar.executar({
    nome: 'João',
    email: 'joao@joao.land',
    senha: '123456',
})

// Login usuario
const login = new LoginUsuario(colecaoUsuario, provedorCripto)
const usuario = await login.executar({
    email: 'joao@joao.land',
    senha: '123456',
})

console.log(usuario)
