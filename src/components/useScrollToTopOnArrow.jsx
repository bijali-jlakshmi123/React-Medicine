import { useEffect } from 'react';

/**
 * Custom hook to listen for the Up Arrow key press when the user is near the bottom 
 * of the page and automatically scrolls the viewport to the top.
 */
const useScrollToTopOnArrow = () => {
  useEffect(() => {
    const handleKeyUp = (event) => {
      // 1. Check if the pressed key is the Up Arrow key
      if (event.key === 'ArrowUp' || event.keyCode === 38) {
        
        // Calculate scroll metrics
        const { scrollY, innerHeight } = window;
        const documentHeight = document.body.offsetHeight;
        
        // Define tolerance: How close to the absolute bottom is considered "at the bottom" (e.g., 20px)
        // Using a slightly larger tolerance (20px) improves usability
        const scrollTolerance = 20;
        
        // 2. Check if the user is at the very bottom of the page
        // Calculation: current scroll position + visible height >= total document height - tolerance
        if (scrollY + innerHeight >= documentHeight - scrollTolerance) {
          
          // Prevent the default browser scroll action for the Up Arrow
          event.preventDefault(); 
          
          // 3. Execute the smooth scroll to the top
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          
          console.log("Scroll-to-Top triggered by Up Arrow key press at the bottom.");
        }
      }
    };

    // Attach the keyup event listener to the window when the component mounts
    window.addEventListener('keyup', handleKeyUp);

    // Clean up function: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
};

export default useScrollToTopOnArrow;