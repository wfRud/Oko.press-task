import { ApolloClient, InMemoryCache, HttpLink, makeVar } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";

const token = process.env.GITHUB_ACCESS_TOKEN;

export const achieveBottom = makeVar(false);

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(
    new HttpLink({ uri: "https://api.github.com/graphql" })
  ),

  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          search: relayStylePagination(["query"]),
          achieveBottom: {
            read() {
              return achieveBottom();
            },
          },
        },
      },
    },
  }),
});

export default client;
