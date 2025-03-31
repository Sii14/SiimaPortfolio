"use client";
import React, { useState, useEffect } from "react";
import styles from "./AboutPage.module.css";
import { motion } from "framer-motion";

export default function AboutPage() {
  const fullText: string = `Transforming Ideas into Powerful Digital Solutions!

I am a passionate Full-Stack Developer who thrives on building high-performance, scalable, and intuitive applications. 
With expertise in frontend and backend development, I specialize in creating seamless user experiences using cutting-edge technologies like React, Next.js, Laravel, and Node.js.

🔹 Frontend Excellence - Crafting stunning, responsive, and user-friendly interfaces.
🔹 Backend Mastery - Developing robust APIs, secure databases, and high-performing architectures.
🔹 Problem Solver - Turning complex challenges into innovative solutions.
🔹 Tech-Driven & Future-Ready - Always staying ahead with modern frameworks and best practices.

I am not just a coder—I am a creator, problem-solver, and innovator. Whether it's building a brand-new platform, optimizing existing systems, or creating seamless integrations, I bring ideas to life with efficiency, precision, and creativity.

Let's collaborate and build something extraordinary together!`;

  const [displayedText, setDisplayedText] = useState<string>(""); // Controls typing effect
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false); // Flag for highlights

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText((prev) => prev + fullText[i]); // Gradually add letters
        i++;
      } else {
        clearInterval(interval);
        setIsTypingComplete(true); // Once done, allow highlighting
      }
    }, 20); // Adjust typing speed

    return () => clearInterval(interval);
  }, []);

  // **Function to apply highlighting** (Splits text into JSX elements)
  const highlightKeywords = (text: string): React.ReactNode[] => {
    const keywords: string[] = [
      "Powerful Digital Solutions",
      "Full-Stack Developer",
      "high-performance",
      "scalable",
      "intuitive applications",
      "seamless user experiences",
      "React",
      "Next.js",
      "Laravel",
      "Node.js",
      "Frontend Excellence",
      "Backend Mastery",
      "Problem Solver",
      "Tech-Driven & Future-Ready",
      "creator",
      "problem-solver",
      "innovator",
      "efficiency",
      "precision",
      "creativity",
      "extraordinary",
    ];

    // **Split text into parts**
    const regex = new RegExp(`(${keywords.join("|")})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      keywords.includes(part) ? (
        <span key={index} className={styles.highlight}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className={styles.aboutWrapper}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      </motion.h1>

      <p className={styles.typingEffect}>
        {isTypingComplete ? highlightKeywords(displayedText) : displayedText}
      </p>
    </div>
  );
}
