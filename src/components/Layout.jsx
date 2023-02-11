import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Box } from 'commonStyles/Box';
// import ContactsPage from 'pages/ContactsPage';
import { AppBar } from './AppBar/AppBar';

export const Layout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gridGap={5}
      maxWidth="500px"
      my={5}
      mx="auto"
      py={6}
      px={4}
      bg="muted"
      border="normal"
      borderRadius="normal"
      as="main"
    >
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
