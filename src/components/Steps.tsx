import { useStepsStore } from '@/stores/useStepsStore'

import { PersonalDetails } from './PersonalDetails'
import { Submit } from './Submit'
import { UserDetails } from './UserDetails'

export const Steps = () => {
  const currentStep = useStepsStore((state) => state.currentStep)

  if (currentStep === 3) {
    return <Submit />
  }

  if (currentStep === 2) {
    return <PersonalDetails />
  }

  return <UserDetails />
}
