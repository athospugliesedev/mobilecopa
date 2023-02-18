import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { SignIn } from './src/screens/SignIn';
import { New } from './src/screens/New';
import { Pools } from './src/screens/Pools';

import { Loading } from './src/components/Loading';

import { THEME } from './src/styles/themes';
import { AuthContextProvider } from './src/contexts/AuthContext';


export default function App() {
  
 const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_500Medium, Roboto_700Bold})




  return (
    <NativeBaseProvider theme={ THEME }>
      <AuthContextProvider>

      <StatusBar 
      style='light'
      />
      {
        fontsLoaded ? <Pools /> : <Loading /> 
      }
      </AuthContextProvider>

    </NativeBaseProvider>
    
  );
}