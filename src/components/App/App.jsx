import s from './style.module.css'
import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur' });

  return (
    <div className={s.container}>
      <form>
        <h1>Registration Form</h1>
        <div className='ui divider'></div>
        <div className='ui form'>
          <div className='field'>
            <label>Username</label>
            <input type='text' name='username' placeholder='Username' />
          </div>

          <div className='field'>
            <label>Email</label>
            <input type='email' name='email' placeholder='Email' />
          </div>

          <div className='field'>
            <label>Password</label>
            <input type='password' name='password' placeholder='Password' />
          </div>
          <button className='fluid ui button'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
