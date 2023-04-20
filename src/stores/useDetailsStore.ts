import { create } from 'zustand'

interface Details {
  country: string
  emailAddress: string
  firstName: string
  lastName: string
  password: string
  phoneNumber: string
  userName: string
}

interface DetailsStore {
  details: Details
  sync: (details: Partial<Details>) => void
}

const defaultDetails = {
  country: '',
  emailAddress: '',
  firstName: '',
  lastName: '',
  password: '',
  phoneNumber: '',
  userName: '',
}

export const useDetailsStore = create<DetailsStore>((set) => ({
  details: defaultDetails,
  sync: (details) =>
    set((state) => ({ details: { ...state.details, ...details } })),
}))
