let menu=document.querySelector('#menu-bars');
// Select the navbar element and its list items
const navbar = document.querySelector('.navbar');
const navList = navbar.querySelectorAll('li');
const totalNavList = navList.length;

// Select all the sections and count them
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;

// Add click event listener to each navigation link
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector('a');

  a.addEventListener('click', function () {
    // Remove "back-section" class from all sections
    removeBackSection();

    // Add "back-section" class to previously active section (if any)
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);  
      }
      // Remove "active" class from all navigation links
      navList[j].querySelector("a").classList.remove("active");
    }
    // Add "active" class to clicked navigation link
    this.classList.add("active");
    // Show corresponding section on page
    showSection(this);
  });
}

// Remove "back-section" class from all sections
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

// Add "back-section" class to a specific section
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

// Show a specific section on the page
function showSection(element) {
  // Remove "active" class from all sections
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active")
  }
  // Get the ID of the target section
  const target = element.getAttribute("href").split("#")[1];
  // Add "active" class to target section
  document.querySelector("#" + target).classList.add("active");
} 

// Update navigation links based on current section
function updateNav(ele) {
  for (let i = 0; i < totalNavList; i++) {
    // Remove "active" class from all navigation links
    navList[i].querySelector("a").classList.remove("active");
    const target = ele.getAttribute("href").split("#")[1];
    // Add "active" class to navigation link corresponding to current section
    if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
menu.onclick=() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')

}
let section=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header .navbar a');

let cartItem=document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () =>{
cartItem.classList.toggle("active");
}

window.onscroll=() =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active')

}
section.forEach(sec => {
let top=window.scrollY;
let height=sec.offsetHeight;
let offset=sec.offsetTop - 150;
let id=sec.getAttribute('id');

if(top >= offset && top > height){
  navLinks.forEach(links => {
    links.classList.remove('active');
    document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
  })
}
});
document.querySelector('#search-icon').onclick=() =>{
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick=() =>{
    document.querySelector('#search-form').classList.toggle('active');
}
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
    },
  );

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    loop: true,
  });

  function loader(){
document.querySelector('.loader-container').classList.add('fade-out');
  }
  function fadeOut(){
    setInterval(loader, 3000);
  }
  window.onload=fadeOut;

//sticky navbar

  window.addEventListener('scroll', () =>{
    let header=document.querySelector("header")
    header.classList.toggle("sticky",window.scrollY > 0)
});

//scrolling animation effect
// JavaScript code to trigger the animation on scroll
function handleScroll() {
  const sections = document.querySelectorAll('.section');

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top -150;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75) {
      section.classList.add('appear');
    }
  });
}

// Event listener to trigger the animation on scroll
window.addEventListener('scroll', handleScroll);
  let shopItemData=[{
    id: 1,
    name: "delicious food-1",
    price: "327",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78cqThwQPKlKCBI0-TBurAhgL-4ALtacq8z3sqW7C4Pau0skGvVtTHf3pCBvqtQP581Q&usqp=CAU",
  },
  {
    id: 2,
    name: "delicious food-2",
    price: "311",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQea2oRuiBK04ebXKCYyJotQzZLWjgrHOV1tw&usqp=CAU",
  },
  {
    id: 3,
    name: "delicious food-3",
    price: "438",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4bjRSefUzYoLaMOpUgFQzwpkzi6mISC94Iw&usqp=CAU",
  },
  {
    id: 4,
    name: "delicious food-4",
    price: "958",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO8HOYYpfX5sGSFXj4HoTAkNQ0UVWbsDr0fg&usqp=CAU",
  },
  {
    id: 5,
    name: "delicious food-5",
    price: "382",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK6RUdKeSXk0X7Fj7U1gx06qN1U9tGOiUPyQ&usqp=CAU",
  },
  {
    id: 6,
    name: "delicious food-6",
    price: "489",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRClxqT3v1zv-HsGpZJPGDgpTJVG3exjRF_5w&usqp=CAU",
  },
  {
    id: 7,
    name: "delicious food-7",
    price: "554",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjcI1w40FW3hpDD4VJW9Nr88yYoDV2ZMy0pw&usqp=CAU",
  }
  ,
  {
    id: 8,
    name: "delicious food-8",
    price: "652",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhHK6ZzADvbYGYjKAh2HUFhLrKoej1xgKD5A&usqp=CAU",
  }
  ,
  {
    id: 9,
    name: "delicious food-9",
    price: "234",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgkT1Tkc95r-J9hCjCMf25dk_uhfgP7QX1Vw&usqp=CAU",
  }];
  
  
  

   // Parse basket data from localStorage, if not available create an empty array
let basket = JSON.parse(localStorage.getItem("data")) || [];
let shop1 = document.querySelector(".dishes .box-container");
// Get DOM elements
let shop2 = document.querySelector(".menu .box-container");

let totalPriceSpan = document.querySelector(".cart-items-container .span");

let cardIcon = document.querySelector(".cardAmount");
// Define shopItemData array (incomplete in the provided code)

// Function to generate shop HTML elements
let generateShop = () => {
  // Map shop item data to HTML elements and join them
  shop2.innerHTML = shopItemData
    .map((el) => {
      // Check if the item is in the basket and get its quantity, default to 0 if not found
      let search = basket.find((x) => x.id === el.id) || {};
      // Generate HTML element for the item
      return `
        <div class="box" id="product-${el.id}">
          <div class="image">
            <img src="${el.img}" alt="image food">
            <a href="#" class="fas fa-heart"></a>
          </div>
          <div class="content">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <h3>${el.name}<h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae alias iusto debitis, quisquam optio officiis praesentium provident expedita iste ipsam, hic, animi laboriosam voluptatibus accusamus obcaecati id perspiciatis nemo? Ab.</p>
            <button href="#" onclick="increment(${el.id})" class="btn">add to cart</button>
            <span class="price">$${el.price}</span>
          </div>
        </div>
      `;
    })
    .join("");
};
let shopItemData1=[{
  id: 11,
  name: "testy food-1",
  price: "652",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU",
},
{
  id: 12,
  name: "testy food-2",
  price: "652",
  normalRrice: "652",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo4WSLrmWiQOfU4ZN6lpRnjXi4EBhIa0i_gA&usqp=CAU",
},
{
  id: 13,
  name: "testy food-3",
  price: "588",
  normalRrice: "435",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7zUhwNYdEeMdJQgHP4lmCSgGFaRYby9KwDk1SsXPdkE9PZWjsjfqgewyqW75gVxs6Sr8&usqp=CAU",
},
{
  id: 14,
  name: "testy food-4",
  price: "435",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-xRPlajh85R5fXwvE7VNlicM9uwN5-FLeKhc39b8wQSH0BHlBA1sQdteXyB2nm1viJkc&usqp=CAU",
},
{
  id: 15,
  name: "testy food-5",
  price: "473",
  normalRrice: "345",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyrQfcHiIorpdLAq9qpy0f34Zev2vhRDDdLASn9f02ewfuJlcD6lVnJOdutsQRZBpS3Ow&usqp=CAU",
},
{
  id: 16,
  name: "testy food-6",
  price: "264",
  normalRrice: "738",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqM-6dPvVVOVSf10veEo__JLtdeEUFgd4SbA&usqp=CAU",
},
];
// Function to generate shop HTML elements
let generateShop1 = () => {
  // Map shop item data to HTML elements and join them
  shop1.innerHTML = shopItemData1
    .map((el) => {
      // Check if the item is in the basket and get its quantity, default to 0 if not found
      let search = basket.find((x) => x.id === el.id) || {};
      // Generate HTML element for the item
      return `
        <div class="box" id="product-${el.id}">
        <a href="#" class="fas fa-heart"></a>
        <a href="#" class="fas fa-eye"></a>
            <img src="${el.img}" alt="image food">
            <h3>${el.name}</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <span class="price">$${el.price}</span>
            <button onclick="increment(${el.id})"class="btn">add to cart</button>
        </div>
      `;
    })
    .join("");
};
generateShop1()
// Function to increment item quantity in the basket
let increment = (id) => {
  let selectedItem = { id: id };
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) {
    basket.push({ id: selectedItem.id, item: 1 });
  } else {
    search.item += 1;
  }
  // Save updated basket to localStorage
  localStorage.setItem("data", JSON.stringify(basket));
  // Regenerate shop and cart items HTML elements
  calculation();
  generateCardItems();
  generateShop();
  generateShop1()
  update(selectedItem);
  totalAmount();
  // Update cart icon quantity and total price
};
let decrement = (id) => {
  let selectedItem = { id: id };
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) {
    return;
  } else if (search.item === 0) {
    return;
  } else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  generateCardItems();
  localStorage.setItem("data", JSON.stringify(basket));
  generateShop();
  generateShop1();
  calculation();
  totalAmount();
 
};

// Function to update item quantity in the cart
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  if (search === undefined) return;
  document.getElementById(id).innerHTML = search.item;
  // Regenerate cart items HTML elements and update cart icon quantity and total price
  generateCardItems();
  calculation();
  totalAmount();
};
let calculation = () => {
  cardIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
generateShop()
generateShop1();
let shopinCard=document.querySelector(".cart-items-container");
  let generateCardItems = () => {
    if (basket.length !== 0) {
      // if basket is not empty, populate the shopping cart with item details
      shopinCard.innerHTML =totalPriceSpan.innerHTML+ '<div class="box-container">' + basket.map((x) => {
        let {id,item}=x;
        let search=shopItemData.find((y) => y.id === id) || shopItemData1.find((y) => y.id === id) || [];
        return `
        <div class="cart-item">
      <img src=${search.img} alt="">
      <div class="conten">
  <div class="title-price-x">
      <h4 class="title-price">
          <h3>${search.name}</h3>
          <p class="card-item-price">price : <span> $${search.price}</span></p>
      </h4>
      <i onclick="removeItem(${id})" class="fas fa-times"></i>
  </div>
  <div class="btns">
  <i onclick="decrement(${id})" class="fas fa-minus"></i>
    <div class="quantity" id=${id}>${item}</div>
  <i onclick="increment(${id})" class="fas fa-plus"></i>
      </div>
      <h4 class="card-item-price">total price : <span> $${item * search.price}</span></h4>
  </div>
  </div>      `
      }).join("")+'</div>';
    } else {
      // if basket is empty, display a message indicating that the cart is empty
      shopinCard.innerHTML = `
        <h2 class="empty">cart is empty <i class="fa-solid fa-face-smile"></i></h2>
      `;
    }
  };
  generateCardItems();
  // populate basket with data if needed
  if (localStorage.getItem("data")) {
    basket = JSON.parse(localStorage.getItem("data"));
  }
  
  let removeItem = (id) => {
    let selectedItem = id;
    let newBasket = basket.filter((x) => x.id !== selectedItem);
    basket=newBasket;
    generateCardItems();
    totalAmount();
    update(selectedItem);
    calculation();
    
    localStorage.setItem("data", JSON.stringify(basket));
  };
  let clearCard=() => {
  basket=[];
  generateCardItems();
  calculation();
  totalAmount();
  localStorage.setItem("data", JSON.stringify(basket))
  }
  let totalAmount = () => {
    if (basket.length !== 0) {
      let amount = basket.map((x) => {
        let { item, id } = x;
        let search = shopItemData.find((y) => y.id === id) || shopItemData1.find((y) => y.id === id) || [];
        return item * search.price;
      }).reduce((x, y) => x + y, 0);
      totalPriceSpan.innerHTML = `
       <div class="total-price-span">
        <h2 class="total-amount">Total bill : <span> $${amount}</span></h2>
  <button onclick="clearCard()" class="removeall btn">clear card</button>
  </div>
      `;
    } else {
      totalPriceSpan.innerHTML = 0;
    }
    generateCardItems();
    localStorage.setItem("data", JSON.stringify(basket))
  };
  // Call the function once at the beginning
  totalAmount();
