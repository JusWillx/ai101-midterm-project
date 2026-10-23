// VRT GARAGE — Stage 1 homepage interactions.
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-link');

function closeMenu() {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(item => item.classList.remove('active'));
    link.classList.add('active');
  });
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});

document.querySelector('#year').textContent = new Date().getFullYear();


// STAGE 2 — a small, explicit dataset (no API key or backend required).
// Each photo is hosted by Wikimedia Commons, so the preview needs internet access.
const showroomVehicles = {
  shelby: {
    name: 'SHELBY <span>GT500</span>', category: 'FEATURED VEHICLE · AMERICAN MUSCLE',
    description: 'American muscle with an unmistakable presence. The car that inspired the VRT Garage homepage.',
    detail: 'STYLE / MUSCLE COUPE',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Ford_Mustang_Shelby_GT500_black.jpg?width=1200',
    alt: 'Black Ford Mustang Shelby GT500', credit: 'Calreyn88 / Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Ford_Mustang_Shelby_GT500_black.jpg',
    license: 'CC BY-SA 4.0', label: 'Shelby GT500', number: 1
  },
  gtr: {
    name: 'NISSAN <span>GT-R R35</span>', category: 'SHOWROOM VEHICLE · JAPANESE PERFORMANCE',
    description: 'The GT-R blends sharp design and all-wheel-drive performance. A favorite platform for custom builds.',
    detail: 'STYLE / PERFORMANCE COUPE',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Nissan_GT-R_%28CBA-R35%29_front.jpg?width=1200',
    alt: 'Black Nissan GT-R R35 seen from the front', credit: 'Tokumeigakarinoaoshima / Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Nissan_GT-R_(CBA-R35)_front.jpg',
    license: 'CC0 / public domain dedication', label: 'Nissan GT-R R35', number: 2
  },
  supra: {
    name: 'TOYOTA <span>GR SUPRA</span>', category: 'SHOWROOM VEHICLE · SPORT COUPE',
    description: 'A modern Japanese sports coupe with bold lines and plenty of visual tuning inspiration.',
    detail: 'STYLE / SPORT COUPE',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/2020_Toyota_GR_Supra_2020_Edition.jpg?width=1200',
    alt: 'Toyota GR Supra 2020 Edition displayed in a showroom', credit: 'Chanokchon / Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:2020_Toyota_GR_Supra_2020_Edition.jpg',
    license: 'CC BY-SA 4.0', label: 'Toyota GR Supra', number: 3
  }
};

// STAGE 2.2 — one documented Shelby display car, photographed at the
// 2019 Cleveland Auto Show by Syntaxlord, from the front and rear.
// GT-R and Supra deliberately have just one image each: no mixed-car galleries.
function commons(file, label, credit, license) {
  return {
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + encodeURIComponent(file) + '?width=1200',
    thumb: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + encodeURIComponent(file) + '?width=320',
    page: 'https://commons.wikimedia.org/wiki/File:' + encodeURIComponent(file).replace(/%20/g, '_'),
    label, credit, license
  };
}
const vehicleGalleries = {
  shelby: [
    commons('2020 Ford Mustang Shelby GT500 Coupe, Cleveland Auto Show.jpg', 'Front view', 'Syntaxlord / Wikimedia Commons', 'CC BY-SA 4.0'),
    commons('2020 Ford Mustang Shelby GT500 Coupe, Cleveland Auto Show (Rear).jpg', 'Rear view', 'Syntaxlord / Wikimedia Commons', 'CC BY-SA 4.0')
  ],
  gtr: [
    commons('Nissan GT-R (CBA-R35) front.jpg', 'Featured view', 'Tokumeigakarinoaoshima / Wikimedia Commons', 'CC0')
  ],
  supra: [
    commons('2020 Toyota GR Supra 2020 Edition.jpg', 'Featured view', 'Chanokchon / Wikimedia Commons', 'CC BY-SA 4.0')
  ]
};
let currentVehicleId = 'shelby';
let currentPhotoIndex = 0;

const vehiclePhoto = document.querySelector('#vehicle-photo');
const fallback = document.querySelector('#image-fallback');
const vehicleStatus = document.querySelector('#vehicle-status');
let previewRequest = 0;

function renderThumbnails() {
  const strip = document.querySelector('#gallery-thumbnails');
  strip.replaceChildren();
  vehicleGalleries[currentVehicleId].forEach((photo, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'gallery-thumb' + (index === currentPhotoIndex ? ' is-active' : '');
    button.setAttribute('aria-label', `View ${photo.label} photo ${index + 1}`);
    button.setAttribute('aria-pressed', String(index === currentPhotoIndex));
    const img = document.createElement('img');
    img.src = photo.thumb;
    img.alt = '';
    img.loading = 'lazy';
    const caption = document.createElement('span');
    caption.textContent = photo.label;
    button.append(img, caption);
    button.addEventListener('click', () => showGalleryPhoto(index));
    strip.appendChild(button);
  });
}
function showGalleryPhoto(index) {
  const photos = vehicleGalleries[currentVehicleId];
  currentPhotoIndex = (index + photos.length) % photos.length;
  const photo = photos[currentPhotoIndex];
  const vehicle = showroomVehicles[currentVehicleId];
  document.querySelector('#gallery-count').textContent = `${currentPhotoIndex + 1} / ${photos.length}`;
  document.querySelector('#gallery-angle').textContent = photo.label.toUpperCase();
  document.querySelector('#vehicle-credit').textContent = photo.credit;
  document.querySelector('#vehicle-credit').href = photo.page;
  document.querySelector('#vehicle-license').textContent = photo.license;
  const request = ++previewRequest;
  fallback.hidden = true;
  const next = new Image();
  next.onload = () => {
    if (request !== previewRequest) return;
    vehiclePhoto.src = photo.src;
    vehiclePhoto.alt = `${vehicle.label} — ${photo.label}, source photograph`;
    vehiclePhoto.hidden = false;
    vehicleStatus.textContent = `Now viewing: ${vehicle.label}, photo ${currentPhotoIndex + 1} of ${photos.length} (${photo.label}).`;
  };
  next.onerror = () => {
    if (request !== previewRequest) return;
    vehiclePhoto.hidden = true;
    fallback.hidden = false;
    vehicleStatus.textContent = `${vehicle.label}, photo ${currentPhotoIndex + 1} could not load. Try a different angle.`;
  };
  next.src = photo.src;
  const hasMultiplePhotos = photos.length > 1;
  document.querySelector('#gallery-prev').hidden = !hasMultiplePhotos;
  document.querySelector('#gallery-next').hidden = !hasMultiplePhotos;
  document.querySelector('.gallery-controls').hidden = !hasMultiplePhotos;
  document.querySelector('#gallery-thumbnails').hidden = !hasMultiplePhotos;
  document.querySelector('.gallery-disclaimer').textContent = currentVehicleId === 'shelby'
    ? 'Both showroom photos document the 2020 Shelby GT500 display at the 2019 Cleveland Auto Show, photographed by Syntaxlord. The separate black Mustang homepage photo is a different car.'
    : 'This vehicle has one reference photo in the prototype. More matching views may be added later.';
  renderThumbnails();
}
function selectShowroomVehicle(id) {
  const vehicle = showroomVehicles[id];
  if (!vehicle || !vehicleGalleries[id]) return;
  currentVehicleId = id;
  currentPhotoIndex = 0;
  document.querySelector('#gallery-controls-note').textContent = id === 'shelby' ? 'SAME DISPLAY CAR · FRONT & REAR' : 'SINGLE REFERENCE PHOTO';
  document.querySelectorAll('.vehicle-option').forEach(button => {
    const selected = button.dataset.vehicle === id;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  document.querySelector('#vehicle-name').innerHTML = vehicle.name;
  document.querySelector('#vehicle-category').textContent = vehicle.category;
  document.querySelector('#vehicle-description').textContent = vehicle.description;
  document.querySelector('#vehicle-detail').textContent = vehicle.detail;
  showGalleryPhoto(0);
}

document.querySelector('#gallery-prev').addEventListener('click', () => showGalleryPhoto(currentPhotoIndex - 1)); 
document.querySelector('#gallery-next').addEventListener('click', () => showGalleryPhoto(currentPhotoIndex + 1));
document.querySelector('#gallery-previous-label').addEventListener('click', () => showGalleryPhoto(currentPhotoIndex - 1));
document.querySelector('#gallery-next-label').addEventListener('click', () => showGalleryPhoto(currentPhotoIndex + 1));
document.addEventListener('keydown', event => {
  const active = document.activeElement;
  if (active && (active.closest('.gallery-controls') || active.closest('.gallery-thumbnails'))) {
    if (event.key === 'ArrowRight') { event.preventDefault(); showGalleryPhoto(currentPhotoIndex + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); showGalleryPhoto(currentPhotoIndex - 1); }
  }
});

document.addEventListener('keydown', event => {
  const active = document.activeElement;
  if (active && (active.closest('.gallery-controls') || active.closest('.gallery-thumbnails'))) {
    if (event.key === 'ArrowRight') { event.preventDefault(); showGalleryPhoto(currentPhotoIndex + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); showGalleryPhoto(currentPhotoIndex - 1); }
  }
});
document.querySelectorAll('.vehicle-option').forEach(button => {
  button.addEventListener('click', () => selectShowroomVehicle(button.dataset.vehicle));
});
vehiclePhoto.addEventListener('error', () => {
  vehiclePhoto.hidden = true;
  fallback.hidden = false;
});

selectShowroomVehicle("shelby");
