import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

export const NewCollectPage = () => {
    return (
        <>
            <Header />
            <main className="content">
                <span className="content-title">Cadastro de resíduos</span>
                <section className="content-area">
                    <a href="../wasteRegister/index.html">
                        <div className="content-register-delivery">
                            <div className="content-choice-container">
                                <div className="content-choice-container-border">
                                    <img className="content-icon" src="../../img/caminhao.svg" alt="icon-busca" />
                                    <p className="content-text">ENTREGAR</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="../waste/index.html">
                        <div className="content-register-pickup">
                            <div className="content-choice-container">
                                <div className="content-choice-container-border">
                                    <img className="content-icon" src="../../img/busca.svg" alt="icon-busca" />
                                    <p className="content-text">BUSCAR</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </section>
            </main>
            <Footer />
        </>

    )
}

