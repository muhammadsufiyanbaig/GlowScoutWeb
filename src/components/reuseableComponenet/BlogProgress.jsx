"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";

export function BlogProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const calculatedProgress = (scrolled / totalHeight) * 100;
      setProgress(calculatedProgress);
    };

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="progress-container bg-lightbg rounded-full py-3 px-6 
fixed bottom-8 left-1/2 transform -translate-x-1/2 w-[50%] text-center z-1000"
    >
      <p className="text-center text-sm text-darkMahron">
        Reading progress {Math.round(progress)}%
      </p>
      <Progress value={progress} className="w-full bg-lighttext border" />
    </div>
  );
}

export default BlogProgress;
