const t=document.querySelector("body"),e=document.querySelector(".startBtn"),r=document.querySelector(".stopBtn");let n=null;function o(){let e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.style.backgroundColor=e}e.addEventListener("click",(()=>{e.setAttribute("disabled",!0),n=setInterval((()=>{o()}),1e3)})),r.addEventListener("click",(()=>{e.removeAttribute("disabled"),clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.47ecfdac.js.map
