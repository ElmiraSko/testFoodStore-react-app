import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import BackspaceIcon from '@material-ui/icons/Backspace';
import { getMealById } from '../../../api';
import {useHistory } from 'react-router';

export default function MealRecipe() {

    const {mealId} = useParams()
    const [meal, setMeal] = useState([])

    const history = useHistory();
    console.log(history);    
    
    useEffect( () => {
        getMealById(mealId).then(data => {
            console.log(data.meals)
            setMeal(data.meals)
        })
    }, [])  

    return(
        <Container maxWidth="lg"  style={{color: '#795548'}}>              
            {meal.map(el => 
            <div key={el.idMeal}>
                <div style={{display: 'flex'}}>
                    <img src={el.strMealThumb} alt={el.strMeal} 
                    style={{width: '280px', height: 'auto', margin: '20px', borderRadius: '5px'}} />
                    <div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h3> {el.strMeal} </h3>
                            <div onClick={() => history.goBack()}>
                            <BackspaceIcon style={{margin: '18.7px 0', cursor: 'pointer'}}/>
                            </div>
                        </div>                        
                        <p>
                        {el.strInstructions}
                        </p>                        
                    </div>
                </div>
                <p style={{margin: '0 20px'}}>Ingredients:</p>
                <div style={{marginLeft: '20px', display: 'flex'}}>                   
                    <ul>
                        {el.strIngredient1 ? <li>{el.strIngredient1} {el.strMeasure1}</li> : null }
                        {el.strIngredient2 ? <li>{el.strIngredient2} {el.strMeasure2}</li> : null }
                        {el.strIngredient3 ? <li>{el.strIngredient3} {el.strMeasure3}</li> : null }
                        {el.strIngredient4 ? <li>{el.strIngredient4} {el.strMeasure4}</li> : null }
                        {el.strIngredient5 ? <li>{el.strIngredient5} {el.strMeasure5}</li> : null }
                    </ul>
                    <ul>
                        {el.strIngredient6 ? <li>{el.strIngredient6} {el.strMeasure6}</li> : null }
                        {el.strIngredient7 ? <li>{el.strIngredient7} {el.strMeasure7}</li> : null }
                        {el.strIngredient8 ? <li>{el.strIngredient8} {el.strMeasure8}</li> : null }
                        {el.strIngredient9 ? <li>{el.strIngredient9} {el.strMeasure9}</li> : null }
                        {el.strIngredient10 ? <li>{el.strIngredient10} {el.strMeasure10}</li> : null }
                    </ul>
                    <ul>                    
                        {el.strIngredient11 ? <li>{el.strIngredient11} {el.strMeasure11}</li> : null }
                        {el.strIngredient12 ? <li>{el.strIngredient12} {el.strMeasure12}</li> : null }
                        {el.strIngredient13 ? <li>{el.strIngredient13} {el.strMeasure13}</li> : null }
                        {el.strIngredient14 ? <li>{el.strIngredient14} {el.strMeasure14}</li> : null }
                        {el.strIngredient15 ? <li>{el.strIngredient15} {el.strMeasure15}</li> : null }
                    </ul>
                    <ul>
                        {el.strIngredient16 ? <li>{el.strIngredient16} {el.strMeasure16}</li> : null }
                        {el.strIngredient17 ? <li>{el.strIngredient17} {el.strMeasure17}</li> : null }
                        {el.strIngredient18 ? <li>{el.strIngredient18} {el.strMeasure18}</li> : null }
                        {el.strIngredient19 ? <li>{el.strIngredient19} {el.strMeasure19}</li> : null }
                        {el.strIngredient20 ? <li>{el.strIngredient20} {el.strMeasure20}</li> : null }
                    </ul>
                </div>
            </div>
            )}           
        </Container>
    )
}
