"use client";

import { motion } from "motion/react";
import { FaQrcode } from "react-icons/fa";
import Link from "next/link";

export const Header = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/20 dark:border-white/10"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2 group">
                        <motion.span
                            animate={{
                                rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 3,
                            }}
                            className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:shadow-glow transition-all duration-300"
                        >
                            <FaQrcode className="w-5 h-5 text-white" />
                        </motion.span>
                        <span className="text-lg font-bold font-montserrat bg-gradient-primary bg-clip-text text-transparent">
                            Escaneou!
                        </span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 font-outfit"
                        >
                            Início
                        </Link>
                        <Link
                            href="/privacidade"
                            className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 font-outfit"
                        >
                            Privacidade
                        </Link>
                    </div>
                </div>
            </div>
        </motion.header>
    );
};
