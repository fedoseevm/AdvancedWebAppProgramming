import PropTypes from "prop-types";
const ShoesDescription = (props) => {
    return (
        <div className="Shoes-card">
            <img src={props.shoe.img} alt={props.shoe.nazwa}></img>
            <div className="Shoes-card-desc">
                <h4>Rodzaj: {props.shoe.nazwa}</h4>
                <p>Stan magazynu: {props.shoe.ilosc}</p>
                <div className="Shoe-card-btn-group">
                    <button onClick={() => props.sellCurrentShoesPair(props.shoe.id)}>Sprzedaż detaliczna</button>
                    <button onClick={() => props.addCurrentShoePair(props.shoe.id)}>Przyjęcie tych butów</button>
                </div>
            </div>
        </div>
    );
};

ShoesDescription.propTypes = {
    shoe: PropTypes.object.isRequired,
    sellCurrentShoesPair: PropTypes.func,
    addCurrentShoePair: PropTypes.func
}

ShoesDescription.defaultProps = {
    shoe: {
        nazwa: "Nazwa butów",
        ilosc: "Stan magazynu"
    }
}

export default ShoesDescription;