const e=document.querySelector("#search-form"),t=document.querySelector(".load-more"),n=document.querySelector(".gallery");let s="",i=1;const o=()=>fetch(`https://pixabay.com/api/?key=35738643-c5bfe559c2bde2990bd981af5&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${i}&per_page=40`).then((e=>{if(e.ok)return e.json();throw new Error("Network response was not ok")})).then((e=>{const s=e.hits;if(0===s.length)Notiflix.Notify.warning("Sorry, there are no images matching your search query. Please try again.");else{const e=s.map((e=>(e=>{const{webformatURL:t,largeImageURL:n,tags:s,likes:i,views:o,comments:a,downloads:r}=e;return`<div class="photo-card">\n      <img src="${t}" alt="${s}" loading="lazy" />\n      <div class="stats">\n        <p class="stats-item">\n          <i class="material-icons">thumb_up</i>\n          ${i}\n        </p>\n        <p class="stats-item">\n          <i class="material-icons">visibility</i>\n          ${o}\n        </p>\n        <p class="stats-item">\n          <i class="material-icons">comment</i>\n          ${a}\n        </p>\n        <p class="stats-item">\n          <i class="material-icons">cloud_download</i>\n          ${r}\n        </p>\n      </div>\n    </div>`})(e))).join("");n.insertAdjacentHTML("beforeend",e);const{height:i}=n.firstElementChild.getBoundingClientRect();window.scrollBy({top:2*i,behavior:"smooth"}),s.length<40?(Notiflix.Notify.info("We're sorry, but you've reached the end of search results."),t.classList.add("is-hidden")):t.classList.remove("is-hidden")}})).catch((e=>{console.error("Error fetching images:",e),Notiflix.Notify.failure("Oops! Something went wrong. Please try again later.")}));e.addEventListener("submit",(e=>{e.preventDefault();const a=e.currentTarget.elements.searchQuery;a.value&&(s=a.value.trim(),i=1,n.innerHTML="",t.classList.add("is-hidden"),o())})),t.addEventListener("click",(()=>{i+=1,o()}));let a=!1;window.addEventListener("scroll",(()=>{const{scrollTop:e,scrollHeight:t,clientHeight:n}=document.documentElement;e+n>=t-10&&!a&&(a=!0,i+=1,o().finally((()=>{a=!1})))}));
//# sourceMappingURL=index.b908df23.js.map
