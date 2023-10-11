/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
    changefreq: 'monthly',
    generateRobotsTxt: true,    
    exclude: ['/404','/en/404', '/500', '/en/500'],    
    additionalPaths: async (config) => {
      const result = []

      result.push({
        loc: '/',
        priority: 1,
      });

      result.push({
        loc: '/en',
        priority: 1,
      });

      return result
    }
  };