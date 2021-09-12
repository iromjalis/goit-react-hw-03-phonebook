import React, { Component } from "react";
// import PropTypes from "prop-types";

import css from "./ContactForm.module.css";
import ContactFormName from "./ContactFormName";
import ContactFormNumber from "./ContactFormNumber";

class ContactForm extends Component {
  state = {
    Name: "",
    Number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({ Name: "", Number: "" });
  };
  render() {
    return (
      <form className={css.ContactFormWrapper} onSubmit={this.handleSubmit}>
        <ContactFormName
          title="Name"
          value={this.state.Name}
          onChange={this.handleChange}
        />
        <ContactFormNumber
          title="Number"
          value={this.state.Number}
          onChange={this.handleChange}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  // bla: PropTypes.string,
};

ContactForm.defaultProps = {
  // bla: 'test',
};

export default ContactForm;
