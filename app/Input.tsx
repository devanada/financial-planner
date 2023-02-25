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
      {label && (
        <label htmlFor={id} className="text-dark-2 dark:text-light">
          {label}
        </label>
      )}
      <input
        className="mb-1 w-full rounded-xl border border-dark-3 bg-light p-2 text-lg text-dark-2 dark:bg-dark dark:text-light"
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
      {label && (
        <label htmlFor={id} className="text-dark-2 dark:text-light">
          {label}
        </label>
      )}
      <textarea
        className="mb-1 w-full rounded-xl border border-dark-3 bg-light p-2 text-lg text-dark-2 dark:bg-dark dark:text-light"
        id={id}
        {...(register ? register(name) : {})}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
