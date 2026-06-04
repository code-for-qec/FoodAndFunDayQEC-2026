document.addEventListener("DOMContentLoaded", () => {
    // Check session storage to see if splash has been shown in the current browser session
    if (sessionStorage.getItem("qec_splash_shown")) {
        return;
    }

    // Create the splash overlay container
    const splash = document.createElement("div");
    splash.id = "qec-splash-screen";
    splash.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #071210;
        z-index: 99999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 1;
        transition: opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
    `;

    // Inner contents
    splash.innerHTML = `
        <div style="text-align: center; display: flex; flex-direction: column; align-items: center; gap: 1.5rem;">
            <div style="position: relative; width: 120px; height: 120px; opacity: 0; transform: scale(0.8); animation: splashLogoIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;">
                <div style="position: absolute; inset: 0; background: rgba(223, 178, 107, 0.25); filter: blur(24px); border-radius: 50%;"></div>
                <img src="../icons and logos/QECLogo.png" alt="QEC Logo" style="position: relative; width: 100%; height: 100%; object-fit: contain;">
            </div>
            <h1 style="font-family: 'Outfit', sans-serif; font-size: 2.2rem; font-weight: 800; color: #f1d89b; margin: 0; opacity: 0; transform: translateY(20px); animation: splashTextIn 0.6s ease-out 0.4s forwards; letter-spacing: -0.02em;">
                Queen Elizabeth College
            </h1>
            <p style="font-family: 'Outfit', sans-serif; font-size: 1.1rem; font-weight: 600; color: #dfb26b; margin: 0; opacity: 0; transform: translateY(20px); animation: splashTextIn 0.6s ease-out 0.6s forwards; text-transform: uppercase; letter-spacing: 0.15em;">
                Food & Fun Day 2026
            </p>
        </div>
    `;

    // Inject temporary styles for the entry animations
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes splashLogoIn {
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
        @keyframes splashTextIn {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(splash);

    // Disable scrolling while splash is running
    document.body.style.overflow = "hidden";

    // Smooth exit transition
    setTimeout(() => {
        splash.style.opacity = "0";
        splash.style.transform = "scale(1.04)";
        document.body.style.overflow = "";
        
        setTimeout(() => {
            splash.remove();
        }, 600);
        
        // Save flag in sessionStorage
        sessionStorage.setItem("qec_splash_shown", "true");
    }, 2200);
});
