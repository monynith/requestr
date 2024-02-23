import { IonContent, IonLabel, IonPage } from '@ionic/react';
import TabbarContainer from '../../components/TabbarContainer';
import './Users.css';
import HeaderContainer from '../../components/HeaderContainer';
import PageHeader from '../../components/PageHeader';
import TableHeader from '../../components/TableHeader';
import TableRow from '../../components/TableRows';
import ScrollableTable from '../../components/ScrollableTable';

const Users: React.FC = () => {

  const headers = [ "ID", "User Name", "Role", "Status"];
  const widths = [ 150, 400, 250, 200];

  const data = ["101010123", "Monynith Sovann", "Super Admin", "Active"]

  return (
    <IonPage>

      <HeaderContainer />

      <IonContent className='custom-container'>
        <TabbarContainer />

        <PageHeader subtitle='LISTS' title='Users Management' addButton='Add User' onButtonClick={ ()=> { console.log('clicked') } } />

        <ScrollableTable>
          <TableHeader headersName={ headers } headersWidth={ widths }/>
          <TableRow headersValue={ data } headersWidth={ widths } onClick={ ()=> { console.log('clicked') } }/>
          <TableRow headersValue={ data } headersWidth={ widths }/>  
        </ScrollableTable>        

      </IonContent>

    </IonPage>
  );
};

export default Users;
