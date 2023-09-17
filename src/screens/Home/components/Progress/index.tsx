import { Box } from 'native-base'
import { ReactNode } from 'react'

interface ProgressProps {
  children: ReactNode
}

export function Progress({ children }: ProgressProps) {
  return (
    <Box
      height="110px"
      width="110px"
      rounded="full"
      borderColor="gray.500"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderWidth={7}
    >
      {children}
    </Box>
  )
}
