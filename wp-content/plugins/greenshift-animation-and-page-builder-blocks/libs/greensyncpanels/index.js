class GreenLightSyncPanels{constructor(){this.initSyncPanels()}initSyncPanels(){document.addEventListener("click",this.handleClick.bind(this));let e=document.querySelectorAll(".gs_click_sync");e.forEach(e=>{e.addEventListener("keydown",this.handleKeyDown.bind(this))});let t=document.querySelectorAll(".gs_hover_sync");t.forEach(e=>{e.addEventListener("mouseenter",this.handleHover.bind(this))});let s=document.querySelectorAll(".gs_content");s.forEach(e=>{e.closest(".gs_item.active")&&(e.style.maxHeight=e.scrollHeight+"px"),e.classList.contains("active")&&(e.style.maxHeight=e.scrollHeight+"px")}),(()=>{let e=document.querySelectorAll(".gs_tabs_list");e.forEach(e=>{let t=e.querySelectorAll(".gs_tab"),s=e.querySelector(".gs_tab.active");if(!s&&t.length>0){t[0].classList.add("active");let l=e.closest(".gs_root");if(l){let i=l.querySelectorAll(".gs_content");i.length>0&&(i[0].classList.add("active"),i[0].style.maxHeight=i[0].scrollHeight+"px")}}})})()}handleClick(e){let t=e.target;(t.classList.contains("gs_click_sync")||t.closest(".gs_click_sync"))&&this.toggleSyncPanels(t)}handleKeyDown(e){("Enter"===e.key||" "===e.key)&&(e.preventDefault(),this.toggleSyncPanels(e.target))}toggleSyncPanels(e){let t=e.closest(".gs_item");if(t){let s=t.querySelector(".gs_content"),l=!t.classList.contains("active"),i=t.closest(".gs_collapsible");if(t.classList.toggle("active"),e.classList.toggle("active"),e.setAttribute("aria-expanded",l),l){t.setAttribute("data-active",!0);let a=s.scrollHeight;if(s.style.maxHeight=`${a}px`,s.setAttribute("aria-hidden","false"),i){let c=i.querySelectorAll(".gs_item");c.forEach(t=>{if(t!==e.closest(".gs_item")){t.classList.remove("active"),t.removeAttribute("data-active"),t.querySelector(".gs_content").style.maxHeight="0px",t.querySelector(".gs_content").setAttribute("aria-hidden","true");t.querySelectorAll(".gs_click_sync").forEach(e=>{e.classList.remove("active"),e.setAttribute("aria-expanded","false")})}})}}else t.removeAttribute("data-active"),s.style.maxHeight="0px",s.setAttribute("aria-hidden","true")}else{e.classList.contains("gs_tab")||(e=e.closest(".gs_tab"));let r=e.closest(".gs_root");if(!r)return;let n=Array.from(r.querySelector(".gs_tabs_list").children).filter(e=>e.classList.contains("gs_tab")),o=n.indexOf(e);n.forEach((e,t)=>{t===o?(e.setAttribute("aria-selected","true"),e.classList.add("active")):(e.setAttribute("aria-selected","false"),e.classList.remove("active"))});let g=Array.from(r.querySelector(".gs_content_area").children).filter(e=>e.classList.contains("gs_content"));console.log(g),g.forEach((e,t)=>{t===o?(e.classList.add("active"),e.setAttribute("aria-hidden","false"),e.style.maxHeight=e.scrollHeight+"px"):(e.classList.remove("active"),e.setAttribute("aria-hidden","true"),e.style.maxHeight="0px")})}}handleHover(e){this.toggleSyncPanels(e.target)}}document.addEventListener("DOMContentLoaded",()=>{window.greenlight_SyncPanels=new GreenLightSyncPanels});