import {
  type FieldValues,
  type FieldPath,
  useController,
  type UseControllerProps,
} from 'react-hook-form'

interface TextInputProps {
  label: string
  placeholder?: string
}

export const TextInput = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({
  label,
  placeholder,
  ...props
}: TextInputProps & UseControllerProps<TFieldValues, TName>) => {
  const { field } = useController(props)

  return (
    <div className='form-control w-full'>
      <label htmlFor={field.name} className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <input
        {...field}
        type='text'
        placeholder={placeholder}
        className='input-bordered input w-full'
      />
    </div>
  )
}
