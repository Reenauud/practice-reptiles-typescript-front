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

// export const CREATE_REPTILE = gql`
// mutation CreateReptile($reptile: CreateReptileInput!) {
//   createReptile(reptile: $reptile) {
//     description
//     name
//     price
//     quantity
//   }
// }
// `;

// export const CREATE_REPTILE = gql `
// mutation CreateReptile($category: CreateCategoryInput!, $reptile: CreateReptileInput!) {
//   createReptile(category: $category, reptile: $reptile) {
//     name
//     description
//     price
//     quantity
//     category {
//       categoryName
//     }
//   }
// }
// `

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

export const CREATE_CATEGORY = gql `
mutation CreateCategory($category: CreateCategoryInput!) {
  createCategory(category: $category) {
    id
    categoryImage
    categoryName
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



const UPLOAD = gql`
mutation ($file: UploadFileInput!) {
  createUploadFile(input: { data: { file: $file } }) {
    name
  }
}`