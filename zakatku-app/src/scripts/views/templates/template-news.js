/* eslint-disable linebreak-style */
const createNewsItemTemplate = (articles) => `
  <div class="artikel-item">
    <div class="article-item_header">
    <h3 tabindex="0" class="news__name">${articles.title || '-'}</h3>
    </div>
    <div class="article-item_content">
        <img class="article-poster" alt="${articles.urlImage}" src="${articles.urlImage}">
        <p><span>${articles.author} - ${articles.createdAt}</span>
        <br>${articles.content}
        </p>
    </div>
  </div>
  `;

export default createNewsItemTemplate;
