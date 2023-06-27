"use client";
import React from "react";
import { useAnimate } from "framer-motion";
import { useAppContext } from "@/context/context";

const NavigationMenu = () => {
    const [scope, animate] = useAnimate();
    const { menuOpen } = useAppContext();

    React.useEffect(() => {
        animate(".menu", { height: menuOpen ? 200 : 0 }, { duration: 0.5 });
    }, [menuOpen]);

    return (
        <div ref={scope}>
            <div className="menu absolute top-0 right-0 overflow-hidden w-screen h-0 bg-slate-400/[.75] z-10">
                <div className="flex flex-col h-full pt-16 text-white text-lg tracking-wider">
                    <div className="flex flex-1 ml-auto mr-10 items-center hover:text-primary">
                        Memberships
                    </div>
                    <div className="flex flex-1 ml-auto mr-10 items-center hover:text-primary">
                        Book A Session
                    </div>
                    <div className="flex flex-1 ml-auto mr-10 items-center hover:text-primary">
                        Shop Merch
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationMenu;
