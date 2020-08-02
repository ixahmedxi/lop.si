import { FieldError } from 'react-hook-form'
import { DeepMap } from 'react-hook-form/dist/types/utils'
import { FiAlertTriangle } from 'react-icons/fi'
import { SxStyleProp, Text } from 'theme-ui'

interface PropTypes {
  errors: DeepMap<
    {
      url: string
    },
    FieldError
  >
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

export const FormErrors: React.FC<PropTypes> = ({ errors }) => {
  if (typeof errors.url === 'undefined') {
    return null
  }

  return (
    <Text as="p" sx={styles.text}>
      <FiAlertTriangle />
      {errors.url?.message}
    </Text>
  )
}
