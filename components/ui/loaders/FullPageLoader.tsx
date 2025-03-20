"use client";

import { useEffect, useState } from "react";

const FullPageLoader = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
        return () => setVisible(false);
    }, []);

    if (!visible) return null;

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
};

export default FullPageLoader;
