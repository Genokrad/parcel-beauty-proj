const e=document.querySelector(".video__wrapper-chernovci"),t=document.querySelector(".video__wrapper-bukovel"),l=document.querySelector("#desk-cher"),o=document.querySelector("#desk-buk"),d=document.querySelector("#video-bukovel"),r=document.querySelector("#video-chernovci"),i=document.querySelector("#backdropp-chernovci"),s=document.querySelector("#backdropp-bukovel"),c=document.querySelector("#wall-bukovel"),p=document.querySelector("#wall-chernovci"),y=document.querySelector("#wall-bukovel-desktop"),n=document.querySelector("#wall-chernovci-desktop");window.addEventListener("click",(()=>{d.play()})),r.pause();let a="240px",u="150px",h="336px",x="210px",v="20px",k="24px";const b=(e,t,l,o,d,r,i,s)=>{e.style.width=h,e.style.height=x,e.style.borderRadius=k,t.style.width=a,t.style.height=u,t.style.borderRadius=v,l.style.width="266px",l.style.height="auto",l.style.opacity="1",l.style.opacity="1",o.style.width="0",o.style.height="0",o.style.opacity="0",o.style.opacity="0",d.play(),r.pause(),i.style.backdropFilter="blur(0px)",s.style.backdropFilter="blur(5px)"};function w(){const c=window.innerWidth;c>=1440?(a="416px",u="277px",h="911px",x="606px",v="36px",k="72px",b(t,e,o,l,d,r,s,i)):c>=834?(a="527px",u="329px",h="738px",x="461px",v="36px",k="64px",b(t,e,o,l,d,r,s,i)):c>=360?(a="240px",u="150px",h="336px",x="210px",v="20px",k="24px",b(t,e,o,l,d,r,s,i)):(a="71.5%",u="62.5%",h="100%",x="62.5%",v="20px",k="24px",b(t,e,o,l,d,r,s,i))}document.addEventListener("DOMContentLoaded",w),window.addEventListener("resize",w),e.addEventListener("mouseover",(()=>{return p=e,y=o,n=l,b=d,w=r,m=s,q=i,(c=t).style.width=a,c.style.height=u,c.style.borderRadius=v,p.style.width=h,p.style.height=x,p.style.borderRadius=k,y.style.width="0",y.style.height="0",y.style.opacity="0",y.style.opacity="0",n.style.width="266px",n.style.height="auto",n.style.opacity="1",n.style.opacity="1",b.pause(),w.play(),m.style.backdropFilter="blur(5px)",void(q.style.backdropFilter="blur(0px)");var c,p,y,n,b,w,m,q})),e.addEventListener("mouseout",(()=>b(t,e,o,l,d,r,s,i)));c.addEventListener("click",(e=>{console.dir(),e.target.style.display="none",p.style.display="block"})),p.addEventListener("click",(e=>{e.target.style.display="none",c.style.display="block"})),y.addEventListener("click",hideDeskWall),n.addEventListener("click",hideDeskWall);
//# sourceMappingURL=index.e960f994.js.map
