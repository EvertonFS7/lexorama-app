import Trophy from '@assets/trophy.png'
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import {
  Box,
  Heading,
  HStack,
  Image,
  Progress,
  Text,
  VStack,
} from 'native-base'
import React from 'react'

export default function Rewards() {
  return (
    <>
      <Box pt={12} px={4} py={5} bg="green.400">
        <HStack justifyContent="space-between">
          <VStack>
            <Text color="white" fontSize="2xl" fontFamily="heading">
              Ganhe
            </Text>
            <Text color="white" fontSize="2xl" fontFamily="heading">
              recompensa com
            </Text>
            <Text color="white" fontSize="2xl" fontFamily="heading">
              as missões diárias.
            </Text>
          </VStack>
          <Box justifyContent="center">
            <Image source={Trophy} w={20} h={20} alt="" />
          </Box>
        </HStack>
      </Box>

      <Box p={4}>
        <HStack justifyContent="space-between">
          <VStack>
            <Heading color="white" fontSize="xl" fontFamily="heading">
              Missões do dia
            </Heading>
          </VStack>

          <HStack alignItems="center">
            <AntDesign name="clockcircleo" size={20} color="white" />

            <Heading
              color="white"
              fontSize="md"
              fontFamily="heading"
              textTransform="uppercase"
              ml={2}
            >
              2 horas
            </Heading>
          </HStack>
        </HStack>

        <VStack
          borderWidth={1}
          borderColor="gray.300"
          p={4}
          rounded="lg"
          mt={4}
          maxW="full"
        >
          <HStack>
            <Box mr={4}>
              <FontAwesome5 name="fire-alt" size={24} color="#ffc604" />
            </Box>

            <VStack>
              <Heading
                color="white"
                fontSize="xl"
                fontFamily="heading"
                mb={2}
                maxW="64"
              >
                Acerte todos os exercícios de hoje.
              </Heading>
              <HStack alignItems="center">
                <Progress
                  value={50}
                  w="56"
                  h="6"
                  background="#38464f"
                  colorScheme="green"
                  mr={2}
                >
                  <Heading color="white" size="sm">
                    1/2
                  </Heading>
                </Progress>
                <MaterialCommunityIcons
                  name="treasure-chest"
                  size={27}
                  color="white"
                />
              </HStack>
            </VStack>
          </HStack>
        </VStack>
      </Box>
    </>
  )
}
