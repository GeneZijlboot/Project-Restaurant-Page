(()=>{"use strict";function e(){console.log("Order btns workings"),console.log("Menu btns workings")}!function(){const t=document.querySelector("#Content"),n=document.createElement("div"),i=document.createElement("div"),d=document.createElement("img"),o=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div"),l=document.createElement("button"),m=document.createElement("button"),r=document.createElement("button"),u=document.createElement("p"),s=document.createElement("p"),p=document.createElement("p"),C=document.createElement("button"),h=document.createElement("div"),g=document.createElement("a");n.id="MainPage",u.id="Delicious",u.textContent="Delicious",s.id="Parmigiano",s.textContent="Parmigiano",p.id="txt",p.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit Eligendi minus iusto<br>\n    veniam magni numquam assumenda nesciunt non rem quas sequi necessitatibus tempore ullam<br>\n    autem quam nulla sit pariatur Voluptas facilis",C.id="OrderBtn",C.textContent="Order Now",l.id="Buttons",m.id="Buttons",r.id="Buttons",l.textContent="Home",m.textContent="Menu",r.textContent="Contact",c.id="MainText",a.id="TaskBar",o.id="RightSide",i.id="LeftSide",d.src="./images/Food.png",g.textContent="Copyright © Gene Zijlmans",g.href="https://github.com/GeneZijlboot/Project-Restaurant-Page",t.appendChild(n),n.appendChild(i),n.appendChild(o),i.appendChild(d),o.appendChild(a),o.appendChild(c),a.appendChild(l),a.appendChild(m),a.appendChild(r),c.appendChild(u),c.appendChild(s),c.appendChild(p),c.appendChild(C),c.appendChild(h),h.appendChild(g),l.addEventListener("click",(()=>{t.removeChild(n),console.log("home btns workings")})),m.addEventListener("click",(()=>{t.removeChild(n),e()})),r.addEventListener("click",(()=>{t.removeChild(n),console.log("Contact btns workings")})),C.addEventListener("click",(()=>{t.removeChild(n),e()}))}()})();