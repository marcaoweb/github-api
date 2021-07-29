import { useEffect, useState } from "react";
import styled from "styled-components";
import useGithub from "../../hooks/github-hooks";
import RepositoryItem from "../repository-item";

const Repositories = () => {
    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

    useEffect(() => {
        if(githubState.user.login) {
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        setHasUserForSearchrepos(githubState.repositories);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [githubState.user.login]);

    return(
        <>
            {hasUserForSearchrepos ? (
                <RepoSection>
                    <RepoBox>
                        <h4>Repositories:</h4>
                        {githubState.repositories.map((item) => (
                            <RepositoryItem
                            key={item.id}
                            name={item.name}
                            linkToRepo={item.full_name}
                            fullName={item.full_name}
                            />
                        ))}
                    </RepoBox>

                    <RepoBox>
                        <h4>Starred:</h4>
                        {githubState.starred.map((item) => (
                            <RepositoryItem
                            key={item.id}
                            name={item.name}
                            linkToRepo={item.full_name}
                            fullName={item.full_name}
                            />
                        ))}
                    </RepoBox>
                </RepoSection>
            ) : (
                <></>
            )}
        </>
    );
};

const RepoSection = styled.section`
    display: flex;
`;

const RepoBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 5px;
    margin: 0 5px;
    h4 {
        font-size: 1.3rem;
        font-weight: 400;
    }
`;

export default Repositories;