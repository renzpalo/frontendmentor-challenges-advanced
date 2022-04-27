import './Footer.scss';

import Container from '../../components/Grid/Container';
import Columns from '../../components/Grid/Columns';
import Column from '../../components/Grid/Column';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Columns>
                    <Column>
                    <div class="attribution">
                        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                        Coded by <a href="https://github.com/renzpalo ">Renz Palo</a>.
                    </div>
                    </Column>
                </Columns>
            </Container>
        </footer>
    );
};

export default Footer;