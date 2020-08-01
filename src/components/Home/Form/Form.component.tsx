/* @jsx jsx */
import { yupResolver } from '@hookform/resolvers'
import { useNeuBoxShadow } from '@hooks/useBoxShadow'
import { createOneByUrl } from '@utils/firebase'
import { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useForm } from 'react-hook-form'
import { FiAlertTriangle, FiArrowRight, FiPaperclip } from 'react-icons/fi'
import { Box, jsx, Spinner, SxStyleProp } from 'theme-ui'
import * as yup from 'yup'
import { Card } from '../Card/Card.component'

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
      .test('is-last-url', 'Url has already been shortened', (value: string) => {
        const lastUrl = window.localStorage.getItem('last-url')

        if (typeof lastUrl === 'undefined') {
          return true
        }

        if (lastUrl === value) {
          return false
        }

        if (value === window.location.hostname + id) {
          return false
        }

        return true
      })
      .test('is-shortener-url', 'Url is already a shortener url', (value: string) => {
        const shorteners = [
          'bit.ly',
          'cutt.ly',
          'shorturl.at',
          'rebrandly',
          'tinyurl',
          'tiny.cc',
          'raboninco',
          'is.gd'
        ]

        let pass = true

        shorteners.forEach((item) => {
          if (value.includes(item)) {
            pass = false
          }
        })

        return pass
      })
  })

  const { register, handleSubmit, errors, getValues } = useForm<{ url: string }>({
    resolver: yupResolver(schema)
  })

  const onFormSubmit = handleSubmit(async ({ url }) => {
    setLoading(true)
    const createdId = await createOneByUrl(url)
    window.localStorage.setItem('last-url', url)
    setId(createdId)
    setLoading(false)
  })

  const [formFocus, setFormFocus] = useState(false)

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
    border: '3px solid',
    borderColor: setBorderColor(),
    transition: 'border-color 0.2s ease-out'
  }

  const setLabelFocus = (): SxStyleProp => {
    if (formFocus) {
      return {
        top: '-12px',
        transform: 'scale(0.80)',
        color: 'primary',
        opacity: 1,
        bg: 'background'
      }
    }
    return {}
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
                  onFocus={() => setFormFocus(true)}
                  onBlur={() => {
                    if (getValues('url') !== '') {
                      setFormFocus(true)
                    } else {
                      setFormFocus(false)
                    }
                  }}
                />
                <label
                  htmlFor="url"
                  sx={{
                    position: 'absolute',
                    left: [1, 1, 2],
                    opacity: 0.7,
                    top: ['20%', '20%', '26%'],
                    fontSize: 1,
                    color: 'text',
                    transition: '0.2s ease-out',
                    cursor: 'text',
                    bg: 'transparent',
                    py: '3px',
                    borderRadius: '3px',
                    px: 1,
                    transformOrigin: '0px 50%',
                    ...setLabelFocus()
                  }}
                >
                  Paste your url here...
                </label>
              </div>
            </div>
            <button
              sx={{ ...Button, ...buttonShadow }}
              type="submit"
              aria-label="create a short url"
            >
              {loading ? <Spinner variant="styles.spinner" size={24} /> : <FiArrowRight />}
            </button>
          </form>
        </Box>
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
