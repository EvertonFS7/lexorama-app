import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import {
  Box,
  Center,
  Heading,
  Image,
  KeyboardAvoidingView,
  VStack,
} from 'native-base'
import { Platform, ScrollView } from 'react-native'

import AvatarLexorama from '../assets/avatar_lexorama.png'

export function SignUp() {
  const { goBack } = useNavigation()

  function handleGoBack() {
    goBack()
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
          </Box>

          <Center>
            <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
              Crie sua conta
            </Heading>
            <Input placeholder="Nome" />
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secureTextEntry />
            <Input
              placeholder="Confirme a Senha"
              secureTextEntry
              returnKeyType="send"
            />

            <Button title="Criar e acessar" />
          </Center>

          <Button
            mt={12}
            title="Voltar para o login"
            variant="outline"
            onPress={handleGoBack}
          />
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
