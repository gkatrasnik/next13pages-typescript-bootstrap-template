/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
    generateRobotsTxt: true,    
    exclude: ['/404','/en/404', '/500', '/en/500'],
    alternateRefs: [
      {
        href: process.env.NEXT_PUBLIC_BASE_URL,
        hreflang: 'sl',
      },
      {
        href: `${process.env.NEXT_PUBLIC_BASE_URL}/en`,
        hreflang: 'en',
      },
    ],
  };