import { ReactNode } from "react";

export const Button = ({
  children,
  handleSubmit,
}: {
  children: ReactNode;
  handleSubmit?: () => void;
}) => {
  return (
    <button
      onClick={handleSubmit}
      className="flex sm:flex-1 w-full justify-center bg-orange hover:bg-orange/60 py-4 items-center font-bold cursor-pointer rounded-xl"
    >
      {children}
    </button>
  );
};
