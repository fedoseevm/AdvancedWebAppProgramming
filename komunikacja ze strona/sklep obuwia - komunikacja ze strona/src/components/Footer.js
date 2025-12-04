function Footer() {
    const dataBiezaca = new Date();
    const dzien = dataBiezaca.getDate();
    const dzienTygodnia = dataBiezaca.getDay();
    const miesiac = dataBiezaca.getMonth() + 1;
    const rok = dataBiezaca.getFullYear();

    const dniTygodnia = [
        "poniedziałek",
        "wtorek",
        "środa",
        "czwartek",
        "piątek",
        "sobota",
        "niedziela"
    ];
    const miesiace = [
        "stycznia",
        "lutego",
        "marca",
        "kwietnia",
        "maja",
        "czerwca",
        "lipca",
        "sierpnia",
        "września",
        "października",
        "listopada",
        "grudnia"
    ];

    return(
        <h2>Dzisiaj jest: {dniTygodnia[dzienTygodnia - 1]}: {dzien} {miesiace[miesiac]} {rok} roku</h2>
    )
}

export default Footer;