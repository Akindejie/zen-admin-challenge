// I was using MUI and doing some designs before you told me not to spend much time on the project.

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) navigate.push('/');
    else if (value === 1) navigate.push('/movies');
  }, [value, navigate]);

  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#2d313a',
        zIndex: 100,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Search"
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          label="Movies"
          icon={<MovieFilterIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
