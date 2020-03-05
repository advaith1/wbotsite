module.exports = {
  siteMetadata: {
    title: 'WidgetBot'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    //'gatsby-plugin-stripe-elements',
    'gatsby-plugin-emotion'
  ],
  proxy: {
    prefix: '/api',
    url: 'http://localhost:7000'
  }
}
