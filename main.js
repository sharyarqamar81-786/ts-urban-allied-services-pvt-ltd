// ====== DATA (edit services here) ======
const AREAS = [
  { id: 'facilities', name: 'Facilities & Construction' },
  { id: 'logistics',  name: 'Logistics & Cargo' },
  { id: 'trade',      name: 'Trade & Commerce' },
  { id: 'people',     name: 'People & Employment' },
  { id: 'travel',     name: 'Travel & Consultancy' },
  { id: 'digital',    name: 'Digital & Financial' }
];

const SERVICES = [
  {
    area: 'facilities', title: 'Janitorial & Cleaning', photo: 'images/janitorial.jpg', icon: 'M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z',
    short: 'Clean, safe and healthy environments for offices, commercial buildings and facilities.',
    desc: 'Professional and reliable cleaning solutions that create clean, hygienic and well-maintained environments for every client. Clean spaces, safe places, better places.',
    list: ['Office cleaning', 'Washroom sanitation', 'Dusting & vacuuming', 'Waste management', 'Glass & general cleaning']
  },
  {
    area: 'facilities', title: 'Security Services', photo: 'images/security.jpg', icon: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M8.5 12l2.5 2.5 4.5-5',
    short: 'Trained security personnel to protect your premises, people and assets.',
    desc: 'Trained and professional security staff for offices, commercial buildings and other facilities, delivered with trust and professionalism.',
    list: ['Trained security guards', 'Premises & access control', 'Professional, uniformed staff', 'Flexible deployment to your needs']
  },
  {
    area: 'facilities', title: 'Construction Services', photo: 'images/construction.jpg', icon: 'M4 21V8l8-5 8 5v13 M9 21v-7h6v7 M8 11h2 M14 11h2 M2 21h20',
    short: 'Residential, commercial and industrial projects built with quality and safety.',
    desc: 'Reliable and professional construction services for residential, commercial and industrial projects with quality, safety and long-lasting results. Build better, plan smart, deliver on time.',
    list: ['Building construction', 'Infrastructure work — roads, bridges & public infrastructure', 'Renovation & remodeling', 'Project management', 'Structural work', 'Civil engineering']
  },
  {
    area: 'logistics', title: 'Freight Forwarding', photo: 'images/freight.jpg', icon: 'M3 17l1.5 3h15L21 17z M5 17v-5h14v5 M9 12V8h6v4 M12 8V4',
    short: 'Efficient, cost-effective freight solutions by sea and by air.',
    desc: 'We handle your cargo with care and deliver it safely to its destination, anywhere in the world. Global reach, reliable service, on-time delivery.',
    list: ['Sea freight (FCL & LCL) to all major ports', 'Air freight for urgent cargo', 'Door-to-door delivery', 'Customs clearance', 'Cargo insurance', 'Warehousing & distribution']
  },
  {
    area: 'logistics', title: 'International Deliveries', photo: 'images/international.jpg', icon: 'M12 3a9 9 0 100 18 9 9 0 000-18z M3 12h18 M12 3c3.500 3 3.500 15 0 18 M12 3c-3.500 3-3.500 15 0 18',
    short: 'Fast, reliable and affordable delivery across borders.',
    desc: 'We deliver more than just parcels — we deliver trust, care and commitment across borders for your business and personal needs.',
    list: ['Worldwide parcel delivery', 'Express delivery', 'Sea freight services', 'Customs clearance', 'Secure packaging', 'Track & trace', '24/7 customer support']
  },
  {
    area: 'trade', title: 'TS Trading', photo: 'images/trading.jpg', icon: 'M7 7h12l-3-3 M17 17H5l3 3',
    short: 'Import, export and general trading — building trust, delivering value.',
    desc: 'A dynamic trading arm engaged in import, export and supply of high-quality products globally, built on long-term partnerships, trust, quality and reliability.',
    list: ['Import & export', 'General trading', 'Supply chain', 'Electronics, FMCG, textiles & apparel', 'Industrial goods, agricultural products, building materials']
  },
  {
    area: 'trade', title: 'General Order Supply', photo: 'images/general-supply.jpg', icon: 'M3 8l9-5 9 5v9l-9 5-9-5z M3 8l9 5 9-5 M12 13v9',
    short: 'One source for all your office, industrial and daily supply needs.',
    desc: 'Your trusted partner for all kinds of general supplies. We provide a wide range of quality products to meet your business, office, industrial and daily use needs.',
    list: ['Office supplies', 'Cleaning & sanitation', 'Industrial supplies', 'Electrical items', 'Pantry & kitchen supplies', 'Packaging, tapes, batteries & more']
  },
  {
    area: 'people', title: 'Manpower Supply', photo: 'images/manpower.jpg', icon: 'M9 5a3 3 0 100 6 3 3 0 000-6z M17 7a2.500 2.500 0 100 5 2.500 2.500 0 000-5z M3 20c0-3.500 2.700-6 6-6s6 2.500 6 6 M15.500 14.500c3 0 5.500 1.500 5.500 5',
    short: 'Right people, right skills, right time — for every industry.',
    desc: 'Reliable manpower solutions to meet your business needs. We provide skilled, semi-skilled and unskilled staff for all types of industries with professionalism and trust.',
    list: ['Skilled manpower', 'Semi-skilled manpower', 'Unskilled manpower', 'Temporary staffing', 'Contract & outsourcing', 'Warehouse, cleaning, security, construction, factory & office support staff']
  },
  {
    area: 'people', title: 'Employment Services', photo: 'images/employment.jpg', icon: 'M3 8h18v12H3z M9 8V5h6v3 M3 13h18',
    short: 'Connecting talent with opportunities — building careers, building futures.',
    desc: 'End-to-end employment solutions that help businesses grow and individuals build a better career.',
    list: ['Job placement', 'Recruitment solutions', 'Career counseling', 'Skill development', 'Manpower consulting', 'Resume support']
  },
  {
    area: 'travel', title: 'Travel & Tourism', photo: 'images/travel.jpg', icon: 'M22 3L2 11l7 3 3 7z M9 14L22 3',
    short: 'Complete travel solutions under one roof — explore the world with us.',
    desc: 'We make your travel easy, comfortable and unforgettable. From dream vacations to business trips, we provide complete travel solutions.',
    list: ['Flight bookings', 'Hotel reservations', 'Visa assistance', 'Tour packages', 'Holiday planning', 'Transport services', 'Travel insurance']
  },
  {
    area: 'travel', title: 'Visa Consultancy', photo: 'images/visa.jpg', icon: 'M6 3h12v18H6z M12 7a3 3 0 100 6 3 3 0 000-6z M9 17h6',
    short: 'Visa and immigration guidance to travel, study, work and settle abroad.',
    desc: 'Your trusted partner for visa and immigration solutions. We help you travel, study, work and settle abroad with confidence.',
    list: ['Tourist visa', 'Student visa', 'Work visa', 'Family visa', 'Business visa', 'Immigration services', 'Visa file preparation']
  },
  {
    area: 'travel', title: 'Event Management', photo: 'images/events.jpg', icon: 'M4 6h16v15H4z M4 10h16 M8 3v4 M16 3v4 M12 13l1 2 2 .3-1.600 1.500.4 2.200-1.800-1-1.800 1 .4-2.200L9 15.300l2-.3z',
    short: 'From concept to celebration — events that inspire and leave lasting impressions.',
    desc: 'We create extraordinary events that inspire, engage and leave lasting impressions. Plan, manage, make it memorable.',
    list: ['Corporate events', 'Weddings & receptions', 'Private parties', 'Concerts & shows', 'Exhibitions & trade shows', 'Event planning & coordination', 'Theme design & decor', 'Catering & hospitality']
  },
  {
    area: 'digital', title: 'Online Trading', photo: 'images/online-trading.jpg', icon: 'M3 3v18h18 M7 15l4-4 3 3 5-6 M15 8h4v4',
    short: 'Trade smarter, manage risk and grow with confidence.',
    desc: 'Our online trading services help you trade smarter, manage risks and grow your investments with confidence. Smart trading, better decisions, financial freedom.',
    list: ['Market analysis', 'Strategy planning', 'Risk management', 'Trade execution', 'Learning & support']
  },
  {
    area: 'digital', title: 'Freelancing Services', photo: 'images/freelancing.jpg', icon: 'M4 5h16v11H4z M2 20h20',
    short: 'Flexible, professional remote services delivered with trust.',
    desc: 'Professional freelancing and remote work services delivered with trust and professionalism, backed by the TS Urban standard.',
    list: ['Remote professional services', 'Flexible, project-based engagement', 'Dedicated client support']
  }
];

// ====== RENDER ======
const $ = (s, r = document) => r.querySelector(s);
const areaName = id => AREAS.find(a => a.id === id).name;
const svg = (p, c='') => `<svg class="ico ${c}" viewBox="0 0 24 24" aria-hidden="true"><path d="${p}"/></svg>`;
const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// Filters
const filters = $('#filters');
filters.innerHTML = [{ id: 'all', name: 'All Services (14)' }, ...AREAS]
  .map((a, i) => `<button type="button" data-f="${a.id}" class="${i === 0 ? 'on' : ''}">${a.name}</button>`).join('');

// Cards
const cards = $('#cards');
cards.innerHTML = SERVICES.map((s, i) => `
  <button type="button" class="card reveal" data-area="${s.area}" data-i="${i}">
    <div class="card__img art art--${s.area}">${svg(s.icon)}<img class="art__photo" src="${s.photo}" alt="${esc(s.title)}" onerror="this.remove()"></div>
    <div class="card__body">
      <span class="mono card__area">${areaName(s.area)}</span>
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.short)}</p>
      <span class="card__more">View details →</span>
    </div>
  </button>`).join('');

filters.addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  filters.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
  const f = b.dataset.f;
  cards.querySelectorAll('.card').forEach(c => {
    c.classList.toggle('hide', f !== 'all' && c.dataset.area !== f);
    c.classList.add('in');
  });
});

// Footer + form select
$('#footServices').innerHTML = SERVICES.slice(0, 8).map(s => `<li><a href="#services">${esc(s.title)}</a></li>`).join('');
$('#serviceSelect').innerHTML = '<option value="">Select a service…</option>' +
  SERVICES.map(s => `<option>${esc(s.title)}</option>`).join('') + '<option>Other</option>';

// Modal
const modal = $('#modal');
cards.addEventListener('click', e => {
  const c = e.target.closest('.card'); if (!c) return;
  const s = SERVICES[+c.dataset.i];
  $('#mArt').className = 'modal__art art art--' + s.area; $('#mArt').innerHTML = svg(s.icon) + `<img class="art__photo" src="${s.photo}" alt="" onerror="this.remove()">`;
  $('#mArea').textContent = areaName(s.area);
  $('#mTitle').textContent = s.title;
  $('#mDesc').textContent = s.desc;
  $('#mList').innerHTML = s.list.map(x => `<li>${esc(x)}</li>`).join('');
  $('#mCta').dataset.service = s.title;
  modal.showModal();
});
$('#modalClose').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });
$('#mCta').addEventListener('click', e => {
  $('#serviceSelect').value = e.currentTarget.dataset.service;
  modal.close();
});

// Mobile menu
const burger = $('#burger'), nav = $('#nav');
burger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
nav.addEventListener('click', e => { if (e.target.tagName === 'A') { nav.classList.remove('open'); burger.setAttribute('aria-expanded', false); } });

// Header shadow + active link
const header = $('#header');
addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 10), { passive: true });
const links = [...nav.querySelectorAll('a:not(.btn)')];
const spy = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
['home', 'about', 'services', 'leadership', 'group', 'contact'].forEach(id => { const el = document.getElementById(id); if (el) spy.observe(el); });

// Reveal on scroll
const rv = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add('in'); rv.unobserve(en.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => rv.observe(el));

// Quote form -> opens email app
$('#quoteForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target, d = Object.fromEntries(new FormData(f));
  let ok = true;
  ['name', 'email', 'message'].forEach(k => {
    const bad = !d[k].trim() || (k === 'email' && !/^\S+@\S+\.\S+$/.test(d[k]));
    f.elements[k].classList.toggle('invalid', bad); if (bad) ok = false;
  });
  if (!ok) { $('#formNote').textContent = 'Please fill in your name, a valid email and a message.'; return; }
  const body = `Name: ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone || '-'}\nService: ${d.service || '-'}\n\n${d.message}`;
  location.href = `mailto:info@tsurbanalliedservices.com?subject=${encodeURIComponent('Quote request — ' + (d.service || 'General'))}&body=${encodeURIComponent(body)}`;
  $('#formNote').textContent = 'Opening your email app… if nothing opens, write to info@tsurbanalliedservices.com.';
});

$('#year').textContent = new Date().getFullYear();
