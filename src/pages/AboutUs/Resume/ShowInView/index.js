import React from "react";

import { motion } from "framer-motion";

const ShowInViewBox = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default ShowInViewBox;
