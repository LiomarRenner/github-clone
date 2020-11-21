// @ts-ignore
import React from 'react';

import { 
    Container, 
    Flex, 
    Avatar, 
    Row, 
    PeopleIcon, 
    Column, 
    CompanyIcon, 
    LocationIcon, 
    EmailIcon, 
    BlogIcon 
} from './styles';

interface Props {
    username: string;
    name: string;
    avatarUrl: String;
    followers: number;
    following: number;
    company?: string;
    location?: string;
    email?: string;
    blog?: string;
}
const ProfileData: React.FC<Props> = ({
    username,
    name,
    avatarUrl,
    followers,
    following, 
    company, 
    location, 
    email, 
    blog,
}) => {
  return (
    <Container>
        <Flex>
            <Avatar src={avatarUrl} alt={username} />
            <div>
                <h1>{name}</h1>
                <h2>{username}</h2>
            </div>
        </Flex>

        <Row>
            <li>
                <PeopleIcon/>
                <b>{followers}</b>
                <span>followers</span>
            </li>
            <li>
                <b>{following}</b>
                <span>following</span>
            </li>
        </Row>
        
        <Column>
            {company &&( 
            <li>
                <CompanyIcon />
                <span>{company}</span>
            </li> 
            )}
            {location &&( 
            <li>
                <LocationIcon />
                <span>{company}</span>
            </li> 
            )}
            {email &&( 
            <li>
                <EmailIcon />
                <span>{company}</span>
            </li> 
            )}
            {blog &&( 
            <li>
                <BlogIcon />
                <span>{company}</span>
            </li> 
            )}
        </Column>
    </Container>
  );
};

export default ProfileData;