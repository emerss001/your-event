import { z } from "zod";

export const subscriptionSchema = z.object({
    name: z.string().min(2, "Digite seu nome completo"),
    email: z.string().email("Digite um e-mail válido"),
});

export type SubscriptionData = z.infer<typeof subscriptionSchema>;
