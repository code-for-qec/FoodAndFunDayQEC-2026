document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const particleType = body.getAttribute("data-particles");
    if (!particleType) return;

    // Configuration map for themes
    const configs = {
        disco: {
            emojis: ["🎵", "🎶", "✨", "💜", "🎵"],
            colors: ["#df96ff", "#b53df5", "#dfb26b"],
            maxParticles: 20
        },
        gaming: {
            emojis: ["🕹️", "👾", "⭐", "👾", "🎮"],
            colors: ["#84fbf3", "#34d399", "#a855f7"],
            maxParticles: 15
        },
        football: {
            emojis: ["⚽", "🏆", "⚡", "⚽"],
            colors: ["#34d399", "#60a5fa", "#dfb26b"],
            maxParticles: 15
        },
        food: {
            emojis: ["🍔", "🍜", "🍕", "🥤", "🍿", "🍩"],
            colors: ["#dfb26b", "#f1d89b", "#10b981"],
            maxParticles: 20
        },
        activities: {
            emojis: ["🎈", "🎪", "🎡", "🎢", "🎯"],
            colors: ["#dfb26b", "#84fbf3", "#34d399"],
            maxParticles: 20
        },
        home: {
            emojis: ["✨", "⭐", "✨"],
            colors: ["#dfb26b", "#f1d89b", "#ede0cb"],
            maxParticles: 25
        }
    };

    const config = configs[particleType] || configs.home;

    // Create background canvas
    const canvas = document.createElement("canvas");
    canvas.id = "ambient-particles-canvas";
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.4;
    `;
    body.insertBefore(canvas, body.firstChild);

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    class Particle {
        constructor() {
            this.reset();
            // Start at a random height on initialization to avoid standard bottom grouping
            this.y = Math.random() * height;
        }

        reset() {
            this.x = Math.random() * width;
            this.y = height + 50;
            this.size = Math.random() * 16 + 12; // size in pixels
            this.emoji = config.emojis[Math.floor(Math.random() * config.emojis.length)];
            this.color = config.colors[Math.floor(Math.random() * config.colors.length)];
            this.speedY = Math.random() * 0.5 + 0.2; // slow upward drift
            this.speedX = Math.random() * 0.4 - 0.2; // slight sideways movement
            this.opacity = Math.random() * 0.4 + 0.15;
            this.angle = Math.random() * Math.PI * 2;
            this.spinSpeed = Math.random() * 0.01 - 0.005;
        }

        update() {
            this.y -= this.speedY;
            this.x += this.speedX + Math.sin(this.y / 40) * 0.2;
            this.angle += this.spinSpeed;

            // Recycle off-screen particles
            if (this.y < -50 || this.x < -50 || this.x > width + 50) {
                this.reset();
            }
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            
            // Add subtle glow
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 8;
            
            ctx.font = `${this.size}px sans-serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(this.emoji, 0, 0);
            
            ctx.restore();
        }
    }

    const particles = [];
    for (let i = 0; i < config.maxParticles; i++) {
        particles.push(new Particle());
    }

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    let animationId;
    let isVisible = true;

    function animate() {
        if (!isVisible) return;
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        animationId = requestAnimationFrame(animate);
    }

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            isVisible = false;
            cancelAnimationFrame(animationId);
        } else {
            isVisible = true;
            animate();
        }
    });

    animate();
});
