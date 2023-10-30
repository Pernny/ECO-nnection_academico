import { ContainerContent } from "../../System/Containers/ContainerContent"

import '../../../style/userArea.module.css'

export const UserAddress = () => {
  return (
    <ContainerContent>
      <div className="container-my-address">
        <div className="container-gradient">
          <div className="container-white">
            <div className="container-my-address-title">
              Meus Endereços
            </div>
            <div className="information-block">
            </div>
            <div className="information-block">
            </div>
            <div className="new-address">
              <span>Novo endereço</span>
              <img src="../../img/btn-adicionar.svg" alt="Botão para adicionar novo endereo" />
            </div>
          </div>
        </div>
      </div>
    </ContainerContent>
  )
}