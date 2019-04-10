import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import Config from '../config';
import Input from '../components/Input';
import { Form } from 'react-advanced-form';
import Textarea from '../components/Textarea';

const validationMessages = {
  general: {
    missing: 'Please fill out this field!',
  },
};

class Contact extends Component {
  static async getInitialProps() {
    return null;
  }

  state = {
    disabled: false,
    sent: false,
  };

  handleSubmit = ({ serialized, fields, form }) => {
    this.setState({
      disabled: true,
    });

    const mailer = 'https://mailer.andretimar.com/send';

    const body = `<h1>New Contact Form</h1>
      <p><b>Name:</b>  ${serialized.name}</p>
      <p><b>Email:</b>  ${serialized.email}</p>
      <p><b>Message:</b>  ${serialized.message}</p>`;

    const payload = {
      fromName: serialized.name || '',
      subject: 'Kapcsolat',
      body: body || '',
      replyTo: serialized.email || '',
    };

    console.log(payload);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    };

    return fetch(mailer, options)
      .then(response => {
        this.setState({
          sent: true,
        });
      })

      .catch(error => console.log(error));
  };

  render() {
    const { disabled, sent } = this.state;

    return (
      <Layout>
        <main className="contact">
          <div className="container">
            <h1>Get In Touch</h1>
            <p className="description">
              Fill out the form below to send me a message or you can reach me
              directly at{' '}
              <a className="email" href="mailto:andre@andretimar.com">
                andre@andretimar.com
              </a>{' '}
              if you don't like forms. I'm currently available for hire, so
              please don't hesitate to say hi! 👋
            </p>
            <div className="form-wrapper">
              {!sent ? (
                <Form messages={validationMessages} action={this.handleSubmit}>
                  <Input name="name" label="Your Name" required />
                  <Input name="email" label="Email" required />
                  <Textarea name="message" label="Message" required />
                  <div className="form-group">
                    <button
                      disabled={disabled}
                      type="submit"
                      className="btn btn-red"
                    >
                      Send Message
                    </button>
                  </div>
                </Form>
              ) : (
                <span className="success">
                  You rock! I will get back to you as soon as possible!{' '}
                </span>
              )}
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}

export default PageWrapper(Contact);
