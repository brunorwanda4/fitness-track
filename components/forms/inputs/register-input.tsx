"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  label: string;
  id: string;
  type?: string;
  outFocus?: boolean;
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RegisterInput: React.FC<Props> = ({
  label,
  id,
  placeholder,
  type = "text",
  outFocus,
  onChange,
  className,
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <Label className=" text-gray-500  text-base" htmlFor={id}>
        {label}
      </Label>
      <Input
        type={type}
        placeholder={placeholder}
        id={id}
        className=" px-2 ring-red-500 outline-none w-full  bg-transparent border-b-2 border-rose-600  text-white"
        onChange={onChange}
        //  onFocus={true}
      />
    </div>
  );
};

export default RegisterInput;
