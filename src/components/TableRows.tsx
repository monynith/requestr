import { IonRippleEffect } from '@ionic/react';
import { Config } from '../config/config';
import './TableRows.css';

interface ContainerProps {
  headersValue: string[];
  headersWidth: number[];
  onClick?: ()=> void;
}

const TableRow: React.FC<ContainerProps> = ({ headersValue = ["ID"], headersWidth = [0], onClick }) => {
  if(headersValue.length < headersWidth.length) {
    return (<></>)
  }
  return (
    <div id='table-row-container' className='ion-activatable ripple-parent rounded-rectangle' style= { { 'background': Config.table.rowBackgroundColor } }>
        { onClick ? <IonRippleEffect style={ { 'borderRadius': '5px' }}></IonRippleEffect> : <></> }
        {
            headersValue.map((item, key) =>       
                <span className='table-row-name poppins-regular' onClick={ onClick } key={ key } style={ { maxWidth: headersWidth[key] + 'px', width: headersWidth[key] + 'px', color: key == 0 ? Config.tabBar.background : Config.table.rowColor } }>{ item }</span>
            )
        }      
    </div>
  );
};

export default TableRow;
