import React from 'react';
import style from "./style";

    const EmailField = ({onChange, onBlur, error}) => (
        <div style={style.inputGroup}>
          <label>
          Email:
            <input
              style={style.input}
              type="email"
              name="email"
              className="email" 
              onChange={onChange}
              onBlur={onBlur}
            />
            {error && <div style={style.error}>{error}</div>}
          </label>
        </div>
      );



export default EmailField;
