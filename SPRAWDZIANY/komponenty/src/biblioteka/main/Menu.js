import { Component } from "react";
import MenuRodzaj from "./MenuRodzaj";

class Menu extends Component {
    render() {
        return (
            <main className="App-main">
                <MenuRodzaj rodzaj="napoje" />
                <MenuRodzaj rodzaj="ciasta" />
            </main>
        )
    }
}

export default Menu;