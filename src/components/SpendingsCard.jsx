import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import OpenWithOutlinedIcon from '@mui/icons-material/OpenWithOutlined';
import "../css/spendingsCard.css"
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';


const card = (
    <React.Fragment>
        <CardContent>
            <div className="top">
                <OpenWithOutlinedIcon
                    sx={{ marginLeft: "18rem", marginBottom: "1rem" }}
                />
            </div>
            <div className="body">
                <Typography variant="h5" component="div">
                    Spendings
                </Typography>
                <Typography sx={{ fontSize: 14, display: "flex" }} color="text.secondary" gutterBottom>
                    <CreditCardOutlinedIcon
                        sx={{ marginRight: "0.5rem" }}
                    /> 9349 visa card
                </Typography>
            </div>
            <Typography variant="body2" sx={{ fontSize: "2rem", fontWeight: "bold" }}>
                127.41 USD
                <br />
            </Typography>
           
            <Typography sx={{ mb: 1.5, fontSize: "small", fontWeight: "bold", display: "flex", justifyContent: "space-between" }} color="text.secondary">
                <p> vs last week </p>
                <p className="timestamp">
                    Last Purchased (Feb 24 19:59 UTC-5)
                </p>
            </Typography>
 
        </CardContent>
    </React.Fragment>
);

export default function SpendingsCard() {
    return (
        <Box sx={{ minWidth: 275 }} >
            <Card variant="outlined"  >{card}</Card>
        </Box>
    );
}