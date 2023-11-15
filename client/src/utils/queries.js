import {gql} from "@apollo/client"

export const QUERY_ME=gql`
query Me {
    me {
      email
      password
      username
      savedBooks {
        title
        link
        image
        description
        bookId
        authors
      }
    }
  }
`