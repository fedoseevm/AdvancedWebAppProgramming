import logo from '../../logo.jpg';

function Header(props) {
    return (
        <header className="App-header">
            <h1>Witamy w {props.rodzajLokalu}</h1>
            <img className='App-logo' src={logo} alt={props.rodzajLokalu}></img>
        </header>
    )
}

export default Header;