import { motion } from "framer-motion";
import { Icon, IconifyIcon } from "@iconify/react";
type Props = {
  directionLeft?: boolean;
  icon: IconifyIcon;
  level: number;
};

export default function Skill({ directionLeft, icon, level }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-20 w-20 rounded-lg    filter transition duration-300 ease-in-out group-hover:grayscale"
      >
        <Icon icon={icon} className="h-full w-full rounded-lg" />
      </motion.div>

      <div className="absolute h-20 w-20 rounded-lg opacity-0 transition duration-300 ease-in-out group-hover:bg-white/80 group-hover:opacity-80">
        <div className="flex h-full items-center justify-center">
          <p className="text-2xl font-bold text-black opacity-100">{level}%</p>
        </div>
      </div>
    </div>
  );
}
