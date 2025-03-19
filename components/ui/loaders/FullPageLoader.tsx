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
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#F9AC1A]"></div>
        </div>
    );
};

export default FullPageLoader;
