import { useState } from "react";
import { achieveBottom } from "../apollo-client";
import ClientOnly from "./ClientOnly";
import Repositories from "./Repositories";
import styled, { css } from "styled-components";

const Dashboard = ({ data }) => {
  const [search, setSearch] = useState("");
  const [checkedAmountResult, setCheckedAmountResult] = useState(10);

  const loadMore = ({ target }) => {
    if (target) {
      target.scrollTop + target.clientHeight >= target.scrollHeight - 1
        ? achieveBottom(true)
        : achieveBottom(false);
    }
  };

  const {
    login,
    followers: { totalCount: followers },
    following: { totalCount: following },
    starredRepositories: { totalCount: stars },
  } = data;

  const handleSearchInput = (e) => setSearch(e.target.value);
  const handleAmountResultInput = (e) =>
    setCheckedAmountResult(Number(e.target.value));

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

      <SearchPanel>
        <ValuePanel>
          <label htmlFor="searchInput">Szukaj:</label>
          <input type="text" onInput={handleSearchInput} id="searchInput" />
        </ValuePanel>

        <ResultPanel>
          <label htmlFor="resultInputsWrapper">
            Result:
            <label htmlFor="resultChoice1">
              <input
                type="radio"
                id="resultChoice1"
                name="contact"
                value="10"
                defaultChecked
                onChange={handleAmountResultInput}
              />
              10
            </label>
            <label htmlFor="resultChoice2">
              <input
                type="radio"
                id="resultChoice2"
                name="contact"
                value="50"
                onChange={handleAmountResultInput}
              />
              50
            </label>
            <label htmlFor="resultChoice3">
              <input
                type="radio"
                id="resultChoice3"
                name="contact"
                value="100"
                onChange={handleAmountResultInput}
              />
              100
            </label>
          </label>
        </ResultPanel>
      </SearchPanel>

      <ResultsWrapper search={search} onScroll={(e) => loadMore(e)}>
        <Repositories search={search} amount={checkedAmountResult} />
      </ResultsWrapper>
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

const SearchPanel = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  margin: 0 0 16px auto;
`;

const ResultPanel = styled.div`
  margin-left: 24px;

  label {
    margin-left: 8px;
  }
`;
const ValuePanel = styled.div`
  label {
    margin-right: 8px;
  }
`;

const ResultsWrapper = styled(ClientOnly)`
  position: relative;
  width: 100%;
  height: calc(100% - (82px + (2 * 16px)));

  ${(props) =>
    props.search === ""
      ? css`
          display: flex;
          justify-content: center;
          align-items: center;
        `
      : css`
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(auto, 392px));
          grid-template-rows: repeat(auto-fill, minmax(auto, 216px));
          gap: 40px;
          justify-content: space-evenly;
          overflow-y: scroll;

          &::-webkit-scrollbar {
            width: 8px;
          }
          &::-webkit-scrollbar-track {
            background-color: ${(props) => props.theme.light_grey};
            border-radius: 8px;
          }
          &::-webkit-scrollbar-thumb {
            background-color: ${(props) => props.theme.red};
            border-radius: 8px;
          }
        `}
`;
