import { FC, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  id: string;
}

const Button: FC<Props> = ({ label, id, ...props }) => {
  return (
    <button
      className="mb-3 w-full rounded-xl border border-dark-3 bg-light p-2 text-lg font-bold capitalize text-dark-2 dark:bg-dark dark:text-light"
      id={id}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
