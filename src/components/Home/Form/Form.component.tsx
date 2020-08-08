/* @jsx jsx */
import { useFirestore } from '@contexts/Firebase'
import { useHomeContext } from '@contexts/Home'
import { useNeuBoxShadow } from '@hooks/useBoxShadow'
import { FormEvent, useState } from 'react'
import { FiPaperclip } from 'react-icons/fi'
import { Box, Input, jsx, SxStyleProp } from 'theme-ui'
import { FormErrors } from './FormErrors/FormErrors.component'
import { schema } from './schema'
import { SubmitButton } from './SubmitButton/SubmitButton.component'

export const Form: React.FC = () => {
  const [url, setUrl] = useState('')
  const [errors, setErrors] = useState<string | null>(null)
  const { setId, isLoading, setIsLoading } = useHomeContext()
  const { createOneUrl } = useFirestore()

  const styles: SxStyleProp = {
    wrapper: {
      width: ['100%', '100%', '100%', '70%'],
      m: '0 auto',
      pt: [4, 4, 5]
    },
    form: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      placeItems: 'center',
      borderRadius: 100,
      p: '4px',
      border: '3px solid',
      borderColor: errors !== null ? '#e8505b' : 'transparent',
      transition: 'border-color 0.2s ease-out',
      ...useNeuBoxShadow(10, 20)
    },
    input: {
      outline: 'none',
      border: 'none',
      px: 3,
      height: [5, 5, 6],
      fontSize: [0, 0, 1],
      '::placeholder': {
        color: 'text',
        opacity: 0.5,
        transition: 'color 0.2s ease-out'
      }
    },
    icon: {
      color: 'text',
      transition: 'color 0.2s ease-out',
      fontSize: [0, 0, 1],
      opacity: 0.5,
      ml: [3, 3, 5]
    }
  }

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    let urlToBeSubmitted: string

    if (url.includes('https://') || url.includes('http://')) {
      urlToBeSubmitted = url
    } else {
      urlToBeSubmitted = 'https://' + url
    }

    setErrors(null)

    await schema
      .validate(urlToBeSubmitted)
      .then(
        async (value): Promise<string> => {
          setIsLoading(true)
          const createdId = await createOneUrl(urlToBeSubmitted)
          window.localStorage.setItem('last-url', urlToBeSubmitted)
          setId(String(createdId))
          setIsLoading(false)
          return value
        }
      )
      .catch((error) => {
        setErrors(error.errors[0])
      })
  }

  return (
    <Box sx={styles.wrapper}>
      <form sx={styles.form} onSubmit={onFormSubmit} autoComplete="off" noValidate>
        <FiPaperclip sx={styles.icon} />
        <Input
          type="url"
          name="url"
          sx={styles.input}
          placeholder="Paste your url here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <SubmitButton isLoading={isLoading} />
      </form>
      <FormErrors errors={errors} />
    </Box>
  )
}
