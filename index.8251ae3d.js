!function(){var e=document.querySelector(".video__wrapper-chernovci"),t=document.querySelector(".video__wrapper-bukovel"),l=document.querySelector("#desk-cher"),r=document.querySelector("#desk-buk"),o=document.querySelector("#video-bukovel"),i=document.querySelector("#video-chernovci"),d=document.querySelector("#backdropp-chernovci"),c=document.querySelector("#backdropp-bukovel"),p=document.querySelector("#wall-bukovel"),n=document.querySelector("#wall-chernovci"),s=document.querySelector("#wall-bukovel-desktop"),y=document.querySelector("#wall-chernovci-desktop");window.addEventListener("click",(function(){o.play()})),i.pause();var u="240px",a="150px",x="336px",b="210px",h="20px",v="24px",k="blur(5px)",w="blur(0px)",m=function(e,t,l,r,o,i,d,c){e.style.width=x,e.style.height=b,e.style.borderRadius=v,t.style.width=u,t.style.height=a,t.style.borderRadius=h,l.style.width="266px",l.style.height="auto",l.style.opacity="1",l.style.opacity="1",r.style.width="0",r.style.height="0",r.style.opacity="0",r.style.opacity="0",o.play(),i.pause(),d.style.backdropFilter=w,c.style.backdropFilter=k};function q(){var p=window.innerWidth;p>=1440?(u="416px",a="277px",x="911px",b="606px",h="36px",v="72px",k="blur(5px)",m(t,e,r,l,o,i,c,d)):p>=834?(u="527px",a="329px",x="738px",b="461px",h="36px",v="64px",k="blur(0px)",m(t,e,r,l,o,i,c,d)):p>=360?(u="240px",a="150px",x="336px",b="210px",h="20px",v="24px",k="blur(0px)",m(t,e,r,l,o,i,c,d)):(u="71.5%",a="62.5%",x="100%",b="62.5%",h="20px",v="24px",k="blur(0px)",m(t,e,r,l,o,i,c,d))}document.addEventListener("DOMContentLoaded",q),window.addEventListener("resize",q),e.addEventListener("mouseover",(function(){return n=e,s=r,y=l,m=o,q=i,S=c,f=d,(p=t).style.width=u,p.style.height=a,p.style.borderRadius=h,n.style.width=x,n.style.height=b,n.style.borderRadius=v,s.style.width="0",s.style.height="0",s.style.opacity="0",s.style.opacity="0",y.style.width="266px",y.style.height="auto",y.style.opacity="1",y.style.opacity="1",m.pause(),q.play(),S.style.backdropFilter=k,void(f.style.backdropFilter=w);var p,n,s,y,m,q,S,f})),e.addEventListener("mouseout",(function(){return m(t,e,r,l,o,i,c,d)}));p.addEventListener("click",(function(e){e.target.style.display="none",n.style.display="block",n.style.backdropFilter="blur(5px)",p.style.backdropFilter="blur(0px)"})),n.addEventListener("click",(function(e){e.target.style.display="none",p.style.display="block",p.style.backdropFilter="blur(5px)",n.style.backdropFilter="blur(0px)"})),s.addEventListener("click",(function(){s.style.display="none"})),y.addEventListener("click",(function(){y.style.display="none"}))}();
//# sourceMappingURL=index.8251ae3d.js.map
