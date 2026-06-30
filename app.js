const productsDiv=document.getElementById('products');
document.getElementById('themeToggle').onclick=()=>{
 document.body.classList.toggle('light');
};

async function loadProducts(type){
 const data=await fetch(`data/${type}.json`).then(r=>r.json());
 render(data);
}
function render(data){
 productsDiv.innerHTML=data.map(p=>`
 <div class="card">
 <h3>${p.name}</h3>
 <p>₹${p.price}</p>
 <p>Gaming Score: ${p.gamingScore}</p>
 <p>Antutu: ${p.antutu}</p>
 <p class="${p.trend==='down'?'price-down':'price-up'}">
 ${p.trend==='down'?'🟢 Price Dropped':'🔴 Price Increased'}
 </p>
 </div>`).join('');
}
loadProducts('phones');
