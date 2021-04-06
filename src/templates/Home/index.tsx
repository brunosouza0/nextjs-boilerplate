import { NextSeo } from 'next-seo'

import * as S from './styles'

const HomeTemplate = () => (
  <>
    <NextSeo
      title="Next.js Boilerplate"
      description="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
      canonical={`${process.env.NEXT_PUBLIC_SITE_URL}`}
      openGraph={{
        url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
        title: 'Next.js Boilerplate',
        description: 'A simple project starter to work with TypeScript, React, NextJS and Styled Components',
        images: [
          {
            url: 'https://www.example.ie/og-image-01.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt'
          }
        ]
      }}
    />
    <S.Title>Home</S.Title>
  </>
)

export default HomeTemplate
