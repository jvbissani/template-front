import {IUser} from '../../../../../template-api/src/models/userModel'
import TextInput from '../atoms/TextInput'

export interface UserFormProps {
  user: Partial<IUser>
  onChange: (user: Partial<IUser>) => void
  Save: () => void
  Cancel: () => void
  Delete: () => void
}

export default function UserForm(props: UserFormProps){
  return (
    <div className='flex flex-col gap-5'>
      <TextInput 
          label="Name" 
          type="text" 
          value={props.user.nome} 
          onChange={
            (e) => props.onChange?.({ ...props.user, nome: e.target.value }) 
          }
      />
      <TextInput 
          label="Email" 
          type="email" 
          value={props.user.email} 
          onChange={
            (e) => props.onChange?.({ ...props.user, email: e.target.value }) 
          }
      />
      <TextInput 
        label="Password"
        type="password"
        value={props.user.senha}
        onChange={
          (e) => props.onChange?.({ ...props.user, senha: e.target.value }) 
        }
      />
    </div>
  )
}