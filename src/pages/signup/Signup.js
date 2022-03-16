import './Signup.css';
import {useState} from 'react';
import {useSignup} from '../../hooks/useSignup';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const {signup, isPending, error} = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail);
  };

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setThumbnailError('Please select a file');
      return;
    }
    if (!selected.type.includes('image')) {
      setThumbnailError('Selected file must be an image');
      return;
    }
    if (selected.size > 100000) {
      setThumbnailError('Image file size must be less then 100kb');
      return;
    }
    setThumbnailError(null);
    setThumbnail(selected);
    console.log('Thumbnail updated');
  };

  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Sign up</h2>
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
      <label>
        <span>Display name:</span>
        <input
          value={displayName}
          required
          type='text'
          onChange={(e) => {
            setDisplayName(e.target.value);
          }}
        />
      </label>
      <label>
        <span>Profile thumbnail:</span>
        <input
          // value={thumbnail}
          required
          type='file'
          onChange={handleFileChange}
        />
        {thumbnailError && <div className='error'>{thumbnailError}</div>}
      </label>
      {!isPending && <button className='btn'>Sign up</button>}
      {isPending && (
        <button className='btn' disabled>
          Loading
        </button>
      )}
      {error && <div className='error'>{error}</div>}
    </form>
  );
}
