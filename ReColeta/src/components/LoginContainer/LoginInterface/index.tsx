import { Link } from "react-router-dom"

export const LoginInterface = () => {
  return (
    <div className="login-box">
      <span>Login</span>
      <form className="login-form">
        <div className="login-form-profile-icon">
          <img className="login-profile" src="https://i.ibb.co/2W1PfQ6/default-User.png" alt="profile" />
        </div>
        <div className="login-form-welcome">
          <span>Bem vindo, User name</span>
        </div>

        <div>
          <span>Email :</span>
          <input type="text" placeholder="Email do usuário" />
        </div>
        <div>
          <span>Senha :</span>
          <input type="password" placeholder="Senha" />
        </div>
        <div className="login-button">
          <Link to="/dashboard" className="button">
            Entrar
          </Link>
        </div>
        <div className="login-forgot-password">
          <Link to="/forgot-password">Esqueceu sua senha ?</Link>
        </div>
        <div className="login-new-user">
          <Link to="/signup">Ainda não tem cadastro ?</Link>
        </div>
      </form>
    </div>
  )
}