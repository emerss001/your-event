"use client";

import { SubscriptionData, subscriptionSchema } from "@/_util/zod-schema-user";
import Button from "@/app/_components/button";
import { InputRoot, InputIcon, InputField } from "@/app/_components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Mail, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";

interface SubscriptionFormProps {
    title: string;
    titleButton: string;
}

const SubscriptionForm = ({ title, titleButton }: SubscriptionFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SubscriptionData>({
        resolver: zodResolver(subscriptionSchema),
    });

    function onSubscribe(data: SubscriptionData) {
        console.log(data);
    }

    return (
        <form
            onSubmit={handleSubmit(onSubscribe)}
            action=""
            className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
        >
            <h2 className="font-heading font-semibold text-gray-200 text-xl">{title}</h2>

            <div className="space-y-3">
                <div className="space-y-2">
                    <InputRoot>
                        <InputIcon>
                            <User />
                        </InputIcon>
                        <InputField type="text" placeholder="Nome completo" {...register("name")} />
                    </InputRoot>
                    {errors.name && <p className="text-danger text-xs font-semibold">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                    <InputRoot>
                        <InputIcon>
                            <Mail />
                        </InputIcon>
                        <InputField type="email" placeholder="E-mail" {...register("email")} />
                    </InputRoot>
                    {errors.email && <p className="text-danger text-xs font-semibold">{errors.email.message}</p>}
                </div>
            </div>

            <Button>
                {titleButton} <ArrowRight />
            </Button>
        </form>
    );
};

export default SubscriptionForm;
