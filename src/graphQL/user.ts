import { gql } from 'apollo-angular';

export const getUser = gql`
query MyQuery {
  users {
    id
    password
    username
  }
}
`;

export const addUser = gql`
mutation MyMutation($Password: String, $Username: String) {
  insert_users(objects: {password: $Password, username: $Username}) {
    affected_rows
  }
}
`