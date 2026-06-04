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
    const isTickets = currentPage.includes('tickets.html');

    // Translucent glassmorphic background for navbar
    const navbarBgClass = 'bg-[#0b1a18]/85 backdrop-blur-md border-b border-[#dfb26b]/20';

    const navbarHTML = `
    <nav class="${navbarBgClass} text-[#ede0cb] px-6 py-4 fixed top-0 left-0 w-full z-50 transition-all duration-300">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <!-- Logo & Brand -->
          <a href="../htmlfiles/index.html" class="flex items-center gap-2 group">
            <span class="text-xl font-bold tracking-wide font-['Outfit'] text-[#dfb26b] group-hover:text-[#f1d89b] transition-colors">
              Food & Fun Day
            </span>
            <span class="bg-[#dfb26b]/15 text-[#dfb26b] text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border border-[#dfb26b]/30">2K26</span>
          </a>

          <!-- Mobile Toggle Button -->
          <button id="menu-toggle" class="md:hidden text-[#dfb26b] hover:text-[#f1d89b] focus:outline-none transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path id="menu-icon-path" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <!-- Desktop Menu links -->
          <ul class="hidden md:flex items-center space-x-1 text-sm font-semibold font-['Outfit']">
            <li>
              <a href="../htmlfiles/index.html" class="flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-200 ${isHome ? 'text-[#dfb26b] bg-[#dfb26b]/10' : 'hover:text-white hover:bg-[#dfb26b]/5'}">
                Home
              </a>
            </li>
            <li>
              <a href="../htmlfiles/discotheque.html" class="flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-200 ${isDisco ? 'text-[#dfb26b] bg-[#dfb26b]/10' : 'hover:text-white hover:bg-[#dfb26b]/5'}">
                <img src="../icons and logos/QECLogoDiscoNoText.png" alt="Discotheque Icon" class="h-6 w-6 object-contain" />
                Disco
              </a>
            </li>
            <li>
              <a href="../htmlfiles/gaming.html" class="flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-200 ${isGaming ? 'text-[#dfb26b] bg-[#dfb26b]/10' : 'hover:text-white hover:bg-[#dfb26b]/5'}">
                <img src="../icons and logos/QECLogoPixelArtNoText.png" alt="Gaming Icon" class="h-6 w-6 object-contain" />
                Gaming
              </a>
            </li>
            <li>
              <a href="../htmlfiles/football.html" class="flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-200 ${isFootball ? 'text-[#dfb26b] bg-[#dfb26b]/10' : 'hover:text-white hover:bg-[#dfb26b]/5'}">
                <img src="../icons and logos/QECLogoFootballNoText.png" alt="Football Icon" class="h-6 w-6 object-contain" />
                Football
              </a>
            </li>
            <li>
              <a href="../htmlfiles/foodstalls.html" class="flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-200 ${isFood ? 'text-[#dfb26b] bg-[#dfb26b]/10' : 'hover:text-white hover:bg-[#dfb26b]/5'}">
                <img src="../icons and logos/QECLogoFoodNoText.png" alt="Food Stalls Icon" class="h-6 w-6 object-contain" />
                Food Stalls
              </a>
            </li>
            <li>
              <a href="../htmlfiles/activities.html" class="flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-200 ${isActivities ? 'text-[#dfb26b] bg-[#dfb26b]/10' : 'hover:text-white hover:bg-[#dfb26b]/5'}">
                <img src="../icons and logos/QECLogoActivitiesNoText.png" alt="Activities Icon" class="h-6 w-6 object-contain" />
                Activities
              </a>
            </li>
            <li class="pl-2">
              <a href="../htmlfiles/tickets.html" class="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#f1d89b] to-[#dfb26b] text-[#071210] rounded-full font-bold shadow-md hover:scale-105 transition-all duration-300 ${isTickets ? 'ring-2 ring-[#dfb26b]' : ''}">
                🎟️ Book Tickets
              </a>
            </li>
          </ul>          
        </div>

        <!-- Mobile Menu (Accordion Panel) -->
        <div id="mobile-menu" class="md:hidden max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
          <ul class="flex flex-col gap-2 mt-4 pt-4 border-t border-[#dfb26b]/15 text-sm font-semibold font-['Outfit']">
              <li>
                <a href="../htmlfiles/index.html" class="flex items-center gap-3 px-3 py-2.5 rounded-lg ${isHome ? 'text-[#dfb26b] bg-[#dfb26b]/10' : 'hover:text-white hover:bg-[#dfb26b]/5'}">
                  Home
                </a>
              </li>
              <li>
                <a href="../htmlfiles/discotheque.html" class="flex items-center gap-3 px-3 py-2.5 rounded-lg ${isDisco ? 'text-[#dfb26b] bg-[#dfb26b]/10' : 'hover:text-white hover:bg-[#dfb26b]/5'}">
                  <img src="../icons and logos/QECLogoDiscoNoText.png" alt="Discotheque Icon" class="h-7 w-7 object-contain" />
                  Discotheque
                </a>
              </li>
              <li>
                <a href="../htmlfiles/gaming.html" class="flex items-center gap-3 px-3 py-2.5 rounded-lg ${isGaming ? 'text-[#dfb26b] bg-[#dfb26b]/10' : 'hover:text-white hover:bg-[#dfb26b]/5'}">
                  <img src="../icons and logos/QECLogoPixelArtNoText.png" alt="Gaming Icon" class="h-7 w-7 object-contain" />
                  Gaming
                </a>
              </li>
              <li>
                <a href="../htmlfiles/football.html" class="flex items-center gap-3 px-3 py-2.5 rounded-lg ${isFootball ? 'text-[#dfb26b] bg-[#dfb26b]/10' : 'hover:text-white hover:bg-[#dfb26b]/5'}">
                  <img src="../icons and logos/QECLogoFootballNoText.png" alt="Football Icon" class="h-7 w-7 object-contain" />
                  Football Tournament
                </a>
              </li>
              <li>
                <a href="../htmlfiles/foodstalls.html" class="flex items-center gap-3 px-3 py-2.5 rounded-lg ${isFood ? 'text-[#dfb26b] bg-[#dfb26b]/10' : 'hover:text-white hover:bg-[#dfb26b]/5'}">
                  <img src="../icons and logos/QECLogoFoodNoText.png" alt="Food Stalls Icon" class="h-7 w-7 object-contain" />
                  Food Stalls
                </a>
              </li>
              <li>
                <a href="../htmlfiles/activities.html" class="flex items-center gap-3 px-3 py-2.5 rounded-lg ${isActivities ? 'text-[#dfb26b] bg-[#dfb26b]/10' : 'hover:text-white hover:bg-[#dfb26b]/5'}">
                  <img src="../icons and logos/QECLogoActivitiesNoText.png" alt="Activities Icon" class="h-7 w-7 object-contain" />
                  Activities
                </a>
              </li>
              <li class="mt-2">
                <a href="../htmlfiles/tickets.html" class="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#f1d89b] to-[#dfb26b] text-[#071210] rounded-full font-bold shadow-md">
                  🎟️ Book Tickets
                </a>
              </li>
          </ul>   
        </div>
    </nav>
    `;

    const navbarContainer = document.getElementById("navbar");
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;

        // Mobile menu toggle
        const toggle = document.getElementById("menu-toggle");
        const mobileMenu = document.getElementById("mobile-menu");
        const menuIconPath = document.getElementById("menu-icon-path");

        toggle.addEventListener("click", () => {
            const isClosed = mobileMenu.classList.contains("max-h-0") || !mobileMenu.style.maxHeight;
            
            if (isClosed) {
                mobileMenu.classList.remove("max-h-0");
                mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
                // Transform burger menu icon to "X"
                menuIconPath.setAttribute("d", "M6 18L18 6M6 6l12 12");
            } else {
                mobileMenu.style.maxHeight = "0px";
                mobileMenu.classList.add("max-h-0");
                // Transform "X" back to burger menu icon
                menuIconPath.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
            }
        });
    }
});

