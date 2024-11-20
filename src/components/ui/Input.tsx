import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/lib";

type Props = {
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  errorMessage?: string;
};

const Input = forwardRef<
  HTMLInputElement,
  Props & HTMLAttributes<HTMLInputElement>
>(function (
  {
    disabled,
    placeholder,
    className,
    errorMessage,
    onChange,
    onBlur,
    ...props
  },
  ref
) {
  return (
    <div className={cn("relative", className)}>
      <input
        {...props}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        className={cn(
          "border-[1px] border-white/40 bg-transparent placeholder:text-brown/50 rounded-md w-full px-5 py-3 disabled:text-slate-500 text-white",
          errorMessage && "border-red-400"
        )}
        placeholder={placeholder}
      />

      {errorMessage && (
        <div className="flex gap-2 items-center mt-2">
          <i className="text-red-400 bx bxs-error-circle leading-[150%]"></i>
          <p className="text-red-400 leading-[150%]">{errorMessage}</p>
        </div>
      )}
    </div>
  );
});

export default Input;
