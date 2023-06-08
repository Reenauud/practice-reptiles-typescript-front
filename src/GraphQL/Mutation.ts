import { gql } from "@apollo/client";

export const CreateUserMutation = gql`
  query GetAllUsers {
    getAllUsers {
      email
    }
  }
`;

export const GET_TOKEN = gql`
mutation GetToken($email: String!, $password: String!) {
   getToken(email: $email, password: $password)
 }
`;

export const CREATE_REPTILE = gql`
mutation Mutation($reptile: CreateReptileInput!) {
    createReptile(reptile: $reptile) {
      description
      name
      price
      quantity
    }
  }
`;

