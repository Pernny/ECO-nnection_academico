import { ContainerContent } from "../../System/Containers/ContainerContent"
import { ProfileHeader } from "./ProfileHeader"
import styles from '../../../style/userArea.module.css'
import { useEffect, useState } from "react";
import { getUserById } from "../../../api/apiClient";
import { ServerUserData } from "../../../Types/SystemComponentsTypes/UserRegistrationData";

export const UserProfile = () => {
  const [userData, setUserData] = useState<ServerUserData | null>(null);

  useEffect(() => {
    // Check if userData exists and has an id before making the API call
    if (userData && userData.id) {
      getUserById(userData.id)
        .then(response => setUserData(response.data))
        .catch(error => console.error('Error fetching user data:', error));
    }
  }, [userData]);

  return (
    <ContainerContent>
      <ProfileHeader />
      {userData && (
        <>
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
                  {userData?.firstName} {userData?.lastName}
                </p>
                <span>E-mail</span>
                <p>
                  {userData.email}
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
        </>
      )}
    </ContainerContent>
  )
}