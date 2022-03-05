import { StatusBar, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import Cesta from './src/pages/Cesta/Cesta';
import mock from './src/mocks/cesta';

export default function App() {

  const [fontLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fontLoaded) {
    return <AppLoading/>
  }


  return (
    <View style={{flex: 1}}>
      <StatusBar/>
      <Cesta {...mock}/>
    </View >
  );
}
