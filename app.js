const reviews = [
  {
    name: "Mary Moore",
    img: `https://randomuser.me/api/portraits/women/4.jpg`,
    rating: `
  <i class="stars fas fa-star"></i>
  <i class="stars fas fa-star"></i>
  <i class="stars fas fa-star"></i>
  <i class="stars fas fa-star"></i>
  <i class="stars fas fa-star"></i>
  `,
    review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi veritatis temporibus consequuntur magnam voluptatum dolor suscipit libero sed rem esse nihil accusamus, tenetur laudantium officiis quas. Soluta rem vel ratione.`,
  },

  {
    name: "Jenna Johnson",
    img: `https://randomuser.me/api/portraits/women/49.jpg`,
    rating: `
  <i class="stars fas fa-star"></i>
  <i class="stars fas fa-star"></i>
  <i class="stars fas fa-star"></i>
  <i class="stars fas fa-star"></i>
  `,
    review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi veritatis temporibus consequuntur magnam voluptatum dolor suscipit libero sed rem esse nihil accusamus.`,
  },

  {
    name: "Chelsea Smith",
    img: `https://randomuser.me/api/portraits/women/0.jpg`,
    rating: `
  <i class="stars fas fa-star"></i>
  <i class="stars fas fa-star"></i>
  <i class="stars fas fa-star"></i>
  <i class="stars fas fa-star"></i>
  <i class="stars fas fa-star"></i>
  `,
    review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi veritatis temporibus consequuntur magnam voluptatum dolor suscipit libero sed rem esse nihil accusamus. Lorem ipsum magna carta blah blah lah.`,
  },

  {
    name: "Janet Jackson",
    img: `https://randomuser.me/api/portraits/women/92.jpg`,
    rating: `
  <i class="stars fas fa-star"></i>
  <i class="stars fas fa-star"></i>
  <i class="stars fas fa-star"></i>
  `,
    review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi veritatis temporibus consequuntur magnam voluptatum dolor suscipit.`,
  },

  {
    name: "Jake Chance",
    img: `https://randomuser.me/api/portraits/men/94.jpg`,
    rating: `
  <i class="stars fas fa-star"></i>
  <i class="stars fas fa-star"></i>
  <i class="stars fas fa-star"></i>
  <i class="stars fas fa-star"></i>
  `,
    review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi veritatis temporibus consequuntur magnam voluptatum dolor suscipit.`,
  },

  {
    name: "Jeff Fredrick",
    img: `https://randomuser.me/api/portraits/men/30.jpg`,
    rating: `
  <i class="stars fas fa-star"></i>
  <i class="stars fas fa-star"></i>
  `,
    review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi veritatis temporibus consequuntur magnam voluptatum dolor suscipit.`,
  },

  {
    name: "Darren Cross",
    img: `https://randomuser.me/api/portraits/men/7.jpg`,
    rating: `
  <i class="stars fas fa-star"></i>
  <i class="stars fas fa-star"></i>
  <i class="stars fas fa-star"></i>
  <i class="stars fas fa-star"></i>
  <i class="stars fas fa-star"></i>
  `,
    review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi veritatis temporibus consequuntur magnam voluptatum dolor suscipit.`,
  },
];

const userName = document.querySelector(".name");
const img = document.querySelector(".user");
const rating = document.querySelector(".rating");
const userReview = document.querySelector(".review");

const nextBtn = document.querySelector(".fa-arrow-right");
const prevBtn = document.querySelector(".fa-arrow-left");
const randomBtn = document.querySelector(".random");
let current = 0;

function showReview(person) {
  const review = reviews[person];
  userName.textContent = review.name;
  img.src = review.img;
  rating.innerHTML = review.rating;
  userReview.textContent = review.review;
}

nextBtn.addEventListener("click", function () {
  current++;
  if (current > reviews.length - 1) {
    current = 0;
  }

  showReview(current);
});

prevBtn.addEventListener("click", function () {
  current--;
  if (current < 0) {
    current = reviews.length - 1;
  }

  showReview(current);
});

randomBtn.addEventListener("click", function () {
  for (let i = 0; i < reviews.length; i++) {
    current = Math.floor(Math.random() * reviews.length);
    showReview(current);
  }
});
