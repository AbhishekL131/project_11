
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    mobileMenu.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
});



document.getElementById('startButton').addEventListener('click', function() {
    window.location.href = 'form.html';
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);

    alert('Thank you for contacting us! We will get back to you soon.');
    
    document.getElementById('contactForm').reset();
});

// Adding click event listeners to pricing cards
document.querySelectorAll('.pricing-cards .card').forEach(card => {
    card.addEventListener('click', function() {
        const planName = this.querySelector('h3').innerText;
        window.location.href = `payment.html?plan=${planName}`;
    });
});
