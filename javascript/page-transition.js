document.addEventListener("DOMContentLoaded", () => {
    // Add page transition fade-in class on page load
    document.body.classList.add("page-transition-in");
    
    // Clean it up after the animation completes
    setTimeout(() => {
        document.body.classList.remove("page-transition-in");
    }, 500);

    // Intercept clicks on links
    document.addEventListener("click", (e) => {
        const link = e.target.closest("a");
        if (!link) return;

        const href = link.getAttribute("href");
        
        // Skip anchors, javascript, target="_blank", or key modifiers (ctrl, cmd, etc.)
        if (
            href && 
            !href.startsWith("#") && 
            !href.startsWith("javascript:") && 
            !href.startsWith("tel:") && 
            !href.startsWith("mailto:") &&
            link.target !== "_blank" &&
            !e.metaKey && 
            !e.ctrlKey && 
            !e.shiftKey && 
            !e.altKey
        ) {
            // Confirm it is an internal host link
            const currentHost = window.location.host;
            let linkURL;
            try {
                linkURL = new URL(link.href, window.location.href);
            } catch (err) {
                return;
            }

            if (currentHost === linkURL.host) {
                e.preventDefault();
                document.body.classList.add("page-transition-out");
                setTimeout(() => {
                    window.location.href = link.href;
                }, 300);
            }
        }
    });
});
