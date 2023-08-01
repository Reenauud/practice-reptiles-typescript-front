import { gql } from "@apollo/client";

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
    animalPicture
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

export const GET_ALL_ANIMALS = gql`
query GetAllReptiles {
  getAllReptiles {
      id
      name
      description
      animalPicture
      quantity
      price
  }
}`

export const GET_ALL_ANIMALS_IDS = gql`
query GetAllIds {
  getAllReptiles {
    id
    name
  }
}
`;

export const GET_ALL_EQUIPMENTS = gql`
query GetAllEquipments {
  getAllEquipments {
    id
    equipmentName
    equipmentDescription
    equipmentPrice
    equipmentDetails
    equipmentPicture
  }
}`

export const GET_FOOD_LIST = gql`
query GetFoodList {
    getFoodList {
        id
        foodName
        foodPrice
        foodCategory
        foodPicture
      }
  }`;