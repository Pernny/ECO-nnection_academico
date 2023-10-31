import styles from '../../../../style/userArea.module.css'

export const ProfileHeader = () => {
  return (
    <div className={styles["profile-header"]}>
      <p>Area do usuário</p>
      <div className={styles["profile-header-photo"]}>
        <img src="https://i.ibb.co/2W1PfQ6/default-User.png" alt="perfil" />
      </div>
    </div>
  )
}