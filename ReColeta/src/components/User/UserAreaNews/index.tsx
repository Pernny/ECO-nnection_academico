import { ContainerContent } from "../../System/Containers/ContainerContent"

export const UserAreaNews = () => {
  return (
    <ContainerContent>
      <div className="container-user-actions-background">
        <div className="container-user-actions">
          <div className="profile-section-title">
            <span>
              Noticias
            </span>
            <div className="profile-section-border">
              <div className="user-actions-icons">

              </div>
            </div>
          </div>
        </div>
        <div className="container-user-demands">
          <div className="profile-section-title">
            <span>
              Projetos
            </span>
            <div className="profile-section-border">
              <div className="profile-active-demands">

              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerContent>
  )
} 