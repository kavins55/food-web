// ══════════════════════════════════════════════════════
//  DATA
// ══════════════════════════════════════════════════════
const categories = [
  {icon:'🥗',name:'Veg',count:'120 items',cat:'veg'},
  {icon:'🍖',name:'Non-Veg',count:'200 items',cat:'non-veg'},
  {icon:'🍟',name:'Fast Food',count:'85 items',cat:'fast-food'},
  {icon:'🍰',name:'Desserts',count:'60 items',cat:'desserts'},
  {icon:'🧋',name:'Drinks',count:'45 items',cat:'drinks'},
  {icon:'🍣',name:'Sushi',count:'38 items',cat:'sushi'},
  {icon:'🌮',name:'Mexican',count:'52 items',cat:'mexican'},
  {icon:'🍝',name:'Italian',count:'70 items',cat:'italian'},
];

// Sort: hot first, then bestseller, then new, then by rating desc
const allFoods = [
  {id:4,emoji:'🍜',img:'images/ramen_deluxe.png',imgFallback:'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80',name:'Ramen Deluxe',rest:'Tokyo Noodles',price:349,original:450,rating:4.9,time:'30 min',tag:'hot',cat:'non-veg',liked:false},
  {id:1,emoji:'🍕',img:'images/pizza_margherita.png',imgFallback:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80',name:'Spicy Margherita',rest:'Pizza Palace',price:299,original:399,rating:4.8,time:'25 min',tag:'hot',cat:'veg',liked:false},
  {id:8,emoji:'🍣',img:'images/salmon_sushi.png',imgFallback:'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80',name:'Salmon Nigiri',rest:'Sakura Sushi',price:399,original:499,rating:4.8,time:'25 min',tag:'hot',cat:'non-veg',liked:false},
  {id:11,emoji:'🍗',img:'images/crispy_chicken.png',imgFallback:'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80',name:'Crispy Chicken',rest:'Cluck It',price:229,original:299,rating:4.7,time:'22 min',tag:'hot',cat:'non-veg',liked:false},
  {id:6,emoji:'🍰',img:'images/chocolate_lava_cake.png',imgFallback:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80',name:'Chocolate Lava Cake',rest:'Sweet Dreams',price:149,original:199,rating:4.9,time:'20 min',tag:'bestseller',cat:'desserts',liked:false},
  {id:2,emoji:'🍔',img:'images/smash_burger.png',imgFallback:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',name:'Smash Burger',rest:'Burger Bros',price:249,original:320,rating:4.7,time:'20 min',tag:'bestseller',cat:'non-veg',liked:false},
  {id:10,emoji:'🍦',img:'images/gelato_trio.png',imgFallback:'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=600&q=80',name:'Gelato Trio',rest:'Sweet Dreams',price:129,original:169,rating:4.6,time:'5 min',tag:'bestseller',cat:'desserts',liked:false},
  {id:7,emoji:'🧋',img:'images/bubble_tea.png',imgFallback:'https://images.unsplash.com/photo-1558857563-b371033873b8?w=600&q=80',name:'Mango Bubble Tea',rest:'BubbleBliss',price:149,original:null,rating:4.7,time:'5 min',tag:'new',cat:'drinks',liked:false},
  {id:3,emoji:'🌮',img:'images/crunchy_tacos.png',imgFallback:'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80',name:'Crunchy Tacos',rest:'Taco Town',price:189,original:null,rating:4.6,time:'15 min',tag:'new',cat:'fast-food',liked:false},
  {id:5,emoji:'🥗',img:'images/garden_salad.png',imgFallback:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',name:'Garden Salad Bowl',rest:'Green Bites',price:199,original:null,rating:4.5,time:'10 min',tag:'new',cat:'veg',liked:false},
  {id:12,emoji:'🌯',img:'images/paneer_tikka_wrap.png',imgFallback:'https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=600&q=80',name:'Paneer Tikka Wrap',rest:'Spice Route',price:179,original:null,rating:4.5,time:'18 min',tag:'new',cat:'veg',liked:false},
  {id:9,emoji:'🥙',img:'images/veg_wrap.png',imgFallback:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80',name:'Veg Wrap',rest:'Wrap Star',price:169,original:null,rating:4.4,time:'12 min',tag:null,cat:'veg',liked:false},
];

const restaurants = [
  {emoji:'🍕',img:'images/restaurant_pizza_palace.png',imgFallback:'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',name:'Pizza Palace',cuisine:'Italian · Pizza · Pasta',rating:4.8,time:'20-30 min',deliveryFee:'₹20',open:true},
  {emoji:'🍔',img:'images/restaurant_burger_bros.png',imgFallback:'https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=600&q=80',name:'Burger Bros',cuisine:'American · Burgers · Shakes',rating:4.7,time:'15-25 min',deliveryFee:'Free',open:true},
  {emoji:'🍣',img:'images/restaurant_sakura_sushi.png',imgFallback:'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&q=80',name:'Sakura Sushi',cuisine:'Japanese · Sushi · Ramen',rating:4.9,time:'25-35 min',deliveryFee:'₹30',open:true},
  {emoji:'🌮',img:'images/crunchy_tacos.png',imgFallback:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',name:'Taco Town',cuisine:'Mexican · Tacos · Burritos',rating:4.6,time:'15-20 min',deliveryFee:'Free',open:true},
  {emoji:'🍰',img:'images/restaurant_sweet_dreams.png',imgFallback:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',name:'Sweet Dreams',cuisine:'Desserts · Cakes · Ice Cream',rating:4.8,time:'10-20 min',deliveryFee:'₹15',open:true},
  {emoji:'🧋',img:'images/bubble_tea.png',imgFallback:'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&q=80',name:'BubbleBliss',cuisine:'Beverages · Smoothies · Tea',rating:4.7,time:'5-15 min',deliveryFee:'Free',open:true},
];

const aiSuggestionsMap = {
  'dinner': ['🍜 Ramen Deluxe','🍕 Spicy Margherita','🍔 Smash Burger'],
  'lunch': ['🥗 Garden Salad','🌮 Crunchy Tacos','🥙 Veg Wrap'],
  'breakfast': ['🥗 Garden Salad','☕ Cappuccino','🍳 Egg Benedict'],
  'spicy': ['🌶️ Spicy Margherita','🍜 Ramen Deluxe','🌮 Crunchy Tacos'],
  'sweet': ['🍰 Lava Cake','🍦 Gelato Trio','🧁 Cupcakes'],
  default: ['🍕 Pizza','🍔 Burger','🧋 Bubble Tea','🍣 Sushi']
};

const chatReplies = {
  'pizza': 'Great choice! 🍕 I recommend our Spicy Margherita (₹299) or the BBQ Chicken (₹349). Both have 4.8+ ratings! Shall I add one to your cart?',
  'burger': 'Burger lover! 🍔 The Smash Burger is our bestseller at just ₹249. Want to add it to your cart?',
  'healthy': '🥗 For healthy options, try our Garden Salad Bowl (₹199) or the Paneer Tikka Wrap (₹179). Both are fresh and nutritious!',
  'deals': '🏷️ Today\'s deals: 50% OFF on your first order (FIRST50), Free delivery above ₹299 (FREEDEL), Buy 2 Get 1 on drinks (BUY2GET1)!',
  'suggest': '🤔 Based on your order history, you might love: Ramen Deluxe for dinner, or Crispy Chicken if you want something filling!',
  'default': '😊 I\'d love to help! You can ask me for dish recommendations, deals, or even place an order. What are you in the mood for?'
};

// ══════════════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════════════
let cart = [];
let isDark = true;
let currentFilter = 'all';
let trackStep = 2;
let couponApplied = false;

// ══════════════════════════════════════════════════════
//  PAGE NAVIGATION
// ══════════════════════════════════════════════════════
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.querySelectorAll('.mob-nav-item').forEach(m => m.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  
  const navEl = document.getElementById('nav-' + id);
  if (navEl) navEl.classList.add('active');
  
  document.querySelectorAll('.mob-nav-item').forEach(m => {
    if (m.getAttribute('onclick') && m.getAttribute('onclick').includes(id)) {
      m.classList.add('active');
    }
  });

  window.scrollTo(0, 0);
  if (id === 'cart') renderCart();
  if (id === 'checkout') renderCheckoutSummary();
  if (id === 'menu') renderMenuPage();
  if (id === 'dashboard') renderDashboard();
  revealElements();
}

// ══════════════════════════════════════════════════════
//  THEME
// ══════════════════════════════════════════════════════
function toggleTheme() {
  isDark = !isDark;
  document.body.classList.toggle('light-mode', !isDark);
  document.getElementById('theme-btn').textContent = isDark ? '🌙' : '☀️';
  showToast(isDark ? '🌙 Dark mode' : '☀️ Light mode', 'info');
}

// ══════════════════════════════════════════════════════
//  RENDER HELPERS
// ══════════════════════════════════════════════════════
function renderFoodCard(food, size = '') {
  return `
    <div class="food-card${size}" id="fc-${food.id}">
      <div class="food-img">
        ${food.img ? `<img src="${food.img}" alt="${food.name}" onerror="if(this.dataset.tried){this.style.display='none';this.nextElementSibling.style.display='flex'}else{this.dataset.tried=1;this.src='${food.imgFallback||''}'}" >` : ''}
        <span class="food-emoji-fallback" style="${food.img ? 'display:none' : 'display:flex;align-items:center;justify-content:center;width:100%;height:100%'}">${food.emoji}</span>
        <div class="food-img-overlay"></div>
        ${food.tag ? `<div class="food-tag tag-${food.tag}">${food.tag === 'hot' ? '🔥 HOT' : food.tag === 'new' ? '✨ NEW' : '⭐ BEST'}</div>` : ''}
        <div class="food-fav ${food.liked ? 'liked' : ''}" onclick="toggleFav(${food.id},event)">❤️</div>
      </div>
      <div class="food-info">
        <div class="food-name">${food.name}</div>
        <div class="food-rest">🏪 ${food.rest}</div>
        <div class="food-meta">
          <div class="food-rating"><span class="star">★</span> ${food.rating}</div>
          <div class="food-time">⏱ ${food.time}</div>
        </div>
        <div class="food-footer">
          <div class="food-price">₹${food.price}${food.original ? `<span class="original">₹${food.original}</span>` : ''}</div>
          <button class="add-cart-btn" id="btn-${food.id}" onclick="addToCart(${food.id},event)">+</button>
        </div>
      </div>
    </div>`;
}

// ══════════════════════════════════════════════════════
//  HOME PAGE
// ══════════════════════════════════════════════════════
function renderHome() {
  // Categories
  const cg = document.getElementById('home-categories');
  if (cg) cg.innerHTML = categories.map(c => `
    <div class="cat-card reveal stagger" onclick="goMenuFilter('${c.cat}')">
      <span class="cat-icon">${c.icon}</span>
      <div class="cat-name">${c.name}</div>
      <div class="cat-count">${c.count}</div>
    </div>`).join('');

  // Trending
  const td = document.getElementById('trending-dishes');
  if (td) td.innerHTML = allFoods.slice(0,4).map(f => renderFoodCard(f)).join('');

  // Restaurants
  const rg = document.getElementById('restaurants-grid');
  if (rg) rg.innerHTML = restaurants.map(r => `
    <div class="rest-card reveal">
      <div class="rest-img">
        ${r.img ? `<img src="${r.img}" alt="${r.name}" onerror="if(this.dataset.tried){this.style.display='none';this.nextElementSibling.style.display='block'}else{this.dataset.tried=1;this.src='${r.imgFallback||''}'}">` : ''}
        <span class="rest-emoji-fallback" style="${r.img ? 'display:none' : 'display:block'};font-size:60px;position:absolute">${r.emoji}</span>
        <div class="rest-img-overlay"></div>
      </div>
      <div class="rest-info">
        <div class="rest-name">${r.name}</div>
        <div class="rest-cuisine">${r.cuisine}</div>
        <div class="rest-meta">
          <div class="food-rating"><span class="star">★</span> ${r.rating}</div>
          <div class="food-time">⏱ ${r.time}</div>
          <div class="food-time">🛵 ${r.deliveryFee}</div>
          <div class="rest-badge">${r.open ? '● Open Now' : 'Closed'}</div>
        </div>
      </div>
    </div>`).join('');
}

function goMenuFilter(cat) {
  currentFilter = cat;
  showPage('menu');
}

// ══════════════════════════════════════════════════════
//  MENU PAGE
// ══════════════════════════════════════════════════════
function renderMenuPage() {
  const aiItems = allFoods.slice(4, 7);
  const aiEl = document.getElementById('ai-rec-items');
  if (aiEl) aiEl.innerHTML = aiItems.map(f => renderFoodCard(f)).join('');
  filterMenu(currentFilter);
}

function filterMenu(cat, el) {
  currentFilter = cat;
  document.querySelectorAll('#filters-bar .filter-chip').forEach(c => c.classList.remove('active'));
  if (el) el.classList.add('active');
  const items = cat === 'all' ? allFoods : allFoods.filter(f => f.cat === cat);
  const el2 = document.getElementById('menu-items');
  if (el2) el2.innerHTML = items.length ? items.map(f => renderFoodCard(f)).join('') : `<div class="empty-state" style="grid-column:1/-1"><div class="es-icon">🍽️</div><div class="es-title">No items found</div><div class="es-sub">Try a different category</div></div>`;
}

function sortMenu(val) {
  let items = currentFilter === 'all' ? [...allFoods] : allFoods.filter(f => f.cat === currentFilter);
  if (val === 'price-low') items.sort((a,b) => a.price - b.price);
  if (val === 'price-high') items.sort((a,b) => b.price - a.price);
  if (val === 'rating') items.sort((a,b) => b.rating - a.rating);
  const el = document.getElementById('menu-items');
  if (el) el.innerHTML = items.map(f => renderFoodCard(f)).join('');
}

// ══════════════════════════════════════════════════════
//  CART
// ══════════════════════════════════════════════════════
function addToCart(id, e) {
  e && e.stopPropagation();
  const food = allFoods.find(f => f.id === id);
  if (!food) return;
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
    showToast(`➕ Added another ${food.name}`, 'info');
  } else {
    cart.push({...food, qty: 1});
    showToast(`🛒 ${food.name} added!`, 'success');
  }
  updateCartBadge();
  animateCartBtn(id);
}

function animateCartBtn(id) {
  const btn = document.getElementById('btn-' + id);
  if (btn) {
    btn.classList.add('added');
    btn.textContent = '✓';
    setTimeout(() => { btn.classList.remove('added'); btn.textContent = '+'; }, 1500);
  }
}

function updateCartBadge() {
  const total = cart.reduce((s, c) => s + c.qty, 0);
  document.getElementById('cart-count').textContent = total;
}

function renderCart() {
  const container = document.getElementById('cart-items-container');
  if (!container) return;
  if (!cart.length) {
    container.innerHTML = `<div class="empty-state"><div class="es-icon">🛒</div><div class="es-title">Your cart is empty</div><div class="es-sub">Add some delicious food!</div><button class="btn-primary" style="margin-top:20px" onclick="showPage('menu')">Browse Menu</button></div>`;
  } else {
    container.innerHTML = cart.map(item => `
      <div class="cart-item" id="ci-${item.id}">
        <div class="cart-item-emoji" style="overflow:hidden;border-radius:16px;padding:0">
          ${item.img ? `<img src="${item.img}" alt="${item.name}" style="width:72px;height:72px;object-fit:cover;display:block;border-radius:16px" onerror="this.style.display='none';this.parentElement.innerHTML='<span style=\\'font-size:48px;display:flex;align-items:center;justify-content:center;width:72px;height:72px\\'>${item.emoji}</span>'">` : `<span style="font-size:48px;display:flex;align-items:center;justify-content:center;width:72px;height:72px">${item.emoji}</span>`}
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-rest">${item.rest}</div>
          <div class="qty-control">
            <div class="qty-btn" onclick="changeQty(${item.id},-1)">−</div>
            <div class="qty-num">${item.qty}</div>
            <div class="qty-btn" onclick="changeQty(${item.id},1)">+</div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:10px">
          <div class="cart-item-price">₹${item.price * item.qty}</div>
          <div class="cart-del" onclick="removeFromCart(${item.id})">🗑️</div>
        </div>
      </div>`).join('');
  }
  renderPriceBreakdown();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else renderCart();
  updateCartBadge();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartBadge();
  renderCart();
  showToast('🗑️ Item removed', 'info');
}

function renderPriceBreakdown() {
  const sub = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const del = sub >= 299 ? 0 : 30;
  const tax = Math.round(sub * 0.05);
  const disc = couponApplied ? Math.round(sub * 0.1) : 0;
  const total = sub + del + tax - disc;
  const el = document.getElementById('price-breakdown');
  if (el) el.innerHTML = `
    <div class="price-row"><span class="price-label">Subtotal</span><span class="price-val">₹${sub}</span></div>
    <div class="price-row"><span class="price-label">Delivery</span><span class="price-val">${del === 0 ? '<span style="color:#22c55e">Free</span>' : '₹' + del}</span></div>
    <div class="price-row"><span class="price-label">Tax (5%)</span><span class="price-val">₹${tax}</span></div>
    ${disc ? `<div class="price-row"><span class="price-label">Discount 🎉</span><span class="price-val" style="color:#22c55e">-₹${disc}</span></div>` : ''}
    <div class="price-row"><span>Total</span><span>₹${total}</span></div>`;
}

function applyCoupon() {
  const val = document.getElementById('coupon-input')?.value?.toUpperCase();
  if (val === 'FIRST50' || val === 'FREEDEL' || val === 'SAVE10') {
    couponApplied = true;
    showToast('🎉 Coupon applied! 10% off', 'success');
    renderPriceBreakdown();
  } else {
    showToast('❌ Invalid coupon code', 'info');
  }
}

// ══════════════════════════════════════════════════════
//  CHECKOUT
// ══════════════════════════════════════════════════════
function renderCheckoutSummary() {
  const el = document.getElementById('checkout-summary');
  if (!el) return;
  const sub = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const del = sub >= 299 ? 0 : 30;
  const tax = Math.round(sub * 0.05);
  const total = sub + del + tax;
  el.innerHTML = cart.map(i => `<div class="price-row" style="border:none;padding:8px 0"><span>${i.emoji} ${i.name} ×${i.qty}</span><span>₹${i.price * i.qty}</span></div>`).join('') +
    `<div class="price-row" style="padding:8px 0"><span class="price-label">Delivery</span><span>${del === 0 ? '<span style="color:#22c55e">Free</span>' : '₹'+del}</span></div>
     <div class="price-row" style="padding:8px 0"><span class="price-label">Tax</span><span>₹${tax}</span></div>
     <div class="price-row" style="font-size:1.1rem;font-weight:800;color:var(--orange);padding-top:16px"><span>Total</span><span>₹${total}</span></div>`;
}

function selectPay(el) {
  document.querySelectorAll('.pay-option').forEach(p => p.classList.remove('selected'));
  el.classList.add('selected');
}

function placeOrder() {
  if (!cart.length) { showToast('🛒 Cart is empty!', 'info'); return; }
  document.getElementById('success-overlay').classList.add('show');
  cart = [];
  updateCartBadge();
  couponApplied = false;
}

function closeSuccess() {
  document.getElementById('success-overlay').classList.remove('show');
  showPage('tracking');
}

// ══════════════════════════════════════════════════════
//  ORDER TRACKING
// ══════════════════════════════════════════════════════
const trackSteps = [
  {emoji:'📋',status:'Order Confirmed',eta:'Your order has been confirmed!',mapIcon:'📋'},
  {emoji:'🍳',status:'Preparing Your Order',eta:'⏱ Estimated delivery: 28–35 minutes',mapIcon:'👨‍🍳'},
  {emoji:'🛵',status:'Out for Delivery',eta:'⏱ Your rider is on the way!',mapIcon:'🛵'},
  {emoji:'🎉',status:'Delivered!',eta:'✅ Enjoy your meal!',mapIcon:'🏠'},
];

function advanceTracking() {
  if (trackStep >= 3) { showToast('✅ Order already delivered!','success'); return; }
  trackStep++;
  updateTrackUI();
}
function resetTracking() { trackStep = 1; updateTrackUI(); }

function updateTrackUI() {
  const s = trackSteps[trackStep];
  document.getElementById('track-emoji').textContent = s.emoji;
  document.getElementById('track-status').textContent = s.status;
  document.getElementById('track-eta').textContent = s.eta;
  document.getElementById('map-icon').textContent = s.mapIcon;
  for (let i = 0; i <= 3; i++) {
    const dot = document.getElementById('step-' + (i + 1));
    const label = dot?.nextElementSibling;
    const line = document.getElementById('line-' + (i + 1));
    if (!dot) continue;
    if (i < trackStep) {
      dot.className = 'step-dot done'; dot.textContent = '✓';
      if (label) label.className = 'step-label done';
      if (line) line.className = 'step-line done';
    } else if (i === trackStep) {
      dot.className = 'step-dot active'; dot.textContent = trackSteps[i].emoji;
      if (label) label.className = 'step-label active';
      if (line) line.className = 'step-line';
    } else {
      dot.className = 'step-dot pending'; dot.textContent = ['📋','🍳','🛵','🏠'][i];
      if (label) label.className = 'step-label';
      if (line) line.className = 'step-line';
    }
  }
}

// ══════════════════════════════════════════════════════
//  DASHBOARD
// ══════════════════════════════════════════════════════
function renderDashboard() {
  const orderHistory = document.getElementById('order-history');
  if (orderHistory) orderHistory.innerHTML = [
    {emoji:'🍕',name:'Spicy Margherita',date:'Mar 20, 2025',status:'Delivered',price:'₹299'},
    {emoji:'🍔',name:'Smash Burger + Fries',date:'Mar 18, 2025',status:'Delivered',price:'₹399'},
    {emoji:'🧋',name:'Mango Bubble Tea',date:'Mar 15, 2025',status:'Delivered',price:'₹149'},
    {emoji:'🍰',name:'Chocolate Lava Cake',date:'Mar 12, 2025',status:'Processing',price:'₹149'},
  ].map(o => `
    <div class="order-hist-item">
      <div class="order-emoji">${o.emoji}</div>
      <div class="order-hist-info"><div class="order-hist-name">${o.name}</div><div class="order-hist-date">${o.date} · ${o.price}</div></div>
      <div class="order-hist-status ${o.status === 'Delivered' ? 'status-delivered' : 'status-processing'}">${o.status}</div>
    </div>`).join('');
  const favItems = document.getElementById('fav-items');
  if (favItems) favItems.innerHTML = allFoods.slice(0, 3).map(f => renderFoodCard(f)).join('');
}

// ══════════════════════════════════════════════════════
//  FAVORITES
// ══════════════════════════════════════════════════════
function toggleFav(id, e) {
  e.stopPropagation();
  const food = allFoods.find(f => f.id === id);
  if (!food) return;
  food.liked = !food.liked;
  document.querySelectorAll(`#fc-${id} .food-fav`).forEach(el => el.classList.toggle('liked', food.liked));
  showToast(food.liked ? `❤️ Added to favorites!` : `💔 Removed from favorites`, food.liked ? 'success' : 'info');
}

// ══════════════════════════════════════════════════════
//  SEARCH
// ══════════════════════════════════════════════════════
function showSuggestions() { document.getElementById('ai-suggestions').classList.add('show'); }
function hideSuggestions() { document.getElementById('ai-suggestions').classList.remove('show'); }
function handleSearch(val) { if (val.length > 0) showSuggestions(); else hideSuggestions(); }
function searchFor(term) {
  document.getElementById('search-input').value = term;
  hideSuggestions();
  showToast(`🔍 Searching for "${term}"...`, 'info');
  setTimeout(() => showPage('menu'), 500);
}
function doSearch() {
  const val = document.getElementById('search-input').value;
  if (val) searchFor(val);
}

// ══════════════════════════════════════════════════════
//  AI CHATBOT
// ══════════════════════════════════════════════════════
let chatOpen = false;
function toggleChat() {
  chatOpen = !chatOpen;
  document.getElementById('chat-panel').classList.toggle('open', chatOpen);
}

function sendChat() {
  const input = document.getElementById('chat-input');
  const msg = input.value.trim();
  if (!msg) return;
  appendMsg(msg, 'user');
  input.value = '';
  setTimeout(() => {
    const lower = msg.toLowerCase();
    let reply = chatReplies.default;
    for (const key in chatReplies) {
      if (lower.includes(key)) { reply = chatReplies[key]; break; }
    }
    appendMsg(reply, 'bot');
  }, 800);
}

function sendQuick(msg) {
  document.getElementById('chat-input').value = msg;
  sendChat();
}

function appendMsg(text, type) {
  const msgs = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = `chat-msg ${type}`;
  div.textContent = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

// ══════════════════════════════════════════════════════
//  TOAST
// ══════════════════════════════════════════════════════
let toastTimer;
function showToast(msg, type = 'info') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = `toast ${type} show`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ══════════════════════════════════════════════════════
//  SCROLL REVEAL
// ══════════════════════════════════════════════════════
function revealElements() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

// ══════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════
renderHome();
revealElements();
updateTrackUI();

// Tilt effect on food cards
document.addEventListener('mousemove', (e) => {
  document.querySelectorAll('.food-card-3d').forEach(card => {
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / 30;
    const dy = (e.clientY - cy) / 30;
    card.style.transform = `rotateY(${dx}deg) rotateX(${-dy}deg)`;
  });
});

// Ripple on buttons
document.addEventListener('click', (e) => {
  if (e.target.matches('.btn-primary, .add-cart-btn, .place-order-btn')) {
    const btn = e.target;
    const ripple = document.createElement('span');
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `position:absolute;width:${size}px;height:${size}px;border-radius:50%;background:rgba(255,255,255,0.3);transform:scale(0);animation:ripple 0.6s linear;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px;pointer-events:none`;
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }
});

const rippleStyle = document.createElement('style');
rippleStyle.textContent = '@keyframes ripple{to{transform:scale(2.5);opacity:0}}';
document.head.appendChild(rippleStyle);
