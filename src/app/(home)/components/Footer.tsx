"use client";

import { motion } from "motion/react";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="w-full py-6 px-4 mt-auto"
        >
            <div className="glass-card rounded-2xl max-w-7xl mx-auto px-6 py-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-outfit">
                        Feito com{" "}
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="inline-block text-red-500 mx-1"
                        >
                            <FaHeart className="w-4 h-4" />
                        </motion.span>{" "}
                        por{" "}
                        <a
                            href="https://github.com/rniguel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors duration-300 ml-1"
                        >
                            Miguel Riquelme
                        </a>
                        {" | "}
                        <a
                            href="https://miguelito.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors duration-300"
                        >
                            miguelito.dev
                        </a>
                    </p>

                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500 font-outfit">
                        <Link
                            href="/privacidade"
                            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                        >
                            Privacidade
                        </Link>
                        <span className="text-slate-300 dark:text-slate-700">
                            •
                        </span>
                        <Link
                            href="/termos"
                            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                        >
                            Termos
                        </Link>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};
