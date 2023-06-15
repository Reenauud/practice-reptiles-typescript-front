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

 export const GET_FOOD_FILTERED = gql`
 query GetFoodFiltered($filter: String!) {
    getFoodFiltered(filter: $filter) {
        foodName
        foodPrice
        foodCategory
    }
 }`;