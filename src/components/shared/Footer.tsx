import { FiHeart } from 'react-icons/fi'
import { Grid, Link, Text } from 'theme-ui'

export const Footer: React.FC = () => {
  return (
    <Grid sx={{ textAlign: 'center', placeItems: 'start center' }}>
      <Text as="p" sx={{ fontSize: [0, 0, 1] }}>
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
    </Grid>
  )
}
