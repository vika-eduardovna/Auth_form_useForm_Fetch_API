import s from './style.module.css'
import { useForm } from 'react-hook-form'
import { fetching_data, createCookie } from '../../requests/dummy_req'


function AuthForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur' });

  const auth_callback = ({ token }) => {
    createCookie('token_value', token);
  };
  const err_callback = ({ message }) => {
    alert(message);
  }

  const submit = data => {
    fetching_data(data, auth_callback, err_callback);
  };

  const usernameRegister = register("username", {
    required: true,
    maxLength: 20,
    pattern: /^[A-Za-z]+$/i
  });

  const passwordRegister = register("password", {
    required: true,
    maxLength: 20,
  });

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit(submit)}>
        <h1>Registration Form</h1>
        <div className='ui divider'></div>
        <div className='ui form'>
          <div className='field'>
            <label>Username</label>
            <input
              {...usernameRegister}
              type='text'
              name='username'
              placeholder='Username' />
          </div>
          {errors?.username?.type === "required" && <p>This field is required</p>}
          {errors?.username?.type === "maxLength" && (<p>First name cannot exceed 20 characters</p>)}
          {errors?.username?.type === "pattern" && (<p>Alphabetical characters only</p>)}

          <div className='field'>
            <label>Password</label>
            <input
              {...passwordRegister}
              type='password'
              name='password'
              placeholder='Password' />
          </div>
          {errors?.password?.type === "required" && <p>This field is required</p>}
          {errors?.password?.type === "maxLength" && (<p>First name cannot exceed 20 characters</p>)}
          <button className='fluid ui button'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;