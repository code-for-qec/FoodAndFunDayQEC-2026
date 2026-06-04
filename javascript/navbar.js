document.addEventListener("DOMContentLoaded", function () {
    // Check the current page path
    const currentPage = window.location.pathname;
    
    // Check active pages
    const isHome = currentPage.endsWith('index.html') || currentPage.endsWith('/');
    const isDisco = currentPage.includes('discotheque.html');
    const isGaming = currentPage.includes('gaming.html');
    const isFootball = currentPage.includes('football.html');
    const isFood = currentPage.includes('foodstalls.html');
    const isActivities = currentPage.includes('activities.html');

    // The navbar HTML using our new layout classes (no Tailwind!)
    const navbarHTML = `
    <nav id="qec-main-nav" class="main-navbar">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <!-- Logo & Brand -->
          <a href="../htmlfiles/index.html" class="flex items-center gap-2" style="text-decoration: none;">
            <span class="text-xl font-bold tracking-wide text-gold" style="font-family: var(--font-heading);">
              Food & Fun Day
            </span>
            <span class="text-xs uppercase font-bold tracking-widest px-2 py-0.5 rounded border" style="background: rgba(223, 178, 107, 0.15); border-color: rgba(223, 178, 107, 0.3); color: var(--color-gold);">2K26</span>
          </a>

          <!-- Mobile Toggle Button -->
          <button id="menu-toggle" class="text-gold" style="background: transparent; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center;">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 1.5rem; height: 1.5rem;">
              <path id="menu-icon-path" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <!-- Desktop Menu links -->
          <ul id="desktop-links" class="flex items-center gap-4 text-sm font-semibold" style="list-style: none; margin: 0; padding: 0; font-family: var(--font-heading);">
            <li>
              <a href="../htmlfiles/index.html" class="nav-link ${isHome ? 'active' : ''}">
                Home
              </a>
            </li>
            <li>
              <a href="../htmlfiles/discotheque.html" class="nav-link ${isDisco ? 'active' : ''}">
                <img src="../icons and logos/QECLogoDiscoNoText.png" alt="Discotheque Icon" class="h-6 w-6 object-contain" style="width: 1.25rem; height: 1.25rem;">
                Disco
              </a>
            </li>
            <li>
              <a href="../htmlfiles/gaming.html" class="nav-link ${isGaming ? 'active' : ''}">
                <img src="../icons and logos/QECLogoPixelArtNoText.png" alt="Gaming Icon" class="h-6 w-6 object-contain" style="width: 1.25rem; height: 1.25rem;">
                Gaming
              </a>
            </li>
            <li>
              <a href="../htmlfiles/football.html" class="nav-link ${isFootball ? 'active' : ''}">
                <img src="../icons and logos/QECLogoFootballNoText.png" alt="Football Icon" class="h-6 w-6 object-contain" style="width: 1.25rem; height: 1.25rem;">
                Football
              </a>
            </li>
            <li>
              <a href="../htmlfiles/foodstalls.html" class="nav-link ${isFood ? 'active' : ''}">
                <img src="../icons and logos/QECLogoFoodNoText.png" alt="Food Stalls Icon" class="h-6 w-6 object-contain" style="width: 1.25rem; height: 1.25rem;">
                Food Stalls
              </a>
            </li>
            <li>
              <a href="../htmlfiles/activities.html" class="nav-link ${isActivities ? 'active' : ''}">
                <img src="../icons and logos/QECLogoActivitiesNoText.png" alt="Activities Icon" class="h-6 w-6 object-contain" style="width: 1.25rem; height: 1.25rem;">
                Activities
              </a>
            </li>
          </ul>          
        </div>

        <!-- Mobile Menu (Accordion Panel) -->
        <div id="mobile-menu" class="mobile-nav-drawer" style="max-height: 0px; overflow: hidden; transition: max-height 0.3s ease-in-out; border-radius: 12px; margin-top: 1rem;">
          <ul class="flex flex-col gap-2 p-4 text-sm font-semibold" style="list-style: none; margin: 0; padding: 1rem 1.5rem; font-family: var(--font-heading);">
              <li>
                <a href="../htmlfiles/index.html" class="nav-link ${isHome ? 'active' : ''}" style="display: block; padding: 0.5rem 0;">
                  Home
                </a>
              </li>
              <li>
                <a href="../htmlfiles/discotheque.html" class="nav-link ${isDisco ? 'active' : ''}" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0;">
                  <img src="../icons and logos/QECLogoDiscoNoText.png" alt="Discotheque Icon" class="h-7 w-7 object-contain" style="width: 1.5rem; height: 1.5rem;">
                  Discotheque
                </a>
              </li>
              <li>
                <a href="../htmlfiles/gaming.html" class="nav-link ${isGaming ? 'active' : ''}" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0;">
                  <img src="../icons and logos/QECLogoPixelArtNoText.png" alt="Gaming Icon" class="h-7 w-7 object-contain" style="width: 1.5rem; height: 1.5rem;">
                  Gaming
                </a>
              </li>
              <li>
                <a href="../htmlfiles/football.html" class="nav-link ${isFootball ? 'active' : ''}" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0;">
                  <img src="../icons and logos/QECLogoFootballNoText.png" alt="Football Icon" class="h-7 w-7 object-contain" style="width: 1.5rem; height: 1.5rem;">
                  Football Tournament
                </a>
              </li>
              <li>
                <a href="../htmlfiles/foodstalls.html" class="nav-link ${isFood ? 'active' : ''}" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0;">
                  <img src="../icons and logos/QECLogoFoodNoText.png" alt="Food Stalls Icon" class="h-7 w-7 object-contain" style="width: 1.5rem; height: 1.5rem;">
                  Food Stalls
                </a>
              </li>
              <li>
                <a href="../htmlfiles/activities.html" class="nav-link ${isActivities ? 'active' : ''}" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0;">
                  <img src="../icons and logos/QECLogoActivitiesNoText.png" alt="Activities Icon" class="h-7 w-7 object-contain" style="width: 1.5rem; height: 1.5rem;">
                  Activities
                </a>
              </li>
          </ul>   
        </div>
    </nav>
    `;

    const navbarContainer = document.getElementById("navbar");
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;

        // Hide desktop links and show mobile menu button dynamically or style it with CSS
        const style = document.createElement("style");
        style.innerHTML = `
            #menu-toggle {
                display: flex;
            }
            #desktop-links {
                display: none;
            }
            @media (min-width: 768px) {
                #menu-toggle {
                    display: none;
                }
                #desktop-links {
                    display: flex;
                }
                #mobile-menu {
                    display: none !important;
                }
            }
        `;
        document.head.appendChild(style);

        // Mobile menu toggle
        const toggle = document.getElementById("menu-toggle");
        const mobileMenu = document.getElementById("mobile-menu");
        const menuIconPath = document.getElementById("menu-icon-path");

        toggle.addEventListener("click", () => {
            const isClosed = mobileMenu.style.maxHeight === "0px" || !mobileMenu.style.maxHeight;
            
            if (isClosed) {
                mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
                // Transform burger menu icon to "X"
                menuIconPath.setAttribute("d", "M6 18L18 6M6 6l12 12");
            } else {
                mobileMenu.style.maxHeight = "0px";
                // Transform "X" back to burger menu icon
                menuIconPath.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
            }
        });

        // Scroll awareness
        const navEl = document.getElementById("qec-main-nav");
        function checkScroll() {
            if (window.scrollY > 80) {
                navEl.classList.add("scrolled");
            } else {
                navEl.classList.remove("scrolled");
            }
        }
        
        window.addEventListener("scroll", checkScroll);
        checkScroll(); // Check initially
    }
});
