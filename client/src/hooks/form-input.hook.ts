import { useState } from 'react';

export interface FormInput {
  value: string;
  onChange: (e: any) => void;
}

export interface FormInputConfig {
  name: string;
  type?: string;
  height?: string;
}

export function useFormInput(
  initialValue: string,
  config: FormInputConfig,
): FormInput & FormInputConfig {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: any): void {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
    type: 'text',
    ...config,
    ...{ 'data-test': `${config.name}`},
  };
}
