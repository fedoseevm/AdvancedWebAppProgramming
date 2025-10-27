import { Component } from "react";
import CarsHeader from "./CarsHeader";
import CarList from "./CarList";

class Car extends Component {
    render() {
        return (
            <div className="Main-column">
                <CarsHeader rodzaj="nowe" />
                {CarList.state.cars.map((car, index) => (
                    <div className="Car-card">
                        <h3>Marka: {car.marka}</h3>
                        <img src={car.img}></img>
                    </div>
                ))}
            </div>

        )
    }
}

export default Car;