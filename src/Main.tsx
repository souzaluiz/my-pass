import { NativeBaseProvider } from 'native-base';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { useLoadFonts } from './assets/fonts/use-load-fonts';

import { PreAuth } from './screens/PreAuth';
import { theme } from './theme';

export default function App() {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) return null;

  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <PreAuth />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
