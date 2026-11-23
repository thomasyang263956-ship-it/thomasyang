/**
 * 토마스양 (양태백) 작가 공식 홈페이지 인터랙션 스크립트
 * Thomas Yang (Yang Taebaek) Artist Official Website Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initProfile();
  initGallery();
  initProducts();
  initPress();
  initAlbum();
  initNavigation();
  initModals();
  initScrollEffects();
  initAdminCMS();
});

/* ==========================================================================
   1. NAVIGATION & DYNAMIC SUBMENU SYSTEM
   ========================================================================== */
let currentSubnavMode = null; // 'gallery' | 'products' | null
let currentGalleryCategory = 'all';
let currentProductCategory = 'all';

function initNavigation() {
  const siteHeader = document.getElementById('siteHeader');
  const navGalleryBtn = document.getElementById('navGalleryBtn');
  const navProductsBtn = document.getElementById('navProductsBtn');
  const dynamicSubNav = document.getElementById('dynamicSubNav');
  const subNavTitleText = document.getElementById('subNavTitleText');
  const subnavListItems = document.getElementById('subnavListItems');
  const navLinks = document.querySelectorAll('.nav-link');

  // 1) 갤러리 메뉴 클릭 이벤트 (아래 부분에 9개 세부항목 표시)
  navGalleryBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentSubnavMode === 'gallery' && dynamicSubNav.classList.contains('is-visible')) {
      // 이미 열려있을 때 클릭하면 갤러리로 스크롤
      scrollToSection('gallery');
    } else {
      openSubmenu('gallery');
      scrollToSection('gallery');
    }
  });

  // 2) 아트상품 메뉴 클릭 이벤트 (아래 부분에 5개 세부항목 표시)
  navProductsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentSubnavMode === 'products' && dynamicSubNav.classList.contains('is-visible')) {
      // 이미 열려있을 때 클릭하면 아트상품으로 스크롤
      scrollToSection('products');
    } else {
      openSubmenu('products');
      scrollToSection('products');
    }
  });

  // 3) 다른 메뉴(프로필, 언론 및 평론, 앨범) 클릭 시 서브메뉴 닫기
  navLinks.forEach(link => {
    if (link !== navGalleryBtn && link !== navProductsBtn) {
      link.addEventListener('click', () => {
        closeSubmenu();
      });
    }
  });

  // 모바일 메뉴 토글
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const closeMobileDrawer = document.getElementById('closeMobileDrawer');

  mobileMenuToggle.addEventListener('click', () => {
    mobileDrawer.classList.toggle('open');
    mobileMenuToggle.classList.toggle('open');
  });

  closeMobileDrawer.addEventListener('click', () => {
    closeDrawer();
  });

  // 모바일 갤러리 아코디언 토글
  const mobileGalleryAccordionBtn = document.getElementById('mobileGalleryAccordionBtn');
  const mobileGallerySubList = document.getElementById('mobileGallerySubList');
  mobileGalleryAccordionBtn.addEventListener('click', () => {
    mobileGallerySubList.classList.toggle('open');
  });

  // 모바일 아트상품 아코디언 토글
  const mobileProductsAccordionBtn = document.getElementById('mobileProductsAccordionBtn');
  const mobileProductsSubList = document.getElementById('mobileProductsSubList');
  mobileProductsAccordionBtn.addEventListener('click', () => {
    mobileProductsSubList.classList.toggle('open');
  });
}

function openSubmenu(type) {
  const dynamicSubNav = document.getElementById('dynamicSubNav');
  const subNavTitleText = document.getElementById('subNavTitleText');
  const subnavListItems = document.getElementById('subnavListItems');
  const navGalleryBtn = document.getElementById('navGalleryBtn');
  const navProductsBtn = document.getElementById('navProductsBtn');

  currentSubnavMode = type;
  dynamicSubNav.classList.add('is-visible');

  if (type === 'gallery') {
    subNavTitleText.textContent = '갤러리 장르';
    navGalleryBtn.classList.add('sub-open', 'active-sub');
    navProductsBtn.classList.remove('sub-open', 'active-sub');

    // 갤러리 서브메뉴 9개 생성
    // 사진, 영상, 회화, 운무산수, 문인화, 서예, 텍스타일, 도자기, 설치미술
    subnavListItems.innerHTML = SITE_DATA.galleryCategories.map(cat => `
      <div class="sub-nav-item">
        <button class="sub-nav-btn gallery-theme ${cat.id === currentGalleryCategory ? 'active' : ''}" 
                data-cat-id="${cat.id}"
                onclick="handleGallerySubClick('${cat.id}')">
          ${cat.name}
        </button>
      </div>
    `).join('');
  } else if (type === 'products') {
    subNavTitleText.textContent = '아트상품 카테고리';
    navProductsBtn.classList.add('sub-open', 'active-sub');
    navGalleryBtn.classList.remove('sub-open', 'active-sub');

    // 아트상품 서브메뉴 5개 생성
    // 넥타이, 스카프, 청자도자기, 양산 및 우산, 관광상품개발
    subnavListItems.innerHTML = SITE_DATA.productCategories.map(cat => `
      <div class="sub-nav-item">
        <button class="sub-nav-btn product-theme ${cat.id === currentProductCategory ? 'active' : ''}" 
                data-cat-id="${cat.id}"
                onclick="handleProductSubClick('${cat.id}')">
          ${cat.name}
        </button>
      </div>
    `).join('');
  }
}

function closeSubmenu() {
  const dynamicSubNav = document.getElementById('dynamicSubNav');
  const navGalleryBtn = document.getElementById('navGalleryBtn');
  const navProductsBtn = document.getElementById('navProductsBtn');

  currentSubnavMode = null;
  dynamicSubNav.classList.remove('is-visible');
  navGalleryBtn.classList.remove('sub-open', 'active-sub');
  navProductsBtn.classList.remove('sub-open', 'active-sub');
}

function handleGallerySubClick(catId) {
  filterGallery(catId);
  scrollToSection('gallery');
  // 서브메뉴 활성 상태 업데이트
  document.querySelectorAll('#subnavListItems .sub-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.catId === catId);
  });
}

function handleProductSubClick(catId) {
  filterProducts(catId);
  scrollToSection('products');
  // 서브메뉴 활성 상태 업데이트
  document.querySelectorAll('#subnavListItems .sub-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.catId === catId);
  });
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerHeight = document.getElementById('siteHeader').offsetHeight;
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - (headerHeight + 10);
    window.scrollTo({ top: sectionTop, behavior: 'smooth' });
  }
}

function closeDrawer() {
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  mobileDrawer.classList.remove('open');
  mobileMenuToggle.classList.remove('open');
}

// Global functions exposed to window for inline onclick handlers
window.showGallerySubmenuAndScroll = function(catId = 'all') {
  openSubmenu('gallery');
  filterGallery(catId);
  scrollToSection('gallery');
};

window.showProductsSubmenuAndScroll = function(catId = 'all') {
  openSubmenu('products');
  filterProducts(catId);
  scrollToSection('products');
};

window.filterGalleryFromMobile = function(catId) {
  filterGallery(catId);
  closeDrawer();
  scrollToSection('gallery');
};

window.filterProductsFromMobile = function(catId) {
  filterProducts(catId);
  closeDrawer();
  scrollToSection('products');
};

/* ==========================================================================
   2. PROFILE SECTION RENDER
   ========================================================================== */
function initProfile() {
  const artist = SITE_DATA.artist;

  // Sync Hero Section with updated artist data
  const heroTagline = document.querySelector('.hero-tagline');
  if (heroTagline && artist.tagline) {
    heroTagline.textContent = `"${artist.tagline}"`;
  }
  const heroName = document.querySelector('.hero-title');
  if (heroName && artist.nameKr) {
    heroName.innerHTML = `${artist.nameKr} <span style="font-weight:400; font-size:30px; color:var(--color-text-secondary);">(양태백)</span>`;
  }

  // Profile Portrait Image & Admin Edit Button Sync
  const portraitImg = document.getElementById('profilePortraitImg');
  if (portraitImg) {
    portraitImg.src = artist.photo || 'assets/images/artist_profile.svg';
  }
  const portraitEditBtn = document.getElementById('profilePortraitEditBtn');
  if (portraitEditBtn) {
    portraitEditBtn.style.display = isAdminLoggedIn() ? 'inline-flex' : 'none';
  }
  const heroEditBtn = document.getElementById('heroEditBtn');
  if (heroEditBtn) {
    heroEditBtn.style.display = isAdminLoggedIn() ? 'inline-flex' : 'none';
  }

  // Bio
  const bioContainer = document.getElementById('artistBioParagraphs');
  if (bioContainer) {
    bioContainer.innerHTML = artist.bio.replace(/\n\n/g, '<br><br>');
    if (isAdminLoggedIn()) {
      bioContainer.innerHTML += `
        <div style="margin-top:20px; display:flex; gap:10px;">
          <button class="btn-primary" style="padding:10px 18px; font-size:13.5px;" onclick="openAdminEditProfileModal()">
            📷 프로필 사진 및 작가 소개 수정하기
          </button>
        </div>
      `;
    }
  }

  // Education list
  const eduContainer = document.getElementById('artistEducationList');
  if (eduContainer) {
    eduContainer.innerHTML = artist.education.map(item => `
      <div class="edu-tag">${item}</div>
    `).join('');
  }

  // Career timeline
  const careerContainer = document.getElementById('artistCareerTimeline');
  if (careerContainer) {
    careerContainer.innerHTML = artist.career.map(item => `
      <div class="timeline-item">
        <div class="timeline-year">${item.year}</div>
        <div class="timeline-text">${item.title}</div>
      </div>
    `).join('');
  }

  // Awards list
  const awardsContainer = document.getElementById('artistAwardsList');
  if (awardsContainer) {
    awardsContainer.innerHTML = '';
    artist.awards.forEach(award => {
      const awardTag = document.createElement('div');
      awardTag.className = 'edu-tag';
      awardTag.style.background = '#fdfcf9';
      awardTag.style.border = '1px solid rgba(179,142,74,0.3)';
      awardTag.textContent = award;
      awardsContainer.appendChild(awardTag);
    });

    if (isAdminLoggedIn()) {
      const editButton = document.createElement('button');
      editButton.type = 'button';
      editButton.className = 'btn-secondary';
      editButton.style.padding = '9px 14px';
      editButton.style.fontSize = '13px';
      editButton.textContent = '✏️ 수상 및 공로 수정';
      editButton.onclick = openAdminEditAwardsModal;
      awardsContainer.appendChild(editButton);
    }
  }
}

/* ==========================================================================
   3. GALLERY SECTION RENDER & FILTERING
   서브카테고리: 사진, 영상, 회화, 운무산수, 문인화, 서예, 텍스타일, 도자기, 설치미술
   ========================================================================== */
function initGallery() {
  const filterTabsContainer = document.getElementById('galleryFilterTabs');
  if (!filterTabsContainer) return;

  // In-page filter pills
  filterTabsContainer.innerHTML = SITE_DATA.galleryCategories.map(cat => `
    <button class="filter-pill theme-celadon ${cat.id === 'all' ? 'active' : ''}" 
            data-cat="${cat.id}"
            onclick="filterGallery('${cat.id}')">
      ${cat.name} <span class="pill-count">(${cat.count})</span>
    </button>
  `).join('');

  renderGalleryGrid(SITE_DATA.galleryItems);
}

function filterGallery(catId) {
  currentGalleryCategory = catId;

  // Update in-page pill active states
  document.querySelectorAll('#galleryFilterTabs .filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === catId);
  });

  // Update top sub-navbar pill active states if currently in gallery mode
  if (currentSubnavMode === 'gallery') {
    document.querySelectorAll('#subnavListItems .sub-nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.catId === catId);
    });
  }

  // Filter items
  const filtered = (catId === 'all') 
    ? SITE_DATA.galleryItems 
    : SITE_DATA.galleryItems.filter(item => item.category === catId);

  renderGalleryGrid(filtered);
}

function renderGalleryGrid(items) {
  const container = document.getElementById('galleryGridContainer');
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--color-text-muted);">
        <p style="font-size: 16px;">선택하신 카테고리의 작품을 준비 중입니다.</p>
        ${isAdminLoggedIn() ? `<div style="margin-top:16px;"><button class="btn-primary" onclick="openAdminAddItemModal('artwork')">➕ 이 카테고리에 새 작품 등록하기</button></div>` : ''}
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(item => `
    <article class="artwork-card" data-id="${item.id}">
      <div class="artwork-thumb-wrap" onclick="openArtworkModal('${item.id}')">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="artwork-category-badge">${item.categoryName}</div>
        ${isAdminLoggedIn() ? `<button class="card-admin-edit-btn" onclick="event.stopPropagation(); openAdminEditItemModal('gallery', '${item.id}')">✏️ 수정</button>` : ''}
        <div class="artwork-zoom-hint">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg>
          작품 크게 보기
        </div>
      </div>
      <div class="artwork-info">
        <div class="artwork-meta-row">
          <span style="font-size:12px; font-weight:600; color:var(--color-accent-celadon);">${item.categoryName}</span>
          <span class="artwork-year">${item.year}</span>
        </div>
        <h3 class="artwork-title">${item.title}</h3>
        <p class="artwork-title-en">${item.titleEn}</p>
        <div class="artwork-specs">
          <div>· 재료: ${item.medium}</div>
          <div>· 규격: ${item.size}</div>
        </div>
        <p class="artwork-desc-preview">${item.description}</p>
        <div class="artwork-card-actions" style="flex-direction:column; gap:8px;">
          <button class="btn-card-detail" onclick="openArtworkModal('${item.id}')">
            작품 상세 및 소장 문의
          </button>
          ${isAdminLoggedIn() ? `
            <button class="btn-primary" style="padding:9px 14px; font-size:12.5px; width:100%; justify-content:center; background:var(--color-accent-celadon);" onclick="event.stopPropagation(); openAdminEditItemModal('gallery', '${item.id}')">
              📷 작품 사진 · 정보 수정
            </button>
          ` : ''}
        </div>
      </div>
    </article>
  `).join('');
}

/* ==========================================================================
   4. ART PRODUCTS SECTION RENDER & FILTERING
   서브카테고리: 넥타이, 스카프, 청자도자기, 양산 및 우산, 관광상품개발
   ========================================================================== */
function initProducts() {
  const filterTabsContainer = document.getElementById('productFilterTabs');
  if (!filterTabsContainer) return;

  filterTabsContainer.innerHTML = SITE_DATA.productCategories.map(cat => `
    <button class="filter-pill theme-gold ${cat.id === 'all' ? 'active' : ''}" 
            data-cat="${cat.id}"
            onclick="filterProducts('${cat.id}')">
      ${cat.name} <span class="pill-count">(${cat.count})</span>
    </button>
  `).join('');

  renderProductGrid(SITE_DATA.productItems);
}

function filterProducts(catId) {
  currentProductCategory = catId;

  // Update in-page pill active states
  document.querySelectorAll('#productFilterTabs .filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === catId);
  });

  // Update top sub-navbar pill active states if currently in products mode
  if (currentSubnavMode === 'products') {
    document.querySelectorAll('#subnavListItems .sub-nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.catId === catId);
    });
  }

  const filtered = (catId === 'all')
    ? SITE_DATA.productItems
    : SITE_DATA.productItems.filter(item => item.category === catId);

  renderProductGrid(filtered);
}

function renderProductGrid(items) {
  const container = document.getElementById('productGridContainer');
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--color-text-muted);">
        <p style="font-size: 16px;">선택하신 카테고리의 아트상품을 준비 중입니다.</p>
        ${isAdminLoggedIn() ? `<div style="margin-top:16px;"><button class="btn-primary" onclick="openAdminAddItemModal('product')">➕ 이 카테고리에 새 아트상품 등록하기</button></div>` : ''}
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(item => `
    <article class="product-card" data-id="${item.id}">
      <div class="product-thumb-wrap" onclick="openProductModal('${item.id}')">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="product-category-tag">${item.categoryName}</div>
        ${isAdminLoggedIn() ? `<button class="card-admin-edit-btn" onclick="event.stopPropagation(); openAdminEditItemModal('product', '${item.id}')">✏️ 수정</button>` : ''}
      </div>
      <div class="product-info">
        <h3 class="product-title">${item.name}</h3>
        <p class="product-material">· 소재: ${item.material}</p>
        <p style="font-size:12px; color:var(--color-text-muted); margin-bottom:12px;">· 규격: ${item.dimensions}</p>
        <ul class="product-features-list">
          ${item.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <div class="product-card-footer" style="flex-direction:column; gap:8px;">
          <button class="btn-inquire-product" onclick="openProductModal('${item.id}')">
            상품 상세 및 구매·제휴 문의
          </button>
          ${isAdminLoggedIn() ? `
            <button class="btn-primary" style="padding:9px 14px; font-size:12.5px; width:100%; justify-content:center; background:var(--color-accent-gold);" onclick="event.stopPropagation(); openAdminEditItemModal('product', '${item.id}')">
              📷 상품 사진 · 정보 수정
            </button>
          ` : ''}
        </div>
      </div>
    </article>
  `).join('');
}

/* ==========================================================================
   5. PRESS & CRITIQUES SECTION
   ========================================================================== */
function initPress() {
  const container = document.getElementById('pressGridContainer');
  if (!container) return;

  container.innerHTML = SITE_DATA.press.map(item => `
    <article class="press-card">
      <div class="press-meta-top">
        <span class="press-badge">${item.badge}</span>
        <span class="press-date">${item.date}</span>
      </div>
      <div class="press-media-name">${item.media}</div>
      <h3 class="press-headline">${item.title}</h3>
      <p class="press-summary">${item.summary}</p>
      <button class="btn-read-press" onclick="openPressModal('${item.id}')">
        전문 읽기 (Read full text) →
      </button>
    </article>
  `).join('');
}

/* ==========================================================================
   6. ALBUM SECTION
   ========================================================================== */
function initAlbum() {
  const container = document.getElementById('albumGridContainer');
  if (!container) return;

  container.innerHTML = SITE_DATA.album.map(item => `
    <article class="album-card" onclick="openAlbumModal('${item.id}')">
      <div class="album-thumb-wrap">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
      </div>
      <div class="album-card-body">
        <div class="album-meta-row">
          <span>${item.category}</span>
          <span>${item.year}</span>
        </div>
        <h3 class="album-title">${item.title}</h3>
        <p class="album-caption">${item.caption}</p>
      </div>
    </article>
  `).join('');
}

/* ==========================================================================
   7. MODAL LIGHTBOXES & DIALOGS
   ========================================================================== */
function initModals() {
  const detailModalOverlay = document.getElementById('detailModalOverlay');
  const closeDetailModal = document.getElementById('closeDetailModal');
  const pressModalOverlay = document.getElementById('pressModalOverlay');
  const closePressModal = document.getElementById('closePressModal');
  const inquiryModalOverlay = document.getElementById('inquiryModalOverlay');
  const closeInquiryModal = document.getElementById('closeInquiryModal');
  const openInquiryBtn = document.getElementById('openInquiryBtn');

  // Close handlers
  if (closeDetailModal) {
    closeDetailModal.addEventListener('click', () => {
      detailModalOverlay.classList.remove('open');
    });
  }
  if (closePressModal) {
    closePressModal.addEventListener('click', () => {
      pressModalOverlay.classList.remove('open');
    });
  }
  if (closeInquiryModal) {
    closeInquiryModal.addEventListener('click', () => {
      inquiryModalOverlay.classList.remove('open');
    });
  }
  if (openInquiryBtn) {
    openInquiryBtn.addEventListener('click', () => {
      openContactModal();
    });
  }

  // Backdrop click closes modal
  [detailModalOverlay, pressModalOverlay, inquiryModalOverlay].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('open');
        }
      });
    }
  });

  // ESC key to close any active modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      [detailModalOverlay, pressModalOverlay, inquiryModalOverlay].forEach(m => m && m.classList.remove('open'));
      closeDrawer();
    }
  });
}

// Artwork Modal
window.openArtworkModal = function(id) {
  const item = SITE_DATA.galleryItems.find(x => x.id === id);
  if (!item) return;

  const content = document.getElementById('modalDetailContent');
  content.innerHTML = `
    <div class="modal-artwork-media">
      <img src="${item.image}" alt="${item.title}">
    </div>
    <div class="modal-artwork-details">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <span class="artwork-category-badge" style="position:static;">${item.categoryName}</span>
        <span style="font-family:var(--font-display); font-size:14px; color:var(--color-accent-gold); font-weight:bold;">${item.year}</span>
      </div>
      <h2 style="font-family:var(--font-serif); font-size:24px; font-weight:700; margin-bottom:6px;">${item.title}</h2>
      <p style="font-size:13px; color:var(--color-text-muted); font-style:italic; margin-bottom:20px;">${item.titleEn}</p>
      
      <div style="background:var(--color-bg-secondary); padding:16px; border-radius:var(--radius-sm); margin-bottom:20px; font-size:13.5px; line-height:1.7;">
        <div><strong>· 재료 / 기법:</strong> ${item.medium}</div>
        <div><strong>· 작품 규격:</strong> ${item.size}</div>
        <div><strong>· 작가:</strong> 양태백 (토마스양, 梁太白)</div>
      </div>

      <p style="font-size:14.5px; line-height:1.8; color:var(--color-text-secondary); margin-bottom:28px;">
        ${item.description}
      </p>

      <div style="margin-top:auto;">
        <button class="btn-primary" style="width:100%; justify-content:center;" onclick="openContactModalWithSubject('작품 소장 문의: [${item.title}]')">
          이 작품 소장 및 전시 문의하기
        </button>
        ${isAdminLoggedIn() ? `
          <button class="btn-secondary" style="width:100%; justify-content:center; margin-top:8px; border-color:var(--color-accent-celadon); color:var(--color-accent-celadon); font-weight:bold;" onclick="document.getElementById('detailModalOverlay').classList.remove('open'); openAdminEditItemModal('gallery', '${item.id}')">
            📷 관리자: 이 작품 사진 및 정보 수정하기
          </button>
        ` : ''}
      </div>
    </div>
  `;

  document.getElementById('detailModalOverlay').classList.add('open');
};

// Product Modal
window.openProductModal = function(id) {
  const item = SITE_DATA.productItems.find(x => x.id === id);
  if (!item) return;

  const content = document.getElementById('modalDetailContent');
  content.innerHTML = `
    <div class="modal-artwork-media" style="background:#f7f6f2;">
      <img src="${item.image}" alt="${item.name}">
    </div>
    <div class="modal-artwork-details">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <span class="product-category-tag" style="position:static;">${item.categoryName}</span>
        <span style="font-size:12px; color:var(--color-accent-celadon); font-weight:bold;">ORIGINAL ART MERCHANDISE</span>
      </div>
      <h2 style="font-family:var(--font-serif); font-size:22px; font-weight:700; margin-bottom:6px;">${item.name}</h2>
      <p style="font-size:13px; color:var(--color-text-muted); font-style:italic; margin-bottom:20px;">${item.nameEn}</p>

      <div style="background:var(--color-bg-secondary); padding:16px; border-radius:var(--radius-sm); margin-bottom:20px; font-size:13.5px; line-height:1.7;">
        <div><strong>· 소재:</strong> ${item.material}</div>
        <div><strong>· 규격:</strong> ${item.dimensions}</div>
        <div><strong>· 디자인:</strong> 양태백 작가 시그니처 원화 패턴</div>
      </div>

      <div style="margin-bottom:20px;">
        <h4 style="font-size:14px; font-weight:700; margin-bottom:8px;">제품 주요 특장점</h4>
        <ul style="font-size:13.5px; color:var(--color-text-secondary); line-height:1.7; padding-left:18px;">
          ${item.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>

      <p style="font-size:14px; line-height:1.7; color:var(--color-text-secondary); margin-bottom:28px;">
        ${item.description}
      </p>

      <div style="margin-top:auto;">
        <button class="btn-inquire-product" style="width:100%; justify-content:center; padding:14px;" onclick="openContactModalWithSubject('아트상품 주문/제휴: [${item.name}]')">
          이 아트상품 구매 / 대량 주문 / 제휴 문의
        </button>
        ${isAdminLoggedIn() ? `
          <button class="btn-secondary" style="width:100%; justify-content:center; margin-top:8px; border-color:var(--color-accent-gold); color:var(--color-accent-gold); font-weight:bold; padding:10px;" onclick="document.getElementById('detailModalOverlay').classList.remove('open'); openAdminEditItemModal('product', '${item.id}')">
            📷 관리자: 이 상품 사진 및 정보 수정하기
          </button>
        ` : ''}
      </div>
    </div>
  `;

  document.getElementById('detailModalOverlay').classList.add('open');
};

// Press Modal
window.openPressModal = function(id) {
  const item = SITE_DATA.press.find(x => x.id === id);
  if (!item) return;

  const content = document.getElementById('pressModalContent');
  content.innerHTML = `
    <div style="margin-bottom:16px;">
      <span class="press-badge">${item.badge}</span>
      <span style="font-size:13px; color:var(--color-text-muted); margin-left:10px;">${item.date} · ${item.media}</span>
    </div>
    <h2 style="font-family:var(--font-serif); font-size:26px; font-weight:700; line-height:1.4; margin-bottom:24px;">
      ${item.title}
    </h2>
    <div style="font-size:15px; line-height:1.9; color:var(--color-text-secondary); white-space:pre-line; border-top:1px solid var(--border-light); padding-top:24px;">
      ${item.content}
    </div>
  `;

  document.getElementById('pressModalOverlay').classList.add('open');
};

// Album Lightbox Modal
window.openAlbumModal = function(id) {
  const item = SITE_DATA.album.find(x => x.id === id);
  if (!item) return;

  const content = document.getElementById('modalDetailContent');
  content.innerHTML = `
    <div class="modal-artwork-media" style="padding:16px;">
      <img src="${item.image}" alt="${item.title}">
    </div>
    <div class="modal-artwork-details">
      <div style="margin-bottom:12px;">
        <span class="artwork-category-badge" style="position:static;">${item.category}</span>
        <span style="font-size:13px; color:var(--color-accent-gold); margin-left:10px; font-weight:bold;">${item.year}</span>
      </div>
      <h2 style="font-family:var(--font-serif); font-size:22px; font-weight:700; margin-bottom:16px;">${item.title}</h2>
      <p style="font-size:15px; line-height:1.8; color:var(--color-text-secondary); margin-bottom:24px;">
        ${item.caption}
      </p>
    </div>
  `;

  document.getElementById('detailModalOverlay').classList.add('open');
};

// Contact Modal
window.openContactModal = function() {
  document.getElementById('detailModalOverlay').classList.remove('open');
  document.getElementById('pressModalOverlay').classList.remove('open');
  document.getElementById('inquiryModalOverlay').classList.add('open');
};

window.openContactModalWithSubject = function(subjectText) {
  openContactModal();
  const msgField = document.getElementById('inqMessage');
  if (msgField) {
    msgField.value = `[문의 대상: ${subjectText}]\n안녕하세요, 해당 건에 대해 문의드립니다:\n`;
    msgField.focus();
  }
};

window.handleInquirySubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('inqName').value;
  const contact = document.getElementById('inqContact').value;
  const type = document.getElementById('inqType').value;
  const message = document.getElementById('inqMessage').value;

  alert(`감사합니다, ${name}님!\n\n문의하신 내용('${type}')이 정상적으로 접수되었습니다.\n담당자가 빠른 시일 내에 연락처(${contact})로 회신드리겠습니다.`);
  
  document.getElementById('inquiryForm').reset();
  document.getElementById('inquiryModalOverlay').classList.remove('open');
};

/* ==========================================================================
   8. SCROLL & ACTIVE STATE SYNC
   ========================================================================== */
function initScrollEffects() {
  const header = document.getElementById('siteHeader');
  const btnBackTop = document.getElementById('btnBackTop');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav .nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Header shadow
    if (scrollY > 40) {
      header.classList.add('scrolled');
      btnBackTop.classList.add('visible');
    } else {
      header.classList.remove('scrolled');
      btnBackTop.classList.remove('visible');
    }

    // Active Section Link Sync
    let currentSec = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentSec = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.dataset.section === currentSec) {
        link.classList.add('active');
      }
    });
  });

  if (btnBackTop) {
    btnBackTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Update footer year dynamically
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   9. ADMIN CMS & DIRECT INLINE CONTENT MANAGEMENT SYSTEM
   ========================================================================== */
const ADMIN_SESSION_KEY = 'thomasyang_admin_session';

function isAdminLoggedIn() {
  return sessionStorage.getItem(ADMIN_SESSION_KEY) === 'true';
}

function setAdminSession(status) {
  if (status) {
    sessionStorage.setItem(ADMIN_SESSION_KEY, 'true');
  } else {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
  }
}

function initAdminCMS() {
  if (isAdminLoggedIn()) {
    activateAdminUI();
  }
}

window.toggleAdminLoginModal = function() {
  if (isAdminLoggedIn()) {
    if (confirm('현재 관리자 모드로 접속 중입니다.\n로그아웃 하시겠습니까?')) {
      logoutAdmin();
    }
  } else {
    const modal = document.getElementById('adminLoginModalOverlay');
    const err = document.getElementById('adminLoginError');
    const input = document.getElementById('adminPasswordInput');
    if (err) err.style.display = 'none';
    if (input) input.value = '';
    if (modal) modal.classList.add('open');
  }
};

window.closeAdminModal = function(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
};

window.handleAdminLogin = function(e) {
  e.preventDefault();
  const input = document.getElementById('adminPasswordInput');
  const err = document.getElementById('adminLoginError');
  const password = input.value.trim();

  if (password === getAdminPassword()) {
    setAdminSession(true);
    closeAdminModal('adminLoginModalOverlay');
    activateAdminUI();
    showAdminToast('👑 관리자 모드로 로그인되었습니다. 각 항목의 [수정] 버튼으로 직접 편집하세요.');
  } else {
    if (err) {
      err.textContent = '비밀번호가 일치하지 않습니다. 다시 확인해 주세요.';
      err.style.display = 'block';
    }
  }
};

function activateAdminUI() {
  const floatingBar = document.getElementById('adminFloatingBar');
  const headerBtn = document.getElementById('adminHeaderBtn');

  if (floatingBar) floatingBar.style.display = 'block';
  if (headerBtn) {
    headerBtn.classList.add('logged-in');
    headerBtn.innerHTML = '👑 관리자 ON';
  }

  // Re-render components with edit buttons
  initProfile();
  renderGalleryGrid(currentGalleryCategory === 'all' ? SITE_DATA.galleryItems : SITE_DATA.galleryItems.filter(x => x.category === currentGalleryCategory));
  renderProductGrid(currentProductCategory === 'all' ? SITE_DATA.productItems : SITE_DATA.productItems.filter(x => x.category === currentProductCategory));
}

window.logoutAdmin = function() {
  setAdminSession(false);
  const floatingBar = document.getElementById('adminFloatingBar');
  const headerBtn = document.getElementById('adminHeaderBtn');

  if (floatingBar) floatingBar.style.display = 'none';
  if (headerBtn) {
    headerBtn.classList.remove('logged-in');
    headerBtn.innerHTML = '🔒 관리자';
  }

  initProfile();
  renderGalleryGrid(currentGalleryCategory === 'all' ? SITE_DATA.galleryItems : SITE_DATA.galleryItems.filter(x => x.category === currentGalleryCategory));
  renderProductGrid(currentProductCategory === 'all' ? SITE_DATA.productItems : SITE_DATA.productItems.filter(x => x.category === currentProductCategory));
  showAdminToast('관리자 모드에서 로그아웃되었습니다.');
};

// Image file selection & auto compression (Canvas)
window.handleImageFileSelect = function(event, previewId, inputId) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const rawData = e.target.result;

    const img = new Image();
    img.onload = function() {
      const maxDim = 1600;
      let width = img.width;
      let height = img.height;

      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.85);

      const previewEl = document.getElementById(previewId);
      const inputEl = document.getElementById(inputId);

      if (previewEl) previewEl.src = compressedDataUrl;
      if (inputEl) inputEl.value = compressedDataUrl;
      showAdminToast('사진이 로드되었습니다.');
    };
    img.src = rawData;
  };
  reader.readAsDataURL(file);
};

// Open Edit Modal for an Artwork or Product
window.openAdminEditItemModal = function(type, id) {
  const modal = document.getElementById('adminEditItemModalOverlay');
  const typeInput = document.getElementById('editItemType');
  const idInput = document.getElementById('editItemId');
  const typeBadge = document.getElementById('editModalTypeBadge');
  const modalTitle = document.getElementById('editModalTitle');
  const categorySelect = document.getElementById('editCategorySelect');
  const previewImg = document.getElementById('editImagePreview');
  const urlInput = document.getElementById('editImageUrlInput');

  typeInput.value = type;
  idInput.value = id;

  let item = null;
  if (type === 'gallery') {
    item = SITE_DATA.galleryItems.find(x => x.id === id);
    typeBadge.textContent = '갤러리 작품 수정';
    modalTitle.textContent = `작품 편집: [${item ? item.title : ''}]`;

    categorySelect.innerHTML = SITE_DATA.galleryCategories
      .filter(c => c.id !== 'all')
      .map(c => `<option value="${c.id}" ${item && item.category === c.id ? 'selected' : ''}>${c.name}</option>`)
      .join('');
  } else {
    item = SITE_DATA.productItems.find(x => x.id === id);
    typeBadge.textContent = '아트상품 수정';
    modalTitle.textContent = `아트상품 편집: [${item ? item.name : ''}]`;

    categorySelect.innerHTML = SITE_DATA.productCategories
      .filter(c => c.id !== 'all')
      .map(c => `<option value="${c.id}" ${item && item.category === c.id ? 'selected' : ''}>${c.name}</option>`)
      .join('');
  }

  if (!item) return;

  previewImg.src = item.image;
  urlInput.value = item.image;
  document.getElementById('editItemTitle').value = item.title || item.name || '';
  document.getElementById('editItemTitleEn').value = item.titleEn || item.nameEn || '';
  document.getElementById('editItemYear').value = item.year || item.dimensions || '';
  document.getElementById('editItemMedium').value = item.medium || item.material || '';
  document.getElementById('editItemSize').value = item.size || item.dimensions || '';
  document.getElementById('editItemDesc').value = item.description || (item.features ? item.features.join('\n') : '');

  urlInput.oninput = function() {
    if (urlInput.value) previewImg.src = urlInput.value;
  };

  modal.classList.add('open');
};

window.handleAdminSaveItem = function(e) {
  e.preventDefault();
  const type = document.getElementById('editItemType').value;
  const id = document.getElementById('editItemId').value;
  const category = document.getElementById('editCategorySelect').value;
  const title = document.getElementById('editItemTitle').value.trim();
  const titleEn = document.getElementById('editItemTitleEn').value.trim();
  const year = document.getElementById('editItemYear').value.trim();
  const medium = document.getElementById('editItemMedium').value.trim();
  const size = document.getElementById('editItemSize').value.trim();
  const desc = document.getElementById('editItemDesc').value.trim();
  const image = document.getElementById('editImageUrlInput').value.trim() || document.getElementById('editImagePreview').src;

  if (type === 'gallery') {
    const item = SITE_DATA.galleryItems.find(x => x.id === id);
    if (item) {
      item.category = category;
      const catObj = SITE_DATA.galleryCategories.find(c => c.id === category);
      item.categoryName = catObj ? catObj.name : category;
      item.title = title;
      item.titleEn = titleEn;
      item.year = year;
      item.medium = medium;
      item.size = size;
      item.description = desc;
      if (image) item.image = image;
    }
    saveSiteData(SITE_DATA);
    filterGallery(currentGalleryCategory);
  } else {
    const item = SITE_DATA.productItems.find(x => x.id === id);
    if (item) {
      item.category = category;
      const catObj = SITE_DATA.productCategories.find(c => c.id === category);
      item.categoryName = catObj ? catObj.name : category;
      item.name = title;
      item.nameEn = titleEn;
      item.material = medium;
      item.dimensions = size;
      item.description = desc;
      if (image) item.image = image;
    }
    saveSiteData(SITE_DATA);
    filterProducts(currentProductCategory);
  }

  closeAdminModal('adminEditItemModalOverlay');
  showAdminToast('수정 내용이 성공적으로 저장되었습니다!');
};

window.handleAdminDeleteItem = function() {
  const type = document.getElementById('editItemType').value;
  const id = document.getElementById('editItemId').value;
  const title = document.getElementById('editItemTitle').value;

  if (!confirm(`정말 [${title}] 항목을 삭제하시겠습니까?`)) {
    return;
  }

  if (type === 'gallery') {
    SITE_DATA.galleryItems = SITE_DATA.galleryItems.filter(x => x.id !== id);
    saveSiteData(SITE_DATA);
    filterGallery(currentGalleryCategory);
  } else {
    SITE_DATA.productItems = SITE_DATA.productItems.filter(x => x.id !== id);
    saveSiteData(SITE_DATA);
    filterProducts(currentProductCategory);
  }

  closeAdminModal('adminEditItemModalOverlay');
  showAdminToast('항목이 정상적으로 삭제되었습니다.');
};

// Add New Item
window.openAdminAddItemModal = function(defaultType = 'artwork') {
  const modal = document.getElementById('adminAddItemModalOverlay');
  const radios = document.getElementsByName('addItemTypeRadio');
  for (let r of radios) {
    r.checked = (r.value === defaultType);
  }

  updateAddCategoryOptions();
  document.getElementById('adminAddItemForm').reset();
  document.getElementById('addImagePreview').src = 'assets/images/gallery_unmu_1.svg';
  document.getElementById('addImageUrlInput').value = '';

  const urlInput = document.getElementById('addImageUrlInput');
  const previewImg = document.getElementById('addImagePreview');
  urlInput.oninput = function() {
    if (urlInput.value) previewImg.src = urlInput.value;
  };

  modal.classList.add('open');
};

window.updateAddCategoryOptions = function() {
  const radios = document.getElementsByName('addItemTypeRadio');
  let selectedType = 'artwork';
  for (let r of radios) {
    if (r.checked) selectedType = r.value;
  }

  const categorySelect = document.getElementById('addCategorySelect');
  if (selectedType === 'artwork') {
    categorySelect.innerHTML = SITE_DATA.galleryCategories
      .filter(c => c.id !== 'all')
      .map(c => `<option value="${c.id}">${c.name}</option>`)
      .join('');
  } else {
    categorySelect.innerHTML = SITE_DATA.productCategories
      .filter(c => c.id !== 'all')
      .map(c => `<option value="${c.id}">${c.name}</option>`)
      .join('');
  }
};

window.handleAdminAddNewItem = function(e) {
  e.preventDefault();
  const radios = document.getElementsByName('addItemTypeRadio');
  let selectedType = 'artwork';
  for (let r of radios) {
    if (r.checked) selectedType = r.value;
  }

  const category = document.getElementById('addCategorySelect').value;
  const title = document.getElementById('addItemTitle').value.trim();
  const titleEn = document.getElementById('addItemTitleEn').value.trim();
  const year = document.getElementById('addItemYear').value.trim();
  const medium = document.getElementById('addItemMedium').value.trim();
  const size = document.getElementById('addItemSize').value.trim();
  const desc = document.getElementById('addItemDesc').value.trim();
  const image = document.getElementById('addImageUrlInput').value.trim() || document.getElementById('addImagePreview').src;

  const newId = (selectedType === 'artwork' ? 'art-' : 'prod-') + Date.now();

  if (selectedType === 'artwork') {
    const catObj = SITE_DATA.galleryCategories.find(c => c.id === category);
    const newItem = {
      id: newId,
      category: category,
      categoryName: catObj ? catObj.name : category,
      title: title,
      titleEn: titleEn,
      year: year,
      medium: medium,
      size: size,
      image: image,
      description: desc
    };
    SITE_DATA.galleryItems.unshift(newItem);
    saveSiteData(SITE_DATA);
    filterGallery(category);
    scrollToSection('gallery');
  } else {
    const catObj = SITE_DATA.productCategories.find(c => c.id === category);
    const newItem = {
      id: newId,
      category: category,
      categoryName: catObj ? catObj.name : category,
      name: title,
      nameEn: titleEn,
      material: medium,
      dimensions: size,
      image: image,
      features: desc ? desc.split('\n').filter(Boolean) : ['토마스양 작가 오리지널 디자인'],
      description: desc
    };
    SITE_DATA.productItems.unshift(newItem);
    saveSiteData(SITE_DATA);
    filterProducts(category);
    scrollToSection('products');
  }

  closeAdminModal('adminAddItemModalOverlay');
  showAdminToast(`새로운 ${selectedType === 'artwork' ? '작품이' : '아트상품이'} 등록되었습니다!`);
};

// Edit Profile
window.openAdminEditAwardsModal = function() {
  const modal = document.getElementById('adminEditAwardsModalOverlay');
  const input = document.getElementById('adminAwardsListInput');
  if (!modal || !input) return;

  input.value = (SITE_DATA.artist.awards || []).join('\n');
  modal.classList.add('open');
  input.focus();
};

window.handleAdminSaveAwards = function(e) {
  e.preventDefault();
  const input = document.getElementById('adminAwardsListInput');
  if (!input) return;

  SITE_DATA.artist.awards = input.value
    .split(/\r?\n/)
    .map(award => award.trim())
    .filter(Boolean);

  saveSiteData(SITE_DATA);
  initProfile();
  closeAdminModal('adminEditAwardsModalOverlay');
  showAdminToast('◆ 주요 수상 및 공로가 성공적으로 업데이트되었습니다.');
};

window.openAdminEditProfileModal = function() {
  const modal = document.getElementById('adminEditProfileModalOverlay');
  const artist = SITE_DATA.artist;

  document.getElementById('profileNameKr').value = artist.nameKr || '';
  document.getElementById('profileNameEn').value = artist.nameEn || '';
  document.getElementById('profileTitles').value = artist.titles ? artist.titles.join(', ') : '';
  document.getElementById('profileTagline').value = artist.tagline || '';
  document.getElementById('profileBio').value = artist.bio || '';
  document.getElementById('profileAwards').value = artist.awards ? artist.awards.join('\n') : '';

  const photo = artist.photo || 'assets/images/artist_profile.svg';
  const previewImg = document.getElementById('editProfileImagePreview');
  const urlInput = document.getElementById('editProfileImageUrlInput');

  if (previewImg) previewImg.src = photo;
  if (urlInput) {
    urlInput.value = photo;
    urlInput.oninput = function() {
      if (urlInput.value && previewImg) previewImg.src = urlInput.value;
    };
  }

  modal.classList.add('open');
};

window.handleAdminSaveProfile = function(e) {
  e.preventDefault();
  const artist = SITE_DATA.artist;

  artist.nameKr = document.getElementById('profileNameKr').value.trim();
  artist.nameEn = document.getElementById('profileNameEn').value.trim();
  artist.titles = document.getElementById('profileTitles').value.split(',').map(s => s.trim()).filter(Boolean);
  artist.tagline = document.getElementById('profileTagline').value.trim();
  artist.bio = document.getElementById('profileBio').value.trim();
  const awardsTextarea = document.getElementById('profileAwards');
  if (awardsTextarea) {
    artist.awards = awardsTextarea.value.split('\n').map(s => s.trim()).filter(Boolean);
  }

  const urlInput = document.getElementById('editProfileImageUrlInput');
  const previewImg = document.getElementById('editProfileImagePreview');
  const newPhoto = (urlInput && urlInput.value.trim()) || (previewImg && previewImg.src);
  if (newPhoto) {
    artist.photo = newPhoto;
  }

  saveSiteData(SITE_DATA);
  initProfile();
  closeAdminModal('adminEditProfileModalOverlay');
  showAdminToast('작가 프로필 사진, 정보 및 수상 내역이 성공적으로 업데이트되었습니다.');
};

// Change Password
window.openChangePasswordModal = function() {
  const modal = document.getElementById('adminChangePasswordModalOverlay');
  modal.classList.add('open');
};

window.handleAdminChangePassword = function(e) {
  e.preventDefault();
  const currentPw = document.getElementById('currentAdminPw').value;
  const newPw = document.getElementById('newAdminPw').value;
  const confirmPw = document.getElementById('confirmAdminPw').value;

  if (currentPw !== getAdminPassword()) {
    alert('현재 비밀번호가 올바르지 않습니다.');
    return;
  }
  if (newPw !== confirmPw) {
    alert('새 비밀번호와 확인 비밀번호가 일치하지 않습니다.');
    return;
  }

  setAdminPassword(newPw);
  closeAdminModal('adminChangePasswordModalOverlay');
  showAdminToast('비밀번호가 성공적으로 변경되었습니다.');
};

// Reset Data to Default
window.confirmResetData = function() {
  if (confirm('주의: 정말 초기 원본 데이터로 복원하시겠습니까?\n직접 수정하거나 추가하신 모든 내용이 초기화됩니다.')) {
    resetSiteData();
    location.reload();
  }
};

// Toast notification
function showAdminToast(msg) {
  const toast = document.getElementById('adminToast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

