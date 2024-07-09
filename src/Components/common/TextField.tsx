import React, { ChangeEventHandler } from 'react';
interface ITextFiels {
  label?: string;
  htmlFor?: string;
  type?: 'text' | 'email' | 'number' | 'password' | 'select';
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  labelClassName?: string;
  inputClassName?: string;
  option?: { value: string; label: string }[];
}

const TextField = ({
  label,
  htmlFor,
  type,
  id,
  name,
  value,
  placeholder,
  onChange,
  labelClassName,
  inputClassName,
  option,
}: ITextFiels) => {
  return (
    <>
      {label && (
        <label htmlFor={htmlFor} className={labelClassName}>
          {label}
        </label>
      )}

      {type === 'select' ? (
        <select
          id={id}
          name={name}
          className={inputClassName}
          onChange={onChange}
        >
          {option?.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          className={inputClassName}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    </>
  );
};

export default TextField;
