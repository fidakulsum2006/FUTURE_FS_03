const menuItems = {
  signature: [
    {
      title: "Royal Saffron Lamb",
      price: "$34",
      description: "Slow-braised lamb finished with saffron glaze, velvet puree, and smoked herbs.",
      note: "Most ordered",
      serve: "Signature main",
      image:
        "https://images.pexels.com/photos/28705621/pexels-photo-28705621.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      title: "Emerald Herb Risotto",
      price: "$27",
      description: "Creamy arborio rice with basil oil, parmesan cloud, and crisp garden textures.",
      note: "Vegetarian luxury",
      serve: "Chef's table",
      image:
        "https://images.pexels.com/photos/27039870/pexels-photo-27039870.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      title: "Gold Ember Chicken",
      price: "$29",
      description: "Fire-kissed chicken medallions with citrus butter and charred seasonal vegetables.",
      note: "Guest favorite",
      serve: "Premium plating",
      image:
        "https://images.pexels.com/photos/35546716/pexels-photo-35546716.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
  ],
  seafood: [
    {
      title: "Pearl Coast Salmon",
      price: "$32",
      description: "Pan-seared salmon with lemon foam, tender asparagus, and white wine reduction.",
      note: "Sea luxury",
      serve: "Fine seafood",
      image:
        "https://images.pexels.com/photos/29850420/pexels-photo-29850420.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      title: "Ocean Gold Prawns",
      price: "$36",
      description: "Butter-roasted prawns with garlic silk sauce, herb oil, and citrus pearls.",
      note: "Premium shellfish",
      serve: "Dinner highlight",
      image:
        "https://images.pexels.com/photos/30460547/pexels-photo-30460547.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      title: "Coastal Velvet Bass",
      price: "$35",
      description: "Delicate sea bass with champagne cream, fennel ribbons, and crisp shallots.",
      note: "Refined texture",
      serve: "Elegant course",
      image:
        "https://images.pexels.com/photos/34308310/pexels-photo-34308310.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
  ],
  grill: [
    {
      title: "Fidu's Kitchen Reserve Steak",
      price: "$42",
      description: "Aged steak grilled over live flame, served with truffle butter and gold potato pave.",
      note: "Luxury cut",
      serve: "Prime grill",
      image:
        "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      title: "Smoked Garden Skewers",
      price: "$24",
      description: "Charred paneer and vegetables with herb glaze, tahini cream, and pistachio dust.",
      note: "Modern grill",
      serve: "Vegetarian special",
      image:
        "https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      title: "Fireline Duck Breast",
      price: "$38",
      description: "Roasted duck breast with plum lacquer, wilted greens, and peppered jus.",
      note: "Chef recommended",
      serve: "Evening signature",
      image:
        "https://images.pexels.com/photos/34326264/pexels-photo-34326264.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
  ],
  dessert: [
    {
      title: "White Velvet Cheesecake",
      price: "$15",
      description: "Silky cheesecake with pistachio crumble, vanilla cream, and citrus glaze.",
      note: "Classic luxury",
      serve: "Dessert course",
      image:
        "https://images.pexels.com/photos/27732163/pexels-photo-27732163.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      title: "Golden Date Pudding",
      price: "$14",
      description: "Warm pudding layered with caramel reduction, saffron cream, and toasted nuts.",
      note: "Rich finish",
      serve: "House dessert",
      image:
        "https://images.pexels.com/photos/31269827/pexels-photo-31269827.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      title: "Emerald Mint Opera",
      price: "$16",
      description: "A modern pastry stack with dark chocolate, mint cream, and elegant sugar glass.",
      note: "Visual favorite",
      serve: "Signature sweet",
      image:
        "https://images.pexels.com/photos/29978680/pexels-photo-29978680.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
  ],
};

const testimonials = [
  {
    quote:
      "Fidu's Kitchen delivers the kind of atmosphere and service people usually expect only from top luxury hotels.",
    name: "Aaliya Rahman",
    role: "Food Critic",
  },
  {
    quote:
      "The reservation flow feels premium, the design feels trustworthy, and the brand looks like a true five-star destination.",
    name: "Imran Siddiqui",
    role: "Business Consultant",
  },
  {
    quote:
      "From the elegant colors to the curated menu storytelling, everything makes the restaurant feel high-value and memorable.",
    name: "Sara Hussain",
    role: "Event Planner",
  },
];

const menuGrid = document.getElementById("menu-grid");
const filters = document.querySelectorAll(".menu-filter");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const revealItems = document.querySelectorAll("[data-reveal]");
const counters = document.querySelectorAll("[data-counter]");
const form = document.getElementById("reservation-form");
const formStatus = document.getElementById("form-status");
const year = document.getElementById("year");
const testimonialQuote = document.getElementById("testimonial-quote");
const testimonialName = document.getElementById("testimonial-name");
const testimonialRole = document.getElementById("testimonial-role");
const testimonialDots = document.getElementById("testimonial-dots");
const heroVisual = document.querySelector(".hero-visual");

let activeTestimonial = 0;
let testimonialTimer;

function renderMenu(category) {
  const items = menuItems[category];

  menuGrid.innerHTML = items
    .map(
      (item) => `
        <article class="menu-card">
          <div class="menu-media">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
          </div>
          <div class="menu-card-top">
            <div>
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </div>
            <span class="price">${item.price}</span>
          </div>
          <div class="meta">
            <span>${item.note}</span>
            <span>${item.serve}</span>
          </div>
        </article>
      `,
    )
    .join("");
}

function setActiveFilter(button) {
  filters.forEach((filter) => filter.classList.remove("is-active"));
  button.classList.add("is-active");
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveFilter(button);
    renderMenu(button.dataset.filter);
  });
});

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 },
);

revealItems.forEach((item) => revealObserver.observe(item));

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const counter = entry.target;
      const target = Number(counter.dataset.counter);
      const duration = 1600;
      const start = performance.now();

      function updateCounter(now) {
        const progress = Math.min((now - start) / duration, 1);
        const value = target % 1 === 0 ? Math.floor(progress * target) : (progress * target).toFixed(1);
        counter.textContent = value;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target % 1 === 0 ? String(target) : target.toFixed(1);
        }
      }

      requestAnimationFrame(updateCounter);
      counterObserver.unobserve(counter);
    });
  },
  { threshold: 0.7 },
);

counters.forEach((counter) => counterObserver.observe(counter));

function renderTestimonialDots() {
  testimonialDots.innerHTML = testimonials
    .map(
      (_, index) => `
        <button
          type="button"
          class="${index === activeTestimonial ? "is-active" : ""}"
          data-index="${index}"
          aria-label="Show testimonial ${index + 1}"
        ></button>
      `,
    )
    .join("");

  testimonialDots.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeTestimonial = Number(button.dataset.index);
      updateTestimonial();
      restartTestimonialTimer();
    });
  });
}

function updateTestimonial() {
  const item = testimonials[activeTestimonial];
  testimonialQuote.textContent = `"${item.quote}"`;
  testimonialName.textContent = item.name;
  testimonialRole.textContent = item.role;
  renderTestimonialDots();
}

function restartTestimonialTimer() {
  window.clearInterval(testimonialTimer);
  testimonialTimer = window.setInterval(() => {
    activeTestimonial = (activeTestimonial + 1) % testimonials.length;
    updateTestimonial();
  }, 4600);
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get("name");
    formStatus.textContent = `Thank you, ${name}. Your reservation request has been prepared and Fidu's Kitchen will contact you shortly.`;
    form.reset();
  });
}

if (heroVisual) {
  window.addEventListener("mousemove", (event) => {
    const { innerWidth, innerHeight } = window;
    const moveX = (event.clientX / innerWidth - 0.5) * 16;
    const moveY = (event.clientY / innerHeight - 0.5) * 16;
    heroVisual.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  });
}

year.textContent = String(new Date().getFullYear());
renderMenu("signature");
updateTestimonial();
restartTestimonialTimer();
