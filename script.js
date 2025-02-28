const pages = document.querySelectorAll('.page');
let currentPage = 0;
let clickEnabled = true;

pages.forEach((page, index) => {
  const timerElement = document.createElement('div');
  timerElement.style.color = 'black';
  page.appendChild(timerElement);

  page.addEventListener('click', () => {
    if (index === currentPage && currentPage < pages.length - 1 && clickEnabled) {
      clickEnabled = false;

      pages[currentPage].style.transform = 'translateX(-100%) rotateY(-15deg)'; // Add rotateY for curl
      currentPage++;
      pages[currentPage].style.transform = 'translateX(0)';

      let count = 3;
      timerElement.textContent = count;

      const timerInterval = setInterval(() => {
        count--;
        timerElement.textContent = count;

        if (count === 0) {
          clearInterval(timerInterval);
          clickEnabled = true;
          timerElement.textContent = '';
        }
      }, 1000);
    }
  });

  // Populate pages with content and images
  const imagePaths = [
    "page1.png", "page2.png", "page3.png", "page4.png", "page5.png"
  ];

  const pageContent = [
    { title: "Once upon a time...", story: "In a grand palace, lived a prince and princess..." },
    { title: "A Loyal Companion", story: "With their loyal dog, they lived happily..." },
    { title: "A Special Announcement", story: "Soon, they had exciting news to share..." },
    { title: "It's a...", story: "Will it be a prince or princess?" },
    { title: "It's a [Boy/Girl]!", story: "A new little [prince/princess] joins the royal family!" }
  ];

  page.style.backgroundImage = `url(${imagePaths[index]})`;

  // Add title and story to the page
  const titleElement = document.createElement('h2');
  titleElement.textContent = pageContent[index].title;
  page.insertBefore(titleElement, page.firstChild); // Insert title at the beginning

  const storyElement = document.createElement('p');
  storyElement.textContent = pageContent[index].story;
  page.appendChild(storyElement); // Story remains at the end
});