import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { Home } from '@screens/Home'
import { Profile } from '@screens/Profile'
import Rewards from '@screens/Rewards'
import { Store } from '@screens/Store'
import { useTheme } from 'native-base'
import { Platform } from 'react-native'

type AppRoutes = {
  home: undefined
  Store: undefined
  Rewards: undefined
  Profile: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
  const { sizes, colors } = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green[400],
        tabBarInactiveTintColor: colors.gray[200],
        tabBarStyle: {
          backgroundColor: colors.blue[700],
          borderTopWidth: 0,
          height: Platform.OS === 'android' ? 'auto' : 96,
          paddingBottom: sizes[10],
          paddingTop: sizes[6],
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="house" size={30} color={color} />
          ),
        }}
      />
      <Screen
        name="Store"
        component={Store}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="store" size={30} color={color} />
          ),
        }}
      />
      <Screen
        name="Rewards"
        component={Rewards}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="treasure-chest"
              size={27}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle"
              size={27}
              color={color}
            />
          ),
        }}
      />
    </Navigator>
  )
}
