import React from "react";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import Logo from "../public/rulefitnesslogo.png";
import { MenuToggle } from "./MenuToggle";
import { useAppContext } from "@/context/context";

export default function NavigationBar() {
    // const [scope, animate] = useAnimate();

    // React.useEffect(() => {
    //     animate(".navbar", {
    //         backgroundColor: menuScrolled ? "#fff" : "#21232a",
    //     });
    // }, [menuScrolled]);

    return (
        <div className="absolute top-0 bg-transparent z-20 w-screen">
            <div className="navbar">
                <div className="flex w-full h-16 justify-end items-center">
                    <Image
                        className="object-contain w-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        src={Logo}
                        alt="logo"
                    />
                    <div className="mr-4">
                        <MenuToggle />
                    </div>
                </div>
            </div>
        </div>
    );
}
