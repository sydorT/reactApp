import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const CssTextField = styled(TextField)({
  '&label.Mui-focused': {
    color: '#A1A1A1',
  },
  '& .MuiInput-underline:after': {
    borderColor: '#E8E8E8',
    borderWidth: '1px'
  },
  '& .MuiInput-underline:before': {
    borderColor: '#E8E8E8',
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderColor: '#9C42E2',
    borderWidth: '1px'
  },
  '& .MuiInput-underline.Mui-focused:after': {
    borderColor: '#9C42E2',
  },
  '& .Mui-error.Mui-focused:after': {
    borderColor: '#E74C3C',
  },
  '& .MuiInputLabel-root': {
    color: '#A1A1A1',
    fontSize: '14px',
    fontWeight: 500
  },
  '& .MuiFormHelperText-root': {
    color: '#E74C3C',
    fontSize: '12px',
    fontWeight: 600,
    marginTop: '8px'
  }
});

const FormInputText = ({ name, control, rules, muiProps }) => {
  return <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field: { onChange, value }, fieldState}) => (
      <>
        <CssTextField
          error={fieldState.error}
          {...muiProps}
          helperText={fieldState.error && fieldState.error.message}
          margin='none'
          fullWidth
          variant='standard'
          sx={{ mt: '7px' }}
          value={value || ''}
          onChange={onChange}
        />
      </>
    )}
  />;
};

export default FormInputText;
