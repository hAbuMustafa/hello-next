import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>
          Page rendered in {new Date().toLocaleString() }
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
