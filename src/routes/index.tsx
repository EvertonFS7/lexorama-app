import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { Box, useTheme } from 'native-base'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  const hasId = false
  const { colors } = useTheme()

  const theme = DefaultTheme
  theme.colors.background = colors.blue[700]

  return (
    <Box flex={1}>
      <NavigationContainer theme={theme}>
        {hasId ? <AuthRoutes /> : <AppRoutes />}
      </NavigationContainer>
    </Box>
  )
}
