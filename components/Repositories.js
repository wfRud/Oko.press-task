import RepositoryTile from "./RepositoryTile";
import Transparent from "./Transparent";
import Loader from "./Loader";

import { gql, useQuery } from "@apollo/client";

const Repositories = ({ search, amount }) => {
  const GET_REPOS = gql`
    query GetRepos($search: String!, $amount: Int!) {
      search(query: $search, type: REPOSITORY, first: $amount) {
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
    variables: { search, amount },
  });
  if (loading) return <Loader />;
  if (error) {
    return `Error! ${error.message}`;
  }

  if (!search) {
    return (
      <Transparent txt={"Podaj nazwę repozytorium, które chcesz znaleźć."} />
    );
  }
  const {
    search: { nodes: results },
  } = data;

  return results.map((result) => {
    return <RepositoryTile result={result} key={result.id} />;
  });
};
export default Repositories;
