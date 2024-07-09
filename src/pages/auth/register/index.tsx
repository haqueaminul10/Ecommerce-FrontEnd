import TextField from '@/Components/common/TextField';
const SignUp = () => {
  return (
    <>
      <div>Sign Up</div>

      <div>
        <form>
          <TextField
            htmlFor='fullName'
            labelClassName=''
            inputClassName=''
            label='Full Name :'
            type='text'
            id='fullName'
            placeholder='Enter your fullname'
          />

          <TextField
            htmlFor='email'
            label='Email Adress :'
            labelClassName=''
            inputClassName=''
            type='email'
            id='email'
            placeholder='example@gmail.com'
          />

          <TextField
            htmlFor='contactNumber'
            label='Contact Number :'
            labelClassName=''
            inputClassName=''
            type='number'
            id='contactNumber'
            placeholder='Enter your contact number'
          />

          <TextField
            htmlFor='gender'
            label='Gender :'
            labelClassName=''
            inputClassName=''
            type='select'
            id='gender'
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
