import { useContext } from "react";
import { GithubContext } from '../store/github-context';

const useGithub = () => {
    const { githubState, getUser, getUserRepos, getUserStarred } = 
    useContext(GithubContext);

    return { githubState, getUser, getUserRepos, getUserStarred };
};

export default useGithub;