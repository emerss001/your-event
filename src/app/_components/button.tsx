import { ComponentProps } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ButtonProps extends ComponentProps<"button"> {}

const Button = (props: ButtonProps) => {
    return (
        <button
            {...props}
            className="flex items-center justify-between px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-200 hover:bg-blue hover:text-gray-900"
        />
    );
};

export default Button;
