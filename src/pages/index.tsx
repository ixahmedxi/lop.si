/* @jsx jsx */

import { modes } from '@theme'
import Container from 'react-bootstrap/Container'
import { Button, jsx, Text, useColorMode } from 'theme-ui'

const Index: React.FC = () => {
  const [mode, setMode] = useColorMode()
  return (
    <Container sx={{ pt: 5 }}>
      <Text
        sx={{
          fontSize: 4,
          color: 'primary'
        }}
      >
        Lop.si
      </Text>
      <Button
        onClick={() => {
          const index = modes.indexOf(mode)
          const next = modes[(index + 1) % modes.length]
          setMode(next)
        }}
        sx={{
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          mt: 3
        }}
      >
        Toggle Theme
      </Button>
    </Container>
  )
}

export default Index
