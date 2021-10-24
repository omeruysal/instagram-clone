import React, {useState} from 'react';
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';
import {useNavigation} from '@react-navigation/native';

const SignupForm = () => {
  const navigation = useNavigation();
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    username: Yup.string().required().min(2, 'Username is required'),
    password: Yup.string()
      .required()
      .min(8, 'Your password has to have at least 8 characters'),
  });
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{email: '', username: '', password: ''}}
        onSubmit={values => {}}
        validationSchema={LoginFormSchema}
        validateOnMount={true}>
        {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholderTextColor="gray"
                placeholder="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.username.length || values.username.length >= 2
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholderTextColor="gray"
                placeholder="Username"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="username"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 6
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholderTextColor="gray"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>

            <TouchableOpacity
              style={styles.button(isValid)}
              onPress={handleSubmit}>
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
            <View style={styles.signUpContainer}>
              <Text>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={{color: '#6BB0F5'}}>Log in</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  wrapper: {marginTop: 70},
  inputField: {
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 12,
    backgroundColor: '#FAFAFA',
  },
  text: {
    color: '#6BB0F5',
  },
  textCell: {
    marginHorizontal: 10,
    alignItems: 'flex-end',
    marginBottom: 25,
  },
  button: isValid => ({
    backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4,
    marginHorizontal: 10,
    marginTop: 30,
  }),
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 19,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
});
