/* @jsx jsx */
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { jsx, SxStyleProp, Text } from 'theme-ui'

const Title: SxStyleProp = {
  color: 'primary',
  fontSize: ['20px', '20px', 3],
  fontWeight: 'heading',
  pb: [2, 2, 3]
}

const Description: SxStyleProp = {
  lineHeight: 1,
  opacity: 0.7,
  fontSize: ['11px', '11px', 1]
}

export const Introduction: React.FC = () => {
  return (
    <Row>
      <Col lg={{ span: 8, offset: 2 }} sx={{ textAlign: 'center' }}>
        <Text as="h1" sx={Title}>
          Create professional looking urls
        </Text>
        <Text as="p" sx={Description}>
          lop.si helps you transform these long, unmanageable and ugly urls into short alternatives
          that look professional when used in emails and such.
        </Text>
      </Col>
    </Row>
  )
}
