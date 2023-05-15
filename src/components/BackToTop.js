import React, { useState, useEffect } from 'react';
import { BsArrowUpCircleFill } from "react-icons/bs";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <div
          className="fixed z-50 bottom-4 right-4"
          onClick={handleClick}
          role="button"
          aria-label="Back to top"
        >
          <BsArrowUpCircleFill className="text-4xl border border-transparent border-solid rounded-full text-dark bg-dark text-light dark:border-light" />
        </div>
      )}
    </>
  );
};

export default BackToTop;
