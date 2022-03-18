import * as yup from 'yup'

const defaultValues = {
  propertyNumber: '',
  email: ''
}

const schema = yup.object().shape({
  propertyNumber: yup.string().required('requiredField'),
  email: yup.string().email('invalidEmail').required('requiredField')
})

export default {
  defaultValues,
  schema
}
