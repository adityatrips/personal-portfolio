import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function AnimationLayout() {
  const { pathname } = useLocation();

  return (
    <div className="landing">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Outlet />
      </motion.div>
    </div>
  );
}
