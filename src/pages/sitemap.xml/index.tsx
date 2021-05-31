import { GetServerSideProps } from 'next'
import { getServerSideSitemap } from 'next-sitemap'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const fields = []

  fields.push({
    loc: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    lastmod: new Date().toISOString()
  })

  return getServerSideSitemap(ctx, fields)
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const siteMap = () => {}

export default siteMap
