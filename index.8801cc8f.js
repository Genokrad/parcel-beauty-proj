!function(){var e=document.querySelector(".video__wrapper-chernovci"),t=document.querySelector(".video__wrapper-bukovel"),l=document.querySelector("#desk-cher"),o=document.querySelector("#desk-buk"),r=document.querySelector("#video-bukovel"),i=document.querySelector("#video-chernovci"),d=document.querySelector("#backdropp-chernovci"),c=document.querySelector("#backdropp-bukovel"),n=document.querySelector("#wall-bukovel"),s=document.querySelector("#wall-chernovci"),y=document.querySelector("#wall-bukovel-desktop"),p=document.querySelector("#wall-chernovci-desktop");window.addEventListener("click",(function(){r.play()})),i.pause();var u="240px",a="150px",x="336px",h="210px",v="20px",k="24px",b=function(e,t,l,o,r,i,d,c){e.style.width=x,e.style.height=h,e.style.borderRadius=k,t.style.width=u,t.style.height=a,t.style.borderRadius=v,l.style.width="266px",l.style.height="auto",l.style.opacity="1",l.style.opacity="1",o.style.width="0",o.style.height="0",o.style.opacity="0",o.style.opacity="0",r.play(),i.pause(),d.style.backdropFilter="blur(0px)",c.style.backdropFilter="blur(5px)"};function w(){var n=window.innerWidth;n>=1440?(u="416px",a="277px",x="911px",h="606px",v="36px",k="72px",b(t,e,o,l,r,i,c,d)):n>=834?(u="527px",a="329px",x="738px",h="461px",v="36px",k="64px",b(t,e,o,l,r,i,c,d)):n>=360?(u="240px",a="150px",x="336px",h="210px",v="20px",k="24px",b(t,e,o,l,r,i,c,d)):(u="71.5%",a="62.5%",x="100%",h="62.5%",v="20px",k="24px",b(t,e,o,l,r,i,c,d))}document.addEventListener("DOMContentLoaded",w),window.addEventListener("resize",w),e.addEventListener("mouseover",(function(){return s=e,y=o,p=l,b=r,w=i,m=c,q=d,(n=t).style.width=u,n.style.height=a,n.style.borderRadius=v,s.style.width=x,s.style.height=h,s.style.borderRadius=k,y.style.width="0",y.style.height="0",y.style.opacity="0",y.style.opacity="0",p.style.width="266px",p.style.height="auto",p.style.opacity="1",p.style.opacity="1",b.pause(),w.play(),m.style.backdropFilter="blur(5px)",void(q.style.backdropFilter="blur(0px)");var n,s,y,p,b,w,m,q})),e.addEventListener("mouseout",(function(){return b(t,e,o,l,r,i,c,d)}));var m=function(){p.style.display="none",y.style.display="none"};n.addEventListener("click",(function(e){console.dir(),e.target.style.display="none",s.style.display="block"})),s.addEventListener("click",(function(e){e.target.style.display="none",n.style.display="block"})),y.addEventListener("click",m),p.addEventListener("click",m)}();
//# sourceMappingURL=index.8801cc8f.js.map
