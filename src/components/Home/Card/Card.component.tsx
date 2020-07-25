/* @jsx jsx */
import { keyframes } from '@emotion/core'
import { useNeuBoxShadow } from '@hooks/useBoxShadow'
import Col from 'react-bootstrap/Col'
import { FiCheckSquare, FiClipboard } from 'react-icons/fi'
import useClipboard from 'react-use-clipboard'
import { Box, Flex, jsx, Link, SxStyleProp, Text } from 'theme-ui'

export const Card: React.FC<{ url: string }> = ({ url }) => {
  const iconButtonShadow = useNeuBoxShadow(3, 6)
  const [isCopied, setCopied] = useClipboard(url, { successDuration: 2000 })

  const showAnimation = keyframes`
    0% {
      box-shadow: 0px 0px 0px transparent, 0px 0px 0px transparent;
    }
    50% {
      box-shadow: 0px 0px 0px transparent, 10px 10px 20px #c8c8c8;
    }
    100% {
      box-shadow: -10px -10px 20px #fff, 10px 10px 20px #c8c8c8;
    }
  `

  const styles: SxStyleProp = {
    column: {
      bg: 'background',
      borderRadius: 20,
      p: 0,
      overflow: 'hidden',
      position: 'relative',
      mt: 11,
      opacity: 1,
      animation: `${showAnimation} 2s forwards ease-out`
    },
    cardTitle: { fontWeight: 'heading', fontSize: 1, color: 'primary' },
    cardDescription: { fontSize: 0, pt: 1, lineHeight: 1, opacity: 0.7 },
    linkRow: {
      pt: 2,
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
    <Col sm={{ span: 4, offset: 4 }} sx={styles.column}>
      <Box sx={styles.copiedBox}>
        {isCopied ? (
          <Text as="p" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FiCheckSquare sx={{ mr: 1 }} /> Copied to clipboard!
          </Text>
        ) : null}
      </Box>
      <Box sx={{ p: 5 }}>
        <Text as="h2" sx={styles.cardTitle}>
          Your previously created url:
        </Text>
        <Text as="p" sx={styles.cardDescription}>
          Here&#39;s your most recently created url if you wish to copy it to your clipboard.
        </Text>
        <Flex sx={styles.linkRow}>
          <Link href={url} target="_blank" rel="noopener noreferrer" sx={{ color: 'primary' }}>
            {url}
          </Link>
          <button type="button" sx={styles.iconButton} onClick={setCopied}>
            <FiClipboard />
          </button>
        </Flex>
      </Box>
    </Col>
  )
}
