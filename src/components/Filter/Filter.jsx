import React from 'react';
import { connect } from 'react-redux';
import { phonebookSelectors, changeFilter } from '../../redux/phonebook';

import PropTypes from 'prop-types';

import s from './Filter.module.css';

const Filter = ({ value, getFilter }) => {
  return (
    <label className={s.label}>
      <p className={s.title}>Find contact by name</p>
      <input
        className={s.input}
        onChange={getFilter}
        value={value}
        type="text"
        name="name"
        required
      />
    </label>
  );
};

const mapStateToProps = state => ({
  value: phonebookSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  getFilter: e => dispatch(changeFilter(e.target.value)),
});

Filter.propTypes = {
  getFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
