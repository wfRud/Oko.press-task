import RepositoryTile from "./RepositoryTile";
import Transparent from "./Transparent";
import Loader from "./Loader";
import { gql, useQuery } from "@apollo/client";
import { achieveBottom } from "../apollo-client";

const Repositories = ({ search, amount }) => {
  const GET_REPOS = gql`
    query GetRepos($search: String!, $amount: Int!, $after: String) {
      search(query: $search, type: REPOSITORY, first: $amount, after: $after) {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          cursor
          node {
            ... on Repository {
              url
              id
              name
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
      achieveBottom @client
    }
  `;

  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    GET_REPOS,
    {
      variables: { search, amount },
    }
  );

  if (loading) {
    return <Loader networkStatus={networkStatus} />;
  }
  if (error) {
    return `Error! ${error.message}`;
  }
  if (!search) {
    return (
      <Transparent txt={"Podaj nazwę repozytorium, które chcesz znaleźć."} />
    );
  }

  const {
    search: {
      edges: results,
      pageInfo: { endCursor, hasNextPage },
    },
  } = data;

  if (hasNextPage && achieveBottom()) {
    fetchMore({
      variables: { amount, after: endCursor },
    });

    achieveBottom(false);
  }

  return (
    <>
      {results.map((result, index) => {
        return <RepositoryTile result={result} key={index} />;
      })}
    </>
  );
};

export default Repositories;
