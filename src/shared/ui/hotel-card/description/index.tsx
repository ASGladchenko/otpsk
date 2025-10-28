export const Description = ({ description }: { description: string }) => {
  return (
    <div className="hotel-card__description">
      <p className="hotel-card__subtitle ">Опис</p>

      <p className="hotel-card__description-text">{description}</p>
    </div>
  );
};
