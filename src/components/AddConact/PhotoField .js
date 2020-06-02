import React from 'react';
import style from "./style";


    const PhotoField = ({onChange, onBlur, error}) => (
        <div style={style.inputGroup}>
          <label>
          Select photo:
            <input
              style={{...style.input, ...style.input.aaa }}
              type="file"
              name="photo"
              className="photo" 
              onChange={onChange}
              onBlur={onBlur}
            />
            {error && <div style={style.error}>{error}</div>}
          </label>
        </div>
      );

export default PhotoField;
