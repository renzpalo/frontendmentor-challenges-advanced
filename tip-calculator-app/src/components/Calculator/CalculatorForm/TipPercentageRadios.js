import './TipPercentageRadios.scss';

import RadioGroup from '../../UI/Forms/FormGroup/RadioGroup';
import InputGroup from '../../UI/Forms/FormGroup/InputGroup';

const TipPercentageRadios = () => {
    return(
        <div className="tip-percentage-radios">
            <RadioGroup name="5" />
            <RadioGroup name="10" />
            <RadioGroup name="15" />
            <RadioGroup name="20" />
            <RadioGroup name="50" />
            <InputGroup placeholder="Custom" />
        </div>
    );
};

export default TipPercentageRadios;