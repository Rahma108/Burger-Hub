
// Part Dark And Light Mode ...
const btn = document.getElementById("mode-btn");
const body = document.body;

btn.addEventListener("click", () => {

    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
    if (body.classList.contains("dark-mode")) {
        btn.innerHTML = `<i class="fa-solid fa-sun btn-style"></i><span>Light</span>`;
    } else {
        btn.innerHTML = `<i class="fa-solid fa-moon btn-style"></i><span>Dark</span>`;
    }
});
// End Part Dark , Light .............

// Menu in Navbar........
const menuIcon = document.getElementById("menu-icon");
const navbarContent = document.getElementById("navbar-content");

menuIcon.addEventListener("click", () => {
  navbarContent.classList.toggle("active");
});

// End Menu in Navbar ...........


// Menu Page (Product)..............

// Problem in part Backend .......
// بيتحط تحت منتج واحد بس 

// async function fetchMenu() {
//   try {
//     const response = await fetch("http://localhost:3000/menu");
//     const data = await response.json();

//     const menuContainer = document.getElementById("menu");
//     menuContainer.innerHTML = ""; 

//     data.forEach(item => {
//       const menuItem = document.createElement("div");
//       menuItem.classList.add("menu-item");

    
//       menuItem.innerHTML = `
//         <h3>${item.name}</h3>
//         <p>${item.price} EGP</p>
//       `;

      
//       menuContainer.appendChild(menuItem);
//     });

//   } catch (error) {
//     console.error("Error fetching menu:", error);
//   }
// }

// fetchMenu();



