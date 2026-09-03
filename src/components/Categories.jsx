import { siteContent } from '../data/content';

function Categories({ role }) {
  const content = siteContent[role].categories;

  return (
    <section className="categories" id="categories">
      <div className="categories-container">
        <div className="section-header">
          <span className="section-tag">{content.tag}</span>
          <h2 className="section-title">
            {content.title} <span className="highlight">{content.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{content.subtitle}</p>
        </div>
        <div className="categories-grid">
          {content.items.map((category, index) => (
            <div className="category-card" key={index}>
              <div
                className="category-icon"
                dangerouslySetInnerHTML={{ __html: category.icon }}
              />
              <span className="category-name">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
