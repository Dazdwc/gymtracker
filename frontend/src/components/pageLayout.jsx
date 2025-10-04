import React from 'react';
import { Box } from '@mui/material';

const PageLayout = ({ children }) => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      minHeight={'100vh'}
    >
      <Box
        sx={{
          bgcolor: 'background.paperBlue',
          boxShadow: 2,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PageLayout;
