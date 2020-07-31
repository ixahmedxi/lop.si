/* @jsx jsx */
import { Form } from '@components/Home/Form/Form.component'
import { Introduction } from '@components/Home/Introduction/Introduction.component'
import { NextSeo } from 'next-seo'
import { jsx } from 'theme-ui'

const Index: React.FC = () => {
  return (
    <>
      <NextSeo
        title="lop.si - A simple neumorphic url shortener"
        description="lop.si is a url shortener to transform long and unmanageable urls into short and pretty alternatives"
        openGraph={{
          url: 'https://lop.si',
          title: 'lop.si - A simple neumorphic url shortener',
          description:
            'lop.si is a url shortener to transform long and unmanageable urls into short and pretty alternatives',
          site_name: 'lop.si',
          images: [
            {
              url: '/assets/image-1.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image'
            }
          ]
        }}
        twitter={{
          cardType: 'summary'
        }}
      />
      <div sx={{ pt: 6 }}>
        <Introduction />
        <Form />
      </div>
    </>
  )
}

export default Index
