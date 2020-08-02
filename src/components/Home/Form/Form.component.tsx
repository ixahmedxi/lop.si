/* @jsx jsx */
import { yupResolver } from '@hookform/resolvers'
import { useNeuBoxShadow } from '@hooks/useBoxShadow'
import { createOneByUrl } from '@utils/firebase'
import { useContext, useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useForm } from 'react-hook-form'
import { FiPaperclip } from 'react-icons/fi'
import { Box, jsx, SxStyleProp } from 'theme-ui'
import { HomeContext } from '../Home.context'
import { FormErrors } from './FormErrors/FormErrors.component'
import { schema } from './schema'
import { SubmitButton } from './SubmitButton/SubmitButton.component'

const InputWrapper: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flex: 1,
  width: '100%',
  height: '100%'
}

const Input: SxStyleProp = {
  bg: 'transparent',
  border: 'none',
  fontSize: [0, 0, 1],
  color: 'text',
  px: [2, 2, 3],
  height: '100%',
  width: '100%',
  display: 'block',
  outline: 'none',
  position: 'relative',
  '::placeholder': {
    color: 'text',
    opacity: 0.5
  }
}

export const Form: React.FC = () => {
  const { setId } = useContext(HomeContext)
  const [isLoading, setIsLoading] = useState(false)
  const [formFocus, setFormFocus] = useState(false)
  const formShadow = useNeuBoxShadow(10, 20)

  const { register, handleSubmit, errors, getValues, reset } = useForm<{ url: string }>({
    resolver: yupResolver(schema)
  })

  const onFormSubmit = handleSubmit(async ({ url }) => {
    setIsLoading(true)
    const createdId = await createOneByUrl(url)
    window.localStorage.setItem('last-url', url)
    setId(createdId)
    setIsLoading(false)
    reset()
  })

  const setBorderColor = (): string => {
    if (typeof errors.url !== 'undefined') {
      return '#e8505b'
    }
    if (formFocus) {
      return 'primary'
    }
    return 'transparent'
  }

  const baseFormStyles: SxStyleProp = {
    width: '100%',
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    bg: 'background',
    boxSizing: 'border-box',
    border: '2px solid',
    borderColor: setBorderColor(),
    transition: 'border-color 0.2s ease-out'
  }

  return (
    <Row sx={{ pt: [3, 3, 5] }}>
      <Col lg={{ span: 8, offset: 2 }}>
        <Box sx={{ ...baseFormStyles, ...formShadow }}>
          <form
            onSubmit={onFormSubmit}
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              pl: [4, 4, 6],
              pr: '3px',
              height: [6, 6, 7]
            }}
            noValidate={true}
            autoComplete="off"
          >
            <div sx={InputWrapper}>
              <FiPaperclip sx={{ opacity: 0.5, fontSize: [0, 0, 1] }} />
              <div sx={{ position: 'relative', width: '100%', height: '100%' }}>
                <input
                  sx={Input}
                  type="url"
                  id="url"
                  name="url"
                  ref={register}
                  placeholder="Paste your url here..."
                  onFocus={() => setFormFocus(true)}
                  onBlur={() => {
                    if (getValues('url') !== '') {
                      setFormFocus(true)
                    } else {
                      setFormFocus(false)
                    }
                  }}
                />
              </div>
            </div>
            <SubmitButton isLoading={isLoading} />
          </form>
        </Box>
        <FormErrors errors={errors} />
      </Col>
    </Row>
  )
}
