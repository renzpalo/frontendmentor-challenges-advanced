import './Home.scss';

import Container from '../components/Grid/Container';
import Columns from '../components/Grid/Columns';
import Column from '../components/Grid/Column';
import CalculatorPanel from '../components/Calculator/CalculatorPanel';

const Home = () => {

    return(
        <div id="home">
            <section id="logo-section">
                <Container className="container">
                    <Columns>
                        <Column>
                            <img src="images/logo.svg" alt="Splitter Logo" />
                        </Column>
                    </Columns>
                </Container>
            </section>
            <section id="calculator-section">
                <Container className="container-full">
                    <Columns>
                        <Column>
                            <CalculatorPanel />
                        </Column>
                    </Columns>
                </Container>
            </section>
        </div>
    );
};

export default Home;