//styles
import './App.css';

//components
import { Component } from 'react';
import { connect } from 'react-redux';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { fetchContacts, phonebookSelectors } from './redux/phonebook';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container title="Phonebook">
        <ContactForm />
        <Filter />
        {this.props.isLoading && <span>Loading...</span>}
        <ContactList />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: phonebookSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
