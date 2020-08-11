import { FiAlertTriangle } from 'react-icons/fi'
import { SxStyleProp, Text } from 'theme-ui'

interface PropTypes {
  errors: string | null
}

const styles: SxStyleProp = {
  text: {
    color: '#e8505b',
    pl: [4, 4, 6],
    pt: 3,
    display: 'flex',
    alignItems: 'center',
    fontSize: [0, 0, 1],
    svg: {
      mr: 1
    }
  }
}

export const FormErrors = ({ errors }: PropTypes) => {
  if (errors === null) {
    return null
  }

  return (
    <Text as="p" sx={styles.text}>
      <FiAlertTriangle />
      {errors}
    </Text>
  )
}
