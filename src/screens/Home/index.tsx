import { HomeHeader } from '@components/HomeHeader'
import { Subheader } from '@components/Subheader'
import { Box, Divider, ScrollView } from 'native-base'
import { Feed } from './components/Feed'

export function Home() {
  return (
    <Box bgColor="blue.700" flex={1}>
      <HomeHeader />
      <Divider height={0.5} backgroundColor="#4bbb00" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Subheader />
        <Box pt="4">
          <Feed />
        </Box>
      </ScrollView>
    </Box>
  )
}
