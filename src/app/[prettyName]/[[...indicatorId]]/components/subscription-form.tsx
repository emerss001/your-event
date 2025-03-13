"use client";

import { SubscriptionData, subscriptionSchema } from "@/_util/zod-schema-user";
import Button from "@/app/_components/button";
import { InputRoot, InputIcon, InputField } from "@/app/_components/input";
import { createSubscription, createSubscription1 } from "@/http/your-event-backend";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Mail, ArrowRight, LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface SubscriptionFormProps {
    title: string;
    titleButton: string;
    eventPrettyName: string;
    indicatorId?: number;
}

const SubscriptionForm = ({ title, titleButton, eventPrettyName, indicatorId }: SubscriptionFormProps) => {
    const [isSubmmit, setIsSubmiit] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SubscriptionData>({
        resolver: zodResolver(subscriptionSchema),
    });

    async function onSubscribe({ name, email }: SubscriptionData) {
        setIsSubmiit(true);
        let subscription;

        try {
            if (!indicatorId) {
                const { subscriptionNumber } = await createSubscription(eventPrettyName, { name, email });

                subscription = subscriptionNumber;
            } else {
                const { subscriptionNumber } = await createSubscription1(eventPrettyName, Number(indicatorId), {
                    name,
                    email,
                });
                subscription = subscriptionNumber;
            }

            router.replace(`/invite/${eventPrettyName}/${subscription}`);
        } catch (error) {
            alert("Erro ao realizar inscrição" + error);
        }
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

            <Button disabled={isSubmmit} className="text-gray-400">
                {isSubmmit ? (
                    <>
                        {titleButton} <LoaderCircle className="animate-spin text-blue" />{" "}
                    </>
                ) : (
                    <>
                        {titleButton} <ArrowRight />
                    </>
                )}
            </Button>
        </form>
    );
};

export default SubscriptionForm;
