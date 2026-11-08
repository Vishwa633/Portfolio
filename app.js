/* Content is usable before any optional visual effects load. */
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const desktop = matchMedia('(min-width: 1025px) and (pointer: fine)');
const allowEffects = () => desktop.matches && !reducedMotion.matches && !navigator.connection?.saveData;

const menuButton = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
function setMenu(open) {
    menuButton.classList.toggle('active', open);
    menuButton.setAttribute('aria-expanded', String(open));
    mobileNav.classList.toggle('active', open);
    mobileNav.setAttribute('aria-hidden', String(!open));
    mobileNav.inert = !open;
}
menuButton.addEventListener('click', () => setMenu(!mobileNav.classList.contains('active')));
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('click', event => {
    if (!event.target.closest('header')) setMenu(false);
});
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobileNav.classList.contains('active')) {
        setMenu(false);
        menuButton.focus();
    }
});

// One-time reveals: no animation library or synchronous scroll layout reads.
if ('IntersectionObserver' in window) {
    const reveal = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('revealed');
            reveal.unobserve(entry.target);
        });
    }, { threshold: 0.08 });
    if (allowEffects()) {
        document.querySelectorAll('section [data-aos]').forEach(element => {
            if (element.getBoundingClientRect().top > innerHeight) {
                element.classList.add('reveal-pending');
                reveal.observe(element);
            }
        });
    }
    const sections = new Map();
    const navigation = new IntersectionObserver(entries => {
        entries.forEach(entry => sections.set(entry.target.id, entry.isIntersecting));
        const active = [...sections].find(([, visible]) => visible)?.[0];
        document.querySelectorAll('nav a[href^="#"]').forEach(link => {
            link.classList.toggle('active', link.hash === `#${active}`);
        });
    }, { rootMargin: '-15% 0px -55% 0px' });
    document.querySelectorAll('section[id]').forEach(section => navigation.observe(section));
}
document.querySelectorAll('.bar-fill').forEach(bar => {
    bar.style.width = bar.dataset.progress;
});

// Only import WebGL on larger devices, or after an explicit mobile request.
const robotStage = document.getElementById('robotStage');
const robotLaunch = document.getElementById('robotLaunch');
let robotLoading = false;
async function loadRobot() {
    if (robotLoading) return;
    robotLoading = true;
    robotLaunch.disabled = true;
    robotLaunch.querySelector('span').textContent = 'Opening robot…';
    try {
        await import('https://unpkg.com/@splinetool/viewer@1.12.94/build/spline-viewer.js');
        const viewer = document.createElement('spline-viewer');
        viewer.setAttribute('url', 'https://prod.spline.design/XxTRTImXhj-7cSPR/scene.splinecode');
        viewer.setAttribute('loading-anim-type', 'none');
        robotStage.replaceChildren(viewer);
        robotStage.classList.add('robot-loaded');
    } catch {
        robotLoading = false;
        robotLaunch.disabled = false;
        robotLaunch.querySelector('span').textContent = 'Try opening the robot again ↗';
    }
}
robotLaunch.addEventListener('click', loadRobot);
if (allowEffects()) {
    const start = () => { if (allowEffects()) loadRobot(); };
    if ('requestIdleCallback' in window) requestIdleCallback(start, { timeout: 2500 });
    else setTimeout(start, 1000);
    const planet = document.querySelector('.contact-3d iframe');
    if (planet && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting) && allowEffects()) {
                planet.src = planet.dataset.src;
                observer.disconnect();
            }
        }, { rootMargin: '150px' });
        observer.observe(planet);
    }
}

// Snow is limited to 30fps on desktops; stop drawing in hidden tabs.
const canvas = document.getElementById('snowCanvas');
let snowFrame = 0;
let lastFrame = 0;
let flakes;
function syncSnow() {
    cancelAnimationFrame(snowFrame);
    canvas.hidden = !allowEffects();
    if (!allowEffects() || document.hidden) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    flakes = Array.from({ length: 35 }, () => ({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, r: 1 + Math.random() * 2, speed: 0.5 + Math.random() }));
    function draw(time) {
        if (time - lastFrame >= 1000 / 30) {
            lastFrame = time;
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = 'rgba(255,255,255,0.55)';
            context.beginPath();
            flakes.forEach(flake => {
                flake.y = (flake.y + flake.speed) % canvas.height;
                context.moveTo(flake.x, flake.y);
                context.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
            });
            context.fill();
        }
        snowFrame = requestAnimationFrame(draw);
    }
    snowFrame = requestAnimationFrame(draw);
}
syncSnow();
document.addEventListener('visibilitychange', syncSnow);
window.addEventListener('resize', syncSnow, { passive: true });
reducedMotion.addEventListener('change', syncSnow);

// Inline feedback avoids a blocking third-party modal dependency.
const form = document.getElementById('my-form');
const formStatus = document.getElementById('my-form-status');
const submitButton = document.getElementById('my-form-button');
form.addEventListener('submit', async event => {
    event.preventDefault();
    if (submitButton.disabled) return;
    submitButton.disabled = true;
    formStatus.textContent = 'Sending your message…';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: { Accept: 'application/json' },
            signal: controller.signal
        });
        if (!response.ok) throw new Error('Submission failed');
        formStatus.textContent = 'Thanks! Your message has been sent successfully.';
        form.reset();
    } catch {
        formStatus.textContent = 'Unable to confirm delivery. Please check your connection and try again.';
    } finally {
        clearTimeout(timeout);
        submitButton.disabled = false;
    }
});
