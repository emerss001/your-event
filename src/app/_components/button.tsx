import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ButtonProps extends ComponentProps<"button"> {}

const Button = ({ className, ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className={twMerge(
                "flex items-center justify-between px-5 h-12 bg-gray-500 font-semibold rounded-xl w-full transition-colors duration-200",
                props.disabled ? className : "cursor-pointer hover:bg-blue hover:text-gray-900 text-blue"
            )}
        />
    );
};

export default Button;
