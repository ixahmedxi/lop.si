/* @jsx jsx */
import { useNeuBoxShadow } from '@hooks/useBoxShadow'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { FiCheck, FiClipboard } from 'react-icons/fi'
import useClipboard from 'react-use-clipboard'
import { Box, Flex, jsx, Link, SxStyleProp, Text } from 'theme-ui'

export const Card: React.FC<{ url: string }> = ({ url }) => {
  const cardShadow = useNeuBoxShadow(15, 25)
  const iconButtonShadow = useNeuBoxShadow(3, 6)
  const [isCopied, setCopied] = useClipboard(url, { successDuration: 2000 })

  const styles: SxStyleProp = {
    wrapper: {
      pt: 12,
      position: 'relative'
    },
    column: { ...cardShadow, bg: 'background', borderRadius: 20, p: 0, overflow: 'hidden' },
    cardTitle: { fontWeight: 'heading', fontSize: 1, color: 'primary' },
    cardDescription: { fontSize: 0, pt: 1, lineHeight: 1, opacity: 0.7 },
    linkRow: {
      pt: 3,
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
      height: isCopied ? 6 : 0,
      transition: '0.2s ease-out'
    }
  }

  return (
    <Box sx={styles.wrapper}>
      <Row>
        <Col sm={{ span: 4, offset: 4 }} sx={styles.column}>
          <Box sx={styles.copiedBox}>
            {isCopied ? (
              <Text as="p">
                <FiCheck /> Copied to clipboard!
              </Text>
            ) : null}
          </Box>
          <Box sx={{ px: 5, py: 5 }}>
            <Text as="h2" sx={styles.cardTitle}>
              Your previously created url
            </Text>
            <Text as="p" sx={styles.cardDescription}>
              Here&#39;s your most recently created url if you need to copy it again:
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
      </Row>
    </Box>
  )
}
