import React, { useState, useEffect }from 'react';
import Typography from '@material-ui/core/Typography';
import {useParams} from 'react-router-dom';
import {getFilteredCategories} from '../../api';
import MealCard from './MealCard';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export default function MealsByCategory(props) {
    const {catName} = useParams()
    const [meals, setMeals] = useState([])

    console.log(catName)

    useEffect( () => {
        getFilteredCategories(catName).then(data => {
            setMeals(data.meals)
        })
    }, [])   

    return(
        <Container maxWidth="lg">
            <Typography variant="h6" style={{textAlign: 'center', margin: "1rem 0 2rem 0", color: 'grey'}}>
                Блюда из категории: {catName}
            </Typography> 
            <Grid container spacing={3}>
             {meals && meals.map(el => 
                <Grid item xs={3}  key={el.idMeal}>
                    <MealCard {...el}  buttonHandler={props.buyMeal}/>
                </Grid>
                )}
            </Grid>
        </Container>
    )
}