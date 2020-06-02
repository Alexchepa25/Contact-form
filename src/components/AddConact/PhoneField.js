import React from 'react';
import style from "./style";


    const PhoneField = ({onChange, onBlur, error}) => (
        <div style={style.inputGroup}>
          <label>
          Phone:
            <input
              style={style.input}
              type="phone"
              name="phone"
              className="phone" 
              onChange={onChange}
              onBlur={onBlur}
            />
            {error && <div style={style.error}>{error}</div>}
          </label>
        </div>
      );

export default PhoneField;
