import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import "./index.css";

const SelectComponent = ({
  data,
  handleChange,
  defaultValue,
  options,
  disabled = false,
  selectClass,
  placeholder,
  styles,
  id,
}) => {
  return (
    <Select
      className={`basic-single ${selectClass || "select_default_sty"}`}
      classNamePrefix="select"
      defaultValue={defaultValue}
      name="color"
      options={options}
      placeholder={placeholder}
      onChange={handleChange}
      styles={styles}
      id={id}
    />
  );
};

SelectComponent.propTypes = {
  data: PropTypes.array,
  handleChange: PropTypes.func,
  defaultValue: PropTypes.object,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object
};

export default SelectComponent;
