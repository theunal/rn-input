import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { RnTextInput, RnMaskInput, RnSelect, RnTextInput2, RnSelect2 } from 'rn-input';
import * as yup from 'yup';
import { Formik } from "formik";

export default function App() {

  const [data, setData] = useState('');

  const initialValue = {
    name: '',
    phoneNumber: '',
    cityId: 0
  }

  const formSchema = yup.object()
    .shape({

      name: yup.string()
        .min(3, ({ min }) => `En az ${min} karakter girilmelidir.`)
        .required('Ad soyad boş bırakılamaz.'),

      phoneNumber: yup.string()
        .min(16, ({ min }) => `En az ${min - 6} karakter girilmelidir.`)
        .required('Telefon numarası boş bırakılamaz.'),

      cityId: yup.number().required().min(1)
    })

  const cityData = [
    { id: 1, value: 'İstanbul' },
    { id: 2, value: 'Ankara' }
  ]

  const submit = (values: any) => {
    values.cityId = parseInt(values.cityId);
    setData(JSON.stringify(values))
  }

  return (
    <View style={{ padding: 15, backgroundColor: '#EBE8E8', flex: 1 }}>

      <Formik
        initialValues={initialValue}
        validationSchema={formSchema}
        onSubmit={submit}>
        {
          ({ values, handleChange, handleSubmit, errors, touched, setFieldValue }: any) =>
          (
            <>
              <RnTextInput
                placeholder='Ad soyad giriniz'
                value={values.name}
                onChangeText={handleChange('name')}
                text={'Ad soyad'}
                errors={errors.name ? true : false}
                touched={touched.name ? true : false}
                errorMessage={errors.name} />

              <RnTextInput2
                borderBottomColor={'green'}
                placeholder='Ad soyad giriniz'
                value={values.name}
                onChangeText={handleChange('name')}
                text={'Ad soyad'}
                errors={errors.name ? true : false}
                touched={touched.name ? true : false}
                errorMessage={errors.name} />

              <RnMaskInput
                placeholder='Telefon numaranızı giriniz'
                text={'Telefon'}
                value={values.phoneNumber}
                onChangeText={handleChange('phoneNumber')}
                errors={errors.phoneNumber ? true : false}
                touched={touched.phoneNumber ? true : false}
                errorMessage={errors.phoneNumber} />

              <RnSelect
                data={cityData}
                firstValue={'-'}
                title={'Şehir'}
                onChangeText={(x: any) => {
                  setFieldValue('cityId', x);
                  // operations...
                }}
                errors={errors.cityId ? true : false}
                touched={touched.cityId ? true : false}
                errorMessage={'Şehir seçilmedi.'}
              />

              <RnSelect2
                data={cityData}
                firstValue={'-'}
                title={'Şehir'}
                setSelected={(x: any) => {
                  setFieldValue('cityId', x);
                  // operations...
                }}
                errors={errors.cityId ? true : false}
                touched={touched.cityId ? true : false}
                errorMessage={'Şehir seçilmedi.'}
              />

              <Button title='submit' onPress={handleSubmit} />
            </>
          )
        }
      </Formik>

      {
        data &&
        <Text>
          {data}
        </Text>
      }

    </View>
  );
}
