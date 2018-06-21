import {ThemeContext} from './theme-context';
import React from 'react'

function ThemedButton(props) {
    console.log(props)
  return (
    <ThemeContext.Consumer>
      {theme => (
        <button
          {...props}
          style={{backgroundColor: theme.background}}
        />
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemedButton;