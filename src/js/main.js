/* Your JS here. */
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    const navbar = document.getElementById("navbar");
    const links = document.querySelectorAll("#navbar a");

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.style.padding = "30px 5%";
        links.forEach(a => a.style.fontSize = "16px");
    } else {
        navbar.style.padding = "80px 5%";
        links.forEach(a => a.style.fontSize = "20px");
    }
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navbar a");
const nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    let current = "";
    const navBottom = window.scrollY + nav.offsetHeight;
    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (navBottom >= top && navBottom < bottom) {
            let id = section.getAttribute("id");
            if (id === "carousel") {
                id = "items";
            }
            if (id === "footer") {
                id = "augments";
            }
            current = id;
        }
  });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        const modalId = icon.getAttribute('data-modal');
        document.getElementById(modalId).style.display = "flex";
    });
});

const closes = document.querySelectorAll('.close');
closes.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = "none";
    });
});

window.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = "none";
    }
});

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    }
    if (index >= slides.length) {
        index = 0;
    }
    currentIndex = index;

    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;
}

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

const columns = document.querySelectorAll('.column');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('show');
        }
    });
}, { threshold: 0.3 });

columns.forEach(col => observer.observe(col));