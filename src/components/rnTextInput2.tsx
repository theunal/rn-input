import { Text, TextInput, View } from 'react-native';
import { globalStyles } from '../global/globalStyles';
import React, { useState } from 'react';

const RnTextInput2 = ({
  titleFontSize,
  titleFontWeight,
  titleMarginBottom,

  fontSize,
  borderRadius,
  backgroundColor,
  paddingLeft,
  borderBottomColor,
  borderBottomWidth,

  placeholder,
  onChangeText,
  value,
  marginBottom,
  errors,
  touched,
  errorMessage
}: any) => {
  const [focus, setFocus] = useState(false);
  return (
    <View style={{ marginBottom: marginBottom != undefined ? marginBottom : 20 }}>
      <Text style={{
        fontSize: titleFontSize ? titleFontSize : 15,
        fontWeight: titleFontWeight ? titleFontWeight : '600',
        marginBottom: titleMarginBottom ? titleMarginBottom : 5
      }}>
        Input Title
      </Text>
      <TextInput style={focus ?
        styles(fontSize, borderRadius, backgroundColor, paddingLeft, borderBottomColor, borderBottomWidth).textFocus :
        styles(fontSize, borderRadius, backgroundColor, paddingLeft, borderBottomColor, borderBottomWidth).text}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        selectionColor={borderBottomColor ? borderBottomColor : 'darkblue'}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value} />

      {
        (errors && touched) &&
        <Text style={globalStyles.errorText}>
          {errorMessage}
        </Text>
      }
    </View>
  );
}

function styles(fontSize: number, borderRadius: number, backgroundColor: string,
  paddingLeft: number, borderBottomColor: string, borderBottomWidth: number) {
  return {
    text: getStyles(fontSize, borderRadius, backgroundColor, paddingLeft, borderBottomWidth),
    textFocus: {
      ...getStyles(fontSize, borderRadius, backgroundColor, paddingLeft, borderBottomWidth),
      borderBottomColor: borderBottomColor ? borderBottomColor : 'darkblue',
      borderBottomWidth: borderBottomWidth ? borderBottomWidth : 2
    }
  }
}

function getStyles(fontSize: number, borderRadius: number, backgroundColor: string,
  paddingLeft: number, borderBottomWidth: number) {
  return {
    height: fontSize ? fontSize : 15 * 2.5,
    borderRadius: borderRadius ? borderRadius : 3,
    backgroundColor: backgroundColor ? backgroundColor : 'white',
    fontSize: fontSize ? fontSize : 15,
    paddingLeft: paddingLeft ? paddingLeft : 10,
    borderBottomColor: backgroundColor ? backgroundColor : 'white',
    borderBottomWidth: borderBottomWidth ? borderBottomWidth : 2
  }
}

export default RnTextInput2;

