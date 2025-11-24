function Footer(props) {
    return (
        <footer className="App-footer">
            <h3>Codziennie od {props.godzinaOtwarcia} do {props.godzinaZamkniecia}</h3>
        </footer>
    )
}

export default Footer;