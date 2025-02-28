import { ComponentProps } from "react";

interface InputRootProps extends ComponentProps<"div"> {
    error?: boolean;
}

const InputRoot = ({ error = false, ...props }: InputRootProps) => {
    return (
        <div
            data-error={error}
            className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
            {...props}
        />
    );
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InputIconProps extends ComponentProps<"span"> {}

const InputIcon = (props: InputIconProps) => {
    return (
        <span
            {...props}
            className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
        />
    );
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface InputFieldProps extends ComponentProps<"input"> {}

const InputField = (props: InputFieldProps) => {
    return <input className="flex-1 outline-0 placeholder:text-gray-400" {...props} />;
};

export { InputRoot, InputIcon, InputField };
