import React from "react";
import NavigationBar from "@/components/NavigationBar";
import NavigationMenu from "@/components/NavigationMenu";
import Main from "@/components/Main";
import { ContextProvider } from "@/context/context";

export default function Home() {
    return (
        <div>
            <ContextProvider>
                <NavigationBar />
                <NavigationMenu />
                <Main />
            </ContextProvider>
        </div>
    );
}
