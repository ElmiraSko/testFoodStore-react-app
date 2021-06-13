import React from 'react';
import {useState, useEffect} from 'react';
import { getAllCategories } from '../../api';
import Typography from '@material-ui/core/Typography';
import ListPresentation from './ListPresentation';
import Preloader from './Preloader';

export default function Home() {

    // Состояние
    const [categories, setCategories] = useState([])

    // Запрос на получение данных
    useEffect( () => {
        getAllCategories().then(data => {
            setCategories(data.categories)
        })
    }, [])

    // возвращаем (передаем) данные
    return(
        <>            
            {!categories.length ? <Preloader /> : 
                <div>
                <Typography variant="h5" style={{textAlign: 'center', margin: "1rem 0 2rem 0", color: 'grey'}}>
                    Категории блюд 
                </Typography>
                <ListPresentation requiredData = {categories} />
                </div>
            }                
        </>
    )
}