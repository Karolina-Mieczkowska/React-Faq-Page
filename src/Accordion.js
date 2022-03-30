import Chevron from './Chevron';

const Accordion = () => {
    return (
        <div className="accordion">
            <div className="accordion__item">
                <button className="accordion__btn">
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