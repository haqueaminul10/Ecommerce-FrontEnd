import TextField from '@/Components/common/TextField';
import { useState } from 'react';
import { useRouter } from 'next/router';
const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    gender: '',
    password: '',
    userType: 'user',
  });
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
    router.push('/auth/login');
  };
  return (
    <>
      <div>Sign Up</div>

      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            htmlFor='fullName'
            labelClassName=''
            inputClassName=''
            label='Full Name :'
            type='text'
            id='fullName'
            name='fullName'
            value={formData.fullName}
            onChange={handleChange}
            placeholder='Enter your fullname'
          />

          <TextField
            htmlFor='email'
            label='Email Adress :'
            labelClassName=''
            inputClassName=''
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='example@gmail.com'
          />

          <TextField
            htmlFor='contactNumber'
            label='Contact Number :'
            labelClassName=''
            inputClassName=''
            type='number'
            id='contactNumber'
            name='contactNumber'
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder='Enter your contact number'
          />

          <TextField
            htmlFor='gender'
            label='Gender :'
            labelClassName=''
            inputClassName=''
            type='select'
            id='gender'
            name='gender'
            value={formData.gender}
            onChange={handleChange}
            option={[
              { value: '', label: 'Select your gernder' },
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'other', label: 'Other' },
            ]}
          />

          <TextField
            htmlFor='password'
            label='Password :'
            labelClassName=''
            inputClassName=''
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />

          <div>
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
