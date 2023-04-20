import { usePersonalDetailsForm } from '@/forms/usePersonalDetailsForm'
import { useDetailsStore } from '@/stores/useDetailsStore'
import { useStepsStore } from '@/stores/useStepsStore'

import { TextInput } from './TextInput'

export const PersonalDetails = () => {
  const { control, handleSubmit } = usePersonalDetailsForm()
  const syncDetails = useDetailsStore((state) => state.sync)
  const next = useStepsStore((state) => state.next)

  return (
    <form
      onSubmit={handleSubmit((values) => {
        syncDetails(values)
        next()
      })}
    >
      <div>
        <TextInput
          control={control}
          name='firstName'
          label='What is your first name?'
        />
        <TextInput
          control={control}
          name='lastName'
          label='What is your last name?'
        />
        <TextInput
          control={control}
          name='phoneNumber'
          label='What is your phone number?'
        />
        <TextInput
          control={control}
          name='country'
          label='What is your country of residence?'
        />
      </div>
      <div className='mt-4 flex justify-end'>
        <button type='submit' className='btn-primary btn'>
          Next
        </button>
      </div>
    </form>
  )
}
