import React, { useLayoutEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { SearchBar } from 'react-native-elements';
import { useSelector } from 'react-redux';

import CategoryGridTile from '../components/CategoryGridTile';
import CustomHeaderButton from '../components/CustomHeaderButton';
import Colors from '../constants/Colors';

const HomeScreen = (props) => {
    const { navigation } = props;
    const [input, setInput] = useState('');
    const [openSearchbar, setOpenSearchbar] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item 
                        title='Search'
                        iconName='md-search'
                        iconSize={23}
                        onPress={openSearchbarHandler}
                    />
                </HeaderButtons>
            )
        })
    }, [navigation])

    const openSearchbarHandler = () => {
        setOpenSearchbar(true);
        navigation.setOptions({
            headerShown: false
        })
    }

    const renderGridItem = (itemData) => {
        return (
        <CategoryGridTile
            title={itemData.item.name}
            color={itemData.item.color}
            onSelect={() => {
                props.navigation.navigate('CategoryDetails', {
                    categoryId: itemData.item.id,
                });
            }}
        />
        );
    };

    const setInputHandler = text => {
        setInput(text);
    }

    const changeHeaderHandler = () => {
        setOpenSearchbar(false);
        navigation.setOptions({
            headerShown: true
        })
    }

    const categories = useSelector(state => state.categories.categories);
    const filteredCategories = categories.filter(cat =>
        cat.name.toLowerCase().includes(input.toLowerCase())
    );

  
    return (
        <React.Fragment>
            {
                openSearchbar &&
                <SearchBar
                    lightTheme
                    clearButtonMode='always'
                    containerStyle={{backgroundColor: Colors.primary}}
                    inputStyle={{backgroundColor: 'white', borderRadius: 10}}
                    inputContainerStyle={{backgroundColor: Colors.primary}}
                    onChangeText={setInputHandler}
                    searchIcon={{color: 'white'}}
                    clearIcon={{color: 'white'}}
                    onClear={changeHeaderHandler}
                    value={input}
                    color='black'

                />
            }
            <FlatList data={filteredCategories} renderItem={renderGridItem} numColumns={2} />
        </React.Fragment>
    );
};

export default HomeScreen;