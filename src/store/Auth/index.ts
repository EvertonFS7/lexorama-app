import { create } from 'zustand'

export interface AuthState {
  isAuthenticated: boolean
  handleAuthenticateUser: (value: boolean) => void
}

export const useAuth = create<AuthState>((set) => {
  return {
    isAuthenticated: false,
    handleAuthenticateUser: (value) => {
      set(() => ({
        isAuthenticated: value,
      }))
    },
  }
})
