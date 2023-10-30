import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { DefaultContainer as UserAreaContainer } from "../../components/System/Containers/DefaultContainer"
import { UserAreaDotMenu } from "../../components/System/DotMenu/UserAreaDotMenu"
import { UserActionsAndDemands } from "../../components/User/UserActionAndDemandsSection"
import { UserAddress } from "../../components/User/UserAddress"
import { UserAreaNews } from "../../components/User/UserAreaNews"
import { UserProfile } from "../../components/User/UserProfile"
import { UserResidues } from "../../components/User/UserResidues"



export const UserAreaPage = () => {
  return (
    <>
      <Header />
      <UserAreaContainer>
        <UserProfile />
        <UserActionsAndDemands />
        <UserAreaNews />
        <UserResidues />
        <UserAddress />
        <UserAreaDotMenu />
      </UserAreaContainer>
      <Footer />
    </>
  )

}

