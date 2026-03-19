"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
    FaDownload,
    FaSearch,
    FaClipboard,
    FaSun,
    FaMoon,
    FaHistory,
} from "react-icons/fa";
import { ShareQRCode } from "./ShareQRCode";
import Image from "next/image";
import { useReward } from "react-rewards";
import { motion } from "motion/react";

type FormData = {
    content: string;
};

export const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();
    const [search, setSearch] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [history, setHistory] = useState<string[]>([]);
    const { reward, isAnimating } = useReward("rewardId", "confetti");

    useEffect(() => {
        const savedHistory = localStorage.getItem("qrCodeHistory");
        if (savedHistory) {
            setHistory(JSON.parse(savedHistory));
        }
    }, []);

    useEffect(() => {
        if (search && search !== "") {
            setHistory((prev) => {
                const newHistory = [
                    search,
                    ...prev.filter((item) => item !== search),
                ].slice(0, 5);
                localStorage.setItem(
                    "qrCodeHistory",
                    JSON.stringify(newHistory),
                );
                return newHistory;
            });
        }
    }, [search]);

    useEffect(() => {
        const isDark = localStorage.getItem("darkMode") === "true";
        setIsDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("darkMode", (!isDarkMode).toString());
    };

    const onSubmit = (data: FormData) => {
        reward();
        setIsLoading(true);
        setSearch(data.content);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    const downloadQRCode = async () => {
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(search)}`;
        const response = await fetch(qrCodeUrl);
        const blob = await response.blob();
        const link = document.createElement("a");

        const urlBlob = URL.createObjectURL(blob);
        link.href = urlBlob;
        link.download = `qrcode-${Date.now()}.png`;
        link.click();
        URL.revokeObjectURL(urlBlob);
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(
                `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(search)}`,
            );
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    const handleHistoryClick = (item: string) => {
        setSearch(item);
    };

    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(search)}`;

    return (
        <div className="relative w-full max-w-2xl mx-auto px-4">
            {/* Dark Mode Toggle */}
            <motion.button
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={toggleDarkMode}
                className="absolute top-0 right-0 btn-icon"
                aria-label="Toggle dark mode"
            >
                {isDarkMode ? (
                    <FaSun className="w-5 h-5" />
                ) : (
                    <FaMoon className="w-5 h-5" />
                )}
            </motion.button>

            {/* History Section */}
            {history.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mb-6"
                >
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-2">
                        <FaHistory className="w-4 h-4" />
                        <span className="font-medium">Recentes</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {history.map((item, index) => (
                            <motion.button
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleHistoryClick(item)}
                                className="px-3 py-1.5 rounded-xl bg-white/30 dark:bg-white/10 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-300 border border-slate-200 dark:border-white/10 truncate max-w-[200px]"
                            >
                                {item}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* QR Code Display */}
            {search && search !== "" && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-3xl p-8 mb-8"
                >
                    {!isLoading ? (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="flex flex-col items-center"
                        >
                            <div className="relative mb-6">
                                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-20"></div>
                                <div className="relative glass-card p-4 rounded-2xl">
                                    <Image
                                        src={qrCodeUrl}
                                        alt="QR Code"
                                        width={300}
                                        height={300}
                                        className="rounded-xl"
                                        priority
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center gap-3">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={downloadQRCode}
                                    className="btn-primary flex items-center gap-2"
                                >
                                    <FaDownload />
                                    <span className="hidden sm:inline">
                                        Download
                                    </span>
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleCopy}
                                    className="btn-success flex items-center gap-2"
                                >
                                    <FaClipboard />
                                    <span className="hidden sm:inline">
                                        Copiar Link
                                    </span>
                                </motion.button>

                                <ShareQRCode
                                    platform="telegram"
                                    qrCodeUrl={qrCodeUrl}
                                    index={0}
                                />
                                <ShareQRCode
                                    platform="whatsapp"
                                    qrCodeUrl={qrCodeUrl}
                                    index={1}
                                />
                                <ShareQRCode
                                    platform="facebook"
                                    qrCodeUrl={qrCodeUrl}
                                    index={2}
                                />
                                <ShareQRCode
                                    platform="twitter"
                                    qrCodeUrl={qrCodeUrl}
                                    index={3}
                                />
                            </div>
                        </motion.div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-12">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-pulse-glow"></div>
                                <svg
                                    aria-hidden="true"
                                    className="relative w-16 h-16 text-primary-500 animate-spin"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                        className="opacity-25"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <p className="mt-4 text-slate-600 dark:text-slate-400 font-outfit">
                                Gerando QR Code...
                            </p>
                        </div>
                    )}
                </motion.div>
            )}

            {/* Form */}
            <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                onSubmit={handleSubmit(onSubmit)}
                className="relative"
            >
                <motion.div
                    className={`glass-card rounded-3xl p-2 ${
                        errors.content ? "ring-4 ring-red-500/30" : ""
                    }`}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex flex-col sm:flex-row gap-2">
                        <input
                            className="input-modern flex-1"
                            type="text"
                            id="content"
                            placeholder="Digite seu texto ou link..."
                            {...register("content", {
                                required: "Por favor, digite algo",
                            })}
                        />
                        <button
                            className="btn-primary flex items-center justify-center gap-2 min-w-[120px]"
                            type="submit"
                            disabled={isAnimating}
                        >
                            <FaSearch />
                            <span className="hidden sm:inline">Gerar</span>
                            <span id="rewardId" />
                        </button>
                    </div>
                </motion.div>
                {errors.content && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-sm font-medium mt-2 pl-2"
                    >
                        {errors.content.message}
                    </motion.p>
                )}
            </motion.form>
        </div>
    );
};
