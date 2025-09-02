import React from 'react';

interface ComboFilterProps {
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  value: string;
  label: string;
  id: string;
}

export const ComboFilter: React.FC<ComboFilterProps> = ({ 
  id,
  options, 
  onChange,
  label,
  ...props
}) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={id}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        onChange={e => onChange(e.target.value)}
        {...props}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboFilter;
