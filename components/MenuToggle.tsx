"use client";
import { useAppContext } from "@/context/context";
import { useAnimate } from "framer-motion";
import React from "react";

const Path = (props: any) => (
    <path
        fill="transparent"
        strokeWidth="3"
        stroke="white"
        strokeLinecap="round"
        {...props}
    />
);

export const MenuToggle = () => {
    const [scope, animate] = useAnimate();
    const { menuOpen, setMenuOpen } = useAppContext();

    React.useEffect(() => {
        animate([
            [
                "path.top",
                { d: menuOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
                { at: "<" },
            ],
            ["path.middle", { opacity: menuOpen ? 0 : 1 }, { at: "<" }],
            [
                "path.bottom",
                {
                    d: menuOpen
                        ? "M 3 2.5 L 17 16.346"
                        : "M 2 16.346 L 20 16.346",
                },
                { at: "<" },
            ],
        ]);
    }, [menuOpen]);

    // React.useEffect(() => {
    //     animate("path", {
    //         stroke: isScrolled ? "#f9bf03" : "white",
    //     });
    // }, [isScrolled]);

    const toggleMenu = () => {
        setMenuOpen((_open) => !_open);
    };

    return (
        <button onClick={toggleMenu}>
            <svg ref={scope} width="23" height="18" viewBox="0 0 23 18">
                <Path d="M 2 2.5 L 20 2.5" className="top" />
                <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
                <Path d="M 2 16.346 L 20 16.346" className="bottom" />
            </svg>
        </button>
    );
};
