import { useColorMode, IconButton } from '@chakra-ui/core'

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={colorMode === 'dark' ? 'sun' : 'moon'}
      onClick={toggleColorMode}
    />
  )
}

export default DarkModeSwitch