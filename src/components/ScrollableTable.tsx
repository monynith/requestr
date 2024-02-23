import { Component } from 'react';
import './ScrollableTable.css';

interface ContainerProps {
    children: string | JSX.Element | JSX.Element[]
}

const ScrollableTable: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div id="scroll-table">        
       { children }     
    </div>
  );
};

export default ScrollableTable;
