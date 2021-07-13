import React from 'react';
import Container from '@material-ui/core/Container';
import BuyMealsTable from './components/BuyMealsTable'
import Typography from '@material-ui/core/Typography';

export default function Check(props) {
    const {mealCount, mealArray, removeMeal} = props
    
    const element2 = <Typography variant="body1">Ничего не выбрано</Typography>

    return(
        <Container maxWidth="md">
            {!mealCount ? element2 : 
                <>
                    <Typography variant="body1" style={{marginTop: '50px'}}>
                        Количество выбранных блюд: {mealCount}
                    </Typography><br/>
                    <div>
                        <BuyMealsTable mealArray={mealArray} removeMeal={removeMeal}/>
                    </div>    
                </>
            }                           
        </Container>
    )
}