document.addEventListener('DOMContentLoaded', function () {
    const conatiner1Description = document.getElementById('container1-description');
    const container1image = document.getElementById('container1-image');
    const container2 = document.getElementById('container2');
    const container3 = document.getElementById('container3');
    const cards = document.querySelectorAll('.contact-form, .contact-number, .open-time');

    window.addEventListener('scroll', () => {
        let value = window.scrollY;
        conatiner1Description.style.left = value * -0.8 + "px";
        conatiner1Description.style.top = value * -0.8 + "px";
        container1image.style.right = value * -0.8 + "px";
        container2.style.left = value * -0.8 + "px";
    });

    function handleIntersection(entries, observer) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                }, index * 800);
            } else {
                entry.target.style.opacity = '0';
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.4,
    });

    observer.observe(container3);

    cards.forEach(card => {
        observer.observe(card);
    });
});

