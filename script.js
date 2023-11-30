let currentPosition = 0;
let autoScrollInterval;

function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        scrollCarousel(1);
    }, 3000);
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

function scrollCarousel(direction) {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');

    const itemWidth = items[0].offsetWidth + 10;
    const trackWidth = track.offsetWidth;
    const maxPosition = (items.length - 1) * itemWidth * -1;

    if (direction === -1 && currentPosition < 0) {
        currentPosition += itemWidth;
    } else if (direction === 1 && currentPosition > maxPosition) {
        currentPosition -= itemWidth;
    } else if (direction === 1 && currentPosition === maxPosition) {
        currentPosition = 0;
    }

    track.style.transform = `translateX(${currentPosition}px)`;
}

startAutoScroll();

document.querySelector('.carousel-track').addEventListener('mouseover', stopAutoScroll);

document.querySelector('.carousel-track').addEventListener('mouseout', startAutoScroll);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === '' || email === '') {
        alert('Please fill in all fields');
        return false;
    }

    return true;
}

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        const answer = item.querySelector('.answer');
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});

function toggleSideBar() {
    const sideBar = document.querySelector('.side-bar');
    sideBar.classList.toggle('active');
}

const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
    const popUp = document.createElement('div');
    popUp.classList.add('pop-up');
    popUp.innerText = 'Pop-up Text';

    link.appendChild(popUp);

    link.addEventListener('mouseover', () => {
        popUp.style.opacity = '1';
        popUp.style.visibility = 'visible';
    });

    link.addEventListener('mouseout', () => {
        popUp.style.opacity = '0';
        popUp.style.visibility = 'hidden';
    });
});

function toggleAnswer(answerId) {
    const answerElement = document.getElementById(answerId);
    answerElement.style.display = (answerElement.style.display === 'none' || answerElement.style.display === '') ? 'block' : 'none';
}

function autoScroll() {
    const newsFeedCard = document.getElementById('news-feed-card');
    const newsFeedContent = document.getElementById('news-feed');

    setInterval(() => {
        const firstItem = newsFeedContent.firstElementChild;
        newsFeedContent.appendChild(firstItem.cloneNode(true));
        newsFeedContent.removeChild(firstItem);
    }, 3000); // Adjust the interval (3000ms in this example) for the scrolling speed
}

