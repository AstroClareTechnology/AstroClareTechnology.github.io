
  const images = ['/images/Catalog_1.png','/images/Catalog_2.png','/images/Catalog_3.png','/images/Catalog_4.png','/images/Catalog_5.png','/images/Catalog_6.png','/images/Catalog_7.png']; // Add more image URLs
  let currentIndex = 0;
  const viewImage = document.getElementById('viewImage');

  function updateViewImage() {
    viewImage.src = images[currentIndex];
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateViewImage();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateViewImage();
  }

  updateViewImage(); // Show the initial image
