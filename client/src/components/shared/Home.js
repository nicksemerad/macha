import React from 'react';
import { Header, } from 'semantic-ui-react';
import { photo } from '../../images/me.png';

const Home = () => (
  <div style={{marginTop: '2%'}}>
    <Header 
      as="h3" 
      textAlign="center">
      Macho Macha
      <img src={photo} />
    </Header>
  </div>

)
export default Home;