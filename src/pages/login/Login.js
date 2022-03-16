import {useState} from 'react';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input
          value={email}
          required
          type='email'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          value={password}
          required
          type='password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </label>

      {/* {!isPending && <button className='btn'>Login</button>}
      {isPending && (
        <button className='btn' disabled>
          Loading
        </button>
      )}
      {error && <div className='error'>{error}</div>} */}
    </form>
  );
}
