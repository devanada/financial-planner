import { InputHTMLAttributes, FC } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register?: any;
  error?: string;
  name?: string;
  label?: string;
}

export const Input: FC<Props> = ({
  id,
  name,
  error,
  label,
  register,
  ...props
}) => {
  return (
    <div className="relative mb-3">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className="mb-1 w-full rounded-xl border border-dark-3 bg-dark p-2 text-lg disabled:cursor-not-allowed"
        {...(register ? register(name) : {})}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export const TextArea: FC<Props> = ({
  id,
  name,
  error,
  label,
  register,
  ...props
}) => {
  return (
    <div className="relative mb-3">
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        className="mb-1 w-full rounded-xl border border-dark-3 bg-dark p-2 text-lg"
        id={id}
        {...(register ? register(name) : {})}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
