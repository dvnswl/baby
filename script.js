const pages = document.querySelectorAll('.page');
let currentPage = 0;

pages.forEach((page, index) => {
  page.style.backgroundImage = `url(page${index + 1}.png)`;
  page.style.zIndex = pages.length - index;

  page.addEventListener('click', () => {
    if (currentPage < pages.length) {
      page.classList.add('flip');

      setTimeout(() => {
        page.style.zIndex = -1;
        page.classList.remove('flip');
        page.style.transform = 'translateX(100%) rotateY(0deg)';

        currentPage++;

        if (currentPage < pages.length) {
          pages[currentPage].style.zIndex = 0;
        }
      }, 800);
    }
  });

  // Populate pages with content and images
  const pageContent = [
    { title: "Once upon a time...", story: "In a grand palace, lived a prince and princess..." },
    { title: "A Loyal Companion", story: "With their loyal dog, they lived happily..." },
    { title: "A Special Announcement", story: "Soon, they had exciting news to share..." },
    { title: "It's a...", story: "Will it be a prince or princess?" },
    { title: "It's a [Boy/Girl]!", story: "A new little [prince/princess] joins the royal family!" }
  ];

  // Add title and story to the page (using innerHTML)
  page.innerHTML = `
    <h2>${pageContent[index].title}</h2>
    <p>${pageContent[index].story}</p>
  `;
});
