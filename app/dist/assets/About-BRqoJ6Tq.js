import{r as n,j as e}from"./main-DdZDn-8g.js";import g from"./VisionMissionSection-BwE3f8At.js";import"./index-OxylAeuO.js";import"./createLucideIcon-fWZL72XS.js";const m="/images/gallery/WhatsApp Image 2025-07-12 at 6.01.50 PM.jpeg",h="/images/gallery/WhatsApp Image 2025-07-12 at 6.06.00 PM (1).jpeg",x="/images/gallery/WhatsApp Image 2025-07-12 at 6.06.00 PM.jpeg",u="/images/gallery/WhatsApp Image 2025-07-12 at 6.06.01 PM.jpeg",y="/images/gallery/WhatsApp Image 2025-07-12 at 6.06.02 PM.jpeg",b="/images/gallery/WhatsApp Image 2025-07-12 at 6.06.10 PM (1).jpeg",v="/images/gallery/WhatsApp Image 2025-07-12 at 6.06.10 PM.jpeg",f="/images/gallery/WhatsApp Image 2025-07-12 at 6.06.11 PM.jpeg",w="/images/gallery/WhatsApp Image 2025-07-12 at 6.06.12 PM.jpeg",j="/images/gallery/WhatsApp Image 2025-07-12 at 6.06.13 PM (2).jpeg",F="/images/gallery/WhatsApp Image 2025-07-12 at 6.06.13 PM.jpeg",k="/images/gallery/WhatsApp Image 2025-07-12 at 6.06.14 PM (1).jpeg",t=[{src:m,alt:"Students celebrating academic achievements with certificates",caption:"Academic Excellence"},{src:k,alt:"Vibrant London Kids ABC wall mural with cartoon characters",caption:"Creative Campus Art"},{src:x,alt:"Preschool classroom with learning materials and educational charts",caption:"Interactive Classrooms"},{src:h,alt:"Children engaged in creative arts and craft activities",caption:"Creative Expression"},{src:u,alt:"Children participating in outdoor physical activities and games",caption:"Active Play"},{src:y,alt:"Award ceremony celebrating student and staff achievements",caption:"Award Celebrations"},{src:b,alt:"Beautiful wall mural featuring children and nature elements",caption:"Nature-Themed Décor"},{src:v,alt:"Indoor play area with slides and toys for children",caption:"Play & Discovery Zone"},{src:f,alt:"Colorful classroom furniture setup with alphabet floor mats",caption:"Learning Environment"},{src:w,alt:"Inauguration ceremony in decorated classroom setting",caption:"Inauguration Day"},{src:j,alt:"Festively decorated hallway with balloons and nature murals",caption:"Festive Celebrations"},{src:F,alt:"School principal at desk with educational charts on wall",caption:"Our Leadership"}],C=()=>{const[l,c]=n.useState(null),d=n.useCallback(a=>c(a),[]),s=n.useCallback(()=>c(null),[]),o=n.useCallback(a=>{c(r=>{if(r===null)return null;const i=r+a;return i<0?t.length-1:i>=t.length?0:i})},[]),p=n.useCallback(a=>{a.key==="Escape"&&s(),a.key==="ArrowRight"&&o(1),a.key==="ArrowLeft"&&o(-1)},[s,o]);return n.useEffect(()=>{t.slice(0,8).forEach(a=>{const r=new Image;r.src=a.src})},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    grid-auto-rows: 140px;
                    gap: 12px;
                    max-width: 1280px;
                    margin: 0 auto;
                    grid-auto-flow: dense;
                }
                
                /* Bento Grid Layout - Balanced sizes without empty spaces */
                .gallery-card:nth-child(1) {
                    grid-column: span 3;
                    grid-row: span 2;
                }
                .gallery-card:nth-child(2) {
                    grid-column: span 2;
                    grid-row: span 2;
                }
                .gallery-card:nth-child(3) {
                    grid-column: span 1;
                    grid-row: span 2;
                }
                .gallery-card:nth-child(4) {
                    grid-column: span 2;
                    grid-row: span 2;
                }
                .gallery-card:nth-child(5) {
                    grid-column: span 2;
                    grid-row: span 2;
                }
                .gallery-card:nth-child(6) {
                    grid-column: span 2;
                    grid-row: span 2;
                }
                .gallery-card:nth-child(7) {
                    grid-column: span 3;
                    grid-row: span 2;
                }
                .gallery-card:nth-child(8) {
                    grid-column: span 3;
                    grid-row: span 2;
                }
                .gallery-card:nth-child(9) {
                    grid-column: span 2;
                    grid-row: span 2;
                }
                .gallery-card:nth-child(10) {
                    grid-column: span 2;
                    grid-row: span 2;
                }
                .gallery-card:nth-child(11) {
                    grid-column: span 2;
                    grid-row: span 2;
                }
                .gallery-card:nth-child(12) {
                    grid-column: span 3;
                    grid-row: span 2;
                }
                
                .gallery-card {
                    position: relative;
                    border-radius: 12px;
                    overflow: hidden;
                    cursor: pointer;
                    background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                    will-change: transform;
                }
                .gallery-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
                }
                .gallery-card img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    background: #e5e7eb;
                }
                .gallery-card-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
                    color: white;
                    padding: 16px;
                    opacity: 0;
                    transition: opacity 0.2s ease;
                }
                .gallery-card:hover .gallery-card-overlay {
                    opacity: 1;
                }
                .gallery-caption {
                    font-size: 0.95rem;
                    font-weight: 600;
                    margin: 0;
                }
                .lightbox {
                    position: fixed;
                    inset: 0;
                    background: rgba(0,0,0,0.95);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                    padding: 20px;
                }
                .lightbox img {
                    max-width: 90vw;
                    max-height: 85vh;
                    object-fit: contain;
                    border-radius: 8px;
                }
                .lightbox-btn {
                    position: absolute;
                    background: rgba(255,255,255,0.1);
                    border: none;
                    color: white;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    transition: background 0.2s ease;
                }
                .lightbox-btn:hover {
                    background: rgba(255,255,255,0.2);
                }
                .lightbox-close {
                    top: 20px;
                    right: 20px;
                }
                .lightbox-prev {
                    left: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 32px;
                }
                .lightbox-next {
                    right: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 32px;
                }
                .lightbox-caption {
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(0,0,0,0.7);
                    padding: 12px 24px;
                    border-radius: 8px;
                    color: white;
                    font-size: 0.9rem;
                }
                @media (max-width: 1024px) {
                    .gallery-grid {
                        grid-template-columns: repeat(4, 1fr);
                        grid-auto-rows: 150px;
                        gap: 10px;
                    }
                    /* Tablet bento layout */
                    .gallery-card:nth-child(1) {
                        grid-column: span 2;
                        grid-row: span 2;
                    }
                    .gallery-card:nth-child(2) {
                        grid-column: span 2;
                        grid-row: span 2;
                    }
                    .gallery-card:nth-child(3) {
                        grid-column: span 2;
                        grid-row: span 1;
                    }
                    .gallery-card:nth-child(4) {
                        grid-column: span 2;
                        grid-row: span 1;
                    }
                    .gallery-card:nth-child(5) {
                        grid-column: span 2;
                        grid-row: span 2;
                    }
                    .gallery-card:nth-child(6) {
                        grid-column: span 2;
                        grid-row: span 2;
                    }
                    .gallery-card:nth-child(7) {
                        grid-column: span 2;
                        grid-row: span 1;
                    }
                    .gallery-card:nth-child(8) {
                        grid-column: span 2;
                        grid-row: span 1;
                    }
                    .gallery-card:nth-child(9) {
                        grid-column: span 2;
                        grid-row: span 2;
                    }
                    .gallery-card:nth-child(10) {
                        grid-column: span 2;
                        grid-row: span 2;
                    }
                    .gallery-card:nth-child(11) {
                        grid-column: span 2;
                        grid-row: span 1;
                    }
                    .gallery-card:nth-child(12) {
                        grid-column: span 2;
                        grid-row: span 1;
                    }
                }
                @media (max-width: 640px) {
                    .gallery-grid {
                        grid-template-columns: repeat(2, 1fr);
                        grid-auto-rows: 140px;
                        gap: 8px;
                    }
                    /* Mobile - stacked pairs */
                    .gallery-card:nth-child(odd) {
                        grid-column: span 2;
                        grid-row: span 1;
                    }
                    .gallery-card:nth-child(even) {
                        grid-column: span 2;
                        grid-row: span 1;
                    }
                    .gallery-card:nth-child(1),
                    .gallery-card:nth-child(5),
                    .gallery-card:nth-child(9) {
                        grid-row: span 2;
                    }
                }
            `}),e.jsxs("section",{style:{padding:"clamp(70px, 10vw, 120px) clamp(16px, 4vw, 32px)",background:"linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 50%, #F8FAFC 100%)",position:"relative"},children:[e.jsx("div",{style:{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",width:"120px",height:"3px",background:"linear-gradient(90deg, #3B82F6, #10B981, #F59E0B)",borderRadius:"0 0 3px 3px"}}),e.jsxs("div",{style:{maxWidth:"1280px",margin:"0 auto",marginBottom:"48px",textAlign:"center"},children:[e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"0.78rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.12em",color:"#3B82F6",padding:"6px 14px",borderRadius:"9999px",background:"#EFF6FF",border:"1px solid #DBEAFE",marginBottom:"16px"},children:[e.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#3B82F6"}})," ","Campus Life"]}),e.jsxs("h2",{style:{fontSize:"clamp(2rem, 4vw, 2.75rem)",fontWeight:800,lineHeight:1.15,letterSpacing:"-0.02em",color:"#0F172A",margin:"16px 0 12px"},children:["Moments That"," ",e.jsx("span",{style:{background:"linear-gradient(135deg, #3B82F6, #10B981)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Define Us"})]}),e.jsx("p",{style:{fontSize:"clamp(0.95rem, 1.2vw, 1.05rem)",lineHeight:1.7,color:"#64748B",maxWidth:"520px",margin:"0 auto"},children:"A glimpse into the vibrant world of learning, creativity, and joy at TDK Group of Institutions."})]}),e.jsx("div",{className:"gallery-grid",children:t.map((a,r)=>e.jsxs("div",{className:"gallery-card",onClick:()=>d(r),role:"button",tabIndex:0,onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),d(r))},children:[e.jsx("img",{src:a.src,alt:a.alt,loading:r<8?"eager":"lazy",fetchpriority:r<4?"high":"auto"}),e.jsx("div",{className:"gallery-card-overlay",children:e.jsx("p",{className:"gallery-caption",children:a.caption})})]},a.caption))})]}),l!==null&&e.jsxs("div",{className:"lightbox",onClick:s,onKeyDown:p,tabIndex:0,role:"dialog","aria-modal":"true","aria-label":`Gallery: ${t[l].caption}`,ref:a=>a?.focus(),children:[e.jsx("button",{className:"lightbox-btn lightbox-close",onClick:s,"aria-label":"Close",children:"×"}),e.jsx("button",{className:"lightbox-btn lightbox-prev",onClick:a=>{a.stopPropagation(),o(-1)},"aria-label":"Previous",children:"‹"}),e.jsx("img",{src:t[l].src,alt:t[l].alt,onClick:a=>a.stopPropagation()}),e.jsx("button",{className:"lightbox-btn lightbox-next",onClick:a=>{a.stopPropagation(),o(1)},"aria-label":"Next",children:"›"}),e.jsxs("div",{className:"lightbox-caption",children:[t[l].caption," (",l+1,"/",t.length,")"]})]})]})},S=()=>(n.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("div",{style:{paddingTop:"96px"},children:[e.jsxs("section",{style:{padding:"clamp(50px, 8vw, 100px) clamp(16px, 4vw, 24px)",textAlign:"center",position:"relative",overflow:"hidden",background:"linear-gradient(135deg, #F0F9FF 0%, #E0E7FF 50%, #DBEAFE 100%)",boxShadow:"inset 0 -1px 0 rgba(148, 163, 184, 0.1)"},children:[e.jsx("div",{className:"blob",style:{width:"min(500px, 80vw)",height:"min(500px, 80vw)",background:"linear-gradient(135deg, var(--color-accent), #FFAB91)",top:"-200px",left:"-100px",opacity:.4,position:"absolute",borderRadius:"50%",filter:"blur(80px)",zIndex:0}}),e.jsx("div",{className:"blob",style:{width:"min(400px, 70vw)",height:"min(400px, 70vw)",background:"linear-gradient(135deg, #93C5FD, #818CF8)",bottom:"-100px",right:"-100px",opacity:.4,animationDelay:"-5s",position:"absolute",borderRadius:"50%",filter:"blur(80px)",zIndex:0}}),e.jsxs("div",{className:"reveal active",style:{position:"relative",zIndex:1,maxWidth:"800px",margin:"0 auto"},children:[e.jsx("span",{style:{fontSize:"0.875rem",fontWeight:600,color:"var(--color-primary)",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:"12px",display:"inline-block"},children:"Our Story"}),e.jsxs("h1",{style:{fontSize:"clamp(2.5rem, 5vw, 3.5rem)",lineHeight:1.1,marginBottom:"24px",color:"var(--color-neutral-900)"},children:["Nurturing Future ",e.jsx("span",{style:{fontWeight:800,background:"linear-gradient(90deg, var(--color-primary), var(--color-accent), var(--color-calm))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",color:"transparent"},children:"Global Citizens"})]}),e.jsx("p",{style:{fontSize:"1.125rem",color:"var(--color-neutral-700)",marginBottom:"32px"},children:"Guided by the vision of SKTEC Trust, we foster independent thinking, empathy, and holistic growth in every child."})]})]}),e.jsx(g,{}),e.jsx("section",{style:{padding:"clamp(60px, 10vw, 120px) clamp(16px, 4vw, 24px)",background:"linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 50%, #FFFFFF 100%)",position:"relative"},children:e.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto"},children:[e.jsxs("div",{className:"reveal",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 300px), 1fr))",gap:"clamp(24px, 4vw, 60px)",alignItems:"center",marginBottom:"clamp(48px, 8vw, 100px)"},children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx("div",{style:{position:"absolute",inset:"10px -10px -10px 10px",background:"#E0E7FF",borderRadius:"24px",zIndex:-1}}),e.jsx("img",{src:"/images/staff/principal_image_tdk.png",alt:"Principal",loading:"lazy",decoding:"async",style:{width:"100%",height:"clamp(350px, 50vw, 550px)",objectFit:"cover",objectPosition:"center 15%",borderRadius:"24px",backgroundColor:"#f8fafc",boxShadow:"0 20px 40px -15px rgba(0,0,0,0.1)"}})]}),e.jsxs("div",{children:[e.jsx("span",{style:{color:"var(--color-primary)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",display:"block",marginBottom:"8px"},children:"Leadership"}),e.jsx("h2",{style:{fontSize:"clamp(1.5rem, 3.5vw, 2.25rem)",marginBottom:"24px",color:"var(--color-neutral-900)"},children:"From the Principal's Desk"}),e.jsxs("div",{style:{color:"var(--color-neutral-700)",lineHeight:1.8,marginBottom:"24px"},children:[e.jsx("p",{style:{marginBottom:"16px"},children:"As the Founder, Chairman, and Principal of TDK Group Of Institutions, I am committed to fostering a student-centric environment where every student can thrive academically, socially, and personally."}),e.jsxs("p",{style:{marginBottom:"16px"},children:["We embrace the principles of ",e.jsx("strong",{children:"SACH"}),": Scientific Enquiry, Agility, Creating Nature, and Unity. These values guide our commitment to developing well-rounded individuals who are curious, adaptable, and compassionate."]}),e.jsx("p",{children:"We remain focused on preparing students for success in a global society through open communication and collaboration."})]}),e.jsx("div",{style:{fontFamily:"'Nothing You Could Do', cursive",fontSize:"1.125rem",color:"var(--color-primary)",marginTop:"16px"},children:"- Principal"})]})]}),e.jsxs("div",{className:"reveal delay-200",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 300px), 1fr))",gap:"clamp(24px, 4vw, 60px)",alignItems:"center"},children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx("div",{style:{position:"absolute",inset:"10px 10px -10px -10px",background:"#E8F5E9",borderRadius:"24px",zIndex:-1}}),e.jsx("img",{src:"/images/staff/head_mistress_tdk.png",alt:"Head Mistress",loading:"lazy",decoding:"async",style:{width:"100%",height:"clamp(350px, 50vw, 550px)",objectFit:"cover",objectPosition:"center 15%",borderRadius:"24px",backgroundColor:"#f8fafc",boxShadow:"0 20px 40px -15px rgba(0,0,0,0.1)"}})]}),e.jsxs("div",{children:[e.jsx("span",{style:{color:"var(--color-calm)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.05em",display:"block",marginBottom:"8px"},children:"Message"}),e.jsx("h2",{style:{fontSize:"clamp(1.5rem, 3.5vw, 2.25rem)",marginBottom:"24px",color:"var(--color-neutral-900)"},children:"Head Mistress's Message"}),e.jsxs("div",{style:{color:"var(--color-neutral-700)",lineHeight:1.8},children:[e.jsx("p",{style:{marginBottom:"16px"},children:"As the Head Mistress and Secretary of SKTEC Trust, I extend a warm welcome to our community. We are dedicated to providing high-quality education that fosters critical thinking and holistic development."}),e.jsx("p",{style:{marginBottom:"16px"},children:"We strive to create a supportive environment where every student feels valued. We believe in the importance of holistic development, embracing innovation, and instilling strong ethical values."}),e.jsx("p",{children:"Gratitude to our dedicated staff and supportive parents for making our institute a vibrant learning community."})]}),e.jsx("div",{style:{fontFamily:"'Nothing You Could Do', cursive",fontSize:"1.125rem",color:"var(--color-calm)",marginTop:"16px"},children:"- Head Mistress"})]})]})]})}),e.jsx(C,{})]}));export{S as default};
