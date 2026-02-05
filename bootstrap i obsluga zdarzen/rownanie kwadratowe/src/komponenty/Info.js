function Info() {
    return(
        <section className="App-info">
            <h3>Postać ogólna:</h3>
            <p>ax<sup>2</sup>+bx+c=0</p>
            <br></br>
            <p>Wyróżnik równania kwadratowego</p>
            <br></br>
            <div>
                <p>delta = b<sup>2</sup>-4ac</p>
                <ul>
                    <li>
                        jeśli delta &gt; 0 to równanie ma 2 rozwiązania:
                        <p>x<sub>1</sub> = (-b-sqrt(delta))/(2a)</p>
                        <p>x<sub>2</sub> = (-b+sqrt(delta))/(2a)</p>
                    </li>
                    <li>
                        jeśli delta = 0 to równanie ma 1 rozwiązanie:
                        <p>x<sub>0</sub> = (-b)/(2a)</p>
                    </li>
                    <li>jeśli delta &lt; 0 to równanie nie ma rozwiązań</li>
                </ul>
            </div>
        </section>
    )
}

export default Info;