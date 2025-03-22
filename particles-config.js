// Particles.js configuration
particlesJS('particles-js', {
  particles: {
    number: {
      value: 100, // Number of particles
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#F1C40F" // Yellow color for particles
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#F1C40F", // Yellow color for lines
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse" // Repulse effect on hover
      },
      onclick: {
        enable: true,
        mode: "push" // Push effect on click (optional)
      },
      resize: true
    }
  },
  retina_detect: true
});
