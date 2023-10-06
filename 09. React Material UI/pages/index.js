import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TheAppBar from '../src/shared/TheAppBar/TheAppBar'

export default function Index() {
  return (
    <Container >
    <TheAppBar />
      <Box sx={{ my: 4 }}>
        <h2>The Boilerplate By JC</h2>
        <p>v0.0.1-alpha</p>
      </Box>
    </Container>
  );
}
