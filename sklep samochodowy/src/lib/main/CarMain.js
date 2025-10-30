import { Component } from "react";
import CarsHeader from "./CarsHeader";
import CarList from "./CarList";

class CarMain extends Component {
    render() {
        return (
            <main>
                <div className="Main-column">
                    <CarsHeader rodzaj="nowe" />
                    <CarList stan="nowe" />
                </div>
                <div className="Main-column">
                    <CarsHeader rodzaj="używane" />
                    <CarList stan="używane" />
                </div>

            </main>
        )
    }
}

export default CarMain;