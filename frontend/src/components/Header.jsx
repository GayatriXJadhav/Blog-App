import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Toolbar, Typography, InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '12ch',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
    },
  },
}));

const Header = () => {
  return (
    <AppBar 
    position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor:'#f4e0e0ff'
       }}
    >
      <Toolbar>
        <Typography 
        variant="h6" noWrap sx={{ flexGrow: 1,color:'black',fontStyle:'italic', fontSize:30,fontFamily:'cursive' }}>
       EveryDay Fashion
        </Typography>
        <Search sx={{
            border:'Black 1px solid'
        }}>
          <SearchIconWrapper>
            <SearchIcon 
            sx={{
                color:'black'
            }}
            />
          </SearchIconWrapper>
          <StyledInputBase
          sx={{
            color:'black'
          }}
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
