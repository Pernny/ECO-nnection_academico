import { ContainerContent } from "../../System/Containers/ContainerContent"
import { ProfileHeader } from "./ProfileHeader"
import styles from '../../../style/userArea.module.css'

export const UserProfile = () => {
  return (
    <ContainerContent>
      <ProfileHeader />
      <section className={styles["profile-section"]}>
        <div className={styles["profile-section-title"]}>
          <span>
            Perfil
          </span>
        </div>
        <div className={styles["profile-section-border"]}>
          <div className={styles["profile-user-information"]}>
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
          <div className={styles["profile-buttons"]}>
            <button type="submit">Alterar senha</button>
            <button type="submit">Editar perfil</button>
          </div>
        </div>
      </section>
      <section className={styles["profile-section"]}>
        <div className={styles["profile-section-title"]}>
          <span>
            Estatisticas
          </span>
        </div>
        <div className={styles["profile-section-border"]}>
          <div className={styles["profile-stats-information"]}>

          </div>
        </div>
      </section>
    </ContainerContent>
  )
}