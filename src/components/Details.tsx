import { useDetailsStore } from '@/stores/useDetailsStore'

export const Details = () => {
  const details = useDetailsStore((state) => state.details)

  return (
    <div className='overflow-x-auto'>
      <table className='table w-full'>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>User Name</td>
            <td>{details.userName}</td>
          </tr>
          <tr>
            <td>Password</td>
            <td>*******</td>
          </tr>
          <tr>
            <td>Email Address</td>
            <td>{details.emailAddress}</td>
          </tr>
          <tr>
            <td>First Name</td>
            <td>{details.firstName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{details.lastName}</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>{details.phoneNumber}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{details.country}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
