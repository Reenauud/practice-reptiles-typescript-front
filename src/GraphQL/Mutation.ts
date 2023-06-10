import { gql } from "@apollo/client";
import client from "../client";

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
mutation CreateReptile($reptile: CreateReptileInput!) {
  createReptile(reptile: $reptile) {
    description
    name
    price
    quantity
  }
}
`;



const UPLOAD = gql`
mutation ($file: UploadFileInput!) {
  createUploadFile(input: { data: { file: $file } }) {
    name
  }
}`