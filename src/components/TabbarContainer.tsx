import { Config } from '../config/config';
import { IonIcon, IonRippleEffect } from '@ionic/react';
import './TabbarContainer.css';
import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { peopleSharp, homeSharp, folderSharp, fileTraySharp, settingsSharp } from 'ionicons/icons';

interface ContainerProps { }

const TabbarContainer: React.FC<ContainerProps> = () => {

    const initialTodos = [ {
        name: 'Dashboard',
        key: '/dashboard',
        active: false,
        icon: homeSharp,
        notification: false
    }, {
        name: 'Users',
        key: '/users',
        active: false,
        icon: peopleSharp,
        notification: false
    }, {
        name: 'Templates',
        key: '/template',
        active: false,
        icon: folderSharp,
        notification: false
    }, {
        name: 'Requests',
        key: '/request',
        active: false,
        icon: fileTraySharp,
        notification: true
    }, {
        name: 'Setting',
        key: '/setting',
        active: false,
        icon: settingsSharp,
        notification: false
    } ];

    const history = useHistory();
    const [ menu, setMenu ] = useState(initialTodos);

    const firstRender = useRef(true);
    
    useEffect(()=> {        
        if (firstRender.current) {            
            firstRender.current = false;
            setMenu(menu.map(element => { return { ...element, active: (element.key == window.location.pathname)}} ));
            return;
        }        
    }, [menu]);

    const tabClick = (item: { name: string; key: string; active: boolean }) => {   
        if(window.location.pathname == item.key){
            window.location.reload();
        }                 
        history.push(item.key);
    }

    return (
        <div id="tabbar" style={{ 'background': Config.tabBar.background }}>
            { menu.map((item) => 
                <div className='tab poppins-regular ion-activatable ripple-parent rounded-rectangle' key={ item.key } onClick={ () => tabClick(item) } style={ { 'color': Config.tabBar.tabColor, 'background': item.active == true ? Config.tabBar.tabActiveBackgroundColor : Config.tabBar.tabInactiveBackgroundColor } }>
                    <IonRippleEffect style={ { 'borderRadius': '5px' }}></IonRippleEffect>
                    <IonIcon icon={ item.icon } className="tabbar-icon"></IonIcon>
                    { item.notification == true ? 
                        <span id="notification-indicator">

                        </span> : 
                        <></> 
                    }
                    <span className='tab-name'>{ item.name.toUpperCase() }</span>                    
                </div>
            ) }                        
        </div>
    );
};

export default TabbarContainer;
