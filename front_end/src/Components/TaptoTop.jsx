import { useEffect, useState } from 'react';

const TapToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100); // Show when scrolled more than 100px
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`tap-to-top ${isVisible ? 'show' : ''}`}>
      <a href="#home">
        <i className="fas fa-chevron-up"></i>
      </a>
    </div>
  );
};

export default TapToTop;