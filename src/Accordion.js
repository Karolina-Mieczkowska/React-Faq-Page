import { useState } from 'react';
import Chevron from './Chevron';

const Accordion = () => {
    const [activeState, setActiveState] = useState();
    const itemClasses = !activeState ? 'accordion__item' : 'accordion__item accordion__item--active';
    const handleClick = (e) => {
        // setActiveState(true);
        const clicked = e.target.closest('.accordion__item');
        clicked.classList.contains('accordion__item--active') ? setActiveState(false) : setActiveState(true);
    }

    return (
        <div className="accordion">
            <div className={itemClasses}>
                <button className="accordion__btn" onClick={handleClick}>
                    Accordion Button
                    <Chevron/>
                </button>
                <div className="accordion__collapse">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus consequat tincidunt. 
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Accordion;