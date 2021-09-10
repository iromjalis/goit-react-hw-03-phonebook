import { Component } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Container from "./components/Container/Container";
import Filter from "./components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };
  handleSubmit = (data) => {
    this.setState({ ...data });
  };
  handleFilterChange = (filter) => {
    this.setState({ ...filter });
  };
  render() {
    const { name, number, filter, contacts } = this.state;
    const filtered = contacts.map((contact) => contact.name === filter);
    return (
      <>
        <Container className="App">
          <h1>Phonebook</h1>
          <ContactForm
            name={name}
            number={number}
            handleSubmit={this.handleSubmit}
          />
          <h2>Contacts</h2>
          <Filter
            filter={filter}
            handleFilterChange={this.handleFilterChange}
          />
          <ContactList contacts={contacts} />
        </Container>
      </>
    );
  }
}

export default App;
