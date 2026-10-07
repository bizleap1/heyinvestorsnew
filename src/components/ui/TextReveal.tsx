'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TextReveal({ text, className = '', delay = 0 }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  // Split text into words
  const words = text.split(' ');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: '0.25em', display: 'inline-block' }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
