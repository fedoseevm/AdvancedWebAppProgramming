import PropTypes from "prop-types";

const KwiatyCzerwone = (props) => {
    const { kwiat, sprzedaj, kup } = props;

    return (
        <div className="kwiat-card">
            <h3>Polecamy: kwiaty {kwiat.rodzaj}</h3>
            <img src={kwiat.img} alt={kwiat.rodzaj} />
            <p>Ilość rano: {kwiat.wartosc1}</p>
            <p>Ilość wieczorem: {kwiat.wartosc2}</p>
            <div className="button-group">
                <button onClick={sprzedaj}>Sprzedaj</button>
                <button onClick={kup}>Kup</button>
            </div>
        </div>
    )
};

KwiatyCzerwone.propTypes = {
    kwiat: PropTypes.object.isRequired,
    sprzedaj: PropTypes.func.isRequired,
    kup: PropTypes.func.isRequired
};

export default KwiatyCzerwone;
