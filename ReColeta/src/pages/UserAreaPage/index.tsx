import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { DefaultContainer as UserAreaContainer } from "../../components/System/Containers/DefaultContainer";
import { UserSwipeableInterface } from "../../components/User/UserSwipeableInterface";


export const UserAreaPage = () => {
  return (
    <>
      <Header />
      <UserAreaContainer>
        <UserSwipeableInterface />
      </UserAreaContainer>
      <Footer />
    </>
  );
};
