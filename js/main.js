/**
 * THE YOUTH LABEL — Vanilla JavaScript
 * For the Youth That Leads.
 * Pure Vanilla JavaScript (No frameworks, No dependencies)
 */

(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // Master Product Catalog (All 13 Products)
  // ---------------------------------------------------------------------------
  const PRODUCT_CATALOG = {
    'p-happy-gang-sweatshirt': {
      id: 'p-happy-gang-sweatshirt',
      name: 'Happy Gang Script Sweatshirt',
      cat: 'Sweatshirts',
      price: 1299,
      priceFormatted: '₹1,299',
      colour: 'Taupe Grey',
      img: 'assets/images/products/happy-gang.jpg',
      style: '--px:48%;--z:1.55;--ox:50%;--oy:8%',
      badge: 'Best Seller'
    },
    'p-rookie-crew-sweatshirt': {
      id: 'p-rookie-crew-sweatshirt',
      name: 'Rookie Crew Script Sweatshirt',
      cat: 'Sweatshirts',
      price: 1299,
      priceFormatted: '₹1,299',
      colour: 'Butter Cream',
      img: 'assets/images/products/rookie-crew.jpg',
      style: '--px:48%;--z:1.55;--ox:50%;--oy:8%',
      badge: 'Best Seller'
    },
    'p-wild-bunch-sweatshirt': {
      id: 'p-wild-bunch-sweatshirt',
      name: 'Wild Bunch Script Sweatshirt',
      cat: 'Sweatshirts',
      price: 1399,
      priceFormatted: '₹1,399',
      colour: 'Cocoa Brown',
      img: 'assets/images/products/wild-bunch.jpg',
      style: '--px:48%;--z:1.5;--ox:50%;--oy:12%',
      badge: 'New Arrival'
    },
    'p-homies-crew-sweatshirt': {
      id: 'p-homies-crew-sweatshirt',
      name: 'Homies Crew Script Sweatshirt',
      cat: 'Sweatshirts',
      price: 1399,
      priceFormatted: '₹1,399',
      colour: 'Slate Blue',
      img: 'assets/images/products/homies-crew.jpg',
      style: '--px:50%;--z:1.5;--ox:50%;--oy:10%',
      badge: 'New Arrival'
    },
    'p-future-icon-sweatshirt': {
      id: 'p-future-icon-sweatshirt',
      name: 'Future Icon Script Sweatshirt',
      cat: 'Sweatshirts',
      price: 1349,
      priceFormatted: '₹1,349',
      colour: 'Sage Grey',
      img: 'assets/images/products/future-icon.jpg',
      style: '--px:36%;--z:1.55;--ox:50%;--oy:8%',
      badge: 'New Arrival'
    },
    'p-essential-crew-tshirt': {
      id: 'p-essential-crew-tshirt',
      name: 'Essential Crew T-Shirt',
      cat: 'T-Shirts',
      price: 599,
      priceFormatted: '₹599',
      colour: 'Geometric Print',
      img: 'assets/images/products/geometric-print-tshirt.jpg',
      isPh: false,
      badge: ''
    },
    'p-textured-knit-tshirt': {
      id: 'p-textured-knit-tshirt',
      name: 'Textured Knit T-Shirt',
      cat: 'T-Shirts',
      price: 699,
      priceFormatted: '₹699',
      colour: 'Butter Yellow',
      img: 'assets/images/products/animal-graphic-tshirt.jpg',
      isPh: false,
      badge: ''
    },
    'p-classic-button-shirt': {
      id: 'p-classic-button-shirt',
      name: 'Classic Button-Down Shirt',
      cat: 'Shirts',
      price: 999,
      priceFormatted: '₹999',
      colour: 'Grey Plaid',
      img: 'assets/images/products/grey-plaid-overshirt.jpg',
      isPh: false,
      badge: ''
    },
    'p-casual-pattern-shirt': {
      id: 'p-casual-pattern-shirt',
      name: 'Casual Pattern Shirt',
      cat: 'Shirts',
      price: 1099,
      priceFormatted: '₹1,099',
      colour: 'Washed Black',
      img: 'assets/images/products/black-denim-shirt.jpg',
      isPh: false,
      badge: ''
    },
    'p-navy-cargo-jogger': {
      id: 'p-navy-cargo-jogger',
      name: 'Navy Utility Cargo Jogger',
      cat: 'Trousers & Joggers',
      price: 1199,
      priceFormatted: '₹1,199',
      colour: 'Navy',
      img: 'assets/images/products/happy-gang.jpg',
      style: '--px:70%;--z:2.0;--ox:50%;--oy:96%',
      badge: 'Best Seller'
    },
    'p-navy-cargo-jogger-2': {
      id: 'p-navy-cargo-jogger-2',
      name: 'Navy Cargo Jogger – Relaxed Fit',
      cat: 'Trousers & Joggers',
      price: 1249,
      priceFormatted: '₹1,249',
      colour: 'Navy',
      img: 'assets/images/products/future-icon.jpg',
      style: '--px:70%;--z:2.0;--ox:50%;--oy:95%',
      badge: ''
    },
    'p-rookie-crew-coord': {
      id: 'p-rookie-crew-coord',
      name: 'Rookie Crew Co-ord Set',
      cat: 'Co-ord Sets',
      price: 2399,
      priceFormatted: '₹2,399',
      colour: 'Butter Cream & Navy',
      img: 'assets/images/products/rookie-crew.jpg',
      style: '--px:50%;--py:50%',
      badge: 'New Arrival'
    },
    'p-homies-crew-coord': {
      id: 'p-homies-crew-coord',
      name: 'Homies Crew Co-ord Set',
      cat: 'Co-ord Sets',
      price: 2499,
      priceFormatted: '₹2,499',
      colour: 'Slate Blue & Navy',
      img: 'assets/images/products/homies-crew.jpg',
      style: '--px:64%;--py:50%',
      badge: 'New Arrival'
    }
  };

  // ---------------------------------------------------------------------------
  // 1. Wishlist Management (localStorage persistence)
  // ---------------------------------------------------------------------------
  const WISHLIST_STORAGE_KEY = 'tyl_wishlist';
  const DEFAULT_WISHLIST = [
    'p-wild-bunch-sweatshirt',
    'p-homies-crew-coord',
    'p-future-icon-sweatshirt',
    'p-navy-cargo-jogger-2'
  ];

  function getWishlist() {
    try {
      const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
      if (stored === null) {
        localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(DEFAULT_WISHLIST));
        return DEFAULT_WISHLIST;
      }
      return JSON.parse(stored) || [];
    } catch (e) {
      return DEFAULT_WISHLIST;
    }
  }

  function saveWishlist(items) {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items));
      updateWishlistBadges(items.length);
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  }

  function updateWishlistBadges(overrideCount) {
    const count = (typeof overrideCount === 'number') ? overrideCount : getWishlist().length;
    const badges = document.querySelectorAll('.wishlist-count, .icon-btn[href*="wishlist.html"] .count');
    badges.forEach(function (badge) {
      badge.textContent = count;
    });
  }

  function addToWishlist(productId) {
    const items = getWishlist();
    if (!items.includes(productId)) {
      items.push(productId);
      saveWishlist(items);
    }
    const catalogItem = PRODUCT_CATALOG[productId];
    showToast('Added "' + (catalogItem ? catalogItem.name : 'Item') + '" to your Wishlist.');
  }

  function removeFromWishlist(productId) {
    let items = getWishlist();
    const catalogItem = PRODUCT_CATALOG[productId];
    items = items.filter(function (id) { return id !== productId; });
    saveWishlist(items);
    showToast('Removed "' + (catalogItem ? catalogItem.name : 'Item') + '" from your Wishlist.');
  }

  function initWishlist() {
    const items = getWishlist();
    updateWishlistBadges(items.length);

    const heartButtons = document.querySelectorAll('[data-wishlist-id], .heart');
    heartButtons.forEach(function (btn) {
      const id = btn.getAttribute('data-wishlist-id') ||
        (btn.closest('.card') && btn.closest('.card').getAttribute('data-id')) ||
        (btn.closest('.card') && btn.closest('.card').querySelector('a[href*="#p-"]') && btn.closest('.card').querySelector('a[href*="#p-"]').getAttribute('href').split('#')[1]);

      if (id && items.includes(id)) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }

      if (!btn._wishlistAttached) {
        btn._wishlistAttached = true;
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();

          const targetId = btn.getAttribute('data-wishlist-id') || 
            (btn.closest('.card') && btn.closest('.card').getAttribute('data-id')) ||
            (btn.closest('.card') && btn.closest('.card').querySelector('a[href*="#p-"]') && btn.closest('.card').querySelector('a[href*="#p-"]').getAttribute('href').split('#')[1]);
          
          if (!targetId) return;

          const currentItems = getWishlist();
          const index = currentItems.indexOf(targetId);
          let message = '';

          if (index > -1) {
            currentItems.splice(index, 1);
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
            message = 'Removed from your Wishlist';
          } else {
            currentItems.push(targetId);
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
            message = 'Added to your Wishlist';
          }

          saveWishlist(currentItems);
          updateWishlistBadges(currentItems.length);
          showToast(message);
        });
      }
    });
  }

  // ---------------------------------------------------------------------------
  // 2. Dynamic Cart Management (localStorage persistence)
  // ---------------------------------------------------------------------------
  const CART_ITEMS_KEY = 'tyl_cart_items';
  const CART_COUNT_KEY = 'tyl_cart_count';

  const DEFAULT_CART_ITEMS = [
    {
      id: 'p-happy-gang-sweatshirt',
      name: 'Happy Gang Script Sweatshirt',
      price: 1299,
      image: 'assets/images/products/happy-gang.jpg',
      style: '--px:48%;--z:1.55;--ox:50%;--oy:8%',
      size: '7–8 Years',
      colour: 'Taupe Grey',
      quantity: 1
    },
    {
      id: 'p-navy-cargo-jogger',
      name: 'Navy Utility Cargo Jogger',
      price: 1199,
      image: 'assets/images/products/happy-gang.jpg',
      style: '--px:70%;--z:2.0;--ox:50%;--oy:96%',
      size: '7–8 Years',
      colour: 'Navy',
      quantity: 2
    }
  ];

  function getCartItems() {
    try {
      const stored = localStorage.getItem(CART_ITEMS_KEY);
      if (stored === null) {
        localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(DEFAULT_CART_ITEMS));
        return DEFAULT_CART_ITEMS;
      }
      return JSON.parse(stored) || [];
    } catch (e) {
      return DEFAULT_CART_ITEMS;
    }
  }

  function getCartCount() {
    const items = getCartItems();
    return items.reduce(function (sum, it) {
      return sum + (parseInt(it.quantity, 10) || 1);
    }, 0);
  }

  function saveCartItems(items) {
    try {
      localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(items));
      const totalCount = items.reduce(function (sum, it) {
        return sum + (parseInt(it.quantity, 10) || 1);
      }, 0);
      localStorage.setItem(CART_COUNT_KEY, totalCount.toString());
      updateCartBadges(totalCount);
    } catch (e) {
      console.warn('Could not save cart items', e);
    }
  }

  function updateCartBadges(overrideCount) {
    const count = (typeof overrideCount === 'number') ? overrideCount : getCartCount();
    const badges = document.querySelectorAll('.cart-count, .icon-btn[href*="cart.html"] .count');
    badges.forEach(function (b) {
      b.textContent = count;
    });
  }

  function addItemToCart(itemData) {
    const items = getCartItems();
    const id = itemData.id;
    const size = itemData.size || '7–8 Years';
    const catalogItem = PRODUCT_CATALOG[id] || {};
    const colour = itemData.colour || catalogItem.colour || 'Standard';
    const qty = parseInt(itemData.quantity, 10) || 1;

    // Same product with different size/colour is stored as separate cart item
    const existingIndex = items.findIndex(function (it) {
      return it.id === id && it.size === size && it.colour === colour;
    });

    if (existingIndex > -1) {
      items[existingIndex].quantity += qty;
    } else {
      let numPrice = itemData.price;
      if (typeof numPrice === 'string') {
        numPrice = parseInt(numPrice.replace(/[^\d]/g, ''), 10);
      }
      if (!numPrice || isNaN(numPrice)) {
        numPrice = catalogItem.price || 1299;
      }

      items.push({
        id: id,
        name: itemData.name || catalogItem.name || 'Item',
        price: numPrice,
        image: itemData.image || catalogItem.img || 'assets/images/logo/the-youth-label-logo.png',
        style: itemData.style || catalogItem.style || '',
        size: size,
        colour: colour,
        quantity: qty,
        addedAt: Date.now()
      });
    }

    saveCartItems(items);
    updateCartBadges();
    showToast('Added ' + qty + ' × "' + (itemData.name || catalogItem.name || 'Product') + '" (' + size + ') to cart.');
  }

  function addToCart(productId, productName) {
    const catalogItem = PRODUCT_CATALOG[productId] || {};
    addItemToCart({
      id: productId,
      name: productName || catalogItem.name,
      price: catalogItem.price || 1299,
      image: catalogItem.img || '',
      style: catalogItem.style || '',
      size: '7–8 Years',
      colour: catalogItem.colour || 'Standard',
      quantity: 1
    });
  }

  function moveWishlistToCart(productId) {
    const catalogItem = PRODUCT_CATALOG[productId];
    if (!catalogItem) return;

    addItemToCart({
      id: productId,
      name: catalogItem.name,
      price: catalogItem.price,
      image: catalogItem.img,
      style: catalogItem.style || '',
      size: '7–8 Years',
      colour: catalogItem.colour || 'Standard',
      quantity: 1
    });

    let wishlist = getWishlist();
    wishlist = wishlist.filter(function (id) { return id !== productId; });
    saveWishlist(wishlist);

    const heartBtns = document.querySelectorAll('[data-wishlist-id="' + productId + '"], .heart[data-wishlist-id="' + productId + '"]');
    heartBtns.forEach(function (btn) {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });

    showToast('Moved "' + catalogItem.name + '" to your shopping cart!');
  }

  function initQuickAddToCart() {
    const addButtons = document.querySelectorAll('.quick-add-btn, [data-action="add-to-cart"]');
    addButtons.forEach(function (btn) {
      if (!btn._cartAttached) {
        btn._cartAttached = true;
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          const pId = btn.getAttribute('data-product-id') || (btn.closest('.card') && btn.closest('.card').getAttribute('data-id')) || 'item';
          const pName = btn.getAttribute('data-product-name') || (btn.closest('.card') && btn.closest('.card').getAttribute('data-name')) || 'Product';
          addToCart(pId, pName);
        });
      }
    });
  }

  // ---------------------------------------------------------------------------
  // 3. Toast Notifications
  // ---------------------------------------------------------------------------
  let toastTimer = null;
  function showToast(text) {
    let toast = document.getElementById('tyl-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'tyl-toast';
      toast.className = 'toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    toast.textContent = text;
    toast.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove('show');
    }, 2800);
  }

  // ---------------------------------------------------------------------------
  // 4. Cart Page Dynamic Logic (cart.html)
  // ---------------------------------------------------------------------------
  function initCartPage() {
    const itemsList = document.getElementById('cart-items-list');
    if (!itemsList) return; // Only runs on cart.html

    const cartWrap = document.getElementById('cart-active-wrap');
    const emptyWrap = document.getElementById('cart-empty-state');
    const subtotalEl = document.getElementById('cart-subtotal');
    const totalEl = document.getElementById('cart-total');

    function renderCart() {
      const items = getCartItems();
      updateCartBadges();

      if (items.length === 0) {
        if (cartWrap) cartWrap.style.display = 'none';
        if (emptyWrap) emptyWrap.style.display = 'block';
        return;
      }

      if (cartWrap) cartWrap.style.display = 'grid';
      if (emptyWrap) emptyWrap.style.display = 'none';

      let subtotal = 0;
      let html = '';

      items.forEach(function (item, idx) {
        const itemTotal = (item.price || 0) * (item.quantity || 1);
        subtotal += itemTotal;

        const imgHtml = (item.image && item.image.includes('logo')) ?
          '<div class="thumb" style="background:#e5e4e2;display:grid;place-items:center"><img src="' + item.image + '" alt="' + item.name + '" style="width:60px;height:auto;opacity:0.85"></div>' :
          '<div class="thumb"><img src="' + item.image + '" alt="' + item.name + '" style="' + (item.style || '') + '" loading="lazy" decoding="async"></div>';

        html += '<article class="cart-item" data-index="' + idx + '">' +
          imgHtml +
          '<div class="cart-item-details">' +
            '<h3><a href="product.html#' + item.id + '">' + item.name + '</a></h3>' +
            '<div class="meta">' +
              '<span>Size: <strong>' + item.size + '</strong></span>' +
              '<span>Colour: <strong>' + item.colour + '</strong></span>' +
              '<span>Unit Price: <strong>₹' + (item.price || 0).toLocaleString('en-IN') + '</strong></span>' +
            '</div>' +
            '<div class="cart-qty-row">' +
              '<span class="qty-label">Quantity:</span>' +
              '<div class="qty-stepper sm">' +
                '<button type="button" class="qty-stepper-btn minus" data-action="decrease-qty" data-index="' + idx + '" aria-label="Decrease quantity"' + (item.quantity <= 1 ? ' disabled style="opacity:0.35;cursor:not-allowed"' : '') + '>−</button>' +
                '<input type="number" class="qty-stepper-input" min="1" max="10" value="' + item.quantity + '" readonly aria-label="Item quantity">' +
                '<button type="button" class="qty-stepper-btn plus" data-action="increase-qty" data-index="' + idx + '" aria-label="Increase quantity"' + (item.quantity >= 10 ? ' disabled style="opacity:0.35;cursor:not-allowed"' : '') + '>+</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="line">' +
            '<span class="item-subtotal">₹' + itemTotal.toLocaleString('en-IN') + '</span>' +
            '<button type="button" class="cart-remove-btn" data-action="remove-item" data-index="' + idx + '" aria-label="Remove ' + item.name + '">Remove</button>' +
          '</div>' +
        '</article>';
      });

      itemsList.innerHTML = html;

      if (subtotalEl) subtotalEl.textContent = '₹' + subtotal.toLocaleString('en-IN');
      if (totalEl) totalEl.textContent = '₹' + subtotal.toLocaleString('en-IN');

      // Bind quantity decrease
      itemsList.querySelectorAll('[data-action="decrease-qty"]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          const idx = parseInt(btn.getAttribute('data-index'), 10);
          const currentItems = getCartItems();
          if (currentItems[idx] && currentItems[idx].quantity > 1) {
            currentItems[idx].quantity -= 1;
            saveCartItems(currentItems);
            renderCart();
          }
        });
      });

      // Bind quantity increase
      itemsList.querySelectorAll('[data-action="increase-qty"]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          const idx = parseInt(btn.getAttribute('data-index'), 10);
          const currentItems = getCartItems();
          if (currentItems[idx] && currentItems[idx].quantity < 10) {
            currentItems[idx].quantity += 1;
            saveCartItems(currentItems);
            renderCart();
          }
        });
      });

      // Bind remove
      itemsList.querySelectorAll('[data-action="remove-item"]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          const idx = parseInt(btn.getAttribute('data-index'), 10);
          const currentItems = getCartItems();
          if (currentItems[idx]) {
            const removedName = currentItems[idx].name;
            currentItems.splice(idx, 1);
            saveCartItems(currentItems);
            showToast('Removed "' + removedName + '" from your cart.');
            renderCart();
          }
        });
      });
    }

    // Proceed to Checkout guard
    const checkoutBtn = document.querySelector('a[href*="checkout.html"]');
    if (checkoutBtn && !checkoutBtn._authGuardBound) {
      checkoutBtn._authGuardBound = true;
      checkoutBtn.addEventListener('click', function (e) {
        if (!isLoggedIn()) {
          e.preventDefault();
          window.location.href = 'login.html?redirect=checkout.html';
        }
      });
    }

    renderCart();
  }

  // ---------------------------------------------------------------------------
  // 5. Wishlist Page Dynamic Logic (wishlist.html)
  // ---------------------------------------------------------------------------
  function initWishlistPage() {
    const grid = document.getElementById('wishlist-grid');
    if (!grid) return; // Only runs on wishlist.html

    const activeWrap = document.getElementById('wishlist-active-wrap');
    const emptyWrap = document.getElementById('wishlist-empty-state');
    const countBadge = document.getElementById('wishlist-total-count');

    function renderWishlist() {
      const items = getWishlist();
      updateWishlistBadges(items.length);

      if (countBadge) {
        countBadge.textContent = '(' + items.length + ')';
      }

      if (items.length === 0) {
        if (activeWrap) activeWrap.style.display = 'none';
        if (emptyWrap) emptyWrap.style.display = 'block';
        return;
      }

      if (activeWrap) activeWrap.style.display = 'block';
      if (emptyWrap) emptyWrap.style.display = 'none';

      let html = '';
      items.forEach(function (productId) {
        const p = PRODUCT_CATALOG[productId];
        if (!p) return;

        const mediaHtml = p.isPh ?
          '<div class="media"><div class="ph" style="aspect-ratio:4/5;display:grid;place-items:center;background:#e5e4e2"><img src="' + p.img + '" alt="' + p.name + '" class="ph-logo" style="width:72px;height:auto;opacity:0.8"><small style="color:#666;font-size:11px">Studio View</small></div><span class="quick">View Product</span></div>' :
          '<div class="media"><img src="' + p.img + '" alt="' + p.name + '" style="' + (p.style || '') + '" loading="lazy" decoding="async">' + (p.badge ? '<span class="badge">' + p.badge + '</span>' : '') + '<span class="quick">View Product</span></div>';

        html += '<article class="card" data-id="' + p.id + '">' +
          mediaHtml +
          '<button type="button" class="heart active" data-wishlist-id="' + p.id + '" aria-pressed="true" aria-label="Remove ' + p.name + ' from wishlist">' +
            '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20.5s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9.5c0 6-8 11-8 11z"/></svg>' +
          '</button>' +
          '<div class="card-body">' +
            '<p class="cat">' + p.cat + '</p>' +
            '<h3><a class="stretch" href="product.html#' + p.id + '">' + p.name + '</a></h3>' +
            '<p class="price">' + p.priceFormatted + '</p>' +
            '<div class="wish-actions">' +
              '<button type="button" class="btn-move-cart" data-action="move-cart" data-id="' + p.id + '">Move to Cart</button>' +
              '<button type="button" class="remove-wishlist-btn" data-action="remove-wishlist" data-id="' + p.id + '">Remove</button>' +
            '</div>' +
          '</div>' +
        '</article>';
      });

      grid.innerHTML = html;

      // Bind Move to Cart
      grid.querySelectorAll('[data-action="move-cart"]').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          const pId = btn.getAttribute('data-id');
          moveWishlistToCart(pId);
          renderWishlist();
        });
      });

      // Bind Remove
      grid.querySelectorAll('[data-action="remove-wishlist"]').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          const pId = btn.getAttribute('data-id');
          removeFromWishlist(pId);
          renderWishlist();
        });
      });

      // Bind Heart toggle
      grid.querySelectorAll('.heart').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          const pId = btn.getAttribute('data-wishlist-id');
          removeFromWishlist(pId);
          renderWishlist();
        });
      });
    }

    renderWishlist();
  }

  // ---------------------------------------------------------------------------
  // 6. User Authentication & Session Management (localStorage persistence)
  // ---------------------------------------------------------------------------
  const USERS_STORAGE_KEY = 'tyl_users';
  const CURRENT_USER_KEY = 'tyl_current_user';
  const REMEMBER_EMAIL_KEY = 'tyl_remember_email';

  const DEFAULT_USER = {
    fullName: 'Alex Morrison',
    email: 'alex.morrison@example.com',
    mobile: '9876543210',
    password: 'Password123',
    createdAt: 1774345000000
  };

  function getUsers() {
    try {
      const stored = localStorage.getItem(USERS_STORAGE_KEY);
      if (stored === null) {
        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify([DEFAULT_USER]));
        return [DEFAULT_USER];
      }
      return JSON.parse(stored) || [];
    } catch (e) {
      return [DEFAULT_USER];
    }
  }

  function saveUsers(users) {
    try {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    } catch (e) {
      console.warn('Could not save users to localStorage', e);
    }
  }

  function getCurrentUser() {
    try {
      const stored = localStorage.getItem(CURRENT_USER_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      return null;
    }
  }

  function setCurrentUser(user) {
    try {
      if (user) {
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(CURRENT_USER_KEY);
      }
      updateHeaderUser();
    } catch (e) {
      console.warn('Could not set current user in localStorage', e);
    }
  }

  function isLoggedIn() {
    return !!getCurrentUser();
  }

  function getRememberEmail() {
    try {
      return localStorage.getItem(REMEMBER_EMAIL_KEY) || '';
    } catch (e) {
      return '';
    }
  }

  function setRememberEmail(email) {
    try {
      if (email) {
        localStorage.setItem(REMEMBER_EMAIL_KEY, email);
      } else {
        localStorage.removeItem(REMEMBER_EMAIL_KEY);
      }
    } catch (e) {}
  }

  function logoutUser() {
    setCurrentUser(null);
    showToast('You have been logged out.');
    setTimeout(function () {
      window.location.href = 'login.html';
    }, 400);
  }

  function getQueryParam(name) {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get(name) || '';
    } catch (e) {
      return '';
    }
  }

  function updateHeaderUser() {
    const user = getCurrentUser();
    const accountLinks = document.querySelectorAll('#header-account-link, .icon-btn[aria-label="My Account"], .icon-btn[aria-label="Account / Login"], .header-user-btn');

    accountLinks.forEach(function (link) {
      if (user && user.fullName) {
        const firstName = user.fullName.trim().split(' ')[0] || 'User';
        link.href = 'account.html';
        link.className = 'header-user-btn';
        link.setAttribute('aria-label', 'Account for ' + user.fullName);
        link.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg><span class="header-user-name">Hi, ' + firstName + '</span>';
      } else {
        link.href = 'login.html';
        link.className = 'icon-btn';
        link.setAttribute('aria-label', 'Account / Login');
        link.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>';
      }
    });
  }

  function initPasswordToggles() {
    document.querySelectorAll('.pw-toggle-btn').forEach(function (btn) {
      if (btn._toggleAttached) return;
      btn._toggleAttached = true;
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const wrap = btn.closest('.pw-field-wrap');
        if (!wrap) return;
        const input = wrap.querySelector('input');
        if (!input) return;

        const eyeOpen = btn.querySelector('.eye-open');
        const eyeClosed = btn.querySelector('.eye-closed');

        if (input.type === 'password') {
          input.type = 'text';
          if (eyeOpen) eyeOpen.style.display = 'none';
          if (eyeClosed) eyeClosed.style.display = 'block';
          btn.setAttribute('aria-label', 'Hide password');
        } else {
          input.type = 'password';
          if (eyeOpen) eyeOpen.style.display = 'block';
          if (eyeClosed) eyeClosed.style.display = 'none';
          btn.setAttribute('aria-label', 'Show password');
        }
      });
    });
  }

  function initLoginPage() {
    const form = document.getElementById('login-form');
    if (!form) return; // Only runs on login.html

    const redirectParam = getQueryParam('redirect');
    const bannerNotice = document.getElementById('login-banner-notice');
    const regLink = document.getElementById('link-to-register');

    if (redirectParam && regLink) {
      regLink.href = 'register.html?redirect=' + encodeURIComponent(redirectParam);
    }

    // If user is already logged in, redirect them
    if (isLoggedIn()) {
      const destination = redirectParam ? redirectParam : 'account.html';
      window.location.href = destination;
      return;
    }

    // Contextual alert based on redirect
    if (bannerNotice && redirectParam) {
      if (redirectParam.includes('checkout')) {
        bannerNotice.textContent = 'Please log in to your account to complete checkout. Your cart items are preserved.';
        bannerNotice.className = 'auth-banner-notice warning show';
      } else if (redirectParam.includes('orders')) {
        bannerNotice.textContent = 'Please log in to view and track your orders.';
        bannerNotice.className = 'auth-banner-notice show';
      } else if (redirectParam.includes('account')) {
        bannerNotice.textContent = 'Please log in to access your account profile.';
        bannerNotice.className = 'auth-banner-notice show';
      }
    }

    // Prefill remembered email
    const remembered = getRememberEmail();
    const emailInput = document.getElementById('login-email');
    const rememberCheckbox = document.getElementById('login-remember');
    if (remembered && emailInput) {
      emailInput.value = remembered;
      if (rememberCheckbox) rememberCheckbox.checked = true;
    }

    // Error clearing on input
    ['login-email', 'login-pw'].forEach(function (id) {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', function () {
          const p = el.closest('.field');
          if (p) p.classList.remove('error');
        });
      }
    });

    // Form submit
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const emailVal = emailInput ? emailInput.value.trim() : '';
      const pwInput = document.getElementById('login-pw');
      const pwVal = pwInput ? pwInput.value : '';

      let hasError = false;
      const emailField = document.getElementById('field-login-email');
      const pwField = document.getElementById('field-login-pw');

      if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailVal)) {
        if (emailField) emailField.classList.add('error');
        hasError = true;
      } else {
        if (emailField) emailField.classList.remove('error');
      }

      if (!pwVal || pwVal.length < 6) {
        if (pwField) {
          pwField.classList.add('error');
          const errSpan = pwField.querySelector('.field-error');
          if (errSpan) errSpan.textContent = 'Please enter your password (minimum 6 characters).';
        }
        hasError = true;
      } else {
        if (pwField) pwField.classList.remove('error');
      }

      if (hasError) {
        showToast('Please correct the highlighted fields.');
        return;
      }

      const users = getUsers();
      const matched = users.find(function (u) {
        return u.email.toLowerCase() === emailVal.toLowerCase() && u.password === pwVal;
      });

      if (!matched) {
        if (pwField) {
          pwField.classList.add('error');
          const errSpan = pwField.querySelector('.field-error');
          if (errSpan) errSpan.textContent = 'Invalid email or password. Please try again.';
        }
        showToast('Invalid email or password. Please try again.');
        return;
      }

      // Remember me
      if (rememberCheckbox && rememberCheckbox.checked) {
        setRememberEmail(emailVal);
      } else {
        setRememberEmail('');
      }

      // Set logged in session
      setCurrentUser(matched);
      showToast('Welcome back, ' + matched.fullName + '!');

      const target = redirectParam ? redirectParam : 'account.html';
      setTimeout(function () {
        window.location.href = target;
      }, 400);
    });

    // Forgot Password Modal
    const forgotBtn = document.getElementById('btn-forgot-pw');
    const modal = document.getElementById('forgot-pw-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const forgotForm = document.getElementById('forgot-pw-form');
    const forgotEmail = document.getElementById('forgot-email');
    const forgotFeedback = document.getElementById('forgot-feedback');

    if (forgotBtn && modal) {
      forgotBtn.addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.add('open');
        if (emailInput && emailInput.value && forgotEmail) {
          forgotEmail.value = emailInput.value.trim();
        }
        if (forgotFeedback) forgotFeedback.style.display = 'none';
      });
    }

    if (closeBtn && modal) {
      closeBtn.addEventListener('click', function () {
        modal.classList.remove('open');
      });
    }

    if (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target === modal) modal.classList.remove('open');
      });
    }

    if (forgotForm && forgotEmail) {
      forgotForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const fEmail = forgotEmail.value.trim();
        const fieldForgot = document.getElementById('field-forgot-email');

        if (!fEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fEmail)) {
          if (fieldForgot) fieldForgot.classList.add('error');
          return;
        }
        if (fieldForgot) fieldForgot.classList.remove('error');

        const users = getUsers();
        const found = users.find(function (u) { return u.email.toLowerCase() === fEmail.toLowerCase(); });

        if (forgotFeedback) {
          forgotFeedback.style.display = 'block';
          if (found) {
            forgotFeedback.style.color = '#166534';
            forgotFeedback.innerHTML = '<strong>Password reset simulated:</strong> For demo account <em>' + fEmail + '</em>, your password is: <code>' + found.password + '</code>';
          } else {
            forgotFeedback.style.color = '#92400e';
            forgotFeedback.innerHTML = 'If an account exists with <em>' + fEmail + '</em>, simulated instructions have been sent. (No registered account found with this email).';
          }
        }
      });
    }
  }

  function initRegisterPage() {
    const form = document.getElementById('register-form');
    if (!form) return; // Only runs on register.html

    const redirectParam = getQueryParam('redirect');
    const bannerNotice = document.getElementById('register-banner-notice');
    const loginLink = document.getElementById('link-to-login');

    if (redirectParam && loginLink) {
      loginLink.href = 'login.html?redirect=' + encodeURIComponent(redirectParam);
    }

    if (isLoggedIn()) {
      const destination = redirectParam ? redirectParam : 'account.html';
      window.location.href = destination;
      return;
    }

    if (bannerNotice && redirectParam && redirectParam.includes('checkout')) {
      bannerNotice.textContent = 'Create an account to complete your checkout. Your shopping cart items are preserved.';
      bannerNotice.className = 'auth-banner-notice warning show';
    }

    ['reg-name', 'reg-email', 'reg-mobile', 'reg-pw', 'reg-cpw', 'reg-terms'].forEach(function (id) {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', function () {
          const p = el.closest('.field');
          if (p) p.classList.remove('error');
        });
        el.addEventListener('change', function () {
          const p = el.closest('.field');
          if (p) p.classList.remove('error');
        });
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameEl = document.getElementById('reg-name');
      const emailEl = document.getElementById('reg-email');
      const mobileEl = document.getElementById('reg-mobile');
      const pwEl = document.getElementById('reg-pw');
      const cpwEl = document.getElementById('reg-cpw');
      const termsEl = document.getElementById('reg-terms');

      const nameVal = nameEl ? nameEl.value.trim() : '';
      const emailVal = emailEl ? emailEl.value.trim() : '';
      const mobileVal = mobileEl ? mobileEl.value.trim() : '';
      const pwVal = pwEl ? pwEl.value : '';
      const cpwVal = cpwEl ? cpwEl.value : '';

      let hasError = false;
      let firstErrorEl = null;

      function markError(fieldId, inputEl, msg) {
        const fieldEl = document.getElementById(fieldId);
        if (fieldEl) {
          fieldEl.classList.add('error');
          if (msg) {
            const errSpan = fieldEl.querySelector('.field-error');
            if (errSpan) errSpan.textContent = msg;
          }
        }
        if (!firstErrorEl && inputEl) firstErrorEl = inputEl;
        hasError = true;
      }

      function clearError(fieldId) {
        const fieldEl = document.getElementById(fieldId);
        if (fieldEl) fieldEl.classList.remove('error');
      }

      if (nameVal.length < 2) {
        markError('field-reg-name', nameEl);
      } else {
        clearError('field-reg-name');
      }

      if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailVal)) {
        markError('field-reg-email', emailEl, 'Please enter a valid email address.');
      } else {
        clearError('field-reg-email');
      }

      if (!mobileVal || !/^[6-9]\d{9}$/.test(mobileVal)) {
        markError('field-reg-mobile', mobileEl);
      } else {
        clearError('field-reg-mobile');
      }

      if (!pwVal || pwVal.length < 6) {
        markError('field-reg-pw', pwEl);
      } else {
        clearError('field-reg-pw');
      }

      if (!cpwVal || cpwVal !== pwVal) {
        markError('field-reg-cpw', cpwEl, 'Passwords do not match.');
      } else {
        clearError('field-reg-cpw');
      }

      if (termsEl && !termsEl.checked) {
        markError('field-reg-terms', termsEl);
      } else {
        clearError('field-reg-terms');
      }

      if (hasError) {
        if (firstErrorEl) {
          firstErrorEl.focus();
          firstErrorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        showToast('Please correct the highlighted fields to create your account.');
        return;
      }

      // Check duplicate email
      const users = getUsers();
      const existingUser = users.find(function (u) {
        return u.email.toLowerCase() === emailVal.toLowerCase();
      });

      if (existingUser) {
        markError('field-reg-email', emailEl, 'An account with this email address already exists. Please log in.');
        showToast('Email address already registered. Please log in.');
        if (emailEl) emailEl.focus();
        return;
      }

      // Create and save new user
      const newUser = {
        fullName: nameVal,
        email: emailVal,
        mobile: mobileVal,
        password: pwVal,
        createdAt: Date.now()
      };

      users.push(newUser);
      saveUsers(users);

      // Auto login
      setCurrentUser(newUser);
      showToast('Account created successfully! Welcome, ' + newUser.fullName + '.');

      const target = redirectParam ? redirectParam : 'account.html';
      setTimeout(function () {
        window.location.href = target;
      }, 500);
    });
  }

  function initAccountPage() {
    const profileSection = document.getElementById('profile');
    if (!profileSection) return; // Only runs on account.html

    // Protected Route
    if (!isLoggedIn()) {
      window.location.href = 'login.html?redirect=account.html';
      return;
    }

    const user = getCurrentUser();
    if (!user) return;

    // Populate Sidebar
    const avatarEl = document.getElementById('account-avatar');
    const sideNameEl = document.getElementById('account-user-name');
    const sideEmailEl = document.getElementById('account-user-email');
    if (avatarEl) avatarEl.textContent = user.fullName.charAt(0).toUpperCase();
    if (sideNameEl) sideNameEl.textContent = user.fullName;
    if (sideEmailEl) sideEmailEl.textContent = user.email;

    // Populate Profile View
    const vName = document.getElementById('view-profile-name');
    const vEmail = document.getElementById('view-profile-email');
    const vMobile = document.getElementById('view-profile-mobile');
    if (vName) vName.textContent = user.fullName;
    if (vEmail) vEmail.textContent = user.email;
    if (vMobile) vMobile.textContent = '+91 ' + user.mobile;

    // Populate Edit Form
    const editName = document.getElementById('edit-profile-name');
    const editEmail = document.getElementById('edit-profile-email');
    const editMobile = document.getElementById('edit-profile-mobile');
    if (editName) editName.value = user.fullName;
    if (editEmail) editEmail.value = user.email;
    if (editMobile) editMobile.value = user.mobile;

    // Populate Address
    const addrName = document.getElementById('addr-display-name');
    const addrPhone = document.getElementById('addr-display-phone');
    if (addrName) addrName.textContent = user.fullName;
    if (addrPhone) addrPhone.textContent = 'Mobile: +91 ' + user.mobile;

    // Populate Recent Orders Preview
    const ordersPreview = document.getElementById('account-orders-preview');
    if (ordersPreview) {
      const allOrders = getOrders();
      const userOrders = allOrders.filter(function (o) {
        return o.customer && o.customer.email && o.customer.email.toLowerCase() === user.email.toLowerCase();
      });

      if (!userOrders.length) {
        ordersPreview.innerHTML = '<p class="muted" style="margin:0">No orders placed yet. <a href="shop.html" style="text-decoration:underline;color:var(--black);font-weight:600">Start shopping our collections</a></p>';
      } else {
        let prevHtml = '<ul style="margin:0">';
        userOrders.slice(0, 3).forEach(function (ord) {
          prevHtml += '<li class="sum-row" style="border-bottom:1px solid var(--smoke-200);padding:10px 0">' +
            '<span><b>' + ord.orderNumber + '</b> · Placed ' + ord.date + ' (₹' + (ord.total || 0).toLocaleString('en-IN') + ')</span>' +
            '<span class="status-pill ' + (ord.stepIndex >= 3 ? '' : 'alt') + '">' + ord.status + '</span>' +
          '</li>';
        });
        prevHtml += '</ul>';
        ordersPreview.innerHTML = prevHtml;
      }
    }

    // Toggle Edit Mode
    const btnEdit = document.getElementById('btn-edit-profile');
    const btnCancel = document.getElementById('btn-cancel-edit');
    const viewDiv = document.getElementById('profile-view');
    const editForm = document.getElementById('profile-edit-form');

    if (btnEdit && viewDiv && editForm) {
      btnEdit.addEventListener('click', function () {
        viewDiv.style.display = 'none';
        editForm.classList.add('active');
        btnEdit.style.display = 'none';
      });
    }

    if (btnCancel && viewDiv && editForm) {
      btnCancel.addEventListener('click', function () {
        editForm.classList.remove('active');
        viewDiv.style.display = 'block';
        if (btnEdit) btnEdit.style.display = 'inline-block';
      });
    }

    if (editForm) {
      editForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const newName = editName ? editName.value.trim() : '';
        const newMobile = editMobile ? editMobile.value.trim() : '';
        let hasErr = false;

        const fName = document.getElementById('field-edit-name');
        const fMob = document.getElementById('field-edit-mobile');

        if (newName.length < 2) {
          if (fName) fName.classList.add('error');
          hasErr = true;
        } else {
          if (fName) fName.classList.remove('error');
        }

        if (!newMobile || !/^[6-9]\d{9}$/.test(newMobile)) {
          if (fMob) fMob.classList.add('error');
          hasErr = true;
        } else {
          if (fMob) fMob.classList.remove('error');
        }

        if (hasErr) {
          showToast('Please enter valid profile details.');
          return;
        }

        user.fullName = newName;
        user.mobile = newMobile;

        // Update session
        setCurrentUser(user);

        // Update users array
        const users = getUsers();
        const uIdx = users.findIndex(function (u) { return u.email.toLowerCase() === user.email.toLowerCase(); });
        if (uIdx > -1) {
          users[uIdx].fullName = newName;
          users[uIdx].mobile = newMobile;
          saveUsers(users);
        }

        // Update view
        if (vName) vName.textContent = newName;
        if (vMobile) vMobile.textContent = '+91 ' + newMobile;
        if (sideNameEl) sideNameEl.textContent = newName;
        if (avatarEl) avatarEl.textContent = newName.charAt(0).toUpperCase();
        if (addrName) addrName.textContent = newName;
        if (addrPhone) addrPhone.textContent = 'Mobile: +91 ' + newMobile;

        // Close form
        editForm.classList.remove('active');
        viewDiv.style.display = 'block';
        if (btnEdit) btnEdit.style.display = 'inline-block';

        showToast('Profile updated successfully!');
      });
    }

    // Logout Handlers
    const sideLogout = document.getElementById('side-logout-btn');
    const bottomLogout = document.getElementById('bottom-logout-btn');
    if (sideLogout) sideLogout.addEventListener('click', logoutUser);
    if (bottomLogout) bottomLogout.addEventListener('click', logoutUser);
  }

  // ---------------------------------------------------------------------------
  // 7. Orders & Checkout Management (localStorage persistence)
  // ---------------------------------------------------------------------------
  const ORDERS_STORAGE_KEY = 'tyl_orders';
  const LAST_ORDER_KEY = 'tyl_last_order';

  const INITIAL_SAMPLE_ORDER = {
    orderNumber: 'TYL-2026-84192',
    date: '21 Nov 2026',
    timestamp: Date.now() - 172800000,
    status: 'Out for Delivery',
    stepIndex: 2,
    customer: {
      fullName: 'Alex Morrison',
      email: 'alex.morrison@example.com',
      mobile: '9876543210',
      altMobile: ''
    },
    address: {
      house: 'Flat 402, Signature Towers',
      street: '12th Main Road, HAL 2nd Stage',
      area: 'Indiranagar',
      city: 'Bengaluru',
      state: 'Karnataka',
      pin: '560038',
      landmark: 'Opposite Metro Pillar 140'
    },
    formattedAddress: 'Flat 402, Signature Towers, 12th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka – 560038 (Landmark: Opposite Metro Pillar 140)',
    paymentMethod: 'Cash on Delivery',
    items: [
      {
        id: 'p-rookie-crew-coord',
        name: 'Rookie Crew Co-ord Set',
        price: 2499,
        image: 'assets/images/products/rookie-crew.jpg',
        style: '--px:52%;--py:50%',
        size: '7–8 Years',
        colour: 'Butter Cream & Khaki',
        quantity: 1
      },
      {
        id: 'p-happy-gang-sweatshirt',
        name: 'Happy Gang Script Sweatshirt',
        price: 1299,
        image: 'assets/images/products/happy-gang.jpg',
        style: '--px:48%;--z:1.55;--ox:50%;--oy:8%',
        size: '7–8 Years',
        colour: 'Taupe Grey',
        quantity: 1
      }
    ],
    subtotal: 3798,
    total: 3798
  };

  function getOrders() {
    try {
      const stored = localStorage.getItem(ORDERS_STORAGE_KEY);
      if (stored === null) {
        localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify([INITIAL_SAMPLE_ORDER]));
        return [INITIAL_SAMPLE_ORDER];
      }
      return JSON.parse(stored) || [];
    } catch (e) {
      return [INITIAL_SAMPLE_ORDER];
    }
  }

  function saveOrders(orders) {
    try {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    } catch (e) {
      console.warn('Could not save orders to localStorage', e);
    }
  }

  function getLastOrder() {
    try {
      const stored = localStorage.getItem(LAST_ORDER_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
      const orders = getOrders();
      return orders.length ? orders[0] : null;
    } catch (e) {
      const orders = getOrders();
      return orders.length ? orders[0] : null;
    }
  }

  function initCheckoutPage() {
    const sumList = document.getElementById('checkout-sum-items');
    if (!sumList) return; // Only runs on checkout.html

    // Auth Protection: Redirect to login if unauthenticated
    if (!isLoggedIn()) {
      window.location.href = 'login.html?redirect=checkout.html';
      return;
    }

    const currentUser = getCurrentUser();
    const form = document.getElementById('checkout-form');
    const subtotalEl = document.getElementById('checkout-subtotal');
    const totalEl = document.getElementById('checkout-total');
    const items = getCartItems();

    // Automatically prefill customer details from logged-in account
    if (currentUser) {
      const nameInput = document.getElementById('cust-name');
      const emailInput = document.getElementById('cust-email');
      const phoneInput = document.getElementById('cust-phone');
      if (nameInput && !nameInput.value) nameInput.value = currentUser.fullName;
      if (emailInput && !emailInput.value) emailInput.value = currentUser.email;
      if (phoneInput && !phoneInput.value) phoneInput.value = currentUser.mobile;
    }

    if (!items.length) {
      sumList.innerHTML = '<li style="padding:16px 0;color:var(--smoke-600)">Your cart is currently empty. <a href="shop.html" style="text-decoration:underline;color:var(--black);font-weight:600">Start shopping</a></li>';
      if (subtotalEl) subtotalEl.textContent = '₹0';
      if (totalEl) totalEl.textContent = '₹0';
    } else {
      let subtotal = 0;
      let html = '';

      items.forEach(function (item) {
        const itemTotal = (item.price || 0) * (item.quantity || 1);
        subtotal += itemTotal;

        const imgHtml = (item.image && item.image.includes('logo')) ?
          '<div class="thumb" style="background:#e5e4e2;display:grid;place-items:center"><img src="' + item.image + '" alt="' + item.name + '" style="width:40px;height:auto;opacity:0.8"></div>' :
          '<div class="thumb"><img src="' + item.image + '" alt="' + item.name + '" style="' + (item.style || '') + '" loading="lazy" decoding="async"></div>';

        html += '<li>' +
          imgHtml +
          '<span>' + item.name + '<br><span class="muted">Size ' + (item.size || '7–8 Years') + ' · ' + (item.colour || 'Standard') + ' · Qty ' + (item.quantity || 1) + '</span></span>' +
          '<b>₹' + itemTotal.toLocaleString('en-IN') + '</b>' +
        '</li>';
      });

      sumList.innerHTML = html;
      if (subtotalEl) subtotalEl.textContent = '₹' + subtotal.toLocaleString('en-IN');
      if (totalEl) totalEl.textContent = '₹' + subtotal.toLocaleString('en-IN');
    }

    if (!form) return;

    // Real-time error removal on input
    const inputsToWatch = [
      'cust-name', 'cust-email', 'cust-phone', 'cust-alt-phone',
      'addr-house', 'addr-street', 'addr-area', 'addr-city', 'addr-state', 'addr-pin'
    ];

    inputsToWatch.forEach(function (id) {
      const el = document.getElementById(id);
      if (el) {
        const fieldParent = el.closest('.field');
        el.addEventListener('input', function () {
          if (fieldParent) fieldParent.classList.remove('error');
        });
        el.addEventListener('change', function () {
          if (fieldParent) fieldParent.classList.remove('error');
        });
      }
    });

    // Form submit handler with validation and order placement
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const currentItems = getCartItems();
      if (!currentItems.length) {
        showToast('Your shopping cart is empty. Please add products before placing an order.');
        return;
      }

      let hasError = false;
      let firstErrorEl = null;

      function checkField(fieldId, inputId, validator) {
        const fieldEl = document.getElementById(fieldId);
        const inputEl = document.getElementById(inputId);
        if (!fieldEl || !inputEl) return true;
        const valid = validator(inputEl.value);
        if (!valid) {
          fieldEl.classList.add('error');
          if (!firstErrorEl) firstErrorEl = inputEl;
          hasError = true;
          return false;
        } else {
          fieldEl.classList.remove('error');
          return true;
        }
      }

      checkField('field-cust-name', 'cust-name', function (v) { return v.trim().length >= 2; });
      checkField('field-cust-email', 'cust-email', function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()); });
      checkField('field-cust-phone', 'cust-phone', function (v) { return /^[6-9]\d{9}$/.test(v.trim()); });
      checkField('field-addr-house', 'addr-house', function (v) { return v.trim().length >= 1; });
      checkField('field-addr-street', 'addr-street', function (v) { return v.trim().length >= 2; });
      checkField('field-addr-area', 'addr-area', function (v) { return v.trim().length >= 2; });
      checkField('field-addr-city', 'addr-city', function (v) { return v.trim().length >= 2; });
      checkField('field-addr-state', 'addr-state', function (v) { return !!v && v.trim().length > 0; });
      checkField('field-addr-pin', 'addr-pin', function (v) { return /^\d{6}$/.test(v.trim()); });

      if (hasError) {
        if (firstErrorEl) {
          firstErrorEl.focus();
          firstErrorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        showToast('Please fill out all required fields correctly.');
        return;
      }

      // Generate unique order reference number
      const orderRef = 'TYL-2026-' + Math.floor(10000 + Math.random() * 90000);
      const dateStr = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

      const custName = document.getElementById('cust-name').value.trim();
      const custEmail = document.getElementById('cust-email').value.trim();
      const custPhone = document.getElementById('cust-phone').value.trim();
      const altPhoneEl = document.getElementById('cust-alt-phone');
      const custAlt = altPhoneEl ? altPhoneEl.value.trim() : '';

      const house = document.getElementById('addr-house').value.trim();
      const street = document.getElementById('addr-street').value.trim();
      const area = document.getElementById('addr-area').value.trim();
      const city = document.getElementById('addr-city').value.trim();
      const state = document.getElementById('addr-state').value.trim();
      const pin = document.getElementById('addr-pin').value.trim();
      const landmarkEl = document.getElementById('addr-landmark');
      const landmark = landmarkEl ? landmarkEl.value.trim() : '';

      let fullAddr = house + ', ' + street + ', ' + area + ', ' + city + ', ' + state + ' – ' + pin;
      if (landmark) fullAddr += ' (Landmark: ' + landmark + ')';

      const selectedPay = document.querySelector('input[name="pay-method"]:checked');
      const paymentMethod = selectedPay ? selectedPay.value : 'Cash on Delivery';

      const subtotal = currentItems.reduce(function (sum, it) {
        return sum + ((it.price || 0) * (it.quantity || 1));
      }, 0);

      const activeEmail = (currentUser && currentUser.email) ? currentUser.email : custEmail;

      const newOrder = {
        orderNumber: orderRef,
        date: dateStr,
        timestamp: Date.now(),
        status: 'Order Placed',
        stepIndex: 0,
        customerEmail: activeEmail.toLowerCase(),
        customer: {
          fullName: custName,
          email: activeEmail,
          mobile: custPhone,
          altMobile: custAlt
        },
        address: {
          house: house,
          street: street,
          area: area,
          city: city,
          state: state,
          pin: pin,
          landmark: landmark
        },
        formattedAddress: fullAddr,
        paymentMethod: paymentMethod,
        items: currentItems,
        subtotal: subtotal,
        total: subtotal
      };

      const orders = getOrders();
      orders.unshift(newOrder);
      saveOrders(orders);

      try {
        localStorage.setItem(LAST_ORDER_KEY, JSON.stringify(newOrder));
      } catch (err) {}

      // Clear the shopping cart
      saveCartItems([]);

      // Redirect to Order Confirmation page
      window.location.href = 'order-success.html';
    });
  }

  // ---------------------------------------------------------------------------
  // 7b. Order Confirmation Page (order-success.html)
  // ---------------------------------------------------------------------------
  function initOrderSuccessPage() {
    const orderNumEl = document.getElementById('success-order-num');
    if (!orderNumEl) return; // Only runs on order-success.html

    const order = getLastOrder();
    if (!order) return;

    orderNumEl.textContent = order.orderNumber || 'TYL-2026-84192';

    const custNameEl = document.getElementById('success-cust-name');
    const custContactEl = document.getElementById('success-cust-contact');
    const paymentEl = document.getElementById('success-payment-method');
    const addressEl = document.getElementById('success-address');
    const totalEl = document.getElementById('success-total');
    const itemsListEl = document.getElementById('success-items-list');

    if (custNameEl) custNameEl.textContent = order.customer ? order.customer.fullName : 'Valued Customer';
    if (custContactEl && order.customer) {
      custContactEl.textContent = (order.customer.email || '') + (order.customer.mobile ? ' · +91 ' + order.customer.mobile : '');
    }
    if (paymentEl) paymentEl.textContent = order.paymentMethod || 'Cash on Delivery';
    if (addressEl) addressEl.textContent = order.formattedAddress || 'Standard Delivery Address';
    if (totalEl) totalEl.textContent = '₹' + (order.total || 0).toLocaleString('en-IN');

    if (itemsListEl && Array.isArray(order.items)) {
      let itemsHtml = '';
      order.items.forEach(function (item) {
        const itemTotal = (item.price || 0) * (item.quantity || 1);
        const imgHtml = (item.image && item.image.includes('logo')) ?
          '<div class="thumb" style="background:#e5e4e2;display:grid;place-items:center"><img src="' + item.image + '" alt="' + item.name + '" style="width:36px;height:auto;opacity:0.8"></div>' :
          '<div class="thumb"><img src="' + item.image + '" alt="' + item.name + '" style="' + (item.style || '') + '" loading="lazy"></div>';

        itemsHtml += '<div class="order-item-compact">' +
          imgHtml +
          '<div class="info">' +
            '<h4>' + item.name + '</h4>' +
            '<small>Size: ' + (item.size || '7–8 Years') + ' · ' + (item.colour || 'Standard') + ' · Qty: ' + (item.quantity || 1) + '</small>' +
          '</div>' +
          '<div class="price">₹' + itemTotal.toLocaleString('en-IN') + '</div>' +
        '</div>';
      });
      itemsListEl.innerHTML = itemsHtml;
    }
  }

  // ---------------------------------------------------------------------------
  // 7c. My Orders Page (orders.html)
  // ---------------------------------------------------------------------------
  function initOrdersPage() {
    const ordersContainer = document.getElementById('orders-list-container');
    if (!ordersContainer) return; // Only runs on orders.html

    // Auth Protection: Redirect to login if unauthenticated
    if (!isLoggedIn()) {
      window.location.href = 'login.html?redirect=orders.html';
      return;
    }

    const currentUser = getCurrentUser();
    const emptyState = document.getElementById('orders-empty-state');
    const allOrders = getOrders();

    // Filter to display ONLY the logged-in customer's orders
    const userOrders = allOrders.filter(function (ord) {
      if (!ord.customer || !ord.customer.email) return false;
      return ord.customer.email.toLowerCase() === currentUser.email.toLowerCase();
    });

    // Update account sidebar user profile info
    const nameEl = document.getElementById('orders-user-name');
    const emailEl = document.getElementById('orders-user-email');
    const avatarEl = document.getElementById('orders-avatar');
    if (nameEl) nameEl.textContent = currentUser.fullName;
    if (emailEl) emailEl.textContent = currentUser.email;
    if (avatarEl) avatarEl.textContent = currentUser.fullName.charAt(0).toUpperCase();

    const sideLogout = document.getElementById('side-logout-btn');
    if (sideLogout && !sideLogout._bound) {
      sideLogout._bound = true;
      sideLogout.addEventListener('click', logoutUser);
    }

    if (!userOrders || userOrders.length === 0) {
      if (emptyState) emptyState.style.display = 'block';
      ordersContainer.style.display = 'none';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    ordersContainer.style.display = 'block';

    let html = '';
    userOrders.forEach(function (order, index) {
      const stepIndex = (typeof order.stepIndex === 'number') ? order.stepIndex : 0;
      const isDone = function (idx) {
        return stepIndex > idx ? 'done' : (stepIndex === idx ? 'current' : '');
      };

      let itemsHtml = '';
      (order.items || []).forEach(function (item) {
        const itemTotal = (item.price || 0) * (item.quantity || 1);
        const imgHtml = (item.image && item.image.includes('logo')) ?
          '<div class="thumb" style="background:#e5e4e2;display:grid;place-items:center"><img src="' + item.image + '" alt="' + item.name + '" style="width:36px;height:auto;opacity:0.8"></div>' :
          '<div class="thumb"><img src="' + item.image + '" alt="' + item.name + '" style="' + (item.style || '') + '" loading="lazy"></div>';

        itemsHtml += '<li>' +
          imgHtml +
          '<div>' +
            '<strong>' + item.name + '</strong>' +
            '<small>Size: ' + (item.size || '7–8 Years') + ' · ' + (item.colour || 'Standard') + ' · Qty: ' + (item.quantity || 1) + '</small>' +
            '<div style="font-weight:600;margin-top:2px">₹' + itemTotal.toLocaleString('en-IN') + '</div>' +
          '</div>' +
        '</li>';
      });

      html += '<article class="order-card" data-order-id="' + order.orderNumber + '">' +
        '<div class="order-top">' +
          '<div><b>Order Reference</b><span>' + order.orderNumber + '</span></div>' +
          '<div><b>Date Placed</b><span>' + order.date + '</span></div>' +
          '<div><b>Total Amount</b><span>₹' + (order.total || 0).toLocaleString('en-IN') + '</span></div>' +
          '<div><b>Status</b><span class="status-pill ' + (stepIndex >= 3 ? '' : 'alt') + '">' + order.status + '</span></div>' +
        '</div>' +
        '<div class="order-body">' +
          '<ul class="order-items">' + itemsHtml + '</ul>' +
          '<ul class="track">' +
            '<li class="' + isDone(0) + '">Order Placed</li>' +
            '<li class="' + isDone(1) + '">Shipped</li>' +
            '<li class="' + isDone(2) + '">Out for Delivery</li>' +
            '<li class="' + (stepIndex === 3 ? 'done' : '') + '">Delivered</li>' +
          '</ul>' +
        '</div>' +
        '<div class="order-foot">' +
          '<span>Payment: <strong>' + order.paymentMethod + '</strong> (Online gateway integration pending)</span>' +
          '<button type="button" class="btn-toggle-details" data-target="drawer-' + index + '">View Order Details &darr;</button>' +
        '</div>' +
        '<div class="order-details-drawer" id="drawer-' + index + '">' +
          '<div class="confirm-details-grid" style="margin:0 0 16px">' +
            '<div>' +
              '<h4>Customer Details</h4>' +
              '<p><strong>' + (order.customer.fullName || 'Customer') + '</strong><br>' +
              '<span style="color:var(--smoke-600)">' + (order.customer.email || '') + (order.customer.mobile ? ' · +91 ' + order.customer.mobile : '') + '</span></p>' +
            '</div>' +
            '<div>' +
              '<h4>Payment Method</h4>' +
              '<p><strong>' + order.paymentMethod + '</strong><br>' +
              '<span style="color:#15803d;font-weight:600;font-size:12px">Pending on Delivery (Gateway integration pending)</span></p>' +
            '</div>' +
            '<div style="grid-column: 1 / -1">' +
              '<h4>Shipping Address</h4>' +
              '<p>' + order.formattedAddress + '</p>' +
            '</div>' +
          '</div>' +
          '<div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--smoke-200);padding-top:12px;flex-wrap:wrap;gap:12px">' +
            '<span>Items Subtotal: <strong>₹' + (order.subtotal || 0).toLocaleString('en-IN') + '</strong> &nbsp;|&nbsp; Delivery: <strong style="color:#16a34a">FREE Standard</strong></span>' +
            '<a href="shop.html" class="btn outline" style="padding:6px 14px;font-size:12px">Reorder Styles</a>' +
          '</div>' +
        '</div>' +
      '</article>';
    });

    ordersContainer.innerHTML = html;

    // Bind collapsible detail drawers
    ordersContainer.querySelectorAll('.btn-toggle-details').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const targetId = btn.getAttribute('data-target');
        const drawer = document.getElementById(targetId);
        if (!drawer) return;
        const isOpen = drawer.classList.contains('open');
        if (isOpen) {
          drawer.classList.remove('open');
          btn.innerHTML = 'View Order Details &darr;';
        } else {
          drawer.classList.add('open');
          btn.innerHTML = 'Hide Order Details &uarr;';
        }
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 7. Shop Page: Filtering, Sorting & Live Search (shop.html)
  // ---------------------------------------------------------------------------
  function initShop() {
    const shopGrid = document.getElementById('shop-grid');
    if (!shopGrid) return;

    const catTabs = document.querySelectorAll('.cat-tab');
    const searchInput = document.getElementById('shop-search');
    const clearSearchBtn = document.getElementById('clear-search');
    const sortSelect = document.getElementById('shop-sort');
    const resultsCount = document.getElementById('results-count');
    const emptyState = document.getElementById('shop-empty');
    const clearFiltersBtn = document.getElementById('clear-filters-btn');

    const cards = Array.from(shopGrid.querySelectorAll('.card'));
    cards.forEach(function (card, idx) {
      if (!card.dataset.featuredIndex) {
        card.dataset.featuredIndex = idx;
      }
    });

    let state = {
      category: 'all',
      search: '',
      sort: 'featured'
    };

    function normalizeCat(raw) {
      if (!raw) return 'all';
      let c = raw.replace('#', '').replace('?', '').trim().toLowerCase();
      if (c === 't-shirts' || c === 'tshirt' || c === 't-shirt') return 'tshirts';
      if (c === 'shirt') return 'shirts';
      if (c === 'sweatshirt' || c === 'sweatshirts') return 'all';
      if (c === 'trousers' || c === 'jogger' || c === 'trousers-joggers' || c === 'trousers_joggers') return 'joggers';
      if (c === 'coord' || c === 'co-ord' || c === 'co-ords' || c === 'coord-sets' || c === 'coord_sets') return 'coords';
      if (c === 'new-arrivals' || c === 'new_arrivals' || c === 'newarrivals') return 'new';
      return c;
    }

    function applyFilters() {
      let visibleCards = [];
      const query = state.search.toLowerCase().trim();

      cards.forEach(function (card) {
        const categories = (card.dataset.category || '').toLowerCase().split(' ');
        const name = (card.dataset.name || '').toLowerCase();
        const isNew = card.dataset.new === 'true' || categories.includes('new');

        let matchesCat = false;
        if (state.category === 'all') {
          matchesCat = true;
        } else if (state.category === 'new') {
          matchesCat = isNew;
        } else {
          matchesCat = categories.includes(state.category);
        }

        let matchesSearch = !query || name.includes(query) || categories.some(function (c) { return c.includes(query); });

        if (matchesCat && matchesSearch) {
          card.classList.remove('hidden');
          card.style.display = '';
          visibleCards.push(card);
        } else {
          card.classList.add('hidden');
          card.style.display = 'none';
        }
      });

      visibleCards.sort(function (a, b) {
        const priceA = parseInt(a.dataset.price, 10) || 0;
        const priceB = parseInt(b.dataset.price, 10) || 0;
        const nameA = (a.dataset.name || '').toLowerCase();
        const nameB = (b.dataset.name || '').toLowerCase();
        const dateA = a.dataset.date || '';
        const dateB = b.dataset.date || '';
        const featA = parseInt(a.dataset.featuredIndex, 10) || 0;
        const featB = parseInt(b.dataset.featuredIndex, 10) || 0;

        switch (state.sort) {
          case 'price-asc': return priceA - priceB;
          case 'price-desc': return priceB - priceA;
          case 'newest': return dateB.localeCompare(dateA);
          case 'name-asc': return nameA.localeCompare(nameB);
          case 'featured':
          default:
            return featA - featB;
        }
      });

      visibleCards.forEach(function (card) {
        shopGrid.appendChild(card);
      });

      if (resultsCount) {
        resultsCount.textContent = 'Showing ' + visibleCards.length + ' of ' + cards.length + ' products';
      }

      if (emptyState) {
        if (visibleCards.length === 0) {
          emptyState.classList.add('show');
          shopGrid.style.display = 'none';
        } else {
          emptyState.classList.remove('show');
          shopGrid.style.display = 'grid';
        }
      }
    }

    function setActiveCategory(catValue, updateHash) {
      state.category = normalizeCat(catValue);

      catTabs.forEach(function (tab) {
        const target = normalizeCat(tab.dataset.filter || tab.dataset.cat || 'all');
        if (target === state.category) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });

      if (updateHash && window.history.pushState) {
        const newHash = state.category === 'all' ? '' : '#' + state.category;
        window.history.pushState(null, null, window.location.pathname + newHash);
      }

      applyFilters();
    }

    catTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        const filterVal = tab.dataset.filter || tab.dataset.cat || 'all';
        setActiveCategory(filterVal, true);
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        state.search = searchInput.value;
        if (clearSearchBtn) {
          clearSearchBtn.style.display = state.search.length > 0 ? 'flex' : 'none';
        }
        applyFilters();
      });
    }

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', function () {
        searchInput.value = '';
        state.search = '';
        clearSearchBtn.style.display = 'none';
        applyFilters();
        searchInput.focus();
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener('change', function () {
        state.sort = sortSelect.value;
        applyFilters();
      });
    }

    if (clearFiltersBtn) {
      clearFiltersBtn.addEventListener('click', function () {
        state.search = '';
        if (searchInput) searchInput.value = '';
        if (clearSearchBtn) clearSearchBtn.style.display = 'none';
        if (sortSelect) sortSelect.value = 'featured';
        state.sort = 'featured';
        setActiveCategory('all', true);
      });
    }

    function readUrlFilter() {
      const params = new URLSearchParams(window.location.search);
      const paramCat = params.get('category') || params.get('cat');
      if (paramCat) {
        setActiveCategory(paramCat, false);
        return;
      }
      const hash = window.location.hash;
      if (hash) {
        setActiveCategory(hash, false);
      } else {
        setActiveCategory('all', false);
      }
    }

    window.addEventListener('hashchange', function () {
      readUrlFilter();
    });

    readUrlFilter();
  }

  // ---------------------------------------------------------------------------
  // 8. Newsletter Form Validation
  // ---------------------------------------------------------------------------
  function initNewsletter() {
    const form = document.getElementById('newsletter-form');
    const feedback = document.getElementById('news-feedback');
    if (!form || !feedback) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      if (!emailInput) return;

      const emailVal = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

      feedback.className = 'news-feedback';

      if (!emailVal) {
        feedback.classList.add('error');
        feedback.textContent = 'Please enter your email address.';
        emailInput.focus();
        return;
      }

      if (!emailRegex.test(emailVal)) {
        feedback.classList.add('error');
        feedback.textContent = 'Please enter a valid email address (e.g. name@example.com).';
        emailInput.focus();
        return;
      }

      feedback.classList.add('success');
      feedback.textContent = 'Thank you for subscribing to THE YOUTH LABEL! You’re on the exclusive list for new collections & style drops.';
      emailInput.value = '';

      try {
        localStorage.setItem('tyl_subscriber_email', emailVal);
      } catch (err) {}

      showToast('Subscription confirmed. Welcome to THE YOUTH LABEL!');
    });
  }

  // ---------------------------------------------------------------------------
  // 8b. Contact Enquiry Form Validation (contact.html)
  // ---------------------------------------------------------------------------
  function initContactForm() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('contact-feedback');
    if (!form || !feedback) return;

    ['c-name', 'c-phone', 'c-email', 'c-msg'].forEach(function (id) {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', function () {
          const p = el.closest('.field');
          if (p) p.classList.remove('error');
        });
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = document.getElementById('c-name');
      const phoneInput = document.getElementById('c-phone');
      const emailInput = document.getElementById('c-email');
      const msgInput = document.getElementById('c-msg');

      const nameVal = nameInput ? nameInput.value.trim() : '';
      const phoneVal = phoneInput ? phoneInput.value.trim() : '';
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const msgVal = msgInput ? msgInput.value.trim() : '';

      let hasErr = false;

      function checkF(fieldId, val, ok) {
        const f = document.getElementById(fieldId);
        if (!ok) {
          if (f) f.classList.add('error');
          hasErr = true;
        } else {
          if (f) f.classList.remove('error');
        }
      }

      checkF('field-c-name', nameVal, nameVal.length >= 2);
      checkF('field-c-phone', phoneVal, /^[6-9]\d{9}$/.test(phoneVal));
      checkF('field-c-email', emailVal, /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailVal));
      checkF('field-c-msg', msgVal, msgVal.length >= 4);

      if (hasErr) {
        showToast('Please correct the highlighted fields.');
        return;
      }

      feedback.style.display = 'block';
      feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      form.reset();
      showToast('Enquiry submitted successfully! We will contact you soon.');
    });
  }

  // ---------------------------------------------------------------------------
  // 9. Navigation & Shop Dropdown Interactivity
  // ---------------------------------------------------------------------------
  function initNav() {
    const toggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.main-nav a:not(.dropdown-trigger)');
    const dropdownWrap = document.querySelector('.nav-dropdown');
    const dropdownTrigger = document.querySelector('.dropdown-trigger');

    if (toggle && navLinks.length) {
      navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          toggle.checked = false;
        });
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          if (toggle.checked) toggle.checked = false;
          if (dropdownWrap) dropdownWrap.classList.remove('mobile-open', 'is-open');
        }
      });
    }

    // Dropdown Interactions
    if (dropdownWrap && dropdownTrigger) {
      // Mobile click on trigger toggles dropdown accordion
      dropdownTrigger.addEventListener('click', function (e) {
        const isMobile = window.innerWidth <= 900;
        if (isMobile) {
          e.preventDefault();
          dropdownWrap.classList.toggle('mobile-open');
          const isExpanded = dropdownWrap.classList.contains('mobile-open');
          dropdownTrigger.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        }
      });

      // Handle dropdown link clicks when already on shop.html
      const dropdownLinks = dropdownWrap.querySelectorAll('.dropdown-link');
      dropdownLinks.forEach(function (dLink) {
        dLink.addEventListener('click', function (e) {
          if (toggle) toggle.checked = false;
          dropdownWrap.classList.remove('mobile-open', 'is-open');
          const href = dLink.getAttribute('href') || '';
          if (window.location.pathname.endsWith('shop.html') || window.location.pathname.endsWith('shop')) {
            const hash = href.includes('#') ? href.split('#')[1] : '';
            if (hash) {
              e.preventDefault();
              window.location.hash = '#' + hash;
            }
          }
        });
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', function (e) {
        if (!dropdownWrap.contains(e.target)) {
          dropdownWrap.classList.remove('mobile-open', 'is-open');
        }
      });
    }
  }

  // ---------------------------------------------------------------------------
  // 10. Product Details Page Logic & Recently Viewed History (product.html)
  // ---------------------------------------------------------------------------
  const RECENTLY_VIEWED_KEY = 'tyl_recently_viewed';
  const DEFAULT_RECENT = [
    'p-rookie-crew-sweatshirt',
    'p-wild-bunch-sweatshirt',
    'p-navy-cargo-jogger',
    'p-homies-crew-coord'
  ];

  function getRecentlyViewed() {
    try {
      const stored = localStorage.getItem(RECENTLY_VIEWED_KEY);
      if (!stored) {
        localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(DEFAULT_RECENT));
        return DEFAULT_RECENT;
      }
      return JSON.parse(stored) || DEFAULT_RECENT;
    } catch (e) {
      return DEFAULT_RECENT;
    }
  }

  function recordProductView(productId) {
    if (!productId || !PRODUCT_CATALOG[productId]) return;
    try {
      let list = getRecentlyViewed();
      list = list.filter(function (id) { return id !== productId; });
      list.unshift(productId);
      if (list.length > 8) list = list.slice(0, 8);
      localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(list));
    } catch (e) {}
  }

  function renderRecentlyViewed(currentId) {
    const grid = document.getElementById('recently-viewed-grid');
    if (!grid) return;

    const list = getRecentlyViewed();
    const filtered = list.filter(function (id) {
      return id !== currentId && PRODUCT_CATALOG[id];
    });

    const toShow = filtered.slice(0, 4);
    if (!toShow.length) {
      ['p-happy-gang-sweatshirt', 'p-rookie-crew-sweatshirt', 'p-wild-bunch-sweatshirt', 'p-navy-cargo-jogger']
        .forEach(function (id) {
          if (id !== currentId && toShow.length < 4) toShow.push(id);
        });
    }

    let html = '';
    toShow.forEach(function (id) {
      const p = PRODUCT_CATALOG[id];
      if (!p) return;
      const badgeHtml = p.badge ? '<span class="badge">' + p.badge + '</span>' : '';
      const mediaHtml = p.isPh ?
        '<div class="media"><div class="ph" style="aspect-ratio:4/5;display:grid;place-items:center;background:#e5e4e2"><img src="' + p.img + '" alt="' + p.name + '" class="ph-logo" style="width:72px;height:auto;opacity:0.8"><small style="color:#666;font-size:11px">Studio View</small></div><span class="quick">View Product</span></div>' :
        '<div class="media"><img src="' + p.img + '" alt="' + p.name + '" style="' + (p.style || '') + '" loading="lazy" decoding="async">' + badgeHtml + '<span class="quick">View Product</span></div>';

      html += '<article class="card" data-id="' + p.id + '">' +
        mediaHtml +
        '<button type="button" class="heart" data-wishlist-id="' + p.id + '" aria-label="Save ' + p.name + ' to wishlist">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20.5s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9.5c0 6-8 11-8 11z"/></svg>' +
        '</button>' +
        '<div class="card-body">' +
        '<p class="cat">' + p.cat + '</p>' +
        '<h3><a class="stretch" href="product.html#' + p.id + '">' + p.name + '</a></h3>' +
        '<p class="price">' + p.priceFormatted + '</p>' +
        '</div>' +
        '</article>';
    });

    grid.innerHTML = html;
    initWishlist();
  }

  function initProductDetails() {
    const pdSections = document.querySelectorAll('.pd-list .pd');
    if (!pdSections.length) return;

    // Size selection handler
    document.querySelectorAll('.size-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const wrap = btn.closest('.size-chips-wrap');
        const section = btn.closest('.pd');
        if (wrap) {
          wrap.querySelectorAll('.size-btn').forEach(function (b) { b.classList.remove('selected'); });
        }
        btn.classList.add('selected');

        if (section) {
          const alert = section.querySelector('.size-error-alert');
          if (alert) alert.classList.remove('show');
        }
      });
    });

    // Colour selection handler
    document.querySelectorAll('.colour-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const wrap = btn.closest('.colour-chips-wrap');
        const section = btn.closest('.pd');
        if (wrap) {
          wrap.querySelectorAll('.colour-btn').forEach(function (b) { b.classList.remove('selected'); });
        }
        btn.classList.add('selected');

        if (section) {
          const colourLabel = section.querySelector('.selected-colour-name');
          const colourVal = btn.getAttribute('data-colour');
          if (colourLabel && colourVal) {
            colourLabel.textContent = colourVal;
          }
        }
      });
    });

    // Quantity stepper handlers
    document.querySelectorAll('.qty-stepper').forEach(function (stepper) {
      const minus = stepper.querySelector('.qty-stepper-btn.minus');
      const plus = stepper.querySelector('.qty-stepper-btn.plus');
      const input = stepper.querySelector('.qty-stepper-input');
      if (!input) return;

      if (minus) {
        minus.addEventListener('click', function () {
          let val = parseInt(input.value, 10) || 1;
          if (val > 1) {
            input.value = val - 1;
          }
        });
      }

      if (plus) {
        plus.addEventListener('click', function () {
          let val = parseInt(input.value, 10) || 1;
          if (val < 10) {
            input.value = val + 1;
          }
        });
      }
    });

    // Add to Cart handler
    document.querySelectorAll('.btn-add-cart').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const section = btn.closest('.pd');
        if (!section) return;

        const selectedSizeBtn = section.querySelector('.size-btn.selected');
        const alert = section.querySelector('.size-error-alert');

        if (!selectedSizeBtn) {
          if (alert) {
            alert.classList.add('show');
            alert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          return;
        }

        if (alert) alert.classList.remove('show');

        const selectedSize = selectedSizeBtn.getAttribute('data-size') || selectedSizeBtn.textContent.trim();
        const selectedColourBtn = section.querySelector('.colour-btn.selected');
        const selectedColour = selectedColourBtn ? (selectedColourBtn.getAttribute('data-colour') || selectedColourBtn.textContent.trim()) : 'Standard';
        const qtyInput = section.querySelector('.qty-stepper-input');
        const qty = qtyInput ? (parseInt(qtyInput.value, 10) || 1) : 1;

        const pId = section.getAttribute('data-product-id') || section.id;
        const pName = section.getAttribute('data-product-name') || (section.querySelector('h1') && section.querySelector('h1').textContent.trim()) || 'Item';
        const pPrice = section.getAttribute('data-product-price') || (section.querySelector('.pd-price') && section.querySelector('.pd-price').textContent.trim()) || '1299';
        const pImg = section.getAttribute('data-product-image') || '';

        addItemToCart({
          id: pId,
          name: pName,
          price: pPrice,
          image: pImg,
          size: selectedSize,
          colour: selectedColour,
          quantity: qty
        });

        const feedback = section.querySelector('.pd-cart-feedback');
        if (feedback) {
          feedback.classList.add('show');
        }
      });
    });

    // Buy Now handler
    document.querySelectorAll('.btn-buy-now').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const section = btn.closest('.pd');
        if (!section) return;

        const selectedSizeBtn = section.querySelector('.size-btn.selected');
        const alert = section.querySelector('.size-error-alert');

        if (!selectedSizeBtn) {
          if (alert) {
            alert.classList.add('show');
            alert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          return;
        }

        if (alert) alert.classList.remove('show');

        const selectedSize = selectedSizeBtn.getAttribute('data-size') || selectedSizeBtn.textContent.trim();
        const selectedColourBtn = section.querySelector('.colour-btn.selected');
        const selectedColour = selectedColourBtn ? (selectedColourBtn.getAttribute('data-colour') || selectedColourBtn.textContent.trim()) : 'Standard';
        const qtyInput = section.querySelector('.qty-stepper-input');
        const qty = qtyInput ? (parseInt(qtyInput.value, 10) || 1) : 1;

        const pId = section.getAttribute('data-product-id') || section.id;
        const pName = section.getAttribute('data-product-name') || (section.querySelector('h1') && section.querySelector('h1').textContent.trim()) || 'Item';
        const pPrice = section.getAttribute('data-product-price') || '1299';
        const pImg = section.getAttribute('data-product-image') || '';

        addItemToCart({
          id: pId,
          name: pName,
          price: pPrice,
          image: pImg,
          size: selectedSize,
          colour: selectedColour,
          quantity: qty
        });

        const checkoutItem = {
          id: pId,
          name: pName,
          price: pPrice,
          image: pImg,
          size: selectedSize,
          colour: selectedColour,
          quantity: qty
        };

        try {
          localStorage.setItem('tyl_checkout_item', JSON.stringify(checkoutItem));
        } catch (err) {}

        window.location.href = 'checkout.html';
      });
    });

    function handleActiveProduct() {
      let hash = window.location.hash;
      let targetId = 'p-happy-gang-sweatshirt';
      if (hash && hash.startsWith('#p-')) {
        targetId = hash.substring(1);
      }
      recordProductView(targetId);
      renderRecentlyViewed(targetId);
    }

    window.addEventListener('hashchange', handleActiveProduct);
    handleActiveProduct();
  }

  // ---------------------------------------------------------------------------
  // 11. Homepage Hero Banner Slider
  // ---------------------------------------------------------------------------
  function initHeroSlider() {
    const slider = document.getElementById('hero-slider');
    if (!slider) return;

    const slides = Array.from(slider.querySelectorAll('.hero-slide'));
    const dots = Array.from(slider.querySelectorAll('.hero-dot'));
    const prevBtn = document.getElementById('hero-prev');
    const nextBtn = document.getElementById('hero-next');

    if (!slides.length) return;

    let currentIndex = 0;
    let timer = null;
    const intervalMs = 5000;

    function goToSlide(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      currentIndex = index;

      slides.forEach(function (slide, idx) {
        if (idx === currentIndex) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });

      dots.forEach(function (dot, idx) {
        if (idx === currentIndex) {
          dot.classList.add('active');
          dot.setAttribute('aria-selected', 'true');
        } else {
          dot.classList.remove('active');
          dot.setAttribute('aria-selected', 'false');
        }
      });
    }

    function nextSlide() {
      goToSlide(currentIndex + 1);
    }

    function prevSlide() {
      goToSlide(currentIndex - 1);
    }

    function startTimer() {
      stopTimer();
      timer = setInterval(nextSlide, intervalMs);
    }

    function stopTimer() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function (e) {
        e.preventDefault();
        prevSlide();
        startTimer();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function (e) {
        e.preventDefault();
        nextSlide();
        startTimer();
      });
    }

    dots.forEach(function (dot, idx) {
      dot.addEventListener('click', function (e) {
        e.preventDefault();
        goToSlide(idx);
        startTimer();
      });
    });

    slider.addEventListener('mouseenter', stopTimer);
    slider.addEventListener('mouseleave', startTimer);

    // Mobile touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
      stopTimer();
    }, { passive: true });

    slider.addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 45) {
        nextSlide();
      } else if (touchEndX - touchStartX > 45) {
        prevSlide();
      }
      startTimer();
    }, { passive: true });

    startTimer();
  }

  // ---------------------------------------------------------------------------
  // Initialize on DOMContentLoaded
  // ---------------------------------------------------------------------------
  function initAll() {
    updateHeaderUser();
    initWishlist();
    updateCartBadges();
    initQuickAddToCart();
    initPasswordToggles();
    initCartPage();
    initWishlistPage();
    initLoginPage();
    initRegisterPage();
    initAccountPage();
    initCheckoutPage();
    initOrderSuccessPage();
    initOrdersPage();
    initShop();
    initNewsletter();
    initContactForm();
    initNav();
    initProductDetails();
    initHeroSlider();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
