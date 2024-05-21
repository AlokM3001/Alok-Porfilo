document.addEventListener("DOMContentLoaded", function() {
    // Countdown Timer
    const countdownElement = document.querySelector('.deal-info .countdown');
    const targetDate = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 hours from now

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `Time left: ${hours}:${minutes}:${seconds}`;

        if (difference < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Deal expired";
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);

    // Carousel Functionality
    const carousels = document.querySelectorAll('.products-carousel, .reviews-carousel');

    carousels.forEach(carousel => {
        let isDown = false;
        let startX;
        let scrollLeft;

        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            carousel.classList.add('active');
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });

        carousel.addEventListener('mouseleave', () => {
            isDown = false;
            carousel.classList.remove('active');
        });

        carousel.addEventListener('mouseup', () => {
            isDown = false;
            carousel.classList.remove('active');
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2; //scroll-fast
            carousel.scrollLeft = scrollLeft - walk;
        });
    });
});
