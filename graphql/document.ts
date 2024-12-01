import { gql } from "@apollo/client";

export const GET_ALL_FILMS = gql`
  query AllFilms($after: String, $before: String, $first: Int, $last: Int) {
    allFilms(after: $after, before: $before, first: $first, last: $last) {
      edges {
        node {
          id
          episodeID
          title
          releaseDate
          characterConnection {
            characters {
              name
            }
          }
        }
      }
    }
  }
`;
