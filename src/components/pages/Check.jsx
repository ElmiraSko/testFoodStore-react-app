import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import BuyMealsTable from './BuyMealsTable'
import FormForNick from './FormForNick'
import Typography from '@material-ui/core/Typography';

export default function Check(props) {
    const {mealCount, mealArray, removeMeal} = props

    
    const element2 = <Typography variant="body1">Ничего не выбрано</Typography>

    return(
        <Container maxWidth="md">
            {!mealCount ? element2 : 
                <>
                    <Typography variant="body1">Количество выбранных блюд: {mealCount}</Typography><br/>
                    <div>
                        <BuyMealsTable mealArray={mealArray} removeMeal={removeMeal}/>
                    </div> 
                    <br/>
                    <Typography variant="body1" style={{margin: "0 0.8rem", color: 'grey'}}>
                        Для подтверждения оплаты введите свой никнэйм:
                    </Typography> 
                    <div>
                        <FormForNick />
                    </div> 
                </>
            }                           
        </Container>
    )
}