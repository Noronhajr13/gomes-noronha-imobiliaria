import React from 'react';

interface InputFilterProps {
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
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeHolder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full h-[40px] px-3 py-2 border border-gray-300 rounded-md h-22px focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
};

export default InputFilter;
