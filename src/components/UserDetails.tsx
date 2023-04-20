import { useUserDetailsForm } from '@/forms/useUserDetailsForm'
import { useDetailsStore } from '@/stores/useDetailsStore'
import { useStepsStore } from '@/stores/useStepsStore'

import { TextInput } from './TextInput'

export const UserDetails = () => {
  const syncDetails = useDetailsStore((state) => state.sync)
  const { control, handleSubmit } = useUserDetailsForm()
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
          name='userName'
          label='Choose a user name'
        />
        <TextInput
          control={control}
          name='password'
          label='Choose a password'
        />
        <TextInput
          control={control}
          name='emailAddress'
          label='What is your email address?'
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
