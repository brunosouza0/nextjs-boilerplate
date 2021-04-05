import { NextSeo } from 'next-seo'

import * as S from './styles'

const HomeTemplate = () => (
  <>
    <NextSeo
      title="Next.js Boilerplate"
      description="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.canonical.ie/',
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
