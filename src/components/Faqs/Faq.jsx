import React from 'react';
import './Faq.scss'
import faqplusIcon from '../../assets/images/ph_plus-bold.svg'


function FAQ({ question, answer, isOpen, toggleAccordion }) {
  return (
    <>
      <div class="faq_stroke" contentwrap="">
        <div className={`faq_accordin ${isOpen ? 'open' : ''}`}>
          <div accordion-element="accordion" data-w-id="5c07f260-9a20-4eff-4114-b4a7d2439d36" className="faq_head" onClick={toggleAccordion} >
            <h3 class="faq-title"> {question}</h3>
            <div class="faq_icon">
              <img alt="" src={faqplusIcon}/>
            </div>
          </div>
          <div class="faq_body">
            <div class="faq_body-content">
              <p>{answer}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;