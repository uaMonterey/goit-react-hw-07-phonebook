import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-operations';
import { phonebookSelectors } from '../../redux/phonebook';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  allContacts: phonebookSelectors.getCurrentContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onContactDelete: id => dispatch(deleteContact(id)),
});

ContactList.propTypes = {
  allContacts: PropTypes.array.isRequired,
  onContactDelete: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
