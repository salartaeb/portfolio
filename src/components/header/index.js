import React from 'react';
import TypeOut from 'react-typeout';

import {
  Container
} from './styles/header';

const words = ['FAST', 'Original', 'Beautiful'];

export default function Header({children, ...restProps}) {
  return  (
    <Container>
      <h1>Build Something <span><TypeOut words={words}></TypeOut></span></h1>
    </Container> 
  );
}

