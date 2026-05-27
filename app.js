(() => {
  'use strict';

  const CART_KEY = 'ecosport_cart_v1';
  const CONTACT_ENDPOINT = '';
  const CONTACT_RECIPIENT = 'david.sernie@educa.jcyl.es';

  const PRODUCTS = [
    {
      id:'chaqueta-cima',
      name:'Chaqueta Cima',
      category:'indumentaria',
      price:89.99,
      blurb:'Capa media de aislamiento híbrido que regula la temperatura en plena actividad de montaña.',
      tagline:'Aislamiento híbrido para la actividad de alta montaña.',
      description:'La Chaqueta Cima combina un cuerpo aislante con costados elásticos transpirables para mantener el calor sin sobrecalentar en marcha. Una capa media versátil que rinde tanto en la aproximación como en la cumbre.',
      images:['inventario/chaqueta-1.jpg','INVENTARIO/chaqueta-2.jpg'],
      sizes:['S','M','L','XL'],
      stock:'En stock',
      specs:[
        ['Peso','380 g'],
        ['Capucha','Ajustable, compatible con casco'],
        ['Bolsillos','2 frontales con cremallera'],
        ['Acabado','Hidrófugo DWR sin PFC']
      ],
      materials:['Exterior 100% poliéster reciclado','Relleno de fibra sintética reciclada de 80 g','Forro de tafetán reciclado'],
      usage:'Alpinismo, esquí de travesía y montañismo invernal de intensidad media-alta.',
      eco:'Tejida íntegramente con poliéster reciclado a partir de botellas PET y tratada con un acabado hidrófugo libre de PFC.'
    },
    {
      id:'mochila-eco-50',
      name:'Mochila ECO 50L',
      category:'equipo',
      price:49.99,
      blurb:'Mochila de gran volumen con espalda ventilada para travesías de varios días.',
      tagline:'50 litros de capacidad para travesías de varios días.',
      description:'Mochila de gran volumen con espalda ventilada y doble acceso, superior y frontal. Pensada para portear cargas largas con comodidad sin renunciar a la organización interior.',
      images:['inventario/mochila-1.jpg','INVENTARIO/mochila-2.png'],
      sizes:null,
      stock:'En stock',
      specs:[
        ['Capacidad','50 L'],
        ['Peso','1,35 kg'],
        ['Acceso','Superior y frontal'],
        ['Extras','Funda de lluvia incluida']
      ],
      materials:['Tejido principal de nailon reciclado 600D','Refuerzos de base en nailon ripstop','Hebillas libres de metales pesados'],
      usage:'Trekking de varios días, travesías de refugio en refugio y viajes de mochilero.',
      eco:'Cuerpo confeccionado con nailon regenerado procedente de redes de pesca recuperadas del océano.'
    },
    {
      id:'chaleco-ecofibra',
      name:'Chaleco EcoFibra',
      category:'indumentaria',
      price:69.99,
      blurb:'Cortavientos ultraligero que protege el núcleo y se pliega en su propio bolsillo.',
      tagline:'Cortavientos ultraligero para proteger el núcleo.',
      description:'El Chaleco EcoFibra detiene el viento sobre el torso sin limitar el movimiento de los brazos. Se pliega en su propio bolsillo y pesa lo que un puñado de hojas.',
      images:['inventario/chaleco-1.jpg','INVENTARIO/chaleco-2.jpg'],
      sizes:['S','M','L','XL'],
      stock:'En stock',
      specs:[
        ['Peso','95 g'],
        ['Plegado','Se guarda en su bolsillo'],
        ['Cuello','Alto, con protección de mentón'],
        ['Bolsillo','Pectoral con cremallera']
      ],
      materials:['Tejido cortavientos de poliamida reciclada 20D','Ribetes elásticos de hilo reciclado'],
      usage:'Trail running, ciclismo y actividades aeróbicas en días ventosos.',
      eco:'Tejido principal hilado con poliamida reciclada de baja huella de carbono.'
    },
    {
      id:'zapatillas-trail',
      name:'Zapatillas Trail',
      category:'indumentaria',
      price:104.99,
      blurb:'Zapatilla de montaña con agarre multidireccional y amortiguación reactiva.',
      tagline:'Agarre y amortiguación para el terreno técnico.',
      description:'Zapatilla de trail con tacos profundos multidireccionales y mediasuela reactiva. Ofrece estabilidad en descensos exigentes y protección frente a impactos en terreno irregular.',
      images:['inventario/zapatilla-1.jpg','INVENTARIO/zapatilla-2.jpg'],
      sizes:['39','40','41','42','43','44','45','46'],
      stock:'Pocas unidades',
      specs:[
        ['Drop','8 mm'],
        ['Peso','290 g (talla 42)'],
        ['Tacos','5 mm multidireccionales'],
        ['Protección','Placa en el antepié']
      ],
      materials:['Upper de malla técnica reciclada','Mediasuela EVA de origen parcialmente reciclado','Suela de caucho reciclado'],
      usage:'Carrera por montaña, trail running técnico y senderismo rápido.',
      eco:'Upper tejido con hilo reciclado y suela fabricada con caucho recuperado.'
    },
    {
      id:'botella-hidro-700',
      name:'Botella Hidro 700ml',
      category:'accesorios',
      price:19.99,
      blurb:'Botella isotérmica de acero que mantiene la temperatura durante toda la jornada.',
      tagline:'Hidratación isotérmica para toda la jornada.',
      description:'Botella de acero de doble pared que conserva las bebidas frías hasta 24 horas y calientes hasta 12. Boca ancha para añadir hielo con facilidad y tapón estanco antigoteo.',
      images:['INVENTARIO/botella-1.jpg'],
      sizes:null,
      stock:'En stock',
      specs:[
        ['Capacidad','700 ml'],
        ['Aislamiento','Frío 24 h / Calor 12 h'],
        ['Peso','320 g'],
        ['Boca','Ancha, sin BPA']
      ],
      materials:['Acero inoxidable 18/8 reciclable','Tapón de bioplástico','Acabado mate antideslizante'],
      usage:'Uso diario, montaña, oficina y viajes.',
      eco:'Fabricada en acero inoxidable 100% reciclable, reduce el consumo de envases de un solo uso.'
    },
    {
      id:'saco-artico',
      name:'Saco Ártico',
      category:'equipo',
      price:109.99,
      blurb:'Saco de dormir tipo momia con relleno sintético de alto loft para noches frías.',
      tagline:'Confort térmico hasta -10 °C en la montaña.',
      description:'Saco de dormir tipo momia con relleno sintético de alto loft. Su capucha ergonómica y la cremallera anticongelación garantizan un descanso reparador en condiciones frías.',
      images:['INVENTARIO/saco-1.png','INVENTARIO/saco-2.jpg'],
      sizes:null,
      stock:'En stock',
      specs:[
        ['Confort','-10 °C'],
        ['Peso','1,6 kg'],
        ['Cremallera','Doble carro anticongelación'],
        ['Extras','Saco de compresión incluido']
      ],
      materials:['Relleno sintético reciclado de alto loft','Exterior ripstop reciclado','Forro interior suave reciclado'],
      usage:'Acampada de montaña, refugios de invierno y trekking en condiciones frías.',
      eco:'Relleno y tejidos confeccionados íntegramente con fibras 100% recicladas.'
    }
  ];

  const CATEGORY_LABEL = {indumentaria:'Indumentaria',equipo:'Equipo',accesorios:'Accesorios'};

  const euros = n => `${n.toLocaleString('es-ES',{minimumFractionDigits:2,maximumFractionDigits:2})} €`;
  const findProduct = id => PRODUCTS.find(p => p.id === id) || null;
  const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  function readCart(){
    try{
      const data = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
      return Array.isArray(data) ? data : [];
    }catch(e){
      return [];
    }
  }
  function writeCart(cart){
    try{ localStorage.setItem(CART_KEY, JSON.stringify(cart)); }catch(e){}
    syncCartUI();
  }
  function addToCart(id, qty){
    const amount = qty && qty > 0 ? qty : 1;
    const cart = readCart();
    const line = cart.find(it => it.id === id);
    if(line) line.qty += amount;
    else cart.push({id, qty:amount});
    writeCart(cart);
  }
  function updateQty(id, delta){
    const cart = readCart()
      .map(it => it.id === id ? {...it, qty: it.qty + delta} : it)
      .filter(it => it.qty > 0);
    writeCart(cart);
  }
  function removeFromCart(id){
    writeCart(readCart().filter(it => it.id !== id));
  }
  function clearCart(){
    writeCart([]);
  }
  function cartLines(){
    return readCart()
      .map(it => {
        const p = findProduct(it.id);
        return p ? {product:p, qty:it.qty, total:p.price * it.qty} : null;
      })
      .filter(Boolean);
  }
  function cartCount(){
    return readCart().reduce((s, it) => s + it.qty, 0);
  }
  function cartSubtotal(){
    return cartLines().reduce((s, l) => s + l.total, 0);
  }

  function navHtml(page){
    const links = [
      {href:'index.html',label:'Inicio',key:'inicio'},
      {href:'tienda.html',label:'Tienda',key:'tienda'},
      {href:'nosotros.html',label:'Nosotros',key:'nosotros'},
      {href:'contacto.html',label:'Contacto',key:'contacto'}
    ];
    const menu = links
      .map(l => `<a class="nav__link${l.key === page ? ' is-active' : ''}" href="${l.href}">${l.label}</a>`)
      .join('');
    return `<header class="nav" id="site-nav">
      <div class="nav__inner">
        <a class="nav__brand" href="index.html">ECO<span>SPORT</span></a>
        <nav class="nav__menu" aria-label="Principal">${menu}
          <button class="nav__cart" id="cart-open" aria-label="Abrir cesta">Carrito
            <span class="nav__count" id="cart-count">0</span>
          </button>
        </nav>
        <button class="nav__burger" id="nav-burger" aria-label="Abrir menú" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>`;
  }

  function footerHtml(){
    return `<footer class="footer">
      <div class="wrap">
        <div class="footer__top">
          <div class="footer__brand-col">
            <div class="footer__brand">ECO<span>SPORT</span></div>
            <p class="footer__tag">Equipamiento técnico de alta montaña fabricado con materiales reciclados. Diseñado, probado y construido para el terreno más exigente.</p>
          </div>
          <div class="footer__col">
            <h4>Navegación</h4>
            <a href="index.html">Inicio</a>
            <a href="tienda.html">Tienda</a>
            <a href="nosotros.html">Nosotros</a>
            <a href="contacto.html">Contacto</a>
          </div>
          <div class="footer__col">
            <h4>Tienda</h4>
            <a href="tienda.html#indumentaria">Indumentaria</a>
            <a href="tienda.html#equipo">Equipo</a>
            <a href="tienda.html#accesorios">Accesorios</a>
          </div>
          <div class="footer__col">
            <h4>Contacto</h4>
            <a href="mailto:${CONTACT_RECIPIENT}">${CONTACT_RECIPIENT}</a>
            <a href="tel:+34123456789">+34 123 456 789</a>
            <p>Segovia, España</p>
          </div>
        </div>
        <div class="footer__bottom">
          <span>&copy; ${new Date().getFullYear()} EcoSport. Todos los derechos reservados.</span>
          <span>Segovia, España</span>
        </div>
      </div>
    </footer>`;
  }

  function drawerHtml(){
    return `<div class="overlay" id="cart-overlay"></div>
    <aside class="drawer" id="cart-drawer" aria-hidden="true" aria-label="Cesta de la compra">
      <div class="drawer__head">
        <span class="drawer__title" id="drawer-title">Tu cesta</span>
        <button class="drawer__close" id="cart-close" aria-label="Cerrar">&times;</button>
      </div>
      <div class="drawer__body" id="drawer-body"></div>
      <div class="drawer__foot" id="drawer-foot"></div>
    </aside>
    <div class="toast" id="toast">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
      <span id="toast-msg">Añadido a la cesta</span>
    </div>`;
  }

  function detailHtml(){
    return `<div class="pdp-overlay" id="pdp-overlay"></div>
    <div class="pdp" id="pdp" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Detalle de producto">
      <button class="pdp__close" id="pdp-close" aria-label="Cerrar">&times;</button>
      <div class="pdp__scroll" id="pdp-scroll"></div>
    </div>`;
  }

  function injectChrome(page){
    const navRoot = document.getElementById('nav-root');
    const footRoot = document.getElementById('footer-root');
    if(navRoot) navRoot.outerHTML = navHtml(page);
    if(footRoot) footRoot.outerHTML = footerHtml();
    document.body.insertAdjacentHTML('beforeend', drawerHtml());
    document.body.insertAdjacentHTML('beforeend', detailHtml());
  }

  function setupNav(page){
    const nav = document.getElementById('site-nav');
    if(!nav) return;
    const burger = document.getElementById('nav-burger');
    const darkHeader = document.getElementById('hero') || document.querySelector('.page-head');

    function applyScrollState(){
      if(!darkHeader){
        nav.classList.add('nav--solid');
        return;
      }
      const solid = window.scrollY > darkHeader.offsetHeight - 90;
      nav.classList.toggle('nav--solid', solid);
      nav.classList.toggle('nav--light', !solid);
    }
    applyScrollState();
    window.addEventListener('scroll', applyScrollState, {passive:true});

    if(burger){
      burger.addEventListener('click', () => {
        const open = nav.classList.toggle('is-open');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }
    nav.querySelectorAll('.nav__link').forEach(a => {
      a.addEventListener('click', () => nav.classList.remove('is-open'));
    });
  }

  const plusIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>';

  function productCard(p){
    return `<article class="card" data-detail="${p.id}" data-category="${p.category}" tabindex="0" role="button" aria-label="Ver detalles de ${p.name}">
      <div class="card__media">
        <span class="card__tag">${CATEGORY_LABEL[p.category]}</span>
        <img class="card__img" src="${p.images[0]}" alt="${p.name}" loading="lazy">
      </div>
      <div class="card__body">
        <h3 class="card__name">${p.name}</h3>
        <p class="card__desc">${p.blurb}</p>
        <div class="card__row">
          <span class="card__price">${euros(p.price)}</span>
          <button class="card__add" data-add="${p.id}" aria-label="Añadir ${p.name} a la cesta">${plusIcon}Añadir</button>
        </div>
        <span class="card__more">Ver más</span>
      </div>
    </article>`;
  }

  function renderFeatured(){
    const grid = document.getElementById('featured-grid');
    if(!grid) return;
    const count = parseInt(grid.getAttribute('data-featured'), 10) || 3;
    grid.innerHTML = PRODUCTS.slice(0, count).map(productCard).join('');
  }

  function renderShop(){
    const grid = document.getElementById('shop-grid');
    if(!grid) return;
    const filters = document.getElementById('shop-filters');

    function paint(value){
      const list = value === 'todo' ? PRODUCTS : PRODUCTS.filter(p => p.category === value);
      grid.innerHTML = list.length
        ? list.map(productCard).join('')
        : '<p class="shop__empty">No hay productos en esta categoría.</p>';
      if(filters){
        filters.querySelectorAll('.filter').forEach(b => {
          b.classList.toggle('is-active', b.getAttribute('data-filter') === value);
        });
      }
    }
    if(filters){
      filters.addEventListener('click', e => {
        const btn = e.target.closest('.filter');
        if(btn) paint(btn.getAttribute('data-filter'));
      });
    }
    const hash = (location.hash || '').replace('#', '');
    paint(CATEGORY_LABEL[hash] ? hash : 'todo');
  }

  const detailState = {id:null, image:0, size:null, qty:1};

  function detailContent(p){
    const hasGallery = p.images.length > 1;
    const thumbs = p.images.map((src, i) =>
      `<button class="pdp__thumb${i === 0 ? ' is-active' : ''}" data-thumb="${i}" aria-label="Imagen ${i + 1}">
        <img src="${src}" alt="${p.name} ${i + 1}">
      </button>`).join('');

    const sizes = p.sizes
      ? `<div class="pdp__block">
          <span class="pdp__label">Talla</span>
          <div class="pdp__sizes">${p.sizes.map(s => `<button class="pdp__size" data-size="${s}">${s}</button>`).join('')}</div>
          <span class="pdp__hint" id="pdp-hint"></span>
        </div>`
      : '';

    const specs = p.specs.map(([k, v]) =>
      `<li class="pdp__spec"><span>${k}</span><span>${v}</span></li>`).join('');

    const materials = p.materials.map(m => `<li>${m}</li>`).join('');

    return `<div class="pdp__grid">
      <div class="pdp__gallery">
        <div class="pdp__stage"><img id="pdp-img" src="${p.images[0]}" alt="${p.name}"></div>
        ${hasGallery ? `<div class="pdp__thumbs">${thumbs}</div>` : ''}
      </div>
      <div class="pdp__info">
        <p class="pdp__cat">${CATEGORY_LABEL[p.category]}</p>
        <h2 class="pdp__name">${p.name}</h2>
        <p class="pdp__tagline">${p.tagline}</p>
        <div class="pdp__price">${euros(p.price)}</div>
        <div class="pdp__stock"><span class="pdp__dot"></span>${p.stock}</div>
        <p class="pdp__desc">${p.description}</p>
        ${sizes}
        <div class="pdp__buybar">
          <div class="pdp__qty">
            <button data-qstep="-1" aria-label="Reducir cantidad">&minus;</button>
            <span id="pdp-qty">1</span>
            <button data-qstep="1" aria-label="Aumentar cantidad">+</button>
          </div>
          <button class="pdp__buy" id="pdp-buy">${plusIcon}Añadir al carrito</button>
        </div>
        <div class="pdp__delivery">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="1.8"/><circle cx="17.5" cy="18" r="1.8"/></svg>
          <span>Envío gratuito en 24-48 h · Devoluciones gratuitas durante 30 días</span>
        </div>
        <div class="pdp__panels">
          <div class="pdp__panel">
            <h4 class="pdp__panel-title">Especificaciones</h4>
            <ul class="pdp__specs">${specs}</ul>
          </div>
          <div class="pdp__panel">
            <h4 class="pdp__panel-title">Materiales</h4>
            <ul class="pdp__list">${materials}</ul>
          </div>
          <div class="pdp__panel">
            <h4 class="pdp__panel-title">Uso recomendado</h4>
            <p class="pdp__panel-text">${p.usage}</p>
          </div>
          <div class="pdp__eco">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21c6-1 9-5 9-12V5l-6 1C9 7 5 10 5 16c0 2 .6 3.6 1.6 5"/><path d="M7 20c1.5-6 5-9 10-11"/></svg>
            <div>
              <h4 class="pdp__panel-title">Compromiso sostenible</h4>
              <p class="pdp__panel-text">${p.eco}</p>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }

  function renderDetail(){
    const p = findProduct(detailState.id);
    const scroll = document.getElementById('pdp-scroll');
    if(!p || !scroll) return;
    scroll.innerHTML = detailContent(p);
    scroll.scrollTop = 0;
  }

  function openDetail(id){
    const p = findProduct(id);
    if(!p) return;
    detailState.id = id;
    detailState.image = 0;
    detailState.size = null;
    detailState.qty = 1;
    renderDetail();
    const overlay = document.getElementById('pdp-overlay');
    const modal = document.getElementById('pdp');
    if(!overlay || !modal) return;
    overlay.classList.add('is-open');
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
  }

  function closeDetail(){
    const overlay = document.getElementById('pdp-overlay');
    const modal = document.getElementById('pdp');
    if(!overlay || !modal) return;
    overlay.classList.remove('is-open');
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    if(!document.querySelector('.drawer.is-open')){
      document.body.classList.remove('is-locked');
    }
    detailState.id = null;
  }

  function selectThumb(index){
    const p = findProduct(detailState.id);
    if(!p || !p.images[index]) return;
    detailState.image = index;
    const img = document.getElementById('pdp-img');
    if(img) img.src = p.images[index];
    document.querySelectorAll('.pdp__thumb').forEach(t => {
      t.classList.toggle('is-active', parseInt(t.getAttribute('data-thumb'), 10) === index);
    });
  }

  function selectSize(size){
    detailState.size = size;
    document.querySelectorAll('.pdp__size').forEach(b => {
      b.classList.toggle('is-active', b.getAttribute('data-size') === size);
    });
    const hint = document.getElementById('pdp-hint');
    if(hint){ hint.textContent = ''; hint.classList.remove('is-error'); }
  }

  function stepQty(delta){
    const next = detailState.qty + delta;
    if(next < 1) return;
    detailState.qty = next;
    const out = document.getElementById('pdp-qty');
    if(out) out.textContent = next;
  }

  function buyFromDetail(){
    const p = findProduct(detailState.id);
    if(!p) return;
    if(p.sizes && !detailState.size){
      const hint = document.getElementById('pdp-hint');
      if(hint){ hint.textContent = 'Selecciona una talla.'; hint.classList.add('is-error'); }
      return;
    }
    addToCart(p.id, detailState.qty);
    const sizeText = detailState.size ? ` (talla ${detailState.size})` : '';
    showToast(`${p.name}${sizeText} añadido a la cesta`);
  }

  let drawerView = 'cart';

  function totalsHtml(){
    return `<div class="cart-totals">
      <div class="cart-totals__row"><span>Subtotal</span><span>${euros(cartSubtotal())}</span></div>
      <div class="cart-totals__row"><span>Envío</span><span>Gratuito</span></div>
      <div class="cart-totals__row cart-totals__row--grand"><span>Total</span><span>${euros(cartSubtotal())}</span></div>
    </div>`;
  }

  function cartItemHtml(l){
    return `<div class="cart-item">
      <div class="cart-item__thumb"><img src="${l.product.images[0]}" alt="${l.product.name}"></div>
      <div class="cart-item__main">
        <span class="cart-item__name">${l.product.name}</span>
        <span class="cart-item__unit">${euros(l.product.price)} / unidad</span>
        <div class="cart-item__qty">
          <button data-qty="-1" data-id="${l.product.id}" aria-label="Reducir">&minus;</button>
          <span>${l.qty}</span>
          <button data-qty="1" data-id="${l.product.id}" aria-label="Aumentar">+</button>
        </div>
      </div>
      <div class="cart-item__side">
        <span class="cart-item__price">${euros(l.total)}</span>
        <button class="cart-item__remove" data-remove="${l.product.id}">Quitar</button>
      </div>
    </div>`;
  }

  function renderConfirm(title, body, foot){
    title.textContent = 'Pedido confirmado';
    const ref = 'ECO-' + Math.random().toString(36).slice(2, 8).toUpperCase();
    body.innerHTML = `<div class="confirm">
      <div class="confirm__check">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
      </div>
      <h3 class="confirm__title">Gracias por tu pedido</h3>
      <p class="confirm__text">Hemos recibido tu pedido y te enviaremos la confirmación por correo en breve.</p>
      <span class="confirm__ref">Referencia ${ref}</span>
    </div>`;
    foot.innerHTML = '<button class="btn btn--solid btn--full" data-drawer-close>Volver a la tienda</button>';
  }

  function renderCheckout(title, body, foot){
    title.textContent = 'Finalizar compra';
    body.innerHTML = `<button class="drawer__back" data-drawer-back>Volver a la cesta</button>
      <form class="checkout-form" id="checkout-form" novalidate>
        <div class="field"><label for="co-nombre">Nombre y apellidos</label><input type="text" id="co-nombre" name="nombre" autocomplete="name" required><span class="field__error" data-error-for="co-nombre"></span></div>
        <div class="field"><label for="co-email">Correo electrónico</label><input type="email" id="co-email" name="email" autocomplete="email" required><span class="field__error" data-error-for="co-email"></span></div>
        <div class="field"><label for="co-dir">Dirección</label><input type="text" id="co-dir" name="direccion" autocomplete="street-address" required><span class="field__error" data-error-for="co-dir"></span></div>
        <div class="checkout-row">
          <div class="field"><label for="co-ciudad">Ciudad</label><input type="text" id="co-ciudad" name="ciudad" required><span class="field__error" data-error-for="co-ciudad"></span></div>
          <div class="field"><label for="co-cp">Código postal</label><input type="text" id="co-cp" name="cp" inputmode="numeric" required><span class="field__error" data-error-for="co-cp"></span></div>
        </div>
        <div class="field">
          <label>Método de pago</label>
          <div class="pay-options">
            <label class="pay-option is-sel"><input type="radio" name="pago" value="Tarjeta" checked> Tarjeta de crédito</label>
            <label class="pay-option"><input type="radio" name="pago" value="Transferencia"> Transferencia bancaria</label>
            <label class="pay-option"><input type="radio" name="pago" value="Contra reembolso"> Contra reembolso</label>
          </div>
        </div>
      </form>`;
    foot.innerHTML = totalsHtml() + '<button class="btn btn--solid btn--full" id="checkout-confirm">Confirmar pedido</button>';

    const options = body.querySelectorAll('.pay-option');
    options.forEach(opt => {
      opt.addEventListener('click', () => {
        options.forEach(o => o.classList.remove('is-sel'));
        opt.classList.add('is-sel');
      });
    });
  }

  function renderCart(title, body, foot){
    title.textContent = 'Tu cesta';
    const lines = cartLines();
    if(!lines.length){
      body.innerHTML = `<div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 3H2"/><circle cx="9" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/></svg>
        <p>Tu cesta está vacía.</p>
        <a class="btn btn--ghost" href="tienda.html">Explorar la tienda</a>
      </div>`;
      foot.innerHTML = '';
      return;
    }
    body.innerHTML = lines.map(cartItemHtml).join('');
    foot.innerHTML = totalsHtml() + '<button class="btn btn--solid btn--full" id="go-checkout">Tramitar pedido</button>';
  }

  function renderDrawer(){
    const body = document.getElementById('drawer-body');
    const foot = document.getElementById('drawer-foot');
    const title = document.getElementById('drawer-title');
    if(!body || !foot || !title) return;

    if(drawerView === 'confirm') renderConfirm(title, body, foot);
    else if(drawerView === 'checkout') renderCheckout(title, body, foot);
    else renderCart(title, body, foot);
  }

  function openDrawer(){
    const overlay = document.getElementById('cart-overlay');
    const drawer = document.getElementById('cart-drawer');
    if(!overlay || !drawer) return;
    renderDrawer();
    overlay.classList.add('is-open');
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
  }
  function closeDrawer(){
    const overlay = document.getElementById('cart-overlay');
    const drawer = document.getElementById('cart-drawer');
    if(!overlay || !drawer) return;
    overlay.classList.remove('is-open');
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    if(!document.querySelector('.pdp.is-open')){
      document.body.classList.remove('is-locked');
    }
    drawerView = 'cart';
  }

  function syncCartUI(){
    const count = document.getElementById('cart-count');
    if(count){
      const n = cartCount();
      count.textContent = n;
      count.style.display = n > 0 ? 'inline-flex' : 'none';
      count.classList.add('pop');
      setTimeout(() => count.classList.remove('pop'), 320);
    }
    const drawer = document.getElementById('cart-drawer');
    if(drawer && drawer.classList.contains('is-open')) renderDrawer();
  }

  let toastTimer;
  function showToast(msg){
    const toast = document.getElementById('toast');
    const span = document.getElementById('toast-msg');
    if(!toast) return;
    if(span) span.textContent = msg || 'Añadido a la cesta';
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
  }

  function fieldError(form, id, msg){
    const input = form.querySelector('#' + id);
    const slot = form.querySelector(`[data-error-for="${id}"]`);
    if(input) input.parentElement.classList.toggle('has-error', !!msg);
    if(slot) slot.textContent = msg || '';
  }

  function validateFields(form, rules){
    let ok = true;
    rules.forEach(([id, msg]) => {
      const input = form.querySelector('#' + id);
      const value = input.value.trim();
      if(!value){
        fieldError(form, id, msg);
        ok = false;
      }else if(input.type === 'email' && !isEmail(value)){
        fieldError(form, id, 'Correo no válido.');
        ok = false;
      }else{
        fieldError(form, id, '');
      }
    });
    return ok;
  }

  function setupDrawerEvents(){
    const openBtn = document.getElementById('cart-open');
    const closeBtn = document.getElementById('cart-close');
    const overlay = document.getElementById('cart-overlay');
    if(openBtn) openBtn.addEventListener('click', () => { drawerView = 'cart'; openDrawer(); });
    if(closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if(overlay) overlay.addEventListener('click', closeDrawer);

    const pdpClose = document.getElementById('pdp-close');
    const pdpOverlay = document.getElementById('pdp-overlay');
    if(pdpClose) pdpClose.addEventListener('click', closeDetail);
    if(pdpOverlay) pdpOverlay.addEventListener('click', closeDetail);

    document.addEventListener('keydown', e => {
      if(e.key !== 'Escape') return;
      if(document.querySelector('.pdp.is-open')) closeDetail();
      else closeDrawer();
    });

    document.addEventListener('click', e => {
      const add = e.target.closest('[data-add]');
      if(add){
        const p = findProduct(add.getAttribute('data-add'));
        addToCart(add.getAttribute('data-add'));
        showToast(`${p ? p.name : 'Producto'} añadido a la cesta`);
        return;
      }
      const thumb = e.target.closest('[data-thumb]');
      if(thumb){
        selectThumb(parseInt(thumb.getAttribute('data-thumb'), 10));
        return;
      }
      const size = e.target.closest('[data-size]');
      if(size){
        selectSize(size.getAttribute('data-size'));
        return;
      }
      const qstep = e.target.closest('[data-qstep]');
      if(qstep){
        stepQty(parseInt(qstep.getAttribute('data-qstep'), 10));
        return;
      }
      if(e.target.closest('#pdp-buy')){ buyFromDetail(); return; }
      const detail = e.target.closest('[data-detail]');
      if(detail){
        openDetail(detail.getAttribute('data-detail'));
        return;
      }
      const qty = e.target.closest('[data-qty]');
      if(qty){
        updateQty(qty.getAttribute('data-id'), parseInt(qty.getAttribute('data-qty'), 10));
        return;
      }
      const rem = e.target.closest('[data-remove]');
      if(rem){
        removeFromCart(rem.getAttribute('data-remove'));
        return;
      }
      if(e.target.closest('#go-checkout')){ drawerView = 'checkout'; renderDrawer(); return; }
      if(e.target.closest('[data-drawer-back]')){ drawerView = 'cart'; renderDrawer(); return; }
      if(e.target.closest('[data-drawer-close]')){ closeDrawer(); return; }
      if(e.target.closest('#checkout-confirm')){
        const form = document.getElementById('checkout-form');
        const rules = [
          ['co-nombre','Indica tu nombre.'],
          ['co-email','Indica tu correo.'],
          ['co-dir','Indica una dirección.'],
          ['co-ciudad','Indica la ciudad.'],
          ['co-cp','Indica el código postal.']
        ];
        if(form && validateFields(form, rules)){
          clearCart();
          drawerView = 'confirm';
          renderDrawer();
        }
      }
    });

    document.addEventListener('keydown', e => {
      if(e.key !== 'Enter' && e.key !== ' ') return;
      const card = e.target.closest('.card[data-detail]');
      if(card){
        e.preventDefault();
        openDetail(card.getAttribute('data-detail'));
      }
    });
  }

  function setupHero(){
    const hero = document.getElementById('hero');
    const img = document.getElementById('hero-img');
    const cue = document.getElementById('hero-cue');
    if(!hero || !img) return;

    let maxShift = 0, target = 0, eased = 0;

    function measure(){
      const imgW = img.offsetWidth || (hero.offsetHeight * 1.18 * 4);
      maxShift = Math.max(0, imgW - window.innerWidth);
    }
    function progress(){
      target = Math.min(Math.max(window.scrollY / hero.offsetHeight, 0), 1);
      if(cue) cue.classList.toggle('hide', window.scrollY > 60);
    }
    function frame(){
      eased += (target - eased) * 0.09;
      if(Math.abs(target - eased) < 0.0003) eased = target;
      const x = -eased * maxShift * 0.82;
      img.style.transform = `translate(${x.toFixed(1)}px,-50%)`;
      requestAnimationFrame(frame);
    }
    function start(){
      measure();
      progress();
      requestAnimationFrame(frame);
    }

    window.addEventListener('scroll', progress, {passive:true});
    window.addEventListener('resize', () => { measure(); progress(); });
    if(img.complete) start();
    else img.addEventListener('load', start);
  }

  function dispatchEmail(payload){
    if(!CONTACT_ENDPOINT){
      return new Promise(resolve => setTimeout(() => resolve({ok:true}), 950));
    }
    return fetch(CONTACT_ENDPOINT, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(payload)
    })
      .then(res => ({ok:res.ok}))
      .catch(() => ({ok:false}));
  }

  function setupContactForm(){
    const form = document.getElementById('contact-form');
    if(!form) return;
    const status = document.getElementById('contact-status');
    const submit = document.getElementById('contact-submit');
    const rules = [
      ['cf-nombre','Indica tu nombre.'],
      ['cf-email','Indica tu correo.'],
      ['cf-asunto','Indica un asunto.'],
      ['cf-mensaje','Escribe tu mensaje.']
    ];

    form.addEventListener('submit', e => {
      e.preventDefault();
      status.textContent = '';
      status.className = 'form__status';
      if(!validateFields(form, rules)){
        status.textContent = 'Revisa los campos marcados.';
        status.classList.add('err');
        return;
      }
      const payload = {
        nombre: form.querySelector('#cf-nombre').value.trim(),
        email: form.querySelector('#cf-email').value.trim(),
        asunto: form.querySelector('#cf-asunto').value.trim(),
        mensaje: form.querySelector('#cf-mensaje').value.trim(),
        destinatario: CONTACT_RECIPIENT,
        enviadoEn: new Date().toISOString()
      };
      submit.disabled = true;
      submit.textContent = 'Enviando…';
      dispatchEmail(payload).then(result => {
        submit.disabled = false;
        submit.textContent = 'Enviar mensaje';
        if(result.ok){
          form.reset();
          status.textContent = 'Mensaje enviado. Te responderemos muy pronto.';
          status.classList.add('ok');
        }else{
          status.textContent = 'No se ha podido enviar. Inténtalo de nuevo.';
          status.classList.add('err');
        }
      });
    });

    form.querySelectorAll('input,textarea').forEach(input => {
      input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('has-error')){
          fieldError(form, input.id, '');
        }
      });
    });
  }

  function init(){
    const page = document.body.getAttribute('data-page') || 'inicio';
    injectChrome(page);
    setupNav(page);
    renderFeatured();
    renderShop();
    setupDrawerEvents();
    setupHero();
    setupContactForm();
    syncCartUI();
  }

  init();
})();
