document.addEventListener('DOMContentLoaded', function() {
    // Skills Radar Chart
    const skillsCtx = document.getElementById('skillsRadarChart');
    if (skillsCtx) {
        const skillsChart = new Chart(skillsCtx, {
            type: 'radar',
            data: {
                labels: [
                    'Redes Cisco',
                    'Seguridad', 
                    'Firewalls',
                    'Python',
                    'Bases de Datos',
                    'Virtualización',
                    'Radioenlaces',
                    'Automatización'
                ],
                datasets: [{
                    label: 'Nivel de habilidad',
                    data: [90, 85, 80, 75, 70, 80, 75, 85],
                    backgroundColor: 'rgba(41, 98, 255, 0.2)',
                    borderColor: 'rgba(41, 98, 255, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(41, 98, 255, 1)',
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    r: {
                        angleLines: {
                            color: 'rgba(255, 255, 255, 0.1)',
                            lineWidth: 1
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)',
                            circular: true
                        },
                        suggestedMin: 0,
                        suggestedMax: 100,
                        pointLabels: {
                            color: '#fff',
                            font: {
                                family: 'Open Sans',
                                size: 12
                            },
                            backdropColor: 'transparent'
                        },
                        ticks: {
                            display: false,
                            backdropColor: 'transparent',
                            stepSize: 20
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.raw}%`;
                            }
                        }
                    }
                },
                elements: {
                    line: {
                        tension: 0.1,
                        borderWidth: 2
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });

        // Animación personalizada al aparecer
        skillsCtx.style.opacity = '0';
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillsCtx.style.transition = 'opacity 1s ease';
                    skillsCtx.style.opacity = '1';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(skillsCtx);
    }
});