/* @jsx jsx */
import { useNeuBoxShadow } from '@hooks/useBoxShadow'
import { createOneByUrl } from '@utils/firebase'
import { FormEvent, useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { FiArrowRight, FiPaperclip } from 'react-icons/fi'
import { Box, jsx, Spinner, SxStyleProp } from 'theme-ui'
import { Card } from '../Card/Card.component'

const baseFormStyles: SxStyleProp = {
  width: '100%',
  borderRadius: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  bg: 'background',
  boxSizing: 'border-box'
}

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
  const [inputVal, setInputVal] = useState('')
  const [id, setId] = useState('')

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setLoading(true)
    const createdId = await createOneByUrl(inputVal)
    setId(createdId)
    setLoading(false)
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
          >
            <div sx={InputWrapper}>
              <FiPaperclip sx={{ opacity: 0.5, fontSize: [0, 0, 1] }} />
              <input
                sx={Input}
                type="url"
                placeholder="Paste your url here..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
              />
            </div>
            <button sx={{ ...Button, ...buttonShadow }} type="submit">
              {loading ? <Spinner variant="styles.spinner" size={24} /> : <FiArrowRight />}
            </button>
          </form>
        </Box>
      </Col>
      <Card url={id === '' ? undefined : window.location.href + id} />
    </Row>
  )
}
