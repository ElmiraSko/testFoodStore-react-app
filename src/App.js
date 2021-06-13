import React, { useState } from 'react';
import Home from './components/pages/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import MealsByCategory from './components/pages/MealsByCategory'
import Check from './components/pages/Check'
// import LocationCard from './components/pages/location/LocationCard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// const queryClient = new QueryClient();
function App() {

const [mealCount, setMealCount] = useState(0)
const [mealArray, setMealArray] = useState([])

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

function removeMeal(id) {
  const element = mealArray.find(elem => elem.id === id)
  const helpArr = mealArray.filter(item => item.id !== id)
  setMealCount(prev => prev - element.count);
  // console.log(helpArr)
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
                  <MealsByCategory buyMeal={buyMeal}/>
                </Route> 
                <Route exact path="/check">
                  <Check mealCount={mealCount} mealArray={mealArray} removeMeal={removeMeal}/>
                </Route>
                {/* <Route exact path="/location-card">
                  <LocationCard />
                </Route>  */}
                <Redirect to="/" />
              </Switch>  
            </div>
          <Footer/>
       </Router>
    </>
  );
}

export default App;

