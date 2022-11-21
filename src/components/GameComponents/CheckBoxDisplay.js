import React, { useState } from 'react';

function CheckBoxDisplay({ numberArr }) {
  const checkboxElementArray = [];
  const [reset, setReset] = useState(false);

  const checkboxElementDisabled = (index) => {
    return (
      <div class="col-2">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox"
          value={index}
          disabled
        />
      </div>
    );
  };

  const checkboxElementEnabled = (index) => {
    return (
      <div class="col-2">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox"
          value={index}
        />
      </div>
    );
  };

  for (let i = 0; i < numberArr.length; i++) {
    const first = numberArr[i];

    const last = numberArr[i + 2];

    if (first == last) {
      for (let j = i; j <= i + 2; j++) {
        checkboxElementArray.push(checkboxElementDisabled([j]));
      }
      i < 2 ? (i = i + 2) : (i = i + 3);
    } else if (numberArr[i] == 1 || numberArr[i] == 5) {
      checkboxElementArray.push(checkboxElementDisabled([i]));
    } else {
      checkboxElementArray.push(checkboxElementEnabled([i]));
    }
  }

  return checkboxElementArray;
}

export default CheckBoxDisplay;
