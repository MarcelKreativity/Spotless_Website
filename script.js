const menu_Btn = document.getElementById("menu-button");

const nav_links = document.getElementById("nav-links");

menu_Btn.addEventListener("click", () =>{
    if(nav_links.style.display === 'none'){
        nav_links.style.display = 'block';
    } else{
        nav_links.style.display = 'none';
    }
})