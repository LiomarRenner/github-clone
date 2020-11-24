import React from 'react';

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';


const Repo: React.FC = () => {
  return ( 
  <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={'username'} to={`/${username}`}>
          {username}
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={`/${username}/${reponame}`}>
          {reponame}
        </Link>
      </Breadcrumb>

      <p>Contains all of my codes</p>

      <Stats>
        <li>
          <StarIcon />
          <b>1</b>
          <span>Stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/LiomarRenner'}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
  </Container>
  );
}

export default Repo;