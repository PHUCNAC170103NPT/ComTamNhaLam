const menuBar = document.querySelector(".menu-bar")
menuBar.addEventListener("click",function(){
       menuBar.classList.toggle("active")
      document.querySelector(".menu-items").classList.toggle("active")
})
const menuTitle = document.querySelector(".menu-title");
menuTitle.addEventListener("click",function(x){
      if(x.target.classList.contains("menu-button")){
            const Target = x.target.getAttribute("data-title");
          //  console.log(Target)
          menuTitle.querySelector(".active").classList.remove("active");
          x.target.classList.add("active");
           
            const menuItem = document.querySelector(".menu");
            menuItem.querySelector(".menu-item-content.active").classList.remove("active");
            menuItem.querySelector(Target).classList.add("active");
      }
})