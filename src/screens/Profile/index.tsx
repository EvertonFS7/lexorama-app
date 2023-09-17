import Avatar from '@assets/avatar.png'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { UserPhoto } from '@components/UserPhoto'
import {
  Center,
  Heading,
  KeyboardAvoidingView,
  Text,
  VStack,
} from 'native-base'
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'

const PHOTO_SIZE = 33

export function Profile() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VStack flex={1}>
        <ScrollView contentContainerStyle={{ paddingBottom: 56 }}>
          <KeyboardAvoidingView behavior="position" enabled>
            <Center mt={4} px={10}>
              <UserPhoto
                source={Avatar}
                alt="Foto do usuário"
                size={PHOTO_SIZE}
              />
              <TouchableOpacity>
                <Text color="green.400" fontSize="md" mt={2} mb={8}>
                  Alterar foto
                </Text>
              </TouchableOpacity>

              <Input
                bg="transparent"
                borderWidth={1}
                placeholder="Nome"
                errorMessage={undefined}
              />

              <Input bg="transparent" borderWidth={1} placeholder="E-mail" />

              <Heading
                color="gray.200"
                fontSize="md"
                mb={2}
                alignSelf="baseline"
                fontFamily="heading"
                mt={4}
              >
                Alterar senha
              </Heading>

              <Input
                bg="transparent"
                borderWidth={1}
                placeholder="Senha antiga"
                secureTextEntry
              />

              <Input
                bg="transparent"
                borderWidth={1}
                placeholder="Nova senha"
                secureTextEntry
                errorMessage={undefined}
              />

              <Input
                bg="transparent"
                borderWidth={1}
                placeholder="Confirme a nova senha"
                secureTextEntry
                errorMessage={undefined}
              />

              <Button title="Alterar perfil" />
            </Center>
          </KeyboardAvoidingView>
        </ScrollView>
      </VStack>
    </SafeAreaView>
  )
}
