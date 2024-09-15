import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../styles';
import Footer from '../Footer/Footer';

const PromptPage = () => {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.page}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.header}>what's on your mind?</Text>
          <TextInput
            style={styles.input}
            placeholder="how are you, really?"
            value={inputText}
            onChangeText={setInputText}
            multiline
            numberOfLines={10}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Song');
            }}
          >
            <Text style={styles.buttonText}>submit</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
      <Footer />
    </KeyboardAvoidingView >
  );
};

export default PromptPage;
