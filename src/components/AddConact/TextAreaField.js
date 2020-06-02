import React from 'react';
import style from "./style";

    const TextAreaField = ({onChange, onBlur, error}) => (
        <div style={style.inputGroup}>
          <label>
          Additional <br />
          data:
            <textarea
              style={style.input}
              type="textarea"
              name="msg"
              className="textarea" 
              onChange={onChange}
              onBlur={onBlur}
            ></textarea>
            {error && <div style={style.error}>{error}</div>}
          </label>
        </div>
      );

export default TextAreaField;
