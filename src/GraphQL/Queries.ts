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

 export const GET_CATEGORY_BY_NAME = gql`
 query GetCategoryByName($categoryName: String!) {
    getCategoryByName(categoryName: $categoryName) {
      id
      categoryName
    }
  }`;

export const GET_ALL_CATEGORIES = gql `

query GetAllCategory {
  getAllCategory {
    id
    categoryImage
    categoryName
  }
}`;

  
