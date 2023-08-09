import gql from "graphql-tag";


export const GET_TOKEN = gql`
mutation GetToken($email: String!, $password: String!) {
   getToken(email: $email, password: $password)
 }
`;

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      email
    }
  }
`;

export const CREATE_REPTILE = gql `
mutation CreateReptile($categoryId: Float!, $reptile: CreateReptileInput!, $animalPicture: String!) {
  createReptile(categoryId: $categoryId, reptile: $reptile, animalPicture: $animalPicture) {
    name
    scientificName
    description
    price
    quantity
    animalPicture
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

export const CREATE_CATEGORY = gql`
mutation CreateCategory($categoryImage: String!, $categoryName: String!) {
  createCategory(categoryImage: $categoryImage, categoryName: $categoryName) {
    id
    categoryName
    categoryImage
  }
}`

export const CREATE_FOOD = gql`
mutation CreateFood($food: CreateFoodInput!, $foodPicture: String!) {
  createFood(food: $food, foodPicture: $foodPicture) {
    foodName
    foodPrice
    foodCategory
    foodPicture
  }
}
`;

export const CREATE_EQUIPMENT = gql`
mutation CreateEquipment($equipment: CreateEquipmentInput!, $equipmentPicture: String!) {
  createEquipment(equipment: $equipment, equipmentPicture: $equipmentPicture) {
    equipmentName
    equipmentDescription
    equipmentPrice
    equipmentDetails
    equipmentPicture
  }
}`;

export const CREATE_UPKEEP = gql`
mutation CreateUpkeep($upkeep: CreateUpkeepInput!) {
  createUpkeep(upkeep: $upkeep) {
    difficulty
    location
    eatingPlan
    dayCycle
    humidity
    mores
    dayTemperature
    nightTemperature
    upkeepInformations
  }
}`;

export const UPLOAD = gql`
mutation ($file: UploadFileInput!) {
  createUploadFile(input: { data: { file: $file } }) {
    name
  }
}`

export const CREATE_PAYMENT_SESSION = gql`
mutation CretePaymentSession($amount: Float!) {
    createPaymentSession(amount: $amount) {
        customer
        ephemeralKey
        paymentIntent
        publishableKey
    }
}`;

export const VERIFY_TOKEN = gql`
mutation Mutation($token: String!) {
  verifyToken(token: $token) {
    id
    email
    role
  }
}`;