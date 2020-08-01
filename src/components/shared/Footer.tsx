/* @jsx jsx */
import Link from 'next/link'
import { FiHeart } from 'react-icons/fi'
import { Flex, Grid, jsx, Link as ThemeLink, Text } from 'theme-ui'

export const Footer: React.FC = () => {
  return (
    <Grid sx={{ textAlign: 'center', placeItems: 'center center' }}>
      <div>
        <Text as="p" sx={{ fontSize: [0, 0, 1] }}>
          Made with <FiHeart /> by{' '}
          <ThemeLink
            href="https://twitter.com/ixahmedxii"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'primary' }}
            aria-label="visit my twitter profile"
          >
            Ahmed Elsakaan
          </ThemeLink>
        </Text>
        <Flex sx={{ justifyContent: 'center', opacity: 0.7, pt: [1, 1, 1, 2] }}>
          <p sx={{ fontSize: ['8px', '8px', 0] }}>
            By using our service you accept our{' '}
            <Link href="/terms-and-conditions">
              <a
                sx={{ color: 'text', textDecoration: 'underline', cursor: 'pointer' }}
                aria-label="terms and conditions page"
              >
                Terms & Conditions
              </a>
            </Link>{' '}
            and{' '}
            <Link href="/privacy-policy">
              <a
                sx={{ color: 'text', textDecoration: 'underline', cursor: 'pointer' }}
                aria-label="privacy policy page"
              >
                Privacy Policy
              </a>
            </Link>{' '}
          </p>
        </Flex>
      </div>
    </Grid>
  )
}
