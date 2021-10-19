import { gql } from "@apollo/client";

export const GET_REPOS_QUERY = gql`
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

export const USER_DATA_QUERY = gql`
  {
    viewer {
      login

      following {
        totalCount
      }
      followers {
        totalCount
      }
      starredRepositories {
        totalCount
      }
    }
  }
`;
