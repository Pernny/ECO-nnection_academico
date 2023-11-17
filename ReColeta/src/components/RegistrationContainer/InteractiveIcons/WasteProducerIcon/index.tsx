import '../styles/InteractiveIcons.css';

interface IconProps {
  onSelect: (role: string) => void;
}



export const WasteProducerIcon: React.FC<IconProps> = ({ onSelect }) => {
  return (
    <div className="icon-container-waste-collector" onClick={() => onSelect('ROLE_USER')}>
      <p className="icon-title-waste-collector">Coletor de Resíduos</p>
      <img className="icon-image-waste-collector" src="" alt="" />
      <p className="icon-text-description-waste-collector">
        O usuário coletor de resíduos pode buscar por coletas próximas à sua localização e começar a coletar resíduos.
      </p>
    </div>
  );
};