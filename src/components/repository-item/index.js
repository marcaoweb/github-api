import styled from "styled-components";

const RepositoryItem = ({name, linkToRepo, fullName}) => {
    return (
      <div>
        <RepoItemBox>
          <RepoItem>
            <div>
              <a href={linkToRepo} target="_blank" rel="noreferrer">
                <h3>{name}</h3>
                <h5>{fullName}</h5>
              </a>
            </div>
          </RepoItem>
        </RepoItemBox>
      </div>
    );
};

const RepoItemBox = styled.ul`  
`;
    
const RepoItem = styled.li`
  justify-content: center;
  margin: 0 0 10px 0;
  border: 1px solid #666;
  background: #fff;
  box-shadow: 1px 1px #666;
  border-radius: 5px;
  &:hover {
    background:#e8e7e7;
    border-color: #1256b3;
    box-shadow: 3px 3px #1256b3;
  }
  div {
    a {
      display: block;
      padding: 15px;
      text-decoration: none;
      color: #333;
    }
    h3 {
      color: #166DE5;
      font-size: 1.3rem;
    }
  }  
`;

export default RepositoryItem;