import { gql } from "@apollo/client";

export const GET_FOOD_LIST = gql`
 query GetFoodList {
    getFoodList {
        id
        foodName
        foodPrice
        foodCategory
    }
 }`;

export const GET_ALL_USERS = gql`
 query GetAllUsers {
    getAllUsers {
        email
    }
 }`;

//  export const GET_CATEGORY_BY_NAME = gql`
//  query GetCategoryByName($categoryName: String!) {
//     getCategoryByName(categoryName: $categoryName) {
//       id
//       categoryName
//     }
//   }`;

export const GET_ALL_REPTILES = gql`
query GetAllReptiles {
  getAllReptiles {
    name
    photoId
  }
}`

export const GET_CATEGORY_BY_NAME = gql `
query GetCategory($categoryName: String!) {
  getCategory(categoryName: $categoryName) {
    id
    categoryName
    categoryImage
  }
}
`

export const GET_ALL_CATEGORIES = gql `

query GetAllCategories {
  getAllCategories {
    id
    categoryName
    categoryImage
  }
}`;
  
export const GET_ALL_REPTILES_BY_CATEGORY = gql `
query GetAnimalsByCategory($categoryName: String!) {
  getAnimalsByCategory(categoryName: $categoryName) {
    id
    name
    scientificName
    description
    price
    quantity
    photoId
  }
}`

export const GET_ONE_REPTILES_BY_ID = gql`
query GetOneReptile($getOneReptileId: Float!) {
  getOneReptile(id: $getOneReptileId) {
    id
    name
    description
    scientificName
    photoId
  }
}`

