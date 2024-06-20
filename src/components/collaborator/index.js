import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./collaborator.css";
import { IoIosCloseCircle } from "react-icons/io";

const Collaborator = ({
  id,
  nome,
  cargo,
  imagem,
  backgroundColor,
  remove,
  favorite,
  collaborator,
}) => {
  function isFavorite() {
    favorite(id);
  }

  const propsFavorite = {
    size: 20,
    onClick: isFavorite,
  };

  return (
    <div className="collaborator">
      <IoIosCloseCircle
        size={25}
        className="remove"
        onClick={() => remove(id)}
      />
      <div className="header" style={{ backgroundColor }}>
        <img src={imagem} alt={nome} />
      </div>

      <div className="footer">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div className="fav">
          {collaborator.favorite ? (
            <FaHeart {...propsFavorite} color="#ff0000" />
          ) : (
            <FaRegHeart {...propsFavorite} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Collaborator;
