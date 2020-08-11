import { ReactNode } from 'react'
import { Box, SxStyleProp } from 'theme-ui'

interface ContainerProps {
  children: ReactNode
  styles?: SxStyleProp
}

export const Container = ({ children, styles }: ContainerProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        px: [2, 2, 1],
        m: '0 auto',
        maxWidth: ['100%', 540, 720, 960, 1140],
        ...styles
      }}
    >
      {children}
    </Box>
  )
}
