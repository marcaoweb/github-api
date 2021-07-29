import { useState } from "react";
import styled from "styled-components";
import useGithub from "../../hooks/github-hooks";

const Header = () => {
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () => {
        if(!usernameForSearch) {
            return;
        }
        return getUser(usernameForSearch);
    };

    return(
        <HeaderSection>
            <InputSearchUser type="text" 
                placeholder="Digite o usuario para pesquisar"
                onChange={
                    (event) => setUsernameForSearch(event.target.value)
                }
            />
            <ButtonSearch type="submit"
                onClick={submitGetUser}
            >
                Pesquisar
            </ButtonSearch>
        </HeaderSection>
    );
};


const HeaderSection = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 0 0 15px 0;
`;

const InputSearchUser = styled.input`
    width: 70%;
    height: 30px;
    border: 1px solid #000;
    padding: 10px;
    font-size: 1.8rem;
    align-item: flex-start;
    &:focus {
        border: 1px solid #333;
    }
`;

const ButtonSearch = styled.button`
    width: 20%;
    align-item: flex-end;
    background-color: #458FF6;
    border: 1px solid #3C567B;
    border-radius: 10px;
    font-size: 1.6rem;
    font-weight: 400;
    color: #fff;
    text-shadow: 1px 1px #202E43;
    &:hover {  
        background-color: #2E4E92;
        border-color: #202E43;
    }
`;


export default Header;