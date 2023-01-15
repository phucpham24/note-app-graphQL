import React from "react"
import { Button, Typography } from '@mui/material'

export default function Login() {
    return (
        <>
            <Typography variant='h5' sx={{ marginBottom: '10px' }}> Welcome to Note App</Typography>
            <Button variant='outlined' >
                Login with Google
            </Button>
        </>
    )
}