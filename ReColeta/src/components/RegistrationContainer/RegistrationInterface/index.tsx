// RegistrationInterface.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../../api/apiClient";
import { WasteProducerIcon } from "../InteractiveIcons/WasteProducerIcon";
import { WasteCollectorIcon } from "../InteractiveIcons/WasteCollectorIcon";
import { useAuth } from "../../../context/AuthContext";

export const RegistrationInterface = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectedRole, setSelectedRole] = useState('ROLE_USER');
  const [activeRole, setActiveRole] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth(); // Use the login function from the AuthContext

  const handleSelectRole = (role: string) => {
    setActiveRole(role);
    setSelectedRole(role);
    setError(null);
  };

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !selectedRole) {
      setError('Por favor, preencha todos os campos com * e selecione um papel.');
      return;
    }
    if (!selectedRole) {
      setError('Por favor, selecione um papel.');
      return;
    }

    try {
      setError(null);

      // Log the data before sending

      const response = await registerUser({ email, password, firstName, lastName });
      console.log('Registration Data:', { email, password, firstName, lastName, role: selectedRole, response: response.data.id });

      // Store user ID in localStorage after successful registration
      localStorage.setItem('userId', String(response.data.id));

      const token = response.data.token;
      login(token); // Use the login function from the AuthContext to set the token

      navigate('/dashboard');
    } catch (error: any) {
      setError('Erro ao cadastrar usuário. Por favor, tente novamente.');
      console.error('Registration error:', error.message);
    }
  };

  return (
    <div className="registration-box">
      <span>Register</span>
      <form className="registration-form" onSubmit={handleRegistration}>
        <div className="registration-form-header">
          <p className="registration-form-title">Bem vindos</p>
          <p className="registration-form-subtitle">Preencha os campos abaixo para se cadastrar no ReColeta </p>
          <p className="registration-header-message">
            Após o cadastro, você poderá acessar a plataforma e cadastrar novos
            pontos de coleta. Acompanhar os descartes de resíduos das empresas registradas próximas da sua localização.
            Encontrar parceiros para reciclagem e reutilização de resíduos. Além de contribuir para um meio ambiente
            mais sustentável.
          </p>
        </div>
        <div>
          <hr className="registration-form-header-hr" />
        </div>
        <div>
          <span>Email* :</span>
          <input
            type="text"
            placeholder="Registrar Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={error && !password.trim() ? 'error' : ''} // Highlight if error
          />
        </div>
        <div>
          <span>Senha* :</span>
          <input
            type="password"
            placeholder="Registrar Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={error && !password.trim() ? 'error' : ''} // Highlight if error
          />
        </div>
        <div>
          <span>Primeiro Nome :</span>
          <input
            type="firstName"
            placeholder="Primeiro Nome"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <span>Sobrenome :</span>
          <input
            type="lastName"
            placeholder="Sobrenome"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <span>Escolha sua função* :</span>

          <div className="registration-form-icons-row">
            <WasteProducerIcon onSelect={handleSelectRole} isActive={activeRole === 'ROLE_USER'} />
            <WasteCollectorIcon onSelect={handleSelectRole} isActive={activeRole === 'ROLE_COLLECTOR'} />
          </div>

        </div>
        <div className="registration-button">
          <button type="submit" className="button">
            Registrar
          </button>
        </div>
        {error && <div className="registration-warning">{error}</div>}
        <div className="registration-login-link">
          <Link to="/login">Já tem cadastro? Faça login aqui.</Link>
        </div>
      </form>
    </div>
  );
};


