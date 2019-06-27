import React from 'react';
import { ThemeProvider } from 'styled-components';

const Theme = ({ children }) => (
   <ThemeProvider
      theme={{
         color: {
            primary: '#9ce5f4',
            secondary: '#2e7da4',
            textBlack: '#000000',
            textWhite: '#ffffff',
         },
         options: {
          contentWidth: '100%',
          headerPosition: 'sticky'
         },
         screen: {
            tablet: '768px',
            laptop: '1024px',
         },
      }}>
      {children}
   </ThemeProvider>
)

export default Theme