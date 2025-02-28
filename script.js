const pages = document.querySelectorAll('.page');
let currentPage = 0;

pages.forEach((page, index) => {
  page.style.backgroundImage = `url(page${index + 1}.png)`;
  page.style.zIndex = pages.length - index; // Set initial z-index

  page.addEventListener('click', () => {
    if (currentPage < pages.length) { // Check if there are more pages to display
      page.classList.add('flip');

      setTimeout(() => {
        page.style.zIndex = -1; // Send the flipped page to the back
        page.classList.remove('flip');
        page.style.transform = 'translateX(100%) rotateY(0deg)';

        // Increment the current page index before updating the z-index of the next page
        currentPage++;

        if (currentPage < pages.length) {
          // Bring the next page to the front
          pages[currentPage].style.zIndex = pages.length - currentPage;
        }
      }, 800);
    }
  });
});
