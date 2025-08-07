  document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

            // Back to top button visibility
            const backToTopButton = document.querySelector('.back-to-top');
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('show');
                } else {
                    backToTopButton.classList.remove('show');
                }
            });

            // Expand service items
            const expandButtons = document.querySelectorAll('.expand-btn');
            expandButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const serviceItem = this.closest('.service-item');
                    const content = serviceItem.querySelector('.service-content');
                    
                    if (content.style.display === 'block') {
                        content.style.display = 'none';
                        this.textContent = '+';
                    } else {
                        content.style.display = 'block';
                        this.textContent = '-';
                    }
                });
            });

        })
    