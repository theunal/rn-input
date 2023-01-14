import React, { useState } from 'react';
import { TextInput, Text, View, TextProps } from 'react-native';
import { globalStyles, styles } from '../global/globalStyles';

const RnTextInput = ({
    textarea,
    text,
    errors,
    touched,
    maxLength,
    placeholder,
    onChangeText,
    value,
    errorMessage,
    marginBottom
}: any) => {

    const [style, setStyle] = useState(textarea ? 'primaryTextArea' : 'primaryInput')

    return (
        <View style={{ marginBottom: marginBottom != undefined ? marginBottom : 20 }}>
            <Text style={styles.inputName as TextProps}>
                {text}
            </Text>

            <TextInput style={
                (errors && touched) ?
                    (textarea ? styles['errorTextArea'].input : styles['errorInput'].input)
                    : styles[style].input
            }
                maxLength={maxLength != undefined ? maxLength : 250}
                onFocus={() => setStyle(textarea ? 'secondaryTextarea' : 'secondaryInput')}
                onEndEditing={() => setStyle(textarea ? 'primaryTextArea' : 'primaryInput')}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}>
            </TextInput>

            {
                (errors && touched) &&
                <Text style={globalStyles.errorText}>
                    {errorMessage}
                </Text>
            }
        </View >
    )
}

export default RnTextInput