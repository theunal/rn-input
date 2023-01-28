import React from "react";
import { useEffect, useRef, useState } from "react";
import { TouchableOpacity, Text, Image, View, TextInput, Animated, ScrollView } from "react-native";
import { globalStyles } from "../global/globalStyles";

const RnSelect2 = ({
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderRadius,

    marginTop,

    titleFontSize,
    titleFontWeight,
    titleMarginBottom,

    fontSize,
    backgroundColor,
    selectedBackgroundColor,
    borderBottomColor,
    borderBottomWidth,

    placeholder,
    firstValue,
    setSelected,
    errors,
    touched,
    errorMessage,

    data
}: any) => {
    const [selectedval, setSelectedVal] = useState<any>('');
    const [focus, setFocus] = useState(false);
    const [dropdown, setDropdown] = useState<boolean>(false);
    const animatedvalue = useRef(new Animated.Value(0)).current;
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
    const [filtereddata, setFilteredData] = useState(data);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const slidedown = () => {
        setDropdown(true);
        Animated.timing(animatedvalue, {
            toValue: 200,
            duration: 500,
            useNativeDriver: false
        }).start();
    }

    const slideup = () => Animated.timing(animatedvalue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
    }).start(() => setDropdown(false));

    return (
        <View style={{ marginTop: marginTop ? marginTop : undefined }}>
            <Text style={{
                fontSize: titleFontSize ? titleFontSize : 15,
                fontWeight: titleFontWeight ? titleFontWeight : '600',
                marginBottom: titleMarginBottom ? titleMarginBottom : 5
            }}>
                Şehir
            </Text>
            <TouchableOpacity
                style={{
                    backgroundColor: backgroundColor ? backgroundColor : 'white',
                    height: fontSize ? fontSize : 15 * 2.5,
                    borderRadius: borderRadius ? borderRadius : 3,
                    borderBottomColor: (errors && touched) ? 'red' : 'white',
                    borderBottomWidth: borderBottomWidth ? borderBottomWidth : 2,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
                onPress={() => {
                    if (!dropdown)
                        slidedown();
                    else
                        slideup();
                }}>
                <Text style={{
                    marginLeft: 15,
                    flex: 1,
                    paddingTop: 2
                }}>
                    {selectedval !== '' ? selectedval : firstValue ? firstValue : '-'}
                </Text>
                <Image
                    source={
                        !dropdown ?
                            require('../assets/chevron.png') :
                            require('../assets/chevron-reverse.png')
                    }
                    resizeMode='contain'
                    style={{ width: 20, height: 20, marginRight: 15 }}
                />
            </TouchableOpacity>

            {
                (dropdown)
                &&
                <Animated.View style={[{ maxHeight: animatedvalue }, { marginTop: 2 }]}>
                    <View style={{

                        height: fontSize ? fontSize : 15 * 2.5,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: backgroundColor ? backgroundColor : 'white',
                        borderBottomColor: focus ? (borderBottomColor ? borderBottomColor : 'darkblue') : 'white',
                        borderBottomWidth: 2,
                        borderBottomLeftRadius: borderBottomLeftRadius ? borderBottomLeftRadius : 3,
                        borderBottomRightRadius: borderBottomRightRadius ? borderBottomRightRadius : 3,
                        borderTopLeftRadius: borderTopLeftRadius ? borderTopLeftRadius : 3,
                        borderTopRightRadius: borderTopRightRadius ? borderTopRightRadius : 3
                    }}>
                        <Image
                            source={require('../assets/search.png')}
                            resizeMode='contain'
                            style={{ width: 20, height: 20, marginLeft: 10 }}
                        />
                        <TextInput style={{
                            paddingTop: 3,
                            flex: 1,
                            fontSize: fontSize ? fontSize : 15,
                            height: fontSize ? fontSize : 15 * 2.5,
                            paddingLeft: 15
                        }}
                            onChangeText={(val: any) => {
                                let result = data.filter((item: any) => {
                                    val.toLowerCase();
                                    return item.value.toLowerCase().search(val.toLowerCase()) > -1;
                                });
                                setFilteredData(result);
                            }}
                            placeholder={placeholder ? placeholder : 'Arama ifadesi giriniz'}
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            selectionColor={borderBottomColor ? borderBottomColor : 'darkblue'}
                        />
                    </View>
                    <ScrollView style={{
                        backgroundColor: backgroundColor ? backgroundColor : 'white',
                        borderBottomLeftRadius: borderBottomLeftRadius ? borderBottomLeftRadius : 3,
                        borderBottomRightRadius: borderBottomRightRadius ? borderBottomRightRadius : 3,
                        marginTop: 2
                    }}>
                        {
                            filtereddata.map((x: any) => (
                                <TouchableOpacity
                                    key={x.id.toString()}
                                    onPress={() => {
                                        setSelectedOptionIndex(x.id);
                                        setSelectedVal(x.value);
                                        setSelected(x.id);
                                        setFilteredData(data);
                                        setFocus(false);
                                        slideup();
                                    }}
                                    style={{
                                        backgroundColor: selectedOptionIndex === x.id ?
                                            selectedBackgroundColor ? selectedBackgroundColor : '#ebe8e8' : undefined,
                                        height: fontSize ? fontSize : 15 * 2.5,
                                        marginTop: 5,
                                        marginBottom: 5,
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                    <Text style={{ marginLeft: 15 }}>
                                        {x.value}
                                    </Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </Animated.View>
            }

            {
                (errors && touched) &&
                <Text style={globalStyles.errorText}>
                    {errorMessage}
                </Text>
            }
        </View>
    )
}

export default RnSelect2;