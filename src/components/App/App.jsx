import s from './style.module.css'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur' });
  const [userInfo, setUserInfo] = useState();
  const submit = data => {
    setUserInfo(data);
    console.log(data);
  }
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  const userNameRegex = /^[A-z]{2,}[A-z0-9]{0,}$/;

  const userNameRegister = register('username', {
    required: 'Required field',
    pattern: {
      value: userNameRegex,
      message: 'Your username should contain minimum two characters, didgits are available'
    }
  })
  const emailRegister = register('email', {
    required: 'Required field',
    pattern: {
      value: emailRegex,
      message: 'Not valid email format'
    }
  });

  const passwordRegister = register('password', {
    required: 'Required field',
    pattern: {
      value: passwordRegex,
      message: 'Your password should contain minimum eight characters, at least one letter, one number and one special character'
    }
  });


  return (
    <div className={s.container}>
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={handleSubmit(submit)}>
        <h1>Registration Form</h1>
        <div className='ui divider'></div>
        <div className='ui form'>
          <div className='field'>
            <label>Username</label>
            <input
              {...userNameRegister}
              type='text'
              name='username'
              placeholder='Username' />
          </div>

          <div className='field'>
            <label>Email</label>
            <input
              {...emailRegister}
              type='email'
              name='email'
              placeholder='Email' />
          </div>

          <div className='field'>
            <label>Password</label>
            <input
              {...passwordRegister}
              type='password'
              name='password'
              placeholder='Password' />
          </div>
          <button className='fluid ui button'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
