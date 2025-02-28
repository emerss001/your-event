import Image from "next/image";

import medalGold from "../../_assets/medal-gold.svg";
import medalSilver from "../../_assets/medal-silver.svg";
import medalCooper from "../../_assets/medal-cooper.svg";

const Ranking = () => {
    return (
        <div className="w-full max-w-[440px] space-y-5">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">Ranking de Indicações</h2>

            <div className="space-y-4">
                <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
                    <span className="text-sm text-gray-300 leading-none">
                        <span className="font-semibold">1°</span> | Emerson Neves
                    </span>
                    <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">125</span>
                    <Image src={medalGold} alt="medal gold" className="absolute top-0 right-8" />
                </div>

                <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
                    <span className="text-sm text-gray-300 leading-none">
                        <span className="font-semibold">2°</span> | Diego Fernandes
                    </span>
                    <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">100</span>
                    <Image src={medalSilver} alt="medal gold" className="absolute top-0 right-8" />
                </div>

                <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
                    <span className="text-sm text-gray-300 leading-none">
                        <span className="font-semibold">3°</span> | Caio Xavier
                    </span>
                    <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">95</span>
                    <Image src={medalCooper} alt="medal gold" className="absolute top-0 right-8" />
                </div>
            </div>
        </div>
    );
};

export default Ranking;
