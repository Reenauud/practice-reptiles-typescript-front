import { gql } from "@apollo/client";

export const CreateUserMutation = gql`
  query GetAllUsers {
    getAllUsers {
      email
    }
  }
`;
