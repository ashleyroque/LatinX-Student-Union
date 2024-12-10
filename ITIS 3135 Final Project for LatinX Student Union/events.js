document.addEventListener('DOMContentLoaded', (event) => {
    const img = document.querySelector('.events img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
  
    img.onclick = function() {
        lightbox.style.display = 'block';
        lightboxImg.src = this.src;
    }
  
    closeBtn.onclick = function() {
        lightbox.style.display = 'none';
    }
  
    window.onclick = function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    }
  });