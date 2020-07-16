/* @jsx jsx */
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { jsx, SxStyleProp, Text } from 'theme-ui'

const Title: SxStyleProp = {
  color: 'primary',
  fontSize: 3,
  fontWeight: 'heading',
  pb: 2
}

const Description: SxStyleProp = {
  lineHeight: 1,
  opacity: 0.7
}

export const Introduction: React.FC = () => {
  return (
    <Row>
      <Col sm={{ span: 8, offset: 2 }} sx={{ textAlign: 'center' }}>
        <Text as="h1" sx={Title}>
          Create professional looking URLs
        </Text>
        <Text as="p" sx={Description}>
          lop.si helps you transform these long, unmanageable and ugly URLs into a short alternative
          that looks professional when used in emails and such.
        </Text>
      </Col>
    </Row>
  )
}
