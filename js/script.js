let nav=document.querySelector("nav");
window.addEventListener("scroll",()=>{
  if(window.scrollY > 200){
    nav.style.background="#219EBC"
  }
  else
  {
     nav.style.background="transparent"
  }
})
