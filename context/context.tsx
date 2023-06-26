"use client";

import React from "react";

interface Context {
    menuOpen: boolean;
    // isScrolled: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialState = {
    menuOpen: false,
    // isScrolled: false
} as Context;

const context = React.createContext(initialState);

export const ContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    // const [scrolled, setScrolled] = React.useState(false);

    // const updateMenuScrolled = () => {
    //     if (window?.scrollY > 0) {
    //         setScrolled(true);
    //     } else {
    //         setScrolled(false);
    //     }
    // };

    // React.useEffect(() => {
    //     window?.addEventListener("scroll", updateMenuScrolled);
    //     return () => window?.removeEventListener("scroll", updateMenuScrolled);
    // }, []);

    return (
        <context.Provider value={{ menuOpen, setMenuOpen }}>
            {children}
        </context.Provider>
    );
};

export const useAppContext = () => React.useContext(context);
