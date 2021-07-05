import React from 'react';
import Typist from 'react-typist';

import {
  Container
} from './styles/header';

export default function Header({children, ...restProps}) {
  return  (
  <Container>
    <h1>Build something</h1>
    <Typist>
    <Typist.Delay ms={100} />
      Fast
    </Typist>
  </Container> 
  );
}

