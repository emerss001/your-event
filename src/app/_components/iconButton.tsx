import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ButtonProps extends ComponentProps<"button"> {}

const IconButton = ({ className, ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className={twMerge(
                "p-1.5 bg-gray-500 text-blue font-semibold rounded-md cursor-pointer transition-colors duration-200 hover:bg-blue hover:text-gray-900",
                className
            )}
        />
    );
};

export default IconButton;
