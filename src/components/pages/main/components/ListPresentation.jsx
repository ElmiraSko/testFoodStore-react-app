import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CategoryItem from './CategoryItem';

export default function ListPresentation(props) {
    const {requiredData} = props

    return(
        <Container maxWidth="lg">
            <Grid container spacing={3}>
             {requiredData && requiredData.map(el => 
                <Grid item xs={3} key={el.idCategory}>
                    <CategoryItem {...el}/>
                </Grid>
                )}
            </Grid>
        </Container>
    )
}