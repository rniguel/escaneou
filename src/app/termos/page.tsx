"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
    FaFileContract,
    FaCheckCircle,
    FaInfoCircle,
    FaCheck,
    FaBan,
    FaShieldAlt,
    FaCopyright,
    FaSyncAlt,
} from "react-icons/fa";

export default function TermosPage() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/20 dark:border-white/10"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link
                            href="/"
                            className="flex items-center gap-2 group"
                        >
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
                                <FaFileContract className="w-5 h-5 text-white" />
                            </motion.span>
                            <span className="text-lg font-bold font-montserrat bg-gradient-primary bg-clip-text text-transparent">
                                Escaneou!
                            </span>
                        </Link>

                        <div className="flex items-center gap-2">
                            <Link
                                href="/"
                                className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 font-outfit"
                            >
                                Início
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Main Content */}
            <main className="flex-1 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Title Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold font-montserrat bg-gradient-primary bg-clip-text text-transparent mb-4">
                            Termos de Uso
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 font-outfit text-lg">
                            Regras para uso do Escaneou!
                        </p>
                    </motion.div>

                    {/* Content Sections */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-6"
                    >
                        {/* Aceitação dos Termos */}
                        <section className="glass-card rounded-2xl p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                                    <FaCheckCircle className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold font-montserrat bg-gradient-primary bg-clip-text text-transparent">
                                    Aceitação dos Termos
                                </h2>
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 font-outfit leading-relaxed mb-4">
                                Ao acessar e utilizar o serviço{" "}
                                <strong className="text-primary-600 dark:text-primary-400">
                                    Escaneou!
                                </strong>
                                , você concorda com estes Termos de Uso. Se você
                                não concordar com qualquer parte destes termos,
                                por favor, não utilize nosso serviço.
                            </p>
                            <p className="text-slate-700 dark:text-slate-300 font-outfit leading-relaxed">
                                Data de entrada em vigor:{" "}
                                <strong>19 de março de 2026</strong>
                            </p>
                        </section>

                        {/* Descrição do Serviço */}
                        <section className="glass-card rounded-2xl p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                                    <FaInfoCircle className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold font-montserrat bg-gradient-primary bg-clip-text text-transparent">
                                    Descrição do Serviço
                                </h2>
                            </div>
                            <div className="space-y-4 text-slate-700 dark:text-slate-300 font-outfit leading-relaxed">
                                <p>
                                    O{" "}
                                    <strong className="text-primary-600 dark:text-primary-400">
                                        Escaneou!
                                    </strong>{" "}
                                    é um serviço online gratuito que permite aos
                                    usuários gerar QR Codes de forma rápida e
                                    fácil. Nosso serviço:
                                </p>
                                <ul className="space-y-2 ml-4">
                                    <li className="flex items-start gap-2">
                                        <FaCheck className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                                        <span>
                                            Gera QR Codes para qualquer texto,
                                            URL ou conteúdo desejado
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheck className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                                        <span>
                                            Permite download de QR Codes em alta
                                            qualidade (500x500px)
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheck className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                                        <span>
                                            Funciona sem necessidade de cadastro
                                            ou login
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheck className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                                        <span>
                                            Oferece opções de compartilhamento
                                            em redes sociais
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Uso Permitido */}
                        <section className="glass-card rounded-2xl p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                                    <FaCheck className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold font-montserrat bg-gradient-primary bg-clip-text text-transparent">
                                    Uso Permitido
                                </h2>
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 font-outfit leading-relaxed mb-4">
                                Você é livre para utilizar os QR Codes gerados
                                pelo Escaneou! para:
                            </p>
                            <ul className="space-y-2 text-slate-700 dark:text-slate-300 font-outfit leading-relaxed">
                                <li className="flex items-start gap-2">
                                    <FaCheck className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                                    <span>Uso pessoal ou comercial</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FaCheck className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                                    <span>
                                        Sites, blogs e materiais digitais
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FaCheck className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                                    <span>
                                        Embalagens, etiquetas e materiais
                                        impressos
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FaCheck className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                                    <span>
                                        Campanhas de marketing e publicidade
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FaCheck className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                                    <span>
                                        Cartões de visita e materiais
                                        promocionais
                                    </span>
                                </li>
                            </ul>
                        </section>

                        {/* Uso Proibido */}
                        <section className="glass-card rounded-2xl p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                                    <FaBan className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold font-montserrat bg-gradient-primary bg-clip-text text-transparent">
                                    Uso Proibido
                                </h2>
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 font-outfit leading-relaxed mb-4">
                                É estritamente proibido utilizar o serviço para:
                            </p>
                            <ul className="space-y-2 text-slate-700 dark:text-slate-300 font-outfit leading-relaxed">
                                <li className="flex items-start gap-2">
                                    <FaBan className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span>
                                        Conteúdo ilegal, ofensivo ou fraudulento
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FaBan className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span>
                                        Phishing, engenharia social ou golpes
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FaBan className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span>
                                        Violação de direitos de terceiros
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FaBan className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span>
                                        Tentativas de hacking, abuso da API ou
                                        automação excessiva
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FaBan className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                    <span>
                                        Distribuição de malware ou conteúdo
                                        malicioso
                                    </span>
                                </li>
                            </ul>
                        </section>

                        {/* Limitação de Responsabilidade */}
                        <section className="glass-card rounded-2xl p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                                    <FaShieldAlt className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold font-montserrat bg-gradient-primary bg-clip-text text-transparent">
                                    Limitação de Responsabilidade
                                </h2>
                            </div>
                            <div className="space-y-4 text-slate-700 dark:text-slate-300 font-outfit leading-relaxed">
                                <p>
                                    O serviço{" "}
                                    <strong className="text-primary-600 dark:text-primary-400">
                                        Escaneou!
                                    </strong>{" "}
                                    é fornecido "como está", sem garantias de
                                    qualquer tipo.
                                </p>
                                <p>
                                    Não garantimos que o serviço estará
                                    disponível ininterruptamente, livre de erros
                                    ou livre de vírus ou outros componentes
                                    prejudiciais.
                                </p>
                                <p>
                                    Não nos responsabilizamos por danos diretos,
                                    indiretos, incidentais ou consequentes
                                    resultantes do uso ou da incapacidade de
                                    usar o serviço.
                                </p>
                                <p>
                                    O conteúdo dos QR Codes gerados é de inteira
                                    responsabilidade de quem os criou e
                                    utilizou.
                                </p>
                            </div>
                        </section>

                        {/* Propriedade Intelectual */}
                        <section className="glass-card rounded-2xl p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                                    <FaCopyright className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold font-montserrat bg-gradient-primary bg-clip-text text-transparent">
                                    Propriedade Intelectual
                                </h2>
                            </div>
                            <div className="space-y-4 text-slate-700 dark:text-slate-300 font-outfit leading-relaxed">
                                <p>
                                    Os QR Codes gerados pelo serviço são de uso
                                    livre, podendo ser utilizados para fins
                                    pessoais ou comerciais sem restrições.
                                </p>
                                <p>
                                    O nome, logo, design e funcionalidades do
                                    site{" "}
                                    <strong className="text-primary-600 dark:text-primary-400">
                                        Escaneou!
                                    </strong>{" "}
                                    são propriedade exclusiva do criador e estão
                                    protegidos por direitos autorais.
                                </p>
                                <p>
                                    Não é permitido copiar, reproduzir,
                                    modificar ou criar trabalhos derivados do
                                    site ou de seu design sem autorização
                                    expressa.
                                </p>
                            </div>
                        </section>

                        {/* Modificações nos Termos */}
                        <section className="glass-card rounded-2xl p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                                    <FaSyncAlt className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold font-montserrat bg-gradient-primary bg-clip-text text-transparent">
                                    Modificações nos Termos
                                </h2>
                            </div>
                            <div className="space-y-4 text-slate-700 dark:text-slate-300 font-outfit leading-relaxed">
                                <p>
                                    Reservamo-nos o direito de atualizar,
                                    modificar ou substituir estes Termos de Uso
                                    a qualquer momento e a nosso critério
                                    exclusivo.
                                </p>
                                <p>
                                    Qualquer alteração será efetuada postando os
                                    novos termos nesta página. A data de "Última
                                    atualização" no topo da página indicará
                                    quando os termos foram revisados.
                                </p>
                                <p>
                                    O uso continuado do serviço após a
                                    publicação de termos revisados constitui
                                    aceitação dos mesmos. É sua responsabilidade
                                    revisar estes termos periodicamente.
                                </p>
                            </div>
                        </section>
                    </motion.div>
                </div>
            </main>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="w-full py-6 px-4"
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
                                <FaCopyright className="w-4 h-4" />
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
                            {" • "}
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
                                className="text-primary-600 dark:text-primary-400 font-semibold transition-colors duration-300"
                            >
                                Termos
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.footer>
        </div>
    );
}
