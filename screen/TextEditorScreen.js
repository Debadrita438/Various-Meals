import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { StyleSheet, ScrollView, Alert } from 'react-native';
import { actions, RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';

import CustomHeaderButton from '../components/CustomHeaderButton';
import * as editorActions from '../store/actions/editorAction';

const TextEditorScreen = props => {
    let { navigation } = props;
    const RichText = useRef();
    const scrollRef = useRef();
    const [article, setArticle] = useState();
    const dispatch = useDispatch();

    const inputChangeHandler = enteredText => {
        setArticle(enteredText)
    }

    const saveDataHandler = useCallback(() => {
        if(article) {
            dispatch(editorActions.saveData(article));
            setArticle('');
            navigation.goBack();
        } else {
            Alert.alert(
                'Invalid',
                'You can\'t save anything while the text editor is empty.',
                [
                    { text: 'Okay' }
                ]
            )
        }
    }, [dispatch, article])

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Save"
                iconName='md-checkmark' 
                onPress={saveDataHandler}
              />
            </HeaderButtons>
          )
        });
    }, [saveDataHandler]);

    cursorPositionHandler = scrollY => {
        scrollRef.current.scrollTo({y: scrollY - 30, animated: true})
    }

    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <RichEditor 
                containerStyle={styles.editor}
                placeholder={'Enter Your Text Here...'}
                ref={RichText}
                style={styles.rich}
                useContainer={true}
                onChange={inputChangeHandler}
                onCursorPosition={cursorPositionHandler}
            />
            <RichToolbar 
                style={styles.richBar}
                editor={RichText}
                getEditor={() => RichText}
                actions={[
                    actions.keyboard,
                    actions.setBold,
                    actions.setItalic,
                    actions.setUnderline,
                    actions.setStrikethrough,
                    actions.insertBulletsList,
                    actions.insertOrderedList,
                    actions.alignLeft,
                    actions.alignCenter,
                    actions.alignRight
                    
                ]}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 20
    },
    editor: {
        backgroundColor: "black",
        borderColor: "black",
        borderWidth: 1,
    },
    rich: {
        minHeight: 300,
        flex: 1
    },
    richBar: {
        height: 50
    },
    button: {
        alignItems: 'flex-end'
    }
})

export default TextEditorScreen;