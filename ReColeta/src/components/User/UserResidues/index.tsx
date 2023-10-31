import { ContainerContent } from "../../System/Containers/ContainerContent"
import { DefaultContainer } from "../../System/Containers/DefaultContainer"

export const UserResidues = () => {
  return (
    <DefaultContainer>
      <ContainerContent>
        <div className="container-my-address">
          <div className="container-gradient">
            <div className="container-white">
              <div className="container-my-address-title">
                Meus residos
              </div>
              <div className="information-block">
              </div>
              <div className="information-block">
              </div>
              <div className="new-address">
                <span>Novo resido</span>
                <img src="../../img/btn-adicionar.svg" alt="Botão para adicionar novo endereo" />
              </div>
            </div>
          </div>
        </div>
      </ContainerContent>
    </DefaultContainer>
  )
}