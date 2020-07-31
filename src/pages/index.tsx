/* @jsx jsx */
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { Flex, jsx, Spinner } from 'theme-ui'

const DynamicHome = dynamic(async () => await import('../components/Home/Home'), {
  // eslint-disable-next-line react/display-name
  loading: () => (
    <Flex sx={{ justifyContent: 'center' }}>
      <Spinner variant="spinner" />
    </Flex>
  )
})

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
          cardType: 'summary_large_image'
        }}
      />
      <div sx={{ pt: 6 }}>
        <DynamicHome />
      </div>
    </>
  )
}

export default Index
