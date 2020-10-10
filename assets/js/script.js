// Scroll Reveal

window.sr = ScrollReveal();

sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
})

sr.reveal('.about-left', {
    duration: 2000,
    origin: 'left',
    distance: '100px'
})

sr.reveal('.about-right', {
    duration: 2000,
    origin: 'top',
    distance: '100px'
})

sr.reveal('.skill-reveal', {
    duration: 2000,
    origin: 'top',
    distance: '100px'
})

sr.reveal('.portfolio-reveal', {
    duration: 2000,
    origin: 'bottom',
    distance: '50px',
    // viewFactor: 0.2
})