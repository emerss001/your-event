import Image from "next/image";
import logo from "../../../_assets/Logo.svg";
import Ranking from "./components/ranking";
import Stats from "./components/stats";
import InviteLinkInput from "./components/invite-link-input";

interface InvitePageProps {
    params: Promise<{
        prettyName: string;
        subscriberId: string;
    }>;
}

const InvatePage = async (props: InvitePageProps) => {
    const { subscriberId, prettyName } = await props.params;
    const inviteLink = `http://localhost:3000/${prettyName}/${subscriberId}`;

    return (
        <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
            <div className="flex flex-col gap-10 w-full max-w-[550px]">
                <Image src={logo} alt="your event logo" width={108.5} height={30} />

                <div className="space-y-2">
                    <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
                        Inscrição confirmada
                    </h1>
                    <p className="text-gray-300">Para entrar no evento, acesse o link enviado para seu email.</p>
                </div>

                <div className="space-y-6">
                    <div className="space-y-3">
                        <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
                            Indique e ganhe
                        </h2>
                        <p className="text-gray-300">
                            Convide mais pessoas para o evento e concorra a prêmios exclusivos! É só compartilhar o link
                            abaixo e acompanhar as indicações:
                        </p>
                    </div>

                    <InviteLinkInput inviteLink={inviteLink} />
                    <Stats />
                </div>
            </div>
            <Ranking />
        </div>
    );
};

export default InvatePage;
