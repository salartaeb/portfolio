import React, {useState, createContext} from 'react';
import ResponsiveModal from "react-responsive-modal";
import {Container} from './styles/sidebar';

export const sidebarOverlayContext = createContext();

export default function Sidebar (props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <sidebarOverlayContext.Provider value={{modalVisible, setModalVisible}}>
    
      <Container> 
dsada
      </Container>
    
    </sidebarOverlayContext.Provider>
  )
};