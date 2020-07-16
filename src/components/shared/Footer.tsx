import { FiHeart } from 'react-icons/fi'
import { Box, Link, Text } from 'theme-ui'

export const Footer: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Text as="p">
        Made with <FiHeart /> by{' '}
        <Link
          href="https://twitter.com/ixahmedxii"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'primary' }}
        >
          Ahmed Elsakaan
        </Link>
      </Text>
    </Box>
  )
}
