function Footer(props) {
    return (
        <footer>
            <h2>Zapraszamy codziennie od {props.otwarcie} do {props.zamkniecie}</h2>
        </footer>
    );
}

export default Footer;