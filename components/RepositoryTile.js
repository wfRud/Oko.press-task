import Image from "next/image";
import IssuesIcon from "../public/iCons/issues-outline.svg";
import ForkIcon from "../public/iCons/source-fork.svg";
import StarIcon from "../public/iCons/star-outline.svg";
import { ShortTextFunction } from "../helpers/helpers";
import styled from "styled-components";

const RepositoryTile = ({ result: { node: result } }) => {
  const {
    url: urlRepo,
    name: nameRepo,
    description,
    stargazerCount,
    forks: { totalCount: forks },
    issues: { totalCount: issues },
    owner: { login, avatarUrl },
  } = result;

  return (
    <Tile>
      <TopBar>
        <Heading>
          {login ? login : "unknown"}/
          <a href={urlRepo} target="_blank">
            {nameRepo}
          </a>
        </Heading>
        <Avatar>
          <Image
            src={avatarUrl ? avatarUrl : "/assets/octocat.svg"}
            width={80}
            height={80}
            layout="intrinsic"
          />
        </Avatar>
      </TopBar>
      <Description>
        {description !== null
          ? ShortTextFunction(description, 100)
          : "No description"}
      </Description>
      <StatsWrapper>
        <Stats>
          <IssuesIcon />
          <span>{issues}</span>
          <Label>Issues</Label>
        </Stats>
        <Stats>
          <StarIcon />
          <span>{stargazerCount}</span>
          <Label>Stars</Label>
        </Stats>
        <Stats>
          <ForkIcon />
          <span>{forks}</span>
          <Label>Forks</Label>
        </Stats>
      </StatsWrapper>
    </Tile>
  );
};

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  width: 392px;
  height: 216px;
  padding: 16px;
  font-family: ${(props) => props.theme.alternateFont};
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.dark};
  border-radius: 3px;
  box-shadow: 8px 8px 27px -27px rgba(66, 68, 90, 1);

  &:hover {
    cursor: default;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  max-height: 45%;
  min-height: 78px;
  min-width: 78px;
`;

const Avatar = styled.div`
  flex: 1 0 auto;
  width: 80px;
  max-width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
`;

const Heading = styled.h3`
  flex: 2 1 auto;
  font-family: ${(props) => props.theme.alternateFont};
  font-weight: ${(props) => props.theme.light};
  word-break: break-all;

  a {
    font-weight: ${(props) => props.theme.medium};
    color: ${(props) => props.theme.dark};
    text-decoration: none;
  }
`;

const Description = styled.p`
  font-size: ${(props) => props.theme.size_S};
  font-weight: ${(props) => props.theme.light};
  min-height: 52px;
`;

const StatsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: auto;
  margin-top: 8px;
`;

const Stats = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 40px;

  span {
    font-weight: ${(props) => props.theme.light};
  }

  svg {
    position: absolute;
    top: 0;
    left: -20px;
  }
`;

const Label = styled.p`
  font-size: ${(props) => props.theme.size_S};
`;

export default RepositoryTile;
