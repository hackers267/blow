function activeTocItem(){var e=window.scrollY;console.log(e)}function findCorrespondingTocTitle(o){return[...document.querySelectorAll("#toc li a")].find(e=>(console.log(e),console.log("#"+o.id),console.log(e.href.substring(e.href.indexOf("#"))),e.href.substring(e.href.indexOf("#"))==="#"+o.id))}document.addEventListener("DOMContentLoaded",function(){document.getElementById("navbar").clientHeight,document.getElementById("toc");var e=document.querySelectorAll("#toc li a");document.getElementById("page-content");window.addEventListener("scroll",activeTocItem);const o=new window.IntersectionObserver(e=>{e.forEach(o=>{if(console.log(o.isIntersecting),console.log(o.intersectionRatio),0<o.intersectionRatio){console.log(o,"active");let e=findCorrespondingTocTitle(o.target);console.log(e),e.classList.add("bg-blue-800")}else console.log(o,"inactive"),o.target.classList.remove("bg-blue-800")})},{root:null,threshold:.1});var n=[];[...e].forEach(e=>{n.push(e.href.substring(e.href.indexOf("#")))});const t=document.querySelectorAll(n.join(","));t.forEach(e=>{o.observe(e)})});