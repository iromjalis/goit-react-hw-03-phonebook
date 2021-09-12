import React from "react";

const ContactFormName = ({ title, onChange, value }) => {
  return (
    <>
      <label htmlFor="">
        {title}
        <input
          value={value}
          onChange={onChange}
          type="text"
          name={title}
          placeholder={title}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
    </>
  );
};

export default ContactFormName;
