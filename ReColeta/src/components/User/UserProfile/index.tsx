import { ContainerContent } from "../../System/Containers/ContainerContent"

import '../../../style/userArea.module.css'
import { ProfileHeader } from "./ProfileHeader"

export const UserProfile = () => {
  return (
    <ContainerContent>
      <ProfileHeader />
      <section className="profile-section">
        <div className="profile-section-title">
          <span>
            Perfil
          </span>
        </div>
        <div className="profile-section-border">
          <div className="profile-user-information">
            <span>Nome</span>
            <p>
              John Doe
            </p>
            <span>E-mail</span>
            <p>
              teste@teste.com.br
            </p>
            <span>Telefone</span>
            <p>
              (11)99999-0000
            </p>
          </div>
          <div className="profile-buttons">
            <button type="submit">Alterar senha</button>
            <button type="submit">Editar perfil</button>
          </div>
        </div>
      </section>
      <section className="profile-section">
        <div className="profile-section-title">
          <span>
            Estatisticas
          </span>
        </div>
        <div className="profile-section-border">
          <div className="profile-stats-information">

          </div>
        </div>
      </section>
    </ContainerContent>
  )
}