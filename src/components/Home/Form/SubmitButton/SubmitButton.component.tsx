/* @jsx jsx */
import { useNeuBoxShadow } from '@hooks/useBoxShadow'
import { FiArrowRight } from 'react-icons/fi'
import { jsx, Spinner, SxStyleProp } from 'theme-ui'

export const SubmitButton: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const styles: SxStyleProp = {
    button: {
      height: [5, 5, 6],
      width: [5, 5, 6],
      outline: 'none',
      border: 'none',
      fontSize: 1,
      bg: 'primary',
      color: 'background',
      borderRadius: 100,
      cursor: 'pointer',
      ...useNeuBoxShadow(5, 10)
    }
  }

  return (
    <button sx={styles.button} type="submit" aria-label="create a short url">
      {isLoading ? <Spinner variant="styles.spinner" size={24} /> : <FiArrowRight />}
    </button>
  )
}
