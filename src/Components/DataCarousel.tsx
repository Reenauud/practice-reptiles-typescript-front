
import {terra} from "../../assets/terra.jpg"
import { useQuery } from "@apollo/client";
import { GET_ALL_REPTILES } from "../GraphQL/Queries";

const {data} = useQuery(GET_ALL_REPTILES)

console.log(data.getAllReptiles)

export const dataa = [
    {
      title: "iguan",
      imgUrl: "https://media.istockphoto.com/id/146059113/fr/photo/iguane.jpg?s=612x612&w=0&k=20&c=Vs9sDYxURVnXQQqKowiXSzQbGMu7D2VJ7O6i05r2Jlg=",
    },
    {
      title: "snakes",
      imgUrl: "assets/user.png",
    },
    {
      title: "terra",
      imgUrl: terra,
    },
  ];