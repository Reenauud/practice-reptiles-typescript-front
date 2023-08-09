import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    
    Nourriture: undefined;
    Animaux: undefined;
    Equipements: undefined;
    Admin: undefined;
    PaymentScreen: undefined;
    Accueil: undefined;
    Produits: {screen: "Showcase"};
    Connexion: undefined;
    Achats: undefined;
    Vitrine: undefined;
    Panier: undefined;
    
  };

  export type EquipmentsNavigationProp = NativeStackScreenProps<RootStackParamList, "Equipements">;
  export type HomeNavigationProp = NativeStackScreenProps<RootStackParamList, "Accueil">;
  export type ShowcaseNavigationProp = NativeStackScreenProps<RootStackParamList, "Vitrine">;