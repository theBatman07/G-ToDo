import "dotenv/config";
import { Constants } from "expo-constants";

export default {
  expo: {
    name: "G-ToDo",
    slug: "G-ToDo",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    android: {
      package: "com.g.khater.G_ToDo",
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: "./assets/to-do-list.png",
        backgroundColor: "#FFFFFF",
      },
    },
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      eas: {
        projectId: "2fab80a5-f454-493e-8894-b0605145a360",
      },
    },
  },
};
