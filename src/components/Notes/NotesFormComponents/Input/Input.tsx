import React, { FC } from 'react';

import './Input.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className: string;
  labelName: string;
  type: string;
  id: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  className,
  labelName,
  type,
  id,
  value,
  onChange,
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="input-title">
        {labelName}
      </label>
      <input
        className="input-field"
        type={type}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
