// src/lib/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID, // optional
};

// Avoid re-initializing in HMR/dev
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Optional: safe Analytics init (browser only)
export const initAnalytics = async () => {
  if (typeof window === "undefined") return null;
  if (!import.meta.env.VITE_FIREBASE_MEASUREMENT_ID) return null;
  const { getAnalytics, isSupported } = await import("firebase/analytics");
  if (await isSupported()) {
    return getAnalytics(app);
  }
  return null;
};
