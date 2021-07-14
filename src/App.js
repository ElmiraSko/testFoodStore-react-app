import React, { useState } from 'react';
import Home from './components/pages/main/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MealsByCategory from './components/pages/meals/MealsByCategory';
import Check from './components/pages/basket/Check';
import Countries from './components/pages/countries/Countries';
import MealsByCountry from './components/pages/meals/MealsByCountry';
import MealRecipe from './components/pages/mealRecipe/MealRecipe';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// const queryClient = new QueryClient();
function App() {
  // Состояние
  const [mealCount, setMealCount] = useState(0)
  const [mealArray, setMealArray] = useState([])

  // Покупка блюда, наполнение карзины
  const buyMeal = (item) => {
    setMealCount(prev => prev + 1);
    // console.log(item)
    const helpArr = mealArray
    const element = helpArr.find(elem => elem.id === item.id)
    if(element) {
      element.count = element.count + 1
    } else {
      helpArr.push(item)
    }  
    setMealArray(helpArr)
  }

  // Удаление блюда из карзины
  function removeMeal(id) {
    const element = mealArray.find(elem => elem.id === id)
    const helpArr = mealArray.filter(item => item.id !== id)
    setMealCount(prev => prev - element.count);
    setMealArray(helpArr)
  }

  return (
    <>
       <Router >
          <Header  mealCount={mealCount}/>
            <div className="content">
              <Switch>
               <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/category/:catName">
                  <MealsByCategory buyMeal={buyMeal} />
                </Route> 
                <Route exact path="/meals/:areaName">
                  <MealsByCountry buyMeal={buyMeal} />
                </Route> 
                <Route exact path="/check">
                  <Check mealCount={mealCount} mealArray={mealArray} removeMeal={removeMeal}/>
                </Route>
                <Route exact path="/meal-recipe/:mealId">
                  <MealRecipe />
                </Route> 
                <Route exact path="/countries">
                  <Countries />
                </Route> 
                <Redirect to="/" />
              </Switch>  
            </div>
          <Footer/>
       </Router>
    </>
  );
}

export default App;

