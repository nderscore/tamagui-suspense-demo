import config from '../tamagui.config'
import { NavigationProvider } from './navigation'
import { TamaguiProvider, TamaguiProviderProps } from '@my/ui'
import { SuspenseBoundary } from 'app/components/SuspenseBoundary'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  return (
    <TamaguiProvider config={config} disableInjectCSS defaultTheme="light" {...rest}>
      <NavigationProvider>
        <SuspenseBoundary>{children}</SuspenseBoundary>
      </NavigationProvider>
    </TamaguiProvider>
  )
}
