import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const token = process.env.GITHUB_ACCESS_TOKEN;
console.log(token);
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
  cache: new InMemoryCache(),
});

export default client;
