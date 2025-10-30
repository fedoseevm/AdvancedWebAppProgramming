import logo from './logo.jpg';


function Header(props) {
    return (
        <header>
        <h1>Witamy na stronie firmy: {props.nazwaFirmy}</h1>
        <img className='App-logo' src={logo} alt="Logo" />
      </header>
    )
}

export default Header;