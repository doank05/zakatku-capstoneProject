/* eslint-disable linebreak-style */
const createNewsItemTemplate = (articles) => `
  <div class="artikel-item">
    <div class="artikel-body">
      <div class="article-item_header">
      <img class="article-poster" alt="${articles.urlImage}" src="${articles.urlImage}">
      <h3 tabindex="0" class="news__name">${articles.title || '-'}</h3>
      </div>
      <div class="article-item_content">
          <p><span>${articles.author} - ${articles.createdAt}</span>
          <br>${articles.content}
          </p>
      </div>
    </div>
  </div>
  `;

export default createNewsItemTemplate;
