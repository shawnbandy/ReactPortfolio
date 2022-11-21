import React from 'react';
import {
  whiteB,
  grayB,
  lightBB,
  darkBB,
  whiteC,
  grayC,
  lightBC,
  darkBC,
} from './ProjectComponents/colors';

const classes = {
  footer: 'border border-primary mt-5',
};
//*contact
//*Navigation to other sections
//*facebook
//*linkedIn
//*copyright
function Footer() {
  return (
    <footer className={classes.footer}>
      <h1>Welcome Footer</h1>
    </footer>
  );
}

export default Footer;
