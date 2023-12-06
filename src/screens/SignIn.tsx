import AvatarLexorama from '../assets/avatar_lexorama.png'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import {
  Box,
  Center,
  Heading,
  Image,
  KeyboardAvoidingView,
  Text,
  VStack,
} from 'native-base'
import { Platform, ScrollView } from 'react-native'

export function SignIn() {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>()

  function handleNewAccount() {
    navigate('SignUp')
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
      flex={1}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack px={10}>
          <Box display="flex" alignItems="center" mt={20}>
            <Image
              source={AvatarLexorama}
              defaultSource={AvatarLexorama}
              alt="Pessoas treinando"
              resizeMode="contain"
              height="40"
              width="40"
            />
            <Center>
              <Text color="white" fontWeight="extrabold" fontSize="lg">
                Seja muito bem vindo
              </Text>
            </Center>
          </Box>

          <Center>
            <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
              Acesse sua conta
            </Heading>

            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secureTextEntry returnKeyType="send" />

            <Button title="Acessar" isLoading={false} />
          </Center>

          <Center mt={24}>
            <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
              Ainda não tem acesso?
            </Text>

            <Button
              title="Criar conta"
              variant="outline"
              onPress={handleNewAccount}
            />
          </Center>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
