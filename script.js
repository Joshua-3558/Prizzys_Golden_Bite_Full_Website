document.querySelectorAll(".hamburger").forEach(btn=>btn.addEventListener("click",()=>{const m=btn.parentElement.querySelector(".mobile-menu");
    if(m)m.classList.toggle("show")}));
document.querySelectorAll(".mobile-menu a").forEach(a=>a.addEventListener("click",()=>a.parentElement.classList.remove("show")));

const gallery = document.getElementById("gallery");
if(gallery){
 const items=[
  ["Chin Chin","images/chiii.png"],["Meat Pie","images/pie.png"],
  ["Chicken Pie","images/chick.png"],["Birthday","images/birthday3.png"],
  ["Wedding","images/wedding11.png"],["Party","images/wedding6.png"]
 ];
 gallery.innerHTML=items.map(x=>`<a href="view.html?name=${encodeURIComponent(x[0])}&type=${encodeURIComponent(x[0].match(/Birthday|Wedding|Party/)?'Event Decoration':'Snack')}&img=${encodeURIComponent(x[1])}"><img src="${x[1]}" alt="${x[0]}"><span>${x[0]}</span></a>`).join("");
}
const form=document.getElementById("bookingForm");
if(form) form.addEventListener("submit",e=>{
 e.preventDefault();
 const text=`Hello Prizzy's Golden Bite,%0AName: ${encodeURIComponent(document.getElementById("name").value)}%0APhone: ${encodeURIComponent(document.getElementById("phoneInput").value)}%0AService: ${encodeURIComponent(document.getElementById("service").value)}%0ADate: ${encodeURIComponent(document.getElementById("date").value)}%0ADetails: ${encodeURIComponent(document.getElementById("details").value)}`;
 location.href=`https://wa.me/2349024352168?text=${text}`;
});
