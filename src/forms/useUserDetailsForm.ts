import { useForm } from 'react-hook-form'

export const useUserDetailsForm = (
  defaultValues = { userName: '', password: '', emailAddress: '' }
) => {
  return useForm<{
    emailAddress: string
    password: string
    userName: string
  }>({ defaultValues })
}
