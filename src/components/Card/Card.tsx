import { IImage } from "../../types/model";

interface ICardProps {
  img: IImage;
}

const Card = ({ img }: ICardProps) => (
  <div className="card">
    <h6 className="card-title">{img.title}</h6>
    <span className="card-description">{img.description}</span>
  </div>
);

export default Card;
