import { ProgressButton } from '@components/ProgressButton'
import { Entypo, Feather } from '@expo/vector-icons'
import { Box } from 'native-base'

import { Progress } from '../Progress'

export function Feed() {
  return (
    <Box>
      <Box display="flex" alignItems="center">
        <ProgressButton
          icon={<Entypo name="check" size={32} color="white" />}
          bgColor="green.400"
        />
      </Box>
      <Box display="flex" alignItems="center" pt={5} pr="24">
        <Progress>
          <ProgressButton
            icon={<Feather name="book" size={32} color="white" />}
            bgColor="green.400"
          />
        </Progress>
      </Box>
      <Box display="flex" alignItems="center" pt={5} pr="40">
        <ProgressButton icon={undefined} bgColor="gray.400" />
      </Box>
      <Box display="flex" alignItems="center" pt={5} pr="24">
        <ProgressButton icon={undefined} bgColor="gray.400" />
      </Box>
      <Box display="flex" alignItems="center" pt={5}>
        <ProgressButton icon={undefined} bgColor="gray.400" />
      </Box>
    </Box>
  )
}
