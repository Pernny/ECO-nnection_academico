import '../styles/InteractiveIcons.css'

interface IconProps {
  onSelect: (role: string) => void;
}

export const WasteCollectorIcon: React.FC<IconProps> = ({ onSelect }) => {
  return (
    <div className="icon-container-waste-producer" onClick={() => onSelect('ROLE_USER')}>
      <p className="icon-title-waste-producer">Produtor de Resíduos</p>
      <img className="icon-image-waste-producer" src="" alt="" />
      <p className="icon-text-description-waste-producer">
        O usuário produtor de resíduos deve completar o cadastro para que possa ter acesso à plataforma e registrar seus resíduos.
      </p>
    </div>
  );
};