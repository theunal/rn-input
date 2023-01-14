import { StyleSheet } from 'react-native';
import { GlobalColors } from './colors';

export const globalStyles = StyleSheet.create({
    errorText: {
        fontSize: 10,
        color: 'red',
        marginLeft: 1
    }
})

export const inputBaseStyle = StyleSheet.create({
    input: {
        borderRadius: 10,
        marginTop: 5,
        padding: 10,
        fontSize: 15,
        borderColor: '#DCDEE3',
        borderWidth: 1
    }
})

export const styles = {
    inputName: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 1
    },
    primaryInput: StyleSheet.create({
        ...inputBaseStyle
    }),
    secondaryInput: StyleSheet.create({
        ...inputBaseStyle,
        input: {
            ...inputBaseStyle.input,
            borderColor: GlobalColors.blue1,
            shadowRadius: 1
        }
    }),
    primaryTextArea: StyleSheet.create({
        ...inputBaseStyle,
        input: {
            ...inputBaseStyle.input,
            height: 80
        }
    }),
    secondaryTextarea: StyleSheet.create({
        ...inputBaseStyle,
        input: {
            ...inputBaseStyle.input,
            borderColor: GlobalColors.blue1,
            shadowRadius: 1,
            height: 80
        }
    }),
    errorInput: {
        ...inputBaseStyle,
        input: {
            ...inputBaseStyle.input,
            borderColor: 'red',
            shadowRadius: 1
        }
    },
    errorTextArea: {
        ...inputBaseStyle,
        input: {
            ...inputBaseStyle.input,
            borderColor: 'red',
            shadowRadius: 1,
            height: 80
        }
    }
}