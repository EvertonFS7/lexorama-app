import { HomeHeader } from '@components/HomeHeader'
import { Box, Heading, VStack, Text } from 'native-base'

import Card from './components/Card'

export function Store() {
  return (
    <>
      <HomeHeader />
      <VStack bgColor="blue.700" flex={1} mt={8}>
        <Heading
          color="white"
          fontSize="2xl"
          fontFamily="heading"
          textAlign="center"
        >
          LexoStore
        </Heading>

        <Text
          color="gray.100"
          fontSize="xl"
          fontFamily="heading"
          textAlign="center"
        >
          resgate aqui seus itens
        </Text>

        <Box flex={1} px={6} mt={6}>
          <Card />
        </Box>
      </VStack>
    </>
  )
}
