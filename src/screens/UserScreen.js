// src/screens/UserScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const UserScreen = ({ route }) => {
  const [user, setUser] = useState({});
  const [modifiedUser, setModifiedUser] = useState({});
  const { userName } = route.params;

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(
          `https://assignment.8848digitalerp.com/api/method/assignment.API.specific_user.get_specific?user_name=${userName}`
        );
        setUser(response.data);
        setModifiedUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }

    fetchUser();
  }, [userName]);

  const handleSave = async () => {
    try {
      await axios.put(
        `https://assignment.8848digitalerp.com/api/resource/Assignment/${userName}`,
        modifiedUser
      );
      // Handle successful save
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  return (
    <View>
      <Text>User Details</Text>
      <Text>User Name</Text>
      <TextInput
        value={modifiedUser.name}
        onChangeText={(text) =>
          setModifiedUser({ ...modifiedUser, name: text })
        }
      />
      <Text>User Age</Text>
      <TextInput
        value={modifiedUser.age}
        onChangeText={(text) =>
          setModifiedUser({ ...modifiedUser, age: text })
        }
      />
      <Text>User Gender</Text>
      <TextInput
        value={modifiedUser.gender}
        onChangeText={(text) =>
          setModifiedUser({ ...modifiedUser, gender: text })
        }
      />
      <Text>User Company Name</Text>
      <TextInput
        value={modifiedUser.company_name}
        onChangeText={(text) =>
          setModifiedUser({ ...modifiedUser, company_name: text })
        }
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default UserScreen;
