import Image from "next/image";
import Elie from "../public/elie.jpeg";
import Gym from "../public/gym.jpeg";
import Therapy from "../public/therapy.jpeg";

export default function Main() {
    return (
        <main className="h-screen overflow-scroll snap-mandatory snap-y bg-background">
            <div className="relative h-full w-screen snap-center flex justify-center items-center">
                <video
                    className="object-cover h-full w-screen"
                    src="/video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
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
                <div className="border-t border-b border-slate-400 py-4">
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
                        Experience the power of cutting-edge fitness facilities
                        and top-of-the-line equipment at Rule Fitness.
                    </div>
                </div>
                <div className="pt-6">
                    <Image src={Gym} alt="" />
                </div>
                <div className="text-slate-400 px-4 text-center py-4 text-sm italic">
                    From advanced cardio machines to functional training areas,
                    we have everything you need to take your workouts to the
                    next level.
                </div>
            </div>
            <div className="h-full w-screen snap-center flex flex-col items-center pt-16">
                <div className="border-t border-b border-slate-400 py-4">
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
                </div>
                <div className="pt-6">
                    <Image src={Therapy} alt="" />
                </div>
                <div className="text-slate-400 px-4 text-center py-4 text-sm italic">
                    These treatments aid in muscle recovery, reduce
                    inflammation, and enhance overall wellness, helping you
                    maximize your fitness journey.
                </div>
            </div>

            <div className="h-full w-screen snap-center flex flex-col items-center pt-16">
                <div className="border-t border-b border-slate-400 py-4">
                    <div
                        style={{
                            wordSpacing: -5,
                            textShadow: "#f9bf03 1px 1px",
                        }}
                        className="font-mono text-white font-bold text-3xl text-center italic"
                    >
                        GYM CULTURE
                    </div>
                    <div className="text-slate-400 px-4 text-center py-4">
                        At Rule Fitness, you&apos;ll become part of a vibrant
                        and supportive community of like-minded individuals who
                        share your passion for health and wellness.
                    </div>
                </div>
                <div className="pt-6">
                    <Image src={Therapy} alt="" />
                </div>
                <div className="text-slate-400 px-4 text-center py-4 text-sm italic">
                    Surround yourself with positive energy, encouragement, and
                    inspiration as you progress on your fitness journey.
                </div>
            </div>
        </main>
    );
}
