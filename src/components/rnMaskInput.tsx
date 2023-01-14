import { useState } from 'react';
import { globalStyles, styles } from '../global/globalStyles';
import { TextInputMask } from 'react-native-masked-text';
import { View, Text, TextProps } from 'react-native';
import * as React from 'react';

const RnMaskInput = ({
    marginBottom,
    text,
    errors,
    touched,
    textarea,
    mask,
    value,
    onChangeText,
    placeholder,
    errorMessage
}: any) => {
    const [style, setStyle] = useState('primaryInput');

    return (
        <View style={{ marginBottom: marginBottom != undefined ? marginBottom : 20 }}>
            <Text style={styles.inputName as TextProps}>
                {text}
            </Text>

            <TextInputMask
                style={
                    (errors && touched) ?
                        (textarea ? styles['errorTextArea'].input : styles['errorInput'].input)
                        : styles[style].input
                }
                type={'custom'}
                options={{
                    mask: mask != undefined ? mask : '0 (999) 999-9999'
                }}
                value={value}
                onChangeText={onChangeText}
                onFocus={() => setStyle('secondaryInput')}
                onEndEditing={() => setStyle('primaryInput')}
                placeholder={placeholder}
            />

            {
                (errors && touched) &&
                <Text style={globalStyles.errorText}>
                    {errorMessage}
                </Text>
            }
        </View>
    )
}

export default RnMaskInput


