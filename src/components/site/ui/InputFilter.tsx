import React from 'react';
import { getInputClass, getLabelClass } from '@/styles/theme';

export interface InputFilterProps {
  placeHolder: string;
  onChange: (value: string) => void;
  label: string;
  value?: string;
}

export const InputFilter: React.FC<InputFilterProps> = ({
  placeHolder,
  onChange,
  label,
  value
}) => {
  return (
    <div>
      <label className={getLabelClass()}>
        {label}
      </label>
      <input
        type="text"
        placeholder={placeHolder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className={getInputClass('DEFAULT')}
      />
    </div>
  );
};

export default InputFilter;
