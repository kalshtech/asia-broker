"use client";
import React from 'react'
import { ThemeProvider } from 'next-themes';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

function Provider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system">
            <div className={"flex flex-col"}>
                <header className={"h-[64px] leading-[64px]"}>
                    <Navigation/>
                </header>
                <main>
                    { children }
                </main>
                <Footer/>
            </div>
        </ThemeProvider>
    )
}

export default Provider;