import "./ProductPreviewCard.style.scss";

interface Props {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

function ProductPreviewcard({ title, description, price, imageUrl }: Props) {
  return (
    <div className="product-preview-card">
      <div className="imagecontainer">
      <img className="product-preview-card__image" src={imageUrl} alt={title} />
      </div>

      <div>
      <h3 className="product-preview-card__title">{title}</h3>
      <p className="product-preview-card__description">{description}</p>
      <p className="product-preview-card__price">${price}</p>
      </div>


    </div>
  );
}

export default ProductPreviewcard;
