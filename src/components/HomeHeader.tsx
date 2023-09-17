import Avatar from '@assets/avatar.png'
import { FontAwesome5 } from '@expo/vector-icons'
import { Heading, HStack, Text, VStack } from 'native-base'

import { UserPhoto } from './UserPhoto'

export function HomeHeader() {
  return (
    <HStack
      bg="green.400"
      pt={16}
      pb={5}
      px={6}
      alignItems="center"
      justifyContent="space-between"
    >
      <HStack alignItems="center">
        <UserPhoto source={Avatar} size={14} alt="Image do usuário" mr={2} />
        <VStack>
          <Text color="white" fontSize="md">
            Oi,
          </Text>
          <Heading color="white" fontSize="md" fontFamily="heading">
            Everton
          </Heading>
        </VStack>
      </HStack>

      <HStack>
        <FontAwesome5 name="coins" size={24} color="#ffff00" />
        <Text color="white" fontSize="md" fontFamily="heading" ml={2}>
          5 LX
        </Text>
      </HStack>
    </HStack>
  )
}
