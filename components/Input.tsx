import { InputHTMLAttributes } from "react";

type InputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: InputProps) => {
  return (
    <div className="flex flex-col flex-1 gap-2">
      <label className="text-[12px] leading-4 font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full py-1.5 px-3 border border-red-300 rounded-lg text-sm outline-none   focus:border-orange-400 "
      />
    </div>
  );
};
