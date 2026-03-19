"use client";
import { motion } from "motion/react";

export const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center space-y-4 mt-[100px]"
        >
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-montserrat text-5xl md:text-7xl font-bold"
            >
                <span className="text-gradient">Escaneou!</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-outfit max-w-md mx-auto"
            >
                Crie QR Codes incríveis em segundos
            </motion.p>
        </motion.div>
    );
};
