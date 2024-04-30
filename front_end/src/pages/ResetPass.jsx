import React, { useEffect } from 'react';
export default function ForgotPass() {
    useEffect(() => {
        const scripts = [
          'https://code.jquery.com/jquery-3.6.0.min.js',
          './assets/js/bootstrap/bootstrap.bundle.min.js',
          './assets/js/script.js',
        ];
    
        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                if (document.querySelector(`script[src="${src}"]`)) {
                    resolve();
                    return;
                }
    
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
    
                script.onload = () => resolve();
                script.onerror = () => reject(new Error(`Failed to load script ${src}`));
    
                document.body.appendChild(script);
            });
        };
    
        const loadScriptsSequentially = async () => {
            for (let src of scripts) {
                try {
                    await loadScript(src);
                } catch (error) {
                    console.error(error);
                }
            }
        };
    
        loadScriptsSequentially();
    
        return () => {
            // Cleanup
            scripts.forEach(src => {
                const script = document.querySelector(`script[src="${src}"]`);
                if (script) {
                    document.body.removeChild(script);
                }
            });
        };
    }, []);
    return (
    <>
 <div className="login-section">
  <div className="materialContainer">
    <div className="box">
      <form method="POST" action="{{route('password.update')}}">
        <input type="hidden" name="token" defaultValue="{{ $token }}" />
        <div className="login-title">
          <h2>Reset Password</h2>
        </div>

        <div className="input">
          <label htmlFor="pass">New Password</label>
          <input
            type="password"
            id="pass"
            className="block mt-1 w-full"
            name="password"
            required=""
            autoComplete="new-password"
          />
      
        </div>
        <div className="input">
          <label htmlFor="compass">Confirm Password</label>
          <input
            type="password"
            id="compass"
            className="block mt-1 w-full"
            name="password_confirmation"
            required=""
            autoComplete="new-password"
          />
        </div>
        <div className="button login" style={{marginTop: '60px'}}>
          <button type="submit">
            <span>Reset</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

</>)
}