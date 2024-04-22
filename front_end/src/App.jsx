
import { RouterProvider } from 'react-router-dom'
import {router} from './router/index.jsx'
import './App.css'
import UserContext from './context/UserContext.jsx'
import  ProductContext from './context/ProductContext.jsx'
import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Load synchronous scripts first
    const syncScripts = [
      'https://code.jquery.com/jquery-3.6.0.min.js',
      './assets/js/bootstrap/bootstrap.bundle.min.js',
      './assets/js/feather/feather.min.js',
      './assets/js/lazysizes.min.js',
      './assets/js/ion.rangeSlider.min.js',
    ];
  
    // Load async scripts
    const asyncScripts = [
      './assets/js/filter.js',
      './assets/js/newsletter.js',
      './assets/js/bootstrap/bootstrap-notify.min.js',
      './assets/js/theme-setting.js',
      './assets/js/script.js',
      './assets/js/slick/slick.js',
      './assets/js/slick/slick-animation.min.js',
      './assets/js/slick/custom_slick.js',
    ];
  
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };
  
    const loadScripts = async (scripts) => {
      for (const src of scripts) {
        try {
          await loadScript(src);
          // console.log(`Loaded script: ${src}`);
        } catch (error) {
          // console.error(`Failed to load script: ${src}`, error);
        }
      }
    };
  
    // Load synchronous scripts first
    loadScripts(syncScripts).then(() => {
      // Load async scripts
      loadScripts(asyncScripts);
    });
  
    // Cleanup
    return () => {
      [...syncScripts, ...asyncScripts].forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script && script.parentNode === document.body) {
          document.body.removeChild(script);
          // console.log(`Removed script: ${src}`);
        }
      });
    };
  });
  
  
  return (
    <>
    <UserContext > 
     <ProductContext >
      <RouterProvider router={router} />
     </ProductContext>
    </UserContext>

    </>
  )
}