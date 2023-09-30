import React from 'react';

import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import HeaderDesktop from './HeaderDesktop';
import Footer from './Footer';

const Header = () => <HeaderDesktop />;

export const Layout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height={{ lg: '100vh', sm: '100%' }}
      position="relative"
    >
      <Header />
      <Box as="main">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
