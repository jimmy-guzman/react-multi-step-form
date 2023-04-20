import { useStepsStore } from '@/stores/useStepsStore'

export const Stepper = () => {
  const currentStep = useStepsStore((state) => state.currentStep)

  return (
    <ul className='steps mb-8'>
      <li className={`${currentStep >= 1 ? 'step-primary step' : 'step'}`}>
        User Details
      </li>
      <li className={`${currentStep >= 2 ? 'step-primary step' : 'step'}`}>
        Personal Details
      </li>
      <li className={`${currentStep >= 3 ? 'step-primary step' : 'step'}`}>
        Submit
      </li>
    </ul>
  )
}
