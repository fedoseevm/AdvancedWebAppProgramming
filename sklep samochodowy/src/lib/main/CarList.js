import { Component } from "react";

class CarList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [
                {
                    marka: "Audi",
                    stan: "nowe",
                    img: "/images/audi_new.jpg"
                },
                {
                    marka: "Audi",
                    stan: "używane",
                    img: "/images/audi_used.jpg"
                },
                {
                    marka: "BMW",
                    stan: "nowe",
                    img: "/images/bmw_new.jpg"
                },
                {
                    marka: "BMW",
                    stan: "używane",
                    img: "/images/bmw_used.jpg"
                },
                {
                    marka: "Honda",
                    stan: "nowe",
                    img: "/images/honda_new.jpg"
                },
                {
                    marka: "Honda",
                    stan: "używane",
                    img: "/images/honda_used.jpg"
                },
            ]
        }
    };
    render () {
        const wybranyStan = this.props.stan;
        const filteredCars = this.state.cars.filter(car => car.stan === wybranyStan);

        return (
            <div className="Car-list">
                {filteredCars.map((car, index) => (
                    <div className="Car-card">
                        <h3>Marka: {car.marka}</h3>
                        <img src={car.img} alt={car.marka}></img>
                    </div>
                ))}
            </div>
        )
    }
}

export default CarList;