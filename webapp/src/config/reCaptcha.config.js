export const config = {
  key: process.env.REACT_APP_PUBLIC_RE_CAPTCHA_KEY || '',
  keyFilename: process.env.REACT_APP_GOOGLE_APPLICATION_CREDENTIALS || '',
  projectId: process.env.REACT_APP_RE_CAPTCHA_PROJECT_ID || ''
}
