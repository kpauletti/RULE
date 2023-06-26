import Image from "next/image";
import Elie from "../public/elie.jpeg";

export default function Main() {
    return (
        <main className="h-[calc(100vh-4rem)] overflow-scroll snap-mandatory snap-y bg-background">
            <div className="relative h-full w-screen snap-center flex justify-center items-center">
                <video
                    className="object-cover h-full w-screen"
                    src="/video.mp4"
                    autoPlay
                    loop
                    muted
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button className="rounded-lg bg-transparent border-2 border-white px-4 py-2">
                        <span className="font-mono text-white tracking-wide whitespace-nowrap">
                            JOIN THE MOVEMENT
                        </span>
                    </button>
                </div>
            </div>
            <div className="h-full w-screen snap-center flex flex-col items-center pt-16">
                <div
                    style={{
                        wordSpacing: -5,
                        textShadow: "#f9bf03 1px 1px",
                    }}
                    className="font-mono text-white font-bold text-3xl text-center italic"
                >
                    STATE OF THE ART FITNESS
                </div>
                <div className="text-slate-400 px-4 text-center py-4">
                    Experience the power of cutting-edge fitness facilities and
                    top-of-the-line equipment at Rule Fitness.
                </div>
                <Image src={Elie} alt="" width={200} height={200} />
            </div>
            <div className="h-full w-screen snap-center flex flex-col items-center pt-16">
                <div
                    style={{
                        wordSpacing: -5,
                        textShadow: "#f9bf03 1px 1px",
                    }}
                    className="font-mono text-white font-bold text-3xl text-center italic"
                >
                    INNOVATIVE RECOVERY SERVICES
                </div>
                <div className="text-slate-400 px-4 text-center py-4">
                    We go beyond traditional gym offerings by providing
                    innovative recovery services such as infrared saunas,
                    NormaTec compression boots, and cryotherapy.
                </div>
                <Image src={Elie} alt="" width={200} height={200} />
            </div>
            <div className="h-full w-screen snap-center flex justify-center items-center">
                <Image src={Elie} alt="" width={200} height={200} />
            </div>
        </main>
    );
}
