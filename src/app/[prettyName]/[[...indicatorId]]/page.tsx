import Image from "next/image";
import logo from "../../_assets/Logo.svg";
import { CircleDollarSign } from "lucide-react";
import SubscriptionForm from "./components/subscription-form";
import { addClickToLink, getByPrettyname } from "@/http/your-event-backend";
import { parseISO, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
interface PageParams {
    params: Promise<{
        prettyName: string;
        indicatorId?: number[];
    }>;
}

const Page = async (props: PageParams) => {
    const { indicatorId, prettyName } = await props.params;
    const event = await getByPrettyname(prettyName);
    if (indicatorId) {
        await addClickToLink(prettyName, indicatorId[0]);
    }

    const startTime = event.startTime?.split(":").slice(0, 2).join(":");
    const endTime = event.endTime?.split(":").slice(0, 2).join(":");

    const start = parseISO(event.startDate as string);
    const end = parseISO(event.endDate as string);

    const formattedStartDate = format(start, "d", { locale: ptBR });
    const formattedEndDate = format(end, "d 'de' MMMM", { locale: ptBR });

    console.log(formattedStartDate, formattedEndDate);
    return (
        <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
            <div className="min-h-dvh flex flex-col justify-center gap-16">
                <div className="flex flex-col gap-8 items-center md:items-start">
                    <Image src={logo} alt="your event logo" width={108.5} height={30} />

                    <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-start">
                        {event.prettyName}
                    </h1>
                </div>

                <div className="flex gap-5 items-stretch flex-col md:flex-row">
                    {/* SOBRE O EVENTO */}
                    <div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="font-heading font-semibold text-gray-200 text-xl">Sobre o evento</h2>
                            <span className="text-purple font-semibold text-xs flex items-center gap-2">
                                <CircleDollarSign className="size-5" />
                                {event.price ? `R$ ${event.price}` : "GRATUITO"}
                            </span>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                            Um evento feito por e para pessoas desenvolvedoras apaixonadas por criar soluções inovadoras
                            e compartilhar conhecimento. Vamos mergulhar nas tendências mais recentes em desenvolvimento
                            de software, arquitetura de sistemas e tecnologias emergentes, com palestras, workshops e
                            hackathons.
                            <br />
                            <br />
                            <p>
                                Dias {formattedStartDate} a {formattedEndDate} | Das {startTime} às {endTime}
                            </p>
                            <p>{event.location}</p>
                        </p>
                    </div>
                    {/* FORM PARA SE INSCREVER */}
                    <SubscriptionForm
                        eventPrettyName={prettyName}
                        indicatorId={indicatorId ? indicatorId[0] : undefined}
                        title="Inscrição"
                        titleButton="Confirmar"
                    />
                </div>
            </div>
        </main>
    );
};

export default Page;
