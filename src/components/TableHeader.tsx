import { Config } from '../config/config';
import './TableHeader.css';

interface ContainerProps {
  headersName: string[],
  headersWidth: number[]
}

const TableHeader: React.FC<ContainerProps> = ({ headersName = ["ID"], headersWidth = [0] }) => {
  if(headersName.length < headersWidth.length) {
    return (<></>)
  }
  return (
    <div id='table-header-container' style= { { 'background': Config.table.headerBackgroundColor } }>
      {
        headersName.map((item, key) =>       
          <span className='table-header-name poppins-regular' key={ key } style={ { maxWidth: headersWidth[key] + 'px', width: headersWidth[key] + 'px', color: Config.table.headerColor } }>{ item }</span>
        )
      }      
    </div>
  );
};

export default TableHeader;
