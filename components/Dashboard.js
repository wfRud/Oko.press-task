import { useState } from "react";
import ClientOnly from "./ClientOnly";
import SearchResults from "./SearchResults";
import styled, { css } from "styled-components";

const Dashboard = ({ data }) => {
  const [search, setSearch] = useState("");

  const {
    login,
    followers: { totalCount: followers },
    following: { totalCount: following },
    starredRepositories: { totalCount: stars },
  } = data;
  console.log(data);
  const handleSearchInput = (e) => setSearch(e.target.value);
  return (
    <Container>
      <UserBar>
        <Heading>Witaj {login}</Heading>
        <Stats>
          Follower: <span>{followers}</span>
        </Stats>
        <Stats>
          Following: <span>{following}</span>
        </Stats>
        <Stats>
          Stars: <span>{stars}</span>
        </Stats>
      </UserBar>

      <Search>
        Szukaj
        <input type="text" onInput={handleSearchInput} />
      </Search>

      <SearchResultsWrapper search={search}>
        <SearchResults search={search} />
      </SearchResultsWrapper>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.container_size};
  height: calc(100vh - (72px + 2 * 16px));
  margin: 16px auto;
  @media (max-width: 1280px) {
    padding: 0 16px;
  }
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
  text-align: right;
  margin-bottom: 16px;
`;

const SearchResultsWrapper = styled(ClientOnly)`
  ${(props) =>
    props.search === ""
      ? css`
          display: flex;
          justify-content: center;
          align-items: center;
        `
      : css`
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(auto, 400px));
          grid-template-rows: repeat(auto-fill, minmax(auto, 216px));
          gap: 40px;
          justify-content: space-evenly;
          overflow-y: scroll;
        `}

  width: 100%;
  height: calc(100% - (82px + (2 * 16px)));
`;
