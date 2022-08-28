import React, { ReactChildren } from "react";
import {
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  useSafeArea,
  Box
} from "native-base"
import MyApp from "./components/App"
import {initialWindowMetrics, SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context'
import { registerRootComponent } from "expo";
import { AppRegistry, Platform } from "react-native";


// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark"
}

// extend the theme
export const theme = extendTheme({ config })
type MyThemeType = typeof theme
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}


const App : React.FC = () => {

  return (
      <NativeBaseProvider>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <MyApp />
        </SafeAreaProvider>
      </NativeBaseProvider>
  )

}

// Color Switch Component
// function ToggleDarkMode() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <HStack space={2} alignItems="center">
//       <Text>Dark</Text>
//       <Switch
//         isChecked={colorMode === "light"}
//         onToggle={toggleColorMode}
//         aria-label={
//           colorMode === "light" ? "switch to dark mode" : "switch to light mode"
//         }
//       />
//       <Text>Light</Text>
//     </HStack>
//   );
// }

if(Platform.OS == 'ios'){
  registerRootComponent(App)
}else{
  AppRegistry.registerComponent('appName', ()=> App)
}

export default App;