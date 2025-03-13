import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";

interface StatsProps {
    numberAcessesToLink?: number;
    userRanking?: {
        subscribers?: number;
        userId?: number;
        name?: string;
    };
    positionOfRanking?: number;
}

const Stats = async ({ numberAcessesToLink, userRanking, positionOfRanking }: StatsProps) => {
    return (
        <div className="grid gap-3 md:grid-cols-3">
            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
                <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                    {numberAcessesToLink}
                </span>
                <span className="text-sm text-gray-300 leading-none text-center">Acessos aos links</span>
                <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
            </div>

            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
                <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                    {userRanking?.subscribers ? userRanking.subscribers : 0}
                </span>
                <span className="text-sm text-gray-300 leading-none text-center">Incrições feitas</span>
                <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
            </div>

            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
                <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                    {positionOfRanking != 0 ? positionOfRanking + "°" : "-"}
                </span>
                <span className="text-sm text-gray-300 leading-none text-center">Posição no ranking</span>
                <Medal className="size-5 text-purple absolute top-3 left-3" />
            </div>
        </div>
    );
};

export default Stats;
