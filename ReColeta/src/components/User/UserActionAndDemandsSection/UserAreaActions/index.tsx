export const UserAreaActions = () => {
  return (
    <div className="container-user-actions">
      <div className="profile-section-title">
        <span>
          Ações do usuário
        </span>
        <div className="profile-section-border">
          <div className="user-actions-icons">
            <a href="/">
              <img className="pressable-icons" src="../../img/userArea/CadastrarPontoColeta.png" alt="" />
            </a>
            <a href="">
              <img className="pressable-icons" src="../../img/userArea/CadastrarNovoProjeto.png" alt="" />
            </a>
            <a href="../newCollect/index.html">
              <img className="pressable-icons" src="../../img/userArea/CadastrarResidos.png" alt="" />
            </a>
            <a href="../SearchPoint/index.html">
              <img className="pressable-icons" src="../../img/userArea/BuscarPontoColeta.png" alt="" />
            </a>
            <a href="">
              <img className="pressable-icons" src="../../img/userArea/BuscarProjetos.png" alt="" />
            </a>
            <a href="">
              <img className="pressable-icons" src="../../img/userArea/BuscarResidos.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}