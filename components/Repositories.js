import { useQuery } from "@apollo/client";
import RepositoryTile from "./RepositoryTile";
import Transparent from "./Transparent";
import Loader from "./Loader";
import { achieveBottom } from "../apollo-client";
import { GET_REPOS_QUERY } from "../query.js";

const Repositories = ({ search, amount }) => {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    GET_REPOS_QUERY,
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
