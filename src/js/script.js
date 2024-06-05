//nature

const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// sidebar
document.getElementById("menu").addEventListener("click", function () {
  toggleSidebar();
});

document.querySelectorAll("#sidebar ul li a").forEach(function (link) {
  link.addEventListener("click", function () {
    toggleSidebar();
  });
});

const toggleSidebar = () => {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-250px";
  } else {
    sidebar.style.left = "0px";
  }
};

window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("blurred");
  } else {
    header.classList.remove("blurred");
  }
});
