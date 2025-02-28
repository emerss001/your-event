import { ComponentProps } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ButtonProps extends ComponentProps<"button"> {}

const IconButton = (props: ButtonProps) => {
    return (
        <button
            {...props}
            className="p-1.5 bg-gray-500 text-blue font-semibold rounded-md cursor-pointer transition-colors duration-200 hover:bg-blue hover:text-gray-900"
        />
    );
};

export default IconButton;
