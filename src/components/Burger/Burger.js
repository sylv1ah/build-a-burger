import React from 'react';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = () => {
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;