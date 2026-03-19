import {
    FaTelegramPlane,
    FaFacebookF,
    FaTwitter,
    FaWhatsapp,
} from "react-icons/fa";
import { motion } from "motion/react";

type Platform = "telegram" | "facebook" | "twitter" | "whatsapp";

interface ShareQRCodeProps {
    platform: Platform;
    qrCodeUrl: string;
    index?: number;
}

export const ShareQRCode = ({
    platform,
    qrCodeUrl,
    index = 0,
}: ShareQRCodeProps) => {
    const platformLinks: Record<Platform, string> = {
        telegram: `https://t.me/share/url?url=${encodeURIComponent(qrCodeUrl)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(qrCodeUrl)}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out this QR Code: ${qrCodeUrl}`)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(`Check out this QR Code: ${qrCodeUrl}`)}`,
    };

    const platformIcon: Record<Platform, React.ReactNode> = {
        telegram: <FaTelegramPlane className="w-5 h-5" />,
        facebook: <FaFacebookF className="w-5 h-5" />,
        twitter: <FaTwitter className="w-5 h-5" />,
        whatsapp: <FaWhatsapp className="w-5 h-5" />,
    };

    const platformColors: Record<Platform, string> = {
        telegram: "hover:bg-blue-500",
        facebook: "hover:bg-blue-600",
        twitter: "hover:bg-sky-500",
        whatsapp: "hover:bg-green-500",
    };

    return (
        <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                delay: 0.6 + index * 0.1,
                type: "spring",
                stiffness: 200,
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            href={platformLinks[platform]}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-icon text-slate-700 dark:text-slate-300 ${platformColors[platform]}`}
        >
            {platformIcon[platform]}
        </motion.a>
    );
};
