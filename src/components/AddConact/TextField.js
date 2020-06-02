import React from 'react'
import style from "./style";

const TextField = ({name, className, onChange, onBlur, error, label}) => (
  <div style={style.inputGroup}>
    <label>
      {label}
      <input
        style={style.input}
        type="text"
        name={name}
        className={className}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <div style={style.error}>{error}</div>}
    </label>
  </div>
);

export default TextField;
