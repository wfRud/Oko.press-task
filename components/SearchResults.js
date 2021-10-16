import RepositoryTile from "./RepositoryTile";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

const SearchResults = ({ search }) => {
  const GET_REPOS = gql`
    query GetRepos($search: String!) {
      search(query: $search, type: REPOSITORY, first: 5) {
        repositoryCount
        nodes {
          ... on Repository {
            url
            name
            id
            owner {
              ... on User {
                avatarUrl
                login
              }
            }
            forks {
              totalCount
            }
            issues {
              totalCount
            }
            stargazerCount
            description
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_REPOS, {
    variables: { search },
  });
  if (loading) return "Loading...";
  if (error) {
    return `Error! ${error.message}`;
  }

  if (!search) {
    return <Heading>Nie znaleziono żadnego repozytorium...</Heading>;
  }
  const {
    search: { nodes: results },
  } = data;

  return results.map((result) => {
    return <RepositoryTile result={result} key={result.id} />;
  });
};

export default SearchResults;

const Heading = styled.h2`
  font-family: ${(props) => props.theme.alternateFont};
  font-weight: ${(props) => props.theme.light};
`;
