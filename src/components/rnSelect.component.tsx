import { SelectList } from "react-native-dropdown-select-list";
import { GlobalColors } from '../global/colors';
import { globalStyles } from '../global/globalStyles';
import { View, Text } from 'react-native';
import * as React from 'react';

const RnSelect = (
    {
        title,
        onChangeText,
        data,
        firstValue,
        errors,
        touched,
        errorMessage,
        borderColor,
        touchedBorderColor,
        errorBorderColor,
        marginBottom,
        labelFontSize,
        labelFontWeight,
        notFoundText,
        searchPlaceholder
    }: any) => {
    return (
        <View style={{ marginBottom: marginBottom != undefined ? marginBottom : 20 }}>
            <Text style={{
                fontSize: labelFontSize != undefined ? labelFontSize : 15,
                fontWeight: labelFontWeight != undefined ? labelFontWeight : 'bold',
                marginLeft: 1
            }}>
                {title}
            </Text>

            <SelectList
                boxStyles={{
                    marginTop: 5,
                    borderColor: (errors && touched) ? (errorBorderColor != undefined ? errorBorderColor : 'red') :
                        touchedBorderColor != undefined ? touchedBorderColor : GlobalColors.gray1
                }}
                inputStyles={{
                    padding: 0,
                    fontSize: 15
                }}
                dropdownStyles={{
                    borderColor: borderColor != undefined ? borderColor : '#DCDEE3',
                    marginTop: 0
                }}
                dropdownItemStyles={{
                }}
                dropdownTextStyles={{
                    fontSize: 15,
                    borderColor: borderColor != undefined ? borderColor : '#DCDEE3',
                    borderWidth: 1,
                    borderRadius: 5,
                    padding: 7
                }}
                notFoundText={notFoundText != undefined ? notFoundText : 'Kayıt bulunamadı.'}
                placeholder={firstValue != undefined ? firstValue : '-'}
                searchPlaceholder={searchPlaceholder != undefined ? searchPlaceholder : 'Arama ifadesi giriniz'}
                setSelected={onChangeText}
                data={data}
                save='key'
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

export default RnSelect