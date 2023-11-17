import { useState } from 'react';
import WasteProducerIconDefault from '../../../../assets/img/RegisterArea/oilTower.png';
import WasteProducerIconActive from '../../../../assets/img/RegisterArea/oilTowerWhite.png';

interface IconProps {
  onSelect: (role: string) => void;
}

export const WasteProducerIcon: React.FC<IconProps> = ({ onSelect }) => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
  };


  const handleMouseLeave = () => {
    setIsActive(false);
  };

  const handleClick = () => {
    setIsActive(true);
    onSelect('ROLE_USER');
  };

  return (
    <div
      className={`icon-container-waste-producer ${isActive ? 'active' : ''}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="icon-title-waste-producer">Produtor de Resíduos</p>
      <img
        className="icon-image-waste-producer"
        src={isActive ? WasteProducerIconActive : WasteProducerIconDefault}
        alt={isActive ? 'wasteProducerActive' : 'wasteProducerDefault'}
      />
      <p className="icon-text-description-waste-producer">
        O usuário produtor de resíduos deve completar o cadastro para que possa ter acesso à plataforma e registrar seus resíduos.
      </p>
    </div>
  );
};

