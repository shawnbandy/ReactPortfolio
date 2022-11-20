import React, { useState } from 'react';

function CheckBoxDisplay(numberArr) {
  //   const checkUseableNumber = (currentNum) => {
  //     if (currentNum == 1 || currentNum == 5) {
  //       return true;
  //     }
  //   };
  const checkboxElementArray = [];

  console.log(checkboxElementArray);

  const checkboxElementDisabled = (valueNum) => (
    <div class="col-2">
      <input
        class="form-check-input"
        type="checkbox"
        id="inlineCheckbox"
        value={valueNum}
        disabled="true"
      />
    </div>
  );

  const checkboxElementEnabled = (valueNum) => (
    <div class="col-2">
      <input
        class="form-check-input"
        type="checkbox"
        id="inlineCheckbox"
        value={valueNum}
        disabled="false"
      />
    </div>
  );

  //*1,2,2,2,3
  //*1,1,1,2,2
  //*1,2,3,3,3
  for (let i = 0; i <= 4; i++) {
    const first = numberArr[i];
    const last = numberArr[i + 2];

    if (first == last) {
      for (let j = i; j < i + 2; j++) {
        checkboxElementArray.push(checkboxElementDisabled(numberArr[j]));
      }
      i < 2 ? (i = i + 2) : (i = i + 3);
    } else {
      checkboxElementArray.push(checkboxElementEnabled[numberArr[i]]);
    }
  }

  return { checkboxElementArray };
}

export default CheckBoxDisplay;
