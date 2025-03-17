import Image from "next/image";
import logo from "../_assets/Logo.svg";
import SubscriptionForm from "../[prettyName]/[[...indicatorId]]/components/subscription-form";
import InputEmailForm from "./components/input-email-form";

export default function Home() {
    return (
        <div className="min-h-dvh flex flex-col items-center justify-center gap-16">
            <div className="flex flex-col items-center gap-4 max-w-[830px] mx-auto text-center">
                <Image src={logo} alt="your event logo" width={108.5} height={30} />
                <h1 className="text-4xl leading-none font-heading font-medium flex md:text-7xl">
                    <span className="text-blue">Your</span>
                    Event
                </h1>
                <p className="font-sans text-sm md:text-lg text-gray-100">
                    O YourEvent é uma plataforma para criação e indicação em eventos. Ao criar ou se inscrever em um
                    evento, você receberá um link de convite exclusivo para compartilhar com outras pessoas. A
                    plataforma também oferece um ranking para acompanhar quem mais indicou participantes.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 max-w-4xl">
                <InputEmailForm />
                <SubscriptionForm eventPrettyName="" title="Criar evento" titleButton="Próximos passos" />
            </div>
        </div>
    );
}
