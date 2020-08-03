import { Box, SxStyleProp } from 'theme-ui'

export const Container: React.FC<{ styles?: SxStyleProp }> = ({ children, styles }) => {
  return (
    <Box
      sx={{
        width: '100%',
        px: 1,
        m: '0 auto',
        maxWidth: ['100%', 540, 720, 960, 1140],
        ...styles
      }}
    >
      {children}
    </Box>
  )
}
