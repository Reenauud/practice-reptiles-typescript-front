import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    
    Food: undefined;
    Reptiles: undefined;
    Equipments: undefined;
    Admin: undefined;
    PaymentScreen: undefined;
    Home: undefined;
    Shop: {screen: "Showcase"};
    Connexion: undefined;
    Panier: undefined;
    Showcase: undefined;
    
  };

  export type EquipmentsNavigationProp = NativeStackScreenProps<RootStackParamList, "Equipments">;
  export type HomeNavigationProp = NativeStackScreenProps<RootStackParamList, "Home">;
  export type ShowcaseNavigationProp = NativeStackScreenProps<RootStackParamList, "Showcase">;