document.addEventListener('DOMContentLoaded', function () {
  const newsApiUrl = `https://newsapi.org/v2/top-headlines?q=India&apiKey=bf7a26af561c49a5b198a2bba870b34d`;
  function loadNewsFeed() {
    fetch(newsApiUrl)
      .then(response => response.json())
      .then(data => {
        const newsFeedElement = document.getElementById('news-feed');
        newsFeedElement.innerHTML = ''; 

        data.articles.forEach(article => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `<p><strong>${article.title}</strong><br>${article.description}</p>`;
          newsFeedElement.appendChild(listItem);
        });

        autoscroll();
      })
      .catch(error => console.error('Error fetching news:', error));
   }
   loadNewsFeed();

});
