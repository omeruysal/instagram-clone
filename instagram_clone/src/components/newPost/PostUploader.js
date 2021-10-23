import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Image, Button} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A URL is mandatory'),
  caption: Yup.string().max(2200, 'Caption has reached the character limit'),
});

const PostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState();
  const PLACE_HOLDER_URL = 'https://i.stack.imgur.com/y9DpT.jpg';
  return (
    <View style={{margin: 20}}>
      <Formik
        initialValues={{caption: '', imageUrl: ''}}
        onSubmit={v => console.log(v)}
        validateOnMount={true}
        validationSchema={uploadPostSchema}>
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View>
              <View style={styles.innerContainer}>
                <Image
                  style={styles.image}
                  source={{
                    uri: PLACE_HOLDER_URL,
                  }}
                />
                <TextInput
                  placeholder="Write a caption ...."
                  placeholderTextColor="gray"
                  style={styles.caption}
                  onChangeText={handleChange('caption')}
                  onBlur={handleBlur('caption')}
                  value={values.caption}
                  multiline={true}
                />
              </View>
              <View style={styles.divider}></View>
              <TextInput
                placeholder="Enter image URL"
                placeholderTextColor="gray"
                style={{color: 'white'}}
                onChangeText={handleChange('imageUrl')}
                onBlur={handleBlur('imageUrl')}
                value={values.imageUrl}
              />
              {errors.imageUrl && (
                <Text style={{fontSize: 10, marginTop: 5, color: 'red'}}>
                  {errors.imageUrl}
                </Text>
              )}
            </View>
            <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
          </>
        )}
      </Formik>
    </View>
  );
};

export default PostUploader;

const styles = StyleSheet.create({
  image: {height: 100, width: 100, marginBottom: 15},
  innerContainer: {
    flexDirection: 'row',
  },
  caption: {
    color: 'white',
    marginHorizontal: 20,
    fontSize: 15,
  },
  divider: {
    borderBottomColor: 'gray',
    borderWidth: 1,
    borderBottomWidth: 0.5,
    marginBottom: 15,
  },
});
