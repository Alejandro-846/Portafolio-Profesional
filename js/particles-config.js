document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 60,  // Reducido para mejor visibilidad del logo
                    "density": {
                        "enable": true,
                        "value_area": 500  // Más dispersas
                    }
                },
                "color": {
                    "value": "#2962FF"  // Mantiene el color primario
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.3,  // Más transparente
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 2.5,  // Tamaño reducido
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 250,  // Mayor distancia
                    "color": "#2962FF",
                    "opacity": 0.9,  // Más transparente
                    "width": 0.9  // Más delgado
                },
                "move": {
                    "enable": true,
                    "speed": 1.5,  // Movimiento más lento
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"  // Cambiado a repulsión para mejor visibilidad
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"  // Empuja las partículas al hacer clic
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 180,
                        "line_linked": {
                            "opacity": 0.35
                        }
                    },
                    "bubble": {
                        "distance": 200,
                        "size": 10,
                        "duration": 2,
                        "opacity": 0.8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 100,  // Distancia de repulsión
                        "duration": 0.8  // Duración más corta
                    },
                    "push": {
                        "particles_nb": 6  // Menos partículas al hacer clic
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
});