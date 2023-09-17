import { Foundation } from '@expo/vector-icons'
import { Box, Button, Heading, HStack, VStack } from 'native-base'

export function Subheader() {
  return (
    <VStack
      bgColor="green.400"
      height="20"
      px={5}
      display="flex"
      justifyContent="center"
    >
      <HStack display="flex" justifyContent="space-between">
        <Box maxWidth="48">
          <Heading color="white" fontSize="2xl" fontFamily="heading">
            Atividades 1
          </Heading>
          <Heading color="white" fontSize="lg" fontFamily="heading">
            Pronuncia e dicção
          </Heading>
        </Box>

        <Box justifyContent="center">
          <Button
            bgColor="green.400"
            shadow="5"
            rounded="lg"
            px={4}
            py={3}
            onPress={() => console.log('hello world')}
          >
            <Foundation name="book-bookmark" size={30} color="white" />
          </Button>
        </Box>
      </HStack>
    </VStack>
  )
}
