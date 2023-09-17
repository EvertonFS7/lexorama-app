import { FontAwesome5 } from '@expo/vector-icons'
import { FlatList, Heading, HStack, Image, VStack } from 'native-base'
import { TouchableOpacity } from 'react-native'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'PSN',
    image:
      'https://gmedia.playstation.com/is/image/SIEPDC/PS_STORE_DIGITAL_CODE_PORT_BRA_2021_09_01_60?$native$',
    price: '50',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Xbox',
    image:
      'https://assets.nuuvem.com/image/upload/t_screenshot_full/v1/products/5e50593bfd89597ea2129d8d/screenshots/d7db37valfqiutkcubxv.jpg',
    price: '50',
  },
  {
    id: '58694a0f-3da1-471f-bd96-fsfsfs78fsf',
    title: 'Steam',
    image:
      'https://images.g2a.com/360x600/1x1x1/steam-gift-card-50-usd-steam-key-global-i10000000258118/867bf953149d4926b01826ab',
    price: '50',
  },
  {
    id: '58694a0f-3da1-471f-bd96-dadaduad838dh3',
    title: 'Steam',
    image:
      'https://images.g2a.com/360x600/1x1x1/steam-gift-card-50-usd-steam-key-global-i10000000258118/867bf953149d4926b01826ab',
    price: '50',
  },
  {
    id: '58694a0f-3da1-471f-bd96-shnqwudh31279',
    title: 'Steam',
    image:
      'https://images.g2a.com/360x600/1x1x1/steam-gift-card-50-usd-steam-key-global-i10000000258118/867bf953149d4926b01826ab',
    price: '50',
  },
  {
    id: '58694a0f-3da1-471f-bd96-dj82jh38dhjd3',
    title: 'Steam',
    image:
      'https://images.g2a.com/360x600/1x1x1/steam-gift-card-50-usd-steam-key-global-i10000000258118/867bf953149d4926b01826ab',
    price: '50',
  },
  {
    id: '58694a0f-3da1-471f-bd96-d3qdf3qffqr3r',
    title: 'Steam',
    image:
      'https://images.g2a.com/360x600/1x1x1/steam-gift-card-50-usd-steam-key-global-i10000000258118/867bf953149d4926b01826ab',
    price: '50',
  },
  {
    id: '58694a0f-3da1-471f-bd96-rq3rq3rqrq3r3',
    title: 'Steam',
    image:
      'https://images.g2a.com/360x600/1x1x1/steam-gift-card-50-usd-steam-key-global-i10000000258118/867bf953149d4926b01826ab',
    price: '50',
  },
]

export default function Card() {
  return (
    <VStack flex={1}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <HStack
              borderColor="#3a474d"
              borderWidth={1}
              rounded="md"
              mb={3}
              maxH="24"
            >
              <Image
                source={{
                  uri: item.image,
                }}
                size="20"
                alt="Image do usuário"
                rounded="md"
                resizeMode="cover"
              />

              <VStack
                direction="column"
                px={2}
                py={4}
                display="flex"
                justifyContent="space-between"
              >
                <Heading color="white" fontSize="lg" fontFamily="heading">
                  {' '}
                  {item.title}{' '}
                </Heading>

                <HStack px={1.5}>
                  <Heading
                    color="white"
                    fontSize="md"
                    fontFamily="heading"
                    mr={2}
                  >
                    L$ {item.price} Lexocoins
                  </Heading>
                  <FontAwesome5 name="coins" size={17} color="#fcc802" />
                </HStack>
              </VStack>
            </HStack>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        borderColor="green.400"
      />
    </VStack>
  )
}
