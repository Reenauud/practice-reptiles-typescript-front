import gql from "graphql-tag";

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

export const CREATE_FAMILY = gql `
mutation CreateFamily($family: CreateFamilyInput!) {
  createFamily(family: $family) {
    type
  }
}
`;

export const CREATE_FOOD = gql`
mutation CreateFood($food: CreateFoodInput!) {
  createFood(food: $food) {
    foodName
    foodPrice
    foodCategory
  }
}
`;


export const UPLOAD = gql`
mutation ($file: UploadFileInput!) {
  createUploadFile(input: { data: { file: $file } }) {
    name
  }
}`

export const CREATE_PAYMENT_SESSION = gql`
mutation CretePaymentSession($amount: String!) {
    createPaymentSession(amount: $amount) {
        customer
        ephemeralKey
        paymentIntent
        publishableKey
    }
}`;