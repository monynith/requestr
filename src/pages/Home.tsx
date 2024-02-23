import { IonContent, IonPage } from '@ionic/react';
import TabbarContainer from '../components/TabbarContainer';
import './Home.css';
import HeaderContainer from '../components/HeaderContainer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <HeaderContainer />
      <IonContent className='custom-container'>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <TabbarContainer />
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
