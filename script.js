function telephoneCheck(str) {
  /* 1. Country code: (1(-|\s)?)?  -->  country code (1) is optional; - or whitespace after 1 is optional
      2. Area code: (\d{3}|(\(\d{3}\)))  -->  three digits or three digits within parentheses
      3. (-|\s)?  -->  - or whitespace after area code is optional
      4. \d{3}  -->  three digits
      5. (-|\s)?  -->  - or whitespace is optional
      6. \d{4}  -->  four digits */
  let regex = /^(1(-|\s)?)?(\d{3}|(\(\d{3}\)))(-|\s)?\d{3}(-|\s)?\d{4}$/;

  if (regex.test(str)) {
    return true;
  } else {
    return false;
  }
}
