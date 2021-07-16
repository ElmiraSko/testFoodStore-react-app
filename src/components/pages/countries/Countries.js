import React, {useState, useEffect} from 'react';
import { getAllArea } from '../../../api';
import Preloader from '../Preloader';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { orange, deepPurple } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const ColorButton = withStyles(() => ({
    root: {
        color: '#ffffff',
        backgroundColor: deepPurple[200],
        width: '200px',
        '&:hover': {
            backgroundColor: orange[300],
        },
    },
  }))(Button);

export default function Countries() {
     // Состояние
     const [countries, setCountries] = useState([]);     

     // Запрос на получение данных
     useEffect( () => {
        getAllArea().then(
             data => {
                setCountries(data.meals);
             }
         )
     }, []);

    return(
        <Container maxWidth="lg" >
        <Grid container spacing={3} style={{marginTop: '20px', textAlign: 'center'}}>
            {!countries.length ? <Preloader /> : 
                countries.map(count =>                 
                    <Grid item xs={3}  key={count.strArea}>                        
                        <Link 
                            style={{textDecoration: 'none', 
                            marginRight: '10px',}}
                            to={`/meals/${count.strArea}`}>
                                <ColorButton>
                                    {count.strArea}
                                </ColorButton>                                
                        </Link>                        
                </Grid>
            )}
            </Grid>
        </Container>
    )
}