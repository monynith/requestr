import { IonRippleEffect } from '@ionic/react';
import { Config } from '../config/config';
import './PageHeader.css';

interface ContainerProps {
    subtitle: string;
    title: string;
    addButton?: string;
    onButtonClick?: () => void;
}

const PageHeader: React.FC<ContainerProps> = ({ subtitle = "", title= "", addButton = "", onButtonClick = ()=> {}}) => {
  return (
    <div id="page-header-container">      

        <div id="page-title-wrapper">
            <span className='poppins-regular' id="page-subtitle">{ subtitle}</span>
            <span className='poppins-regular' id="page-header">{ title}</span>     
        </div>          
        {
            addButton != "" ?
            <div id="add-button" className='ion-activatable ripple-parent rounded-rectangle' onClick={ () => { onButtonClick() }} style={ { background: Config.buttons.primaryBackgroundColor, color: Config.buttons.primaryButtonColor } }>
                <IonRippleEffect style={ { 'borderRadius': '5px' }}></IonRippleEffect>
                <span className='poppins-regular'>Add Users</span>
            </div>
            : <></>
        }        

    </div>
  );
};

export default PageHeader;
