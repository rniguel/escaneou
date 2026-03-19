"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FaShieldAlt, FaLock, FaEyeSlash, FaCookieBite } from "react-icons/fa";

export default function PrivacidadePage() {
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
                                <FaShieldAlt className="w-5 h-5 text-white" />
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
            <main className="flex-1 pt-20 pb-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold font-montserrat bg-gradient-primary bg-clip-text text-transparent mb-4">
                            Política de Privacidade
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 font-outfit text-lg">
                            Sua privacidade é importante para nós
                        </p>
                    </motion.div>

                    {/* Content Sections */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-6"
                    >
                        {/* Introduction */}
                        <section className="glass-card rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold font-montserrat bg-gradient-secondary bg-clip-text text-transparent mb-4">
                                Introdução
                            </h2>
                            <p className="text-slate-700 dark:text-slate-300 font-outfit leading-relaxed mb-4">
                                O{" "}
                                <strong className="text-primary-600 dark:text-primary-400">
                                    Escaneou!
                                </strong>{" "}
                                respeita a sua privacidade e está comprometido
                                em proteger seus dados pessoais. Esta Política
                                de Privacidade descreve como coletamos, usamos e
                                protegemos suas informações quando você utiliza
                                nosso serviço.
                            </p>
                            <p className="text-slate-700 dark:text-slate-300 font-outfit leading-relaxed">
                                Data de entrada em vigor:{" "}
                                <strong>19 de março de 2026</strong>
                            </p>
                        </section>

                        {/* Information We Collect */}
                        <section className="glass-card rounded-2xl p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                                    <FaLock className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold font-montserrat bg-gradient-primary bg-clip-text text-transparent">
                                    Informações que Coletamos
                                </h2>
                            </div>
                            <div className="space-y-4 text-slate-700 dark:text-slate-300 font-outfit leading-relaxed">
                                <p>
                                    O Escaneou! é um serviço de geração de QR
                                    Codes que funciona inteiramente no seu
                                    navegador. Nossa abordagem é focada na
                                    privacidade:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>
                                        <strong>
                                            Não coletamos dados pessoais
                                        </strong>
                                        : Não exigimos cadastro, e-mail ou
                                        qualquer informação de identificação
                                        pessoal
                                    </li>
                                    <li>
                                        <strong>
                                            Sem armazenamento em servidor
                                        </strong>
                                        : Todos os QR Codes são gerados
                                        localmente no seu dispositivo
                                    </li>
                                    <li>
                                        <strong>Dados temporários</strong>: Se
                                        houver qualquer processamento
                                        temporário, os dados são descartados
                                        imediatamente após a geração
                                    </li>
                                    <li>
                                        <strong>
                                            Sem rastreamento de conteúdo
                                        </strong>
                                        : Não armazenamos ou analisamos os URLs,
                                        textos ou dados usados nos QR Codes
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Use of Information */}
                        <section className="glass-card rounded-2xl p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-gradient-secondary flex items-center justify-center">
                                    <FaEyeSlash className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold font-montserrat bg-gradient-secondary bg-clip-text text-transparent">
                                    Uso das Informações
                                </h2>
                            </div>
                            <div className="space-y-4 text-slate-700 dark:text-slate-300 font-outfit leading-relaxed">
                                <p>
                                    Como não coletamos informações pessoais, não
                                    utilizamos seus dados para:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Envio de e-mails ou marketing</li>
                                    <li>Análise de comportamento do usuário</li>
                                    <li>
                                        Venda ou compartilhamento com terceiros
                                    </li>
                                    <li>Perfilamento ou segmentação</li>
                                </ul>
                                <p className="mt-4">
                                    O único propósito do Escaneou! é fornecer
                                    uma ferramenta útil e gratuita para geração
                                    de QR Codes, respeitando totalmente a sua
                                    privacidade.
                                </p>
                            </div>
                        </section>

                        {/* Cookies */}
                        <section className="glass-card rounded-2xl p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                                    <FaCookieBite className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold font-montserrat bg-gradient-primary bg-clip-text text-transparent">
                                    Cookies e Tecnologias Similares
                                </h2>
                            </div>
                            <div className="space-y-4 text-slate-700 dark:text-slate-300 font-outfit leading-relaxed">
                                <p>
                                    O Escaneou! pode utilizar cookies para
                                    melhorar a experiência do usuário:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>
                                        <strong>Cookies essenciais</strong>:
                                        Garantem o funcionamento correto do site
                                    </li>
                                    <li>
                                        <strong>Cookies de preferências</strong>
                                        : Salvam suas configurações, como o tema
                                        (claro/escuro)
                                    </li>
                                    <li>
                                        <strong>
                                            Sem cookies de rastreamento
                                        </strong>
                                        : Não utilizamos cookies para análise de
                                        comportamento ou publicidade
                                    </li>
                                </ul>
                                <p className="mt-4">
                                    Você pode gerenciar suas preferências de
                                    cookies através das configurações do seu
                                    navegador.
                                </p>
                            </div>
                        </section>

                        {/* Data Security */}
                        <section className="glass-card rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold font-montserrat bg-gradient-secondary bg-clip-text text-transparent mb-4">
                                Segurança dos Dados
                            </h2>
                            <div className="space-y-4 text-slate-700 dark:text-slate-300 font-outfit leading-relaxed">
                                <p>
                                    Como não armazenamos dados em servidores, o
                                    risco de vazamento de informações é
                                    praticamente inexistente. No entanto,
                                    adotamos práticas de segurança para garantir
                                    a proteção do serviço:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>
                                        Certificado SSL (HTTPS) para conexões
                                        seguras
                                    </li>
                                    <li>
                                        Processamento local dos dados no
                                        navegador
                                    </li>
                                    <li>
                                        Sem registro ou log de informações
                                        sensíveis
                                    </li>
                                    <li>Atualizações regulares de segurança</li>
                                </ul>
                            </div>
                        </section>

                        {/* Third-Party Services */}
                        <section className="glass-card rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold font-montserrat bg-gradient-primary bg-clip-text text-transparent mb-4">
                                Serviços de Terceiros
                            </h2>
                            <div className="space-y-4 text-slate-700 dark:text-slate-300 font-outfit leading-relaxed">
                                <p>
                                    O Escaneou! não utiliza serviços de
                                    terceiros para processamento, análise ou
                                    armazenamento de dados pessoais. Nosso
                                    funcionamento é totalmente independente e
                                    autônomo.
                                </p>
                            </div>
                        </section>

                        {/* Children's Privacy */}
                        <section className="glass-card rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold font-montserrat bg-gradient-secondary bg-clip-text text-transparent mb-4">
                                Privacidade de Crianças
                            </h2>
                            <div className="space-y-4 text-slate-700 dark:text-slate-300 font-outfit leading-relaxed">
                                <p>
                                    O Escaneou! é um serviço seguro para todas
                                    as idades. Como não coletamos informações
                                    pessoais, não há necessidade de
                                    consentimento parental para uso do serviço.
                                </p>
                            </div>
                        </section>

                        {/* Changes to Policy */}
                        <section className="glass-card rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold font-montserrat bg-gradient-primary bg-clip-text text-transparent mb-4">
                                Alterações nesta Política
                            </h2>
                            <div className="space-y-4 text-slate-700 dark:text-slate-300 font-outfit leading-relaxed">
                                <p>
                                    Podemos atualizar esta Política de
                                    Privacidade periodicamente para refletir
                                    mudanças em nossas práticas ou por
                                    exigências legais. Quaisquer alterações
                                    significativas serão divulgadas no site.
                                </p>
                                <p>
                                    Recomendamos que você revise esta política
                                    regularmente para estar informado sobre como
                                    protegemos suas informações.
                                </p>
                            </div>
                        </section>

                        {/* Developer */}
                        <section className="glass-card rounded-2xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold font-montserrat bg-gradient-secondary bg-clip-text text-transparent mb-4">
                                Desenvolvedor
                            </h2>
                            <div className="space-y-4 text-slate-700 dark:text-slate-300 font-outfit leading-relaxed">
                                <p className="text-slate-800 dark:text-slate-200">
                                    <strong>GitHub:</strong>{" "}
                                    <a
                                        href="https://github.com/rniguel"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary-600 dark:text-primary-400 hover:underline"
                                    >
                                        github.com/rniguel
                                    </a>
                                </p>
                                <p className="text-slate-800 dark:text-slate-200">
                                    <strong>Site Pessoal:</strong>{" "}
                                    <a
                                        href="https://miguelito.dev"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary-600 dark:text-primary-400 hover:underline"
                                    >
                                        miguelito.dev
                                    </a>
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
                transition={{ delay: 0.3, duration: 0.5 }}
                className="w-full py-6 px-4 mt-auto"
            >
                <div className="glass-card rounded-2xl max-w-7xl mx-auto px-6 py-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-slate-600 dark:text-slate-400 font-outfit">
                            © 2026 Escaneou! Todos os direitos reservados.
                        </p>
                        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500 font-outfit">
                            <Link
                                href="/privacidade"
                                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
                            >
                                Privacidade
                            </Link>
                            <span className="text-slate-300 dark:text-slate-700">
                                •
                            </span>
                            <a
                                href="#"
                                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                            >
                                Termos
                            </a>
                        </div>
                    </div>
                </div>
            </motion.footer>
        </div>
    );
}
