import styled from "styled-components";

const Dashboard = ({ data }) => {
  const {
    login,
    followers: { nodes: followers },
    following: { nodes: following },
    starredRepositories: { nodes: stars },
  } = data;
  console.log("stars", stars);
  return (
    <Container>
      <UserBar>
        <Heading>Witaj {login}</Heading>
        <Stats>
          Follower: <span>{followers.length}</span>
        </Stats>
        <Stats>
          Following: <span>{following.length}</span>
        </Stats>
        <Stats>
          Stars: <span>{stars.length}</span>
        </Stats>
      </UserBar>

      <Search>
        Szukaj
        <input type="text" />
      </Search>

      <Results></Results>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.container_size};
  height: auto;
  min-height: calc(100vh - (72px + 2 * 16px));
  margin: 16px auto;
`;

const UserBar = styled.div`
  display: grid;
  grid-template-columns: minmax(48px, auto) 1fr repeat(3, minmax(40px, auto));
  align-items: center;
  width: 100%;
  height: 60px;
  margin-bottom: 16px;
  font-family: ${(props) => props.theme.alternateFont};
`;
const Heading = styled.h2``;

const Stats = styled.p`
  &:nth-of-type(1) {
    grid-column: 3/4;
  }
  &:nth-of-type(2) {
    grid-column: 4/5;
  }
  &:nth-of-type(3) {
    grid-column: 5/6;
  }
  margin-left: 24px;
  justify-self: flex-end;

  span {
    font-weight: ${(props) => props.theme.light};
  }
`;

const Search = styled.div`
  width: 300px;
  margin-left: auto;
  text-align: right;
`;

const Results = styled.div`
  margin-top: 16px;
`;
