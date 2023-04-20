import { useStepsStore } from '@/stores/useStepsStore'

import { Details } from './Details'

export const Submit = () => {
  const reset = useStepsStore((state) => state.reset)

  return (
    <form>
      <Details />
      <div className='mt-4 flex justify-between'>
        <button type='button' className='btn' onClick={reset}>
          Reset
        </button>
        <button type='submit' className='btn-primary btn'>
          Submit
        </button>
      </div>
    </form>
  )
}
