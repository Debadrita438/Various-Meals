import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import Colors from '../constants/Colors';
import { useSelector } from 'react-redux';

const CategoryItemDetailScreen = props => {
    const catId = props.route.params.categoryId;
    const meals = useSelector(state => state.meals.meals);

    const displayedMeals = meals.filter(meal => meal.categoryIds.indexOf(catId) >= 0); 

    const renderMealItem = itemData => {
        return(
            <MealItem 
                title={itemData.item.title}
                image={itemData.item.imageUrl}
            />  
        );
    }

    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals} renderItem={renderMealItem} style={{width: '90%'}} />
         </View>
    );
}

CategoryItemDetailScreen.navigationOptions = navData => {
    const catId = navData.route.params.categoryId;

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.name,
        headerShown: true,
        headerStyle: {
            backgroundColor: Colors.primary
        },
        headerTintColor: 'white'
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
 
export default CategoryItemDetailScreen;