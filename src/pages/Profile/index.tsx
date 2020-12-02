import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom'


import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon, Tab, } from './styles';
import ProfileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';


const Profile: React.FC = () => {

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">26</span>
    </div>
  );

  return(
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line" />
      </Tab>
      <Main>
        <LeftSide>
          <ProfileData
            username={'LiomarRenner'}
            name={'Liomar Renner'}
            avatarUrl={'https://avatars2.githubusercontent.com/u/68114557?s=460&u=aab39bd1d69ea2986019c88e9f0a47685c038a91&v=4'}
            followers={887}
            following={7}
            company={'UFC'}
            location={'Ceará, Brazil'}
            email={'liomarrenner@gmail.com'}
            blog={undefined}

          />
        </LeftSide>

        <RightSide>
          <Tab className='mobile'>
            <TabContent />
            <span className="line"/>
          </Tab>
          <Repos>
            <h2>Random repos</h2>
            <div>
              {[1, 2, 3, 4, 5, 6].map(n =>(
                <RepoCard
                  key={n}
                  username={'LiomarRenner'}
                  reponame={'youtube-content'}
                  description={'Contains all of my Youtube Videos'}
                  language={n}
                  stars={8}
                  forks={4}
                />

                
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar do not represent actual data      
          </CalendarHeading>
          <RandomCalendar />

        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;