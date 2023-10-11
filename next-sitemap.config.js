/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
    generateRobotsTxt: true,    
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