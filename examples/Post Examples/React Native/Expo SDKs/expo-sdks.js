// 1️⃣ expo-device – Get to Know the Device 📲
import * as Device from 'expo-device';

console.log(Device.modelName); // e.g. "Pixel 6"

// Why use it?
// - Show device-specific layouts
// - Send usage data
// - Debug faster


// 2️⃣ expo-localization – Go global effortlessly 🌐
import * as Localization from 'expo-localization';

console.log(Localization.locale); // e.g. "ja-JP"

// Why use it?
// - Auto-detect language
// - Format date/number by region
// - Personalize UX by locale


// 3️⃣ expo-haptics – Add tactile feedback 💥
import * as Haptics from 'expo-haptics';

Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

// Why use it?
// - Vibrate on tap or long press
// - Confirm actions (success/error)
// - Enhance button interactivity


// 4️⃣ expo-image-picker – Pick images like a pro 📸
import * as ImagePicker from 'expo-image-picker';

const pickImage = async () => {
  const result = await ImagePicker.launchImageLibraryAsync();
  if (!result.canceled) {
    console.log(result.assets[0].uri);
  }
};

pickImage();

// Why use it?
// - Upload profile pictures
// - Capture receipts/photos
// - Let users choose media easily


// 5️⃣ expo-splash-screen – Design a smooth app launch 🚀
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

useEffect(() => {
  SplashScreen.preventAutoHideAsync();
  // preload assets, fonts, etc.
  SplashScreen.hideAsync();
}, []);

// Why use it?
// - Preload assets
// - Control when the splash disappears
// - Polish first impressions
