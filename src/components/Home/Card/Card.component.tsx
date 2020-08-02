/* @jsx jsx */
import { useNeuBoxShadow } from '@hooks/useBoxShadow'
import { useContext } from 'react'
import Col from 'react-bootstrap/Col'
import { FiCheckSquare, FiClipboard } from 'react-icons/fi'
import useClipboard from 'react-use-clipboard'
import { Box, Flex, jsx, Link, SxStyleProp, Text } from 'theme-ui'
import { HomeContext } from '../Home.context'

export const Card: React.FC = () => {
  const { id } = useContext(HomeContext)
  const url = typeof window !== 'undefined' ? window.location.host + '/' + id : id
  const cardShadow = useNeuBoxShadow(10, 20)
  const iconButtonShadow = useNeuBoxShadow(3, 6)
  const [isCopied, setCopied] = useClipboard(url, { successDuration: 2000 })

  const styles: SxStyleProp = {
    column: {
      bg: 'background',
      borderRadius: 20,
      p: 0,
      overflow: 'hidden',
      position: 'relative',
      mt: 11,
      opacity: 1,
      display: id !== '' ? 'inline-block' : 'none',
      ...cardShadow
    },
    cardTitle: { fontWeight: 'heading', fontSize: 1, color: 'primary' },
    cardDescription: { fontSize: 0, pt: 1, lineHeight: 1, opacity: 0.7 },
    linkRow: {
      pt: [1, 1, 2],
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    iconButton: {
      ...iconButtonShadow,
      width: 5,
      height: 5,
      borderRadius: 50,
      border: 'none',
      bg: 'background',
      color: 'primary',
      cursor: 'pointer',
      outline: 'none'
    },
    copiedBox: {
      width: '100%',
      bg: 'primary',
      color: 'background',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: isCopied ? 5 : 0,
      transition: '0.2s ease-out'
    }
  }

  return (
    <Col
      xs={{ span: 10, offset: 1 }}
      sm={{ span: 8, offset: 2 }}
      md={{ span: 6, offset: 3 }}
      lg={{ span: 4, offset: 4 }}
      sx={styles.column}
    >
      <Box sx={styles.copiedBox}>
        <Text
          as="p"
          sx={{
            display: isCopied ? 'flex' : 'none',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <FiCheckSquare sx={{ mr: 1 }} /> Copied to clipboard!
        </Text>
      </Box>
      <Box sx={{ p: [4, 4, 5] }}>
        <Text as="h2" sx={styles.cardTitle}>
          Your created short url:
        </Text>
        <Text as="p" sx={styles.cardDescription}>
          Here&#39;s your newly created short url for you to freely use everywhere.
        </Text>
        <Flex sx={styles.linkRow}>
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'primary', fontSize: 1 }}
          >
            {url.replace('http://', '').replace('https://', '')}
          </Link>
          <button
            type="button"
            sx={styles.iconButton}
            onClick={setCopied}
            aria-label="copy to clipboard"
          >
            <FiClipboard />
          </button>
        </Flex>
      </Box>
    </Col>
  )
}
