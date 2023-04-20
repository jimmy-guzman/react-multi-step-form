import { useForm } from 'react-hook-form'

export const usePersonalDetailsForm = (
  defaultValues = {
    country: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
  }
) => {
  return useForm<{
    country: string
    firstName: string
    lastName: string
    phoneNumber: string
  }>({ defaultValues })
}
