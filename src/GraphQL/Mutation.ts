import gql from "graphql-tag";


export const GET_TOKEN = gql`
mutation GetToken($email: String!, $password: String!) {
   getToken(email: $email, password: $password)
 }
`;

export const CreateUserMutation = gql`
  query GetAllUsers {
    getAllUsers {
      email
    }
  }
`;

export const CREATE_REPTILE = gql `
mutation CreateReptile($categoryId: Float!, $reptile: CreateReptileInput!) {
  createReptile(categoryId: $categoryId, reptile: $reptile) {
    name
    description
    price
    quantity
    photoId
  }
}
`

export const CREATE_FAMILY = gql `
mutation CreateFamily($family: CreateFamilyInput!) {
  createFamily(family: $family) {
    type
  }
}
`;

// export const CREATE_CATEGORY = gql `
// mutation CreateCategory($category: CreateCategoryInput!) {
//   createCategory(category: $category) {
//     id
//     categoryImage
//     categoryName
//   }
// }
// `;

export const CREATE_CATEGORY = gql`
mutation CreateCategory($categoryImage: String!, $categoryName: String!) {
  createCategory(categoryImage: $categoryImage, categoryName: $categoryName) {
    id
    categoryName
    categoryImage
  }
}`

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