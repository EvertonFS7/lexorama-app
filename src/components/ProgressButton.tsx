import { Box, IBoxProps } from 'native-base'
import { TouchableOpacity } from 'react-native'

type ProgressButtonProps = IBoxProps & {
  icon: any
}

export function ProgressButton({ icon, ...rest }: ProgressButtonProps) {
  return (
    <TouchableOpacity>
      <Box
        rounded="full"
        height="20"
        width="20"
        display="flex"
        justifyContent="center"
        alignItems="center"
        {...rest}
      >
        {icon}
      </Box>
    </TouchableOpacity>
  )
}
