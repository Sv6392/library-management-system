import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Chart = () => {
    const navigate = useNavigate();

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
            <Typography variant="h4" gutterBottom>Chart</Typography>
            <img src="https://via.placeholder.com/400" alt="Chart" style={{ maxWidth: '100%', height: 'auto' }} />
            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate(-1)}
                style={{ marginTop: '20px' }}
            >
                Go Back
            </Button>
        </Box>
    );
};
