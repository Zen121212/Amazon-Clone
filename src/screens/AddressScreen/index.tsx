import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import countryList from 'country-list';
import Button from '../../components/Button';
import styles from './styles';


const countries = countryList.getData();

const AddressScreen = () => {
    const [country, setCountry] = useState(countries[0].code)
    const [fullname, setFullname] = useState('')
    const [phone, setPhone] = useState('')

    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState('');


    const [city, setCity] = useState('')

    const onCheckout = () => {
        if (addressError) {
            Alert.alert('Fix all field errors before submitting')
            return;
        }
        if (!fullname) {
            Alert.alert('Please fill in the fullname field')
            return;
        }
        if (!phone) {
            Alert.alert('Please fill in the phone number field')
            return;
        }
        console.warn('Success!')
    }


    const validateAddress = () => {
        if (address.length < 3) {
            setAddressError('Address too short')
        }
        if (address.length > 10) {
            setAddressError('Address too long')
        }
    }


    console.log(fullname)
    return (
        <View style={styles.root}>
            <View style={styles.row}>
                <Picker

                    selectedValue={country}
                    onValueChange={setCountry}
                >
                    {countries.map(country => (
                        <Picker.Item value={country.code} label={country.name} />
                    ))}
                </Picker>
            </View>
            {/* Full name */}
            <View style={styles.row}>
                <Text style={styles.label}>Full name(first and last name)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Full name"
                    value={fullname}
                    onChangeText={setFullname}

                />
            </View>
            {/* Phone number */}
            <View style={styles.row}>
                <Text style={styles.label}>Phone number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Phone number"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType={'phone-pad'}

                />
            </View>
            {/* Address */}
            <View style={styles.row}>
                <Text style={styles.label}>Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Address"
                    value={address}
                    onEndEditing={validateAddress}
                    onChangeText={text => {
                        setAddress(text);
                        setAddressError('')
                    }}


                />
                {!!addressError && (
                    <Text style={styles.errorLabel}> {addressError}</Text>
                )}
            </View>
            {/* city */}
            <View style={styles.row}>
                <Text style={styles.label}>City</Text>
                <TextInput
                    style={styles.input}
                    placeholder="City"
                    value={city}
                    onChangeText={setCity}


                />
            </View>
            <Button text='Checkout' onPress={onCheckout} />
        </View >
    )
}

export default AddressScreen;