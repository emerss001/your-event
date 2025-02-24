import Image from "next/image";
import logo from "./assets/Logo.svg";
import { InputField, InputIcon, InputRoot } from "./components/input";
import { ArrowRight, Mail, User } from "lucide-react";
import Button from "./components/button";

export default function Home() {
    return (
        <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
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
                    <div className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full">
                        <h2 className="font-heading font-semibold text-gray-200 text-xl">Ver meus eventos</h2>

                        <div className="space-y-3">
                            <InputRoot>
                                <InputIcon>
                                    <Mail />
                                </InputIcon>
                                <InputField type="email" placeholder="Email" />
                            </InputRoot>
                            <p className="font-sans text-base">Use o e-mail da conta que você criou o evento</p>
                        </div>
                        <Button>
                            Ver eventos <ArrowRight />
                        </Button>
                    </div>

                    <div className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full">
                        <h2 className="font-heading font-semibold text-gray-200 text-xl">Criar um evento</h2>

                        <div className="space-y-3">
                            <InputRoot>
                                <InputIcon>
                                    <User />
                                </InputIcon>
                                <InputField type="text" placeholder="Nome completo" />
                            </InputRoot>

                            <InputRoot>
                                <InputIcon>
                                    <Mail />
                                </InputIcon>
                                <InputField type="email" placeholder="E-mail" />
                            </InputRoot>
                        </div>
                        <Button>
                            Próximos passos
                            <ArrowRight />
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
