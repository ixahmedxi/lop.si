/* @jsx jsx */
import { useNeuBoxShadow } from '@hooks/useBoxShadow'
import { FiArrowRight } from 'react-icons/fi'
import { jsx, Spinner, SxStyleProp } from 'theme-ui'

interface SubmitButtonProps {
  isLoading: boolean
}

export const SubmitButton = ({ isLoading }: SubmitButtonProps) => {
  const styles: SxStyleProp = {
    button: {
      height: [5, 5, 6],
      width: [5, 5, 6],
      outline: 'none',
      border: 'none',
      fontSize: [1, 1, '20px'],
      bg: 'primary',
      color: 'background',
      borderRadius: 100,
      p: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'box-shadow 0.2s ease-out, background-color 0.2s ease-out, color 0.2s ease-out',
      ...useNeuBoxShadow(5, 10)
    }
  }

  return (
    <button sx={styles.button} type="submit" aria-label="create a short url">
      {isLoading ? (
        <Spinner variant="styles.spinner" size={24} data-testid="spinner" />
      ) : (
        <FiArrowRight data-testid="arrow-right" />
      )}
    </button>
  )
}
