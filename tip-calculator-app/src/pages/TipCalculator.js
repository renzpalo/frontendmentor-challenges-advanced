
import './TipCalculator.scss';

import ContainerFull from '../components/Grid/ContainerFull';
import Container from '../components/Grid/Container';
import Columns from '../components/Grid/Columns';
import Column from '../components/Grid/Column';

import TipCalculatorApp from '../components/TipCalculator/TipCalculator';
import Footer from './sections/Footer';

const TipCalculator = () => {
    return (
        <main id="tip-calculator-page">
            <section id="logo-section">
                <Container>
                    <Columns>
                        <Column>
                            <img src="images/logo.svg" alt="Splitter Logo" className="logo-image" />
                        </Column>
                    </Columns>
                </Container>
            </section>
            <section id="tip-calculator-section">
                <ContainerFull>
                    <Columns>
                        <Column>
                            <TipCalculatorApp />
                        </Column>
                    </Columns>
                </ContainerFull>
            </section>
            <Footer />
        </main>
    ); 
};

export default TipCalculator;