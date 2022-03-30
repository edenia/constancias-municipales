module.exports = {
  key: process.env.HAPI_PUBLIC_RE_CAPTCHA_KEY || '',
  projectId: process.env.HAPI_RE_CAPTCHA_PROJECT_ID || '',
  keyFilename: process.env.HAPI_GOOGLE_APPLICATION_CREDENTIALS || ''
}
