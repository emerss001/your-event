import Image from "next/image";

import medalGold from "@/app/_assets/medal-gold.svg";
import medalSilver from "@/app/_assets/medal-silver.svg";
import medalCooper from "@/app/_assets/medal-cooper.svg";
import { SubscriptionRanking } from "@/http/your-event-backend";

interface RankingProps {
    ranking: SubscriptionRanking[];
    userId?: number;
}

const Ranking = async ({ ranking, userId }: RankingProps) => {
    return (
        <div className="w-full max-w-[440px] space-y-5">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">Ranking de Indicações</h2>

            {ranking.length > 0 ? (
                <div className="space-y-4">
                    {ranking.map((item, index) => (
                        <div
                            key={item.userId}
                            className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
                        >
                            <span className="text-sm text-gray-300 leading-none">
                                <span className="font-semibold">{index + 1}°</span> | {item.name}
                            </span>
                            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none flex gap-3">
                                {item.subscribers}{" "}
                                {item.userId === userId && (
                                    <div className="bg-gray-500 px-3 py-1 rounded-[6px] flex items-center justify-center gap-1">
                                        <span className="text-gra-300 text-xs font-semibold font-sans">Você</span>
                                    </div>
                                )}
                            </span>
                            {index === 0 && (
                                <Image src={medalGold} alt="medal gold" className="absolute top-0 right-8" />
                            )}
                            {index === 1 && (
                                <Image src={medalSilver} alt="medal silver" className="absolute top-0 right-8" />
                            )}
                            {index === 2 && (
                                <Image src={medalCooper} alt="medal cooper" className="absolute top-0 right-8" />
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    <p>Anda não houve indicações</p>
                </>
            )}
        </div>
    );
};

export default Ranking;
