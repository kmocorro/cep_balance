import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  scan: {
    marginTop: 15
  }
}));

export default function Scan(props) {
  const classes = useStyles();

  return (
    <div className={classes.scan}>
      <Typography variant="h6">Check Balance here</Typography>
      <Paper elevation={0}>
        <CardContent style={{paddingTop: 4, paddingBottom: 4}}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField 
                autoFocus={true}
                value={props.employee_number} 
                onChange={props.handleEmployeeNumberOnChange}
                label="Barcode / Employee number" 
                fullWidth 
                variant="outlined" 
                placeholder="Employee Number" 
                onClick={props.handleEmployeeNumberOnClick}
                margin="dense"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Paper>
    </div>
  );
}
