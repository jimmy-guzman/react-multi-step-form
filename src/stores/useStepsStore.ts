import { create } from 'zustand'

interface StepsState {
  currentStep: number
  goTo: (step: number) => void
  next: () => void
  reset: () => void
}

export const useStepsStore = create<StepsState>((set) => ({
  currentStep: 1,
  goTo: (step) => set({ currentStep: step }),
  next: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  reset: () => set({ currentStep: 1 }),
}))
