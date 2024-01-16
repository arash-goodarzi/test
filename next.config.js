/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env:{
    API_URL:"https://resume-api-rho.vercel.app/v1/generalinfo"
  },

  output: 'export',
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  distDir: 'dist',
}
 
module.exports = nextConfig