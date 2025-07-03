document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = document.querySelectorAll('.gallery img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');
  const filterBtns = document.querySelectorAll('.filters button');

  let currentIndex = 0;
  let images = Array.from(galleryImages);

  function showLightbox(index) {
    lightbox.classList.add('show');
    lightboxImg.src = images[index].src;
    currentIndex = index;
  }

  function hideLightbox() {
    lightbox.classList.remove('show');
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
  }

  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => showLightbox(index));
  });

  closeBtn.addEventListener('click', hideLightbox);
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  // Filtering functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      galleryImages.forEach(img => {
        const imgCategory = img.getAttribute('data-category');
        if (category === 'all' || imgCategory === category) {
          img.style.display = 'block';
        } else {
          img.style.display = 'none';
        }
      });

      images = Array.from(document.querySelectorAll('.gallery img'))
        .filter(img => img.style.display !== 'none');
    });
  });
});
