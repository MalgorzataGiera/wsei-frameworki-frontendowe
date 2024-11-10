import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    // return (
    //     <div>
    //         <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Hide' : 'Show'} content</button>
    //         {isOpen && <p>{content}</p>}
    //     </div>
    // );
    return (
        <div>
            <div onClick={toggleAccordion} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                {title}
            </div>
            {isOpen && (
                <div style={{ padding: '10px', border: '1px solid #ddd', marginTop: '5px' }}>
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

export default Accordion;
