import { gql } from '@apollo/client'

export const MUTATION_GENERATE_CONSTANCY = gql`
  mutation ($idNumber: String!, $email: String!) {
    generate_constancy(idNumber: $idNumber, email: $email) {
      success
    }
  }
`
