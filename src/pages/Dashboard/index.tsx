import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import Logo from '../../assets/logo.svg';

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={Logo} alt="Git Collection" />
      <Title>Catálogo de repositórios do GitHub</Title>
      <Form>
        <input type="text" placeholder="username/repository_name" />
        <button type="submit">Buscar</button>
      </Form>

      <Repositories>
        <a href="/repositories">
          <img src="https://avatars.githubusercontent.com/u/50683117?v=4" alt="Repositório" />
          <div>
            <strong>Teste</strong>
            <p>Repositório teste</p>
          </div>
          <FiChevronRight size={20} color="#999" />
        </a>
      </Repositories>
    </>
  );
};
