import React from "react";
import { View, Text } from "react-native";
import { useForm } from "react-hook-form";

export default function UserSettingsForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <View>
        <form onSubmit={handleSubmit(onSubmit)}>
            </form>
    </View>
  );
}