import Link from 'next/link'
import { FiHeart } from 'react-icons/fi'
import { Link as TLink, SxStyleProp, Text } from 'theme-ui'

const styles: SxStyleProp = {
  text: {
    fontSize: 0,
    m: 0,
    p: 0,
    lineHeight: 1,
    textAlign: 'center',
    pb: 2
  },
  anchor: {
    color: 'primary',
    textDecoration: 'underline',
    cursor: 'pointer'
  }
}

export const Footer: React.FC = () => {
  return (
    <Text as="p" sx={styles.text}>
      Made with <FiHeart /> by{' '}
      <TLink
        href="https://twitter.com/ixahmedxii"
        target="_blank"
        rel="noopener noreferrer"
        sx={styles.anchor}
        aria-label="my twitter profile"
      >
        Ahmed Elsakaan
      </TLink>{' '}
      <br /> By using our services you accept our{' '}
      <Link href="/terms-and-conditions">
        <Text as="a" sx={styles.anchor} aria-label="terms and conditions page">
          Terms & Conditions
        </Text>
      </Link>{' '}
      and{' '}
      <Link href="/privacy-policy">
        <Text as="a" sx={styles.anchor} aria-label="privacy policy page">
          Privacy Policy
        </Text>
      </Link>
    </Text>
  )
}
