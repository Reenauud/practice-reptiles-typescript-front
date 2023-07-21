import "dotenv/config";
export default {
  "expo": {
    "expo": {
      "plugins": [
        ["expo-image-picker",
      {
        "photosPermission": "The app accesses your photos to let you share them with your friends."
      }]
      ]
    },
    "name": "reptile-shop-mobile",
    "slug": "reptile-shop-mobile",
    "version": "1.0.0",
    "orientation": "portrait",
    "userInterfaceStyle": "light",
    "splash": {
      
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        
      }
    },
    "web": {
       
    },
    "extra": {
      stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    },
    "plugins": [
      [
          "@stripe/stripe-react-native",
          {
              "merchantIdentifier": "ReptileShop",
              "enableGooglePay": false
          }
      ]
  ]
  }
}
