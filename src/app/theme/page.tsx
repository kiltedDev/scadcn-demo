'use client';

import { useEffect, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import tinycolor from 'tinycolor2';
import { ThemeRadioGroup } from './components/theme-radio-group';
import { ThemeHeader } from './components/theme.header';
import { VariableInputGroup } from './components/variable-input-group';
import { ThemeVariables, defaultValues } from './theme.constants';
import { type ThemeFormFields } from './theme.types';

const desiredRegexFormat = new RegExp(/^\d{1,3}\s\d{1,3}(\.\d+)?%?\s\d{1,3}(\.\d+)?%?$/);

function formatHSL(userInput: string): string {
  if (!userInput || desiredRegexFormat.test(userInput)) return userInput;

  // any invalid string will be translated to black by tinycolor
  const hslString = tinycolor(userInput).toHslString();

  return hslString.replace(/hsl\((\d+),\s*(\d+%),\s*(\d+%)\)/, '$1 $2 $3');
}

export default function ThemePage() {
  const darkElementRef = useRef<HTMLElement | null>(null);

  const methods = useForm<ThemeFormFields>({ defaultValues });
  const values = methods.watch();
  const prevValuesRef = useRef<ThemeFormFields>(values);

  useEffect(() => {
    Object.entries(values).forEach(([name, value]) => {
      if (name === 'showAll' || name === 'groupId') return;
      const parsedValue = formatHSL(value as string);
      if (
        parsedValue !== prevValuesRef.current[name as keyof ThemeFormFields] &&
        name in defaultValues
      ) {
        darkElementRef.current?.style.setProperty(`--${name}`, parsedValue);
      }
    });

    prevValuesRef.current = values;
  }, [values]);

  useEffect(() => {
    if (!darkElementRef.current) {
      darkElementRef.current = document.querySelector('.dark')!;
    }

    ThemeVariables.forEach(themeVariable => {
      const value =
        darkElementRef.current &&
        getComputedStyle(darkElementRef.current).getPropertyValue(`--${themeVariable}`);

      if (value) {
        methods.setValue(themeVariable, value);
      }
    });
  }, [methods]);

  return (
    <FormProvider {...methods}>
      <div className="h-full flex flex-col gap-4 grow">
        <ThemeHeader />
        <div className="flex gap-4 grow">
          <ThemeRadioGroup />
          <VariableInputGroup />
        </div>
      </div>
    </FormProvider>
  );
}
