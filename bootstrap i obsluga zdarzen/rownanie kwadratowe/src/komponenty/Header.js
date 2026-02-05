function Header(props) {
    return (
        <header>
            <h1>Witamy na stronie: Matematyka dla każdego</h1>
            <h2>Pomożemy zrozumieć i rozwiązać: {props.rodzajZadan}</h2>
        </header>
    )
}

export default Header;