import styled from 'styled-components';
import useGithub from '../../hooks/github-hooks';

const Profile = () => {
    const { githubState } = useGithub();

    return(
        <SectionProfile>
            <AvatarBox>
                <Avatar src={githubState.user.avatar} alt="avatar picture" />
            </AvatarBox>
          <ProfileInfo>
            <h3>{githubState.user.name}</h3>
            <UserDisplaySeparator>
                <h4>Username:</h4>
                <a href={githubState.user.html_url}>
                    {githubState.user.login}
                </a>
            </UserDisplaySeparator>
            
            <UserDisplaySeparator>
                <h4>Company:</h4>
                <span>{githubState.user.company}</span>
            </UserDisplaySeparator>

            <UserDisplaySeparator>
                <h4>Location:</h4>
                <span>{githubState.user.location}</span>
            </UserDisplaySeparator>

            <UserDisplaySeparator>
                <h4>Blog:</h4>
                <a href={githubState.user.blog}>
                    {githubState.user.blog}
                </a>
            </UserDisplaySeparator>
           
            <ProfileStats>
                <div>
                    <h5>Followers:</h5>
                    <p>{githubState.user.followers}</p>
                </div>
                <div>
                    <h5>Following:</h5>
                    <p>{githubState.user.following}</p>
                </div>
                <div>
                    <h5>Gists:</h5>
                    <p>{githubState.user.public_gists}</p>
                </div>
                <div>
                    <h5>Repos:</h5>
                    <p>{githubState.user.public_repos}</p>
                </div>
            </ProfileStats>
          </ProfileInfo>
        </SectionProfile>
    );
};

const SectionProfile = styled.section`
    margin: 15px 0;
    padding: 15px;
    background-color: #eee;
    border: 1px solid #7D7987;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    &:hover {
        box-shadow: 2px 2px #7D7987;
    }
`;

const AvatarBox = styled.div`
    width: 30%;
`;

const Avatar = styled.img`
    border-radius: 100%;
    border: 2px solid #545454;
    width: 200px;
    height: 200px;    
`;

const ProfileInfo = styled.div`
    width: 60%;
    h3 {
        margin: 0;
        padding: 0 0 5px 0;
        font-size 1.7rem;
        color: #458FF6;
        text-shadow: 1px 1px #333;
    }
`;

const UserDisplaySeparator = styled.div`
    display: flex;
    h4 {
        margin-right: 5px;
    }
`;

const ProfileStats = styled.div`
    margin: 15px 0;
    display: flex;
    justify-content: space-around;
    div {
        width: 33%;
        align-items: center;
    }
    h5 {
        text-align: center;
        font-size: 1.1rem;
        font-weight: 700;
    }
    p {
        text-align: center;
        font-size: 1.4rem;
        font-weight: 700;
        color: #458FF6;
        text-shadow: 1px 1px #333;
    }
`;



export default Profile;