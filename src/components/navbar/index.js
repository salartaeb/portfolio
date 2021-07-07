import React, {useState} from 'react';
import {Container} from './styles/navbar.js';
import Sidebar from '../sidebar'
import sidebarOverlayContext from '../sidebar/index.js'


export default function Navbar () {
  const [modalVisible, setModalVisible] = useState('false');


  return (
    <Container>
      <Sidebar
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <p>Hello</p>
      <button onClick={() => setModalVisible(true)}>Sidebar</button>
    </Container>
  )
};



