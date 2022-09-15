import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Content } from './styles';

const NavBar: React.FC = () => {
  const menuData = [
    {
      path: '/',
      nome: 'Home',
    },

    {
      path: '/about',
      nome: 'Sobre',
    },

    {
      path: '/register',
      nome: 'Registrar',
    },
  ];

  return (
    <Container>
      <Content>
        {menuData.map(item => (
          <NavLink
            key={item.nome}
            to={`${item.path}`}
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '13px',
              padding: '0 10px',
            }}
          >
            {item.nome}
          </NavLink>
        ))}
      </Content>
    </Container>
  );
};

export default NavBar;
