!function(){var t=document.querySelector("body"),e=document.querySelector(".startBtn"),n=document.querySelector(".stopBtn"),r=null;function o(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));t.style.backgroundColor=e}e.addEventListener("click",(function(){e.setAttribute("disabled",!0),r=setInterval((function(){o()}),1e3)})),n.addEventListener("click",(function(){e.removeAttribute("disabled"),clearInterval(r)}))}();
//# sourceMappingURL=01-color-switcher.7743f7f3.js.map
