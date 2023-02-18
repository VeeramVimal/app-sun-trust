import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';
import {TextInput} from 'react-native-paper';
import {AppColors, AppFonts} from '../themes';

export default function CustomInput({
  Name,
  keyName,
  required = true,
  errors,
  control,
  message,
  patternValue,
  patternMessage,
  inputType,
  onSelectType,
  minValue,
  minMessage,
  maxValue,
  maxMesage,
  secureTextEntry,
  validate,
  mode,
}) {
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Controller
          control={control}
          rules={{
            required: {value: required, message: message},
            validate: validate ? validate : null,
            pattern: {
              value: patternValue,
              message: patternMessage,
            },
            minLength: {
              value: minValue,
              message: minMessage,
            },
            maxLength: {
              value: maxValue,
              message: maxMesage,
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              inputType={inputType}
              label={Name}
              mode={mode ? mode : 'flat'}
              style={styles.emailInputStyle}
              onBlur={onBlur}
              onChangeText={e => {
                onChange(e);
                onSelectType ? onSelectType(e) : null;
              }}
              value={value}
              activeOutlineColor={AppColors.secondarylightBlue}
              activeUnderlineColor={AppColors.secondarylightBlue}
              secureTextEntry={secureTextEntry}
            />
          )}
          name={keyName}
        />
      </View>
      {errors?.[keyName] && (
        <View style={styles.errorView}>
          <Text
            style={styles.errorStyle}>{`${errors?.[keyName].message}`}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  emailInputStyle: {
    justifyContent: 'center',
    includeFontPadding: false,
    fontSize: 14,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: AppColors.background.white,
    marginTop: 10,
    padding: 0,
    borderRadius: 4,
    width: '85%',
  },
  errorView: {
    width: '85%',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    marginLeft: '5%',
  },
  errorStyle: {
    color: 'red',
    fontFamily: AppFonts.family.regular,
  },
});
