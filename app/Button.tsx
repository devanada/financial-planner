import { FC, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

import Spinner from "./Loading";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  id: string;
  className?: string;
}

const Button: FC<Props> = ({ label, id, className, disabled, ...props }) => {
  const labels = disabled ? "Processing..." : label;

  return (
    <button
      className={clsx(
        "mb-3 flex w-full items-center justify-center rounded-xl border border-dark-3 bg-dark p-2 text-lg font-bold capitalize disabled:cursor-not-allowed",
        className && className
      )}
      id={id}
      {...props}
    >
      {disabled && <Spinner />}
      {labels}
    </button>
  );
};

export default Button;
