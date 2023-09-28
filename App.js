const clock=document.querySelector( '.clock');
const tick =()=>
{
    const now=new Date();
    let h=now.getHours();
    let m=now.getMinutes();
    let s=now.getSeconds();
    if(s>60)
    {
        s=0;
        m+=1;
    }
    if(m>60)
    {
        m=0;
        s=0;
        h+=1;
    }
    let html=`<span>${h}</span>:
    <span>${m}</span>:
    <span>${s}</span>`;
    clock.innerHTML=html;
    
    console.log(h,m,s);

}

setInterval(tick,1000);