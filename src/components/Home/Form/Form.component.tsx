/* @jsx jsx */
import { yupResolver } from '@hookform/resolvers'
import { useNeuBoxShadow } from '@hooks/useBoxShadow'
import { createOneByUrl } from '@utils/firebase'
import Link from 'next/link'
import { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useForm } from 'react-hook-form'
import { FiAlertTriangle, FiArrowRight, FiPaperclip } from 'react-icons/fi'
import { Box, Flex, jsx, Spinner, SxStyleProp } from 'theme-ui'
import * as yup from 'yup'
import { Card } from '../Card/Card.component'

const schema = yup.object().shape({
  url: yup
    .string()
    .required()
    .url()
    .test(
      'is-short',
      'Url has already been shortened',
      (value: string) => !value.includes('://lop.si')
    )
})

const InputWrapper: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
  flex: 1
}

const Input: SxStyleProp = {
  flex: 1,
  bg: 'background',
  border: 'none',
  fontSize: [0, 0, 1],
  color: 'text',
  pl: [2, 2, 3],
  mr: [2, 2, 3],
  outline: 'none',
  '::placeholder': {
    color: 'text',
    opacity: 0.5
  }
}

const Button: SxStyleProp = {
  height: [5, 5, 6],
  width: [5, 5, 6],
  outline: 'none',
  border: 'none',
  fontSize: 1,
  bg: 'primary',
  color: 'background',
  borderRadius: 100,
  cursor: 'pointer'
}

export const Form: React.FC = () => {
  const formShadow = useNeuBoxShadow(10, 20)
  const buttonShadow = useNeuBoxShadow(5, 10)
  const [loading, setLoading] = useState(false)
  const [id, setId] = useState('')

  const { register, handleSubmit, errors } = useForm<{ url: string }>({
    resolver: yupResolver(schema)
  })

  const onFormSubmit = handleSubmit(async ({ url }) => {
    setLoading(true)
    const createdId = await createOneByUrl(url)
    setId(createdId)
    setLoading(false)
  })

  const baseFormStyles: SxStyleProp = {
    width: '100%',
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    bg: 'background',
    boxSizing: 'border-box',
    border: '3px solid',
    borderColor: typeof errors.url !== 'undefined' ? '#e8505b' : 'transparent',
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
              justifyContent: 'space-between',
              pl: [4, 4, 6],
              pr: 1,
              py: 1
            }}
            noValidate={true}
          >
            <div sx={InputWrapper}>
              <FiPaperclip sx={{ opacity: 0.5, fontSize: [0, 0, 1] }} />
              <input
                sx={Input}
                type="url"
                name="url"
                placeholder="Paste your url here..."
                ref={register}
              />
            </div>
            <button sx={{ ...Button, ...buttonShadow }} type="submit">
              {loading ? <Spinner variant="styles.spinner" size={24} /> : <FiArrowRight />}
            </button>
          </form>
        </Box>
        <Flex sx={{ justifyContent: 'center', pt: 4, opacity: 0.7 }}>
          <p sx={{ fontSize: ['8px', '8px', 0] }}>
            By using our service you accept our{' '}
            <Link href="/terms-and-conditions">
              <a sx={{ color: 'text', textDecoration: 'underline', cursor: 'pointer' }}>
                Terms & Conditions
              </a>
            </Link>{' '}
            and{' '}
            <Link href="/privacy-policy">
              <a sx={{ color: 'text', textDecoration: 'underline', cursor: 'pointer' }}>
                Privacy Policy
              </a>
            </Link>{' '}
          </p>
        </Flex>
        {typeof errors.url !== 'undefined' && (
          <p
            sx={{
              color: '#e8505b',
              pl: [4, 4, 6],
              pt: 3,
              display: 'flex',
              alignItems: 'center',
              fontSize: [0, 0, 1]
            }}
          >
            <FiAlertTriangle sx={{ mr: 1 }} /> {errors.url?.message}
          </p>
        )}
      </Col>
      <Card url={id === '' ? undefined : window.location.href + id} />
    </Row>
  )
}
