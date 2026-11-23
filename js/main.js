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

  // Bio
  const bioContainer = document.getElementById('artistBioParagraphs');
  if (bioContainer) {
    bioContainer.textContent = artist.bio;
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
    awardsContainer.innerHTML = artist.awards.map(award => `
      <div class="edu-tag" style="background:#fdfcf9; border:1px solid rgba(179,142,74,0.3);">${award}</div>
    `).join('');
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
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(item => `
    <article class="artwork-card" data-id="${item.id}">
      <div class="artwork-thumb-wrap" onclick="openArtworkModal('${item.id}')">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="artwork-category-badge">${item.categoryName}</div>
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
        <div class="artwork-card-actions">
          <button class="btn-card-detail" onclick="openArtworkModal('${item.id}')">
            작품 상세 및 소장 문의
          </button>
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

  container.innerHTML = items.map(item => `
    <article class="product-card" data-id="${item.id}">
      <div class="product-thumb-wrap" onclick="openProductModal('${item.id}')">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="product-category-tag">${item.categoryName}</div>
      </div>
      <div class="product-info">
        <h3 class="product-title">${item.name}</h3>
        <p class="product-material">· 소재: ${item.material}</p>
        <p style="font-size:12px; color:var(--color-text-muted); margin-bottom:12px;">· 규격: ${item.dimensions}</p>
        <ul class="product-features-list">
          ${item.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <div class="product-card-footer">
          <button class="btn-inquire-product" onclick="openProductModal('${item.id}')">
            상품 상세 및 구매·제휴 문의
          </button>
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
        <div><strong>· 작가:</strong> 양태백 (토마스양, 陽太白)</div>
      </div>

      <p style="font-size:14.5px; line-height:1.8; color:var(--color-text-secondary); margin-bottom:28px;">
        ${item.description}
      </p>

      <div style="margin-top:auto;">
        <button class="btn-primary" style="width:100%; justify-content:center;" onclick="openContactModalWithSubject('작품 소장 문의: [${item.title}]')">
          이 작품 소장 및 전시 문의하기
        </button>
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
