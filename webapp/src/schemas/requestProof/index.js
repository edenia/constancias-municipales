import * as yup from 'yup'

const defaultValues = {
  idType: '',
  idNumber: '',
  email: '',
  retypeEmailAddress: ''
}

const schema = yup.object().shape({
  idType: yup.string().required('requiredField'),
  idNumber: yup.string().required('requiredField'),
  email: yup.string().email('invalidEmail').required('requiredField'),
  retypeEmailAddress: yup
    .string()
    .email('invalidEmail')
    .required('requiredField')
})

export default {
  defaultValues,
  schema
}
