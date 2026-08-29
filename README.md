# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



To turn a React + Vite web application into an Android APK, the recommended industry standard tool is Capacitor (developed by Ionic). It wraps your static Vite production build inside a native WebView.PrerequisitesNode.js installed on your system.  Android Studio installed (required to build and export the final .apk file).1.Initialize Capacitor in Your Vite Project:Open your terminal in your React + Vite project directory and install the required Capacitor core packages:Bashnpm install @capacitor/core @capacitor/cli
Initialize Capacitor:Bashnpx cap init
Enter your App Name and an App ID (e.g., com.mycompany.myapp) when prompted.2.Configure capacitor.config.ts:Ensure the web export folder matches Vite's output directory.Vite builds web output into a directory called dist by default. Open capacitor.config.ts (or capacitor.config.json) in your project root and make sure webDir points to dist:TypeScriptimport type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mycompany.myapp',
  appName: 'My React App',
  webDir: 'dist'
};

export default config;
3.Add the Android Platform:Install the Capacitor Android plugin and initialize the android/ native platform folder:Bash
#npm install @capacitor/android
npx cap add android
4.Build Your React App & Sync with Android:Compile your React + Vite static output, then copy those files directly into the Android native platform:Bashnpm run build
npx cap sync
Note: Whenever you update your React code in the future, re-run npm run build && npx cap sync to propagate your web changes to the Android app.5.Open Android Studio & Generate APK:Launch the native project inside Android Studio:Bash 
#npx cap open android
Once Android Studio finishes syncing Gradle tasks:In the top toolbar, click Build.Select Build Bundle(s) / APK(s) > Build APK(s).Once the build completes, click locate in the bottom-right notification pop-up to retrieve your generated app-debug.apk file.