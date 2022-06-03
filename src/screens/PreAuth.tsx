import { Button, Center, Row, Stack, Text } from 'native-base';
import AntDesign from '@expo/vector-icons/AntDesign';

export function PreAuth() {
  return (
    <Center flex={1} justifyContent="flex-end" p="4" pb="8">
      <Stack alignItems="center">
        <Text variant="600" fontSize="2xl" mb="2">
          Vamos começar
        </Text>
        <Text variant="400" fontSize="sm">
          Gerencie suas senhas aqui
        </Text>

        <Button bg="light.100" mt="10" px="8">
          <Row alignItems="center">
            <AntDesign name="google" size={24} color="black" />
            <Text variant="500" fontSize="sm" color="dark.100" ml="2">
              Entrar com Google
            </Text>
          </Row>
        </Button>
      </Stack>
    </Center>
  );
}
