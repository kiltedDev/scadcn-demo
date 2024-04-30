'use client';

import { useEffect, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import tinycolor from 'tinycolor2';
import { VariableCard } from './components/variable-card';
import { ThemeVariables, defaultValues } from './theme.constants';
import { type ThemeFormFields } from './theme.types';

const desiredRegexFormat = new RegExp(/^\d{1,3}\s\d{1,3}%?\s\d{1,3}%?$/);

function formatHSL(userInput: string): string {
  if (desiredRegexFormat.test(userInput)) return userInput;

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
      const parsedValue = formatHSL(value);
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 gap-x-4">
        {ThemeVariables.map(themeVariable => (
          <VariableCard key={themeVariable} variable={themeVariable} />
        ))}
      </div>
    </FormProvider>
  );
}
