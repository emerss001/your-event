"use client";

import Button from "@/app/_components/button";
import { InputRoot, InputIcon, InputField } from "@/app/_components/input";
import { getAllMyEvents } from "@/http/your-event-backend";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const emailSchema = z.object({
    email: z.string().email("Digite um e-mail válido"),
});

type EmailData = z.infer<typeof emailSchema>;

const InputEmailForm = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EmailData>({
        resolver: zodResolver(emailSchema),
    });

    async function onSubmit(data: EmailData) {
        const events = await getAllMyEvents(data.email);

        if (events.length === undefined) {
            alert("Você não possui eventos criados");
            return;
        }

        router.push(`/myevents/${data.email}`);
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full"
        >
            <h2 className="font-heading font-semibold text-gray-200 text-xl">Ver meus eventos</h2>

            <div className="space-y-3">
                <InputRoot>
                    <InputIcon>
                        <Mail />
                    </InputIcon>
                    <InputField type="email" placeholder="Email" {...register("email")} />
                </InputRoot>
                {errors.email && <p className="text-danger text-xs font-semibold">{errors.email.message}</p>}
                <p className="font-sans text-base">Use o e-mail da conta que você criou o evento</p>
            </div>
            <Button>
                Ver eventos <ArrowRight />
            </Button>
        </form>
    );
};

export default InputEmailForm;
