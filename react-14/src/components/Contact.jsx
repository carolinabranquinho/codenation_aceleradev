import React from 'react';
import './Contact.scss';
import { format } from 'date-fns';

export function Contact (props) {
  const data = props.data;

  return (
    <article className="contact" data-testid="contact">
      <span className="contact__avatar" data-testid="contact-avatar">
        <img src={data.avatar} alt="img-person" />
      </span>
      <span className="contact__data" data-testid="contact-name">{data.name}</span>
      <span className="contact__data" data-testid="contact-phone">{data.phone}</span>
      <span className="contact__data" data-testid="contact-country">{data.country}</span>
      <span className="contact__data" data-testid="contact-date">{format(new Date(data.admissionDate), 'dd/MM/yyyy')}</span>
      <span className="contact__data" data-testid="contact-company">{data.company}</span>
      <span className="contact__data" data-testid="contact-department">{data.department}</span>
    </article>
  );
}

export default Contact;
