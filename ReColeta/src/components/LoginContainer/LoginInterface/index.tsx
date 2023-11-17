import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../../api/apiClient";


export const LoginInterface = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null); // State to store error message
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if email or password is empty
    if (!email.trim() || !password.trim()) {
      setError('Por favor, preencha todos os campos.'); // Set error message
      return;
    }

    try {
      setError(null); // Clear previous errors
      const response = await loginUser({ email, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      navigate('/dashboard');
    } catch (error: any) {
      setError('Credenciais inválidas. Por favor, tente novamente.');
      console.error('Login error:', error.message);
    }
  };

  return (
    <div className="login-box">
      <span>Login</span>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="login-form-profile-icon">
          <img className="login-profile" src="https://i.ibb.co/2W1PfQ6/default-User.png" alt="profile" />
        </div>
        <div>
          <span>Email :</span>
          <input
            type="text"
            placeholder="Email do usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: error && !email.trim() ? 'red' : '' }} // Highlight if error
          />
        </div>
        <div>
          <span>Senha :</span>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderColor: error && !password.trim() ? 'red' : '' }} // Highlight if error
          />
        </div>
        <div className="login-button">
          <button type="submit" className="button">
            Entrar
          </button>
        </div>
        {error && <div className="login-warning">{error}</div>} {/* Display error message */}
        <div className="login-forgot-password">
          <Link to="/forgot-password">Esqueceu sua senha ?</Link>
        </div>
        <div className="login-new-user">
          <Link to="/registration">Novo usuário ?</Link>
        </div>
      </form>
    </div>
  );
};