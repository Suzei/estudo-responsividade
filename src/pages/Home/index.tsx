import React from 'react';
import NavBar from '../../components/NavBar';
import { AboutTheSite, Banner, Container } from './style';

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Banner />
        <AboutTheSite>
          <h2>Comece por aqui!</h2>
          <p>
            Registre o seu personagem na nossa base de dados e consulte quando
            quiser
          </p>
        </AboutTheSite>
      </Container>
    </>
  );
};

export default Home;
