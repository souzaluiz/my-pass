import { StatusBar } from 'expo-status-bar';
import { Center, NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <StatusBar style="auto" />
        My Pass
      </Center>
    </NativeBaseProvider>
  );
}
