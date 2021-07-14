import React, {useState, useEffect} from 'react';
import { getAllCategories } from '../../../api';
import Typography from '@material-ui/core/Typography';
import ListPresentation from './components/ListPresentation';
import Preloader from '../Preloader';

export default function Home() {

    // Состояние
    const [categories, setCategories] = useState([]);

    // Запрос на получение данных
    useEffect( () => {
        getAllCategories().then(
            data => {
            setCategories(data.categories);
            }
        )
    }, []);
    
    return(
        <>
            {!categories.length ? <Preloader /> : 
                <div>
                <Typography variant="h5" style={{textAlign: 'center', margin: "1rem 0 2rem 0", color: '#a67800'}}>
                Categories of dishes
                </Typography>
                <ListPresentation requiredData = {categories} />
                </div>
            }                
        </>
    )
}