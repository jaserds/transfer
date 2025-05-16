"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function NavigationLoader() {
    const pathname = usePathname(); // отслеживаем путь
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 800); // задержка — имитация загрузки
        return () => clearTimeout(timeout);
    }, [pathname]); // каждый раз при смене URL

    if (!loading) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center rounded-[10px] bg-white/80 backdrop-blur-sm z-50">
            <span className="loader"></span>
            <style jsx>{`
                .loader {
                    position: relative;
                    display: flex;
                }
                .loader:before,
                .loader:after {
                    content: '';
                    width: 15px;
                    height: 15px;
                    display: inline-block;
                    position: relative;
                    margin: 0 5px;
                    border-radius: 50%;
                    background: #F9AC1A;
                    box-shadow: 50px 0, -50px 0;
                    animation: left 1s infinite ease-in-out;
                }
                .loader:after {
                    color: #F9AC1A;
                    animation: right 1.1s infinite ease-in-out;
                }

                @keyframes right {
                    0%, 100% {
                        transform: translateY(-10px);
                    }
                    50% {
                        transform: translateY(10px);
                    }
                }

                @keyframes left {
                    0%, 100% {
                        transform: translateY(10px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
            `}</style>
        </div>
    );
}