import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import { getMealsByArea } from '../../../api';
import MealCard from './components/MealCard';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export default function MealsByCountry(props) {

    const {areaName} = useParams()
    const [meals, setMeals] = useState([])


    useEffect( () => {
        getMealsByArea(areaName).then(data => {
            setMeals(data.meals)
        })
    }, [])  

    return(
        <Container maxWidth="lg">
            <Typography variant="h6" style={{textAlign: 'center', margin: "1rem 0 2rem 0", color: '#a67800'}}>
                Dishes from: {areaName}
            </Typography> 
            <Grid container spacing={3}>
             {meals && meals.map(el => 
                <Grid item xs={3}  key={el.idMeal}>
                    <MealCard {...el} buyButtonHandler={props.buyMeal} />
                </Grid>
                )}
            </Grid>
        </Container>
    )
}
