import './HeaderContainer.css';
import { IonHeader, IonIcon, IonTitle, IonToolbar, IonLabel, IonAvatar } from '@ionic/react';
import { Config } from '../config/config';
// import { notificationsSharp } from 'ionicons/icons';
// import { chevronDownOutline } from 'ionicons/icons';
import avatar from '../../public/avatar.svg';

interface ContainerProps { }

const HeaderContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <IonHeader id="header">

        <IonToolbar id='toolbar' style={{ '--background': Config.toolbar.background, '--color': Config.toolbar.color }}>
            <IonTitle className='poppins-regular' id="title">{Config.appName.toUpperCase()}</IonTitle>        
        </IonToolbar>

        <div id="right-side-toolbar">

            <IonAvatar id="profile">
                <img alt="User Name" src={ avatar } />
            </IonAvatar>

            <div id="user-name">
                <div id="name" style={{ 'color': Config.toolbar.color }}>
                    <IonLabel className='poppins-bold'>{"Monynith"}</IonLabel>    
                    <IonLabel className='poppins-light'>{"Admin"}</IonLabel>   
                </div>                
            </div>           
        </div>

      </IonHeader>
    </div>
  );
};

export default HeaderContainer;