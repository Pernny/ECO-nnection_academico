import { ContainerContent } from "../../System/Containers/ContainerContent"
import { DefaultContainer } from "../../System/Containers/DefaultContainer"
import { UserAreaActions } from "./UserAreaActions"
import { UserAreaDemands } from "./UserAreaDemands"

export const UserActionsAndDemands = () => {
  return (
    <DefaultContainer>
      <ContainerContent>
        <div className="container-user-actions-background">
          <UserAreaActions />
          <UserAreaDemands />
        </div>
      </ContainerContent>
    </DefaultContainer>
  )

}