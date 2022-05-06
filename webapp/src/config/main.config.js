export const appVersion = process.env.REACT_APP_TAG || 'v1.0'
export const name = process.env.REACT_APP_NAME
export const title = process.env.REACT_APP_TITLE
export const organizationName =
  process.env.REACT_APP_ORGANIZATION_NAME || 'Organización'
export const logo = process.env.REACT_APP_LOGO
export const urlOrganization = process.env.REACT_APP_URL_ORGANIZATION
export const footerLinks = JSON.parse(
  process.env.REACT_APP_FOOTER_LINKS || '[]'
)
