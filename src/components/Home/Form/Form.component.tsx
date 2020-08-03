/* @jsx jsx */
import { yupResolver } from '@hookform/resolvers'
import { useNeuBoxShadow } from '@hooks/useBoxShadow'
import { createOneByUrl } from '@utils/firebase'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiPaperclip } from 'react-icons/fi'
import { Box, Input, jsx, SxStyleProp } from 'theme-ui'
import { HomeContext } from '../Home.context'
import { FormErrors } from './FormErrors/FormErrors.component'
import { schema } from './schema'
import { SubmitButton } from './SubmitButton/SubmitButton.component'

export const Form: React.FC = () => {
  const { setId } = useContext(HomeContext)
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, errors, reset } = useForm<{ url: string }>({
    resolver: yupResolver(schema)
  })

  const styles: SxStyleProp = {
    wrapper: {
      width: ['100%', '100%', '100%', '70%'],
      m: '0 auto',
      pt: [3, 3, 5]
    },
    form: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      placeItems: 'center',
      borderRadius: 100,
      p: '4px',
      border: '3px solid',
      borderColor: typeof errors.url !== 'undefined' ? '#e8505b' : 'transparent',
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
        opacity: 0.5
      }
    },
    icon: {
      fontSize: [0, 0, 1],
      opacity: 0.5,
      ml: [3, 3, 5]
    }
  }

  const onFormSubmit = handleSubmit(async ({ url }) => {
    setIsLoading(true)
    const createdId = await createOneByUrl(url)
    window.localStorage.setItem('last-url', url)
    setId(createdId)
    setIsLoading(false)
    reset()
  })

  return (
    <Box sx={styles.wrapper}>
      <form sx={styles.form} onSubmit={onFormSubmit} autoComplete="off" noValidate>
        <FiPaperclip sx={styles.icon} />
        <Input
          type="url"
          name="url"
          sx={styles.input}
          placeholder="Paste your url here..."
          ref={register}
        />
        <SubmitButton isLoading={isLoading} />
      </form>
      <FormErrors errors={errors} />
    </Box>
  )
}
