import TextField from '@/Components/common/TextField';
import { useState } from 'react';
import { useRouter } from 'next/router';
const SignIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('formData', formData);
    router.push('/');
  };
  return (
    <>
      <div>Log In</div>
      <form onSubmit={handleSubmit}>
        <TextField
          htmlFor='email'
          label='Email Adress:'
          type='email'
          labelClassName=''
          inputClassName=''
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='example@gmail.com'
        />

        <TextField
          htmlFor='password'
          type='password'
          label='Password:'
          labelClassName=''
          inputClassName=''
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
        <div>
          <button>Log In</button>
        </div>
      </form>
    </>
  );
};

export default SignIn;
