import { Component } from "react";

class MenuRodzaj extends Component {
    constructor(props) {
        super(props);
        this.state = {
            napoje: [
                "Kawa biała",
                "Kawa czarna",
                "Herbata zielona",
                "Herbata owocowa"
            ],
            ciasta: [
                "Pączki",
                "Donuty",
                "Serniki",
                "Drożdżówki"
            ]
        }
    };

    render() {
        const wybranyRodzaj = this.props.rodzaj;
        const wybraneMenu = this.state[wybranyRodzaj];
        
        return (
            <div className="Main-column">
                <h2 className="Menu-type">Menu: {wybranyRodzaj}</h2>
                {wybraneMenu.map((item, index) => (
                    <ol start={index + 1}>
                        <li>{item}</li>
                    </ol>
                ))}
            </div>
        )
    }
}

export default MenuRodzaj;