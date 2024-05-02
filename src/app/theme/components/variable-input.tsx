import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { EvergreenThemeVariables, ThemeGroups } from '../theme.constants';
import { type ThemeFormFields } from '../theme.types';
import { VariableSwatch } from './variable-swatch';

type VariableInputProps = {
  variable: string;
};

export const VariableInput = ({ variable }: VariableInputProps) => {
  const { watch } = useFormContext<ThemeFormFields>();

  const currentGroupId = watch('groupId');
  const showAll = watch('showAll');

  const isEvergreen = useMemo(() => {
    return EvergreenThemeVariables.includes(variable);
  }, [variable]);

  const currentVariables = useMemo(() => {
    return ThemeGroups.find(group => group.id === currentGroupId)?.variables ?? [];
  }, [currentGroupId]);

  const showCard = useMemo(
    () => showAll || isEvergreen || currentVariables.includes(variable),
    [currentVariables, isEvergreen, showAll, variable],
  );

  return (
    <Controller
      name={variable}
      render={({ field }) => (
        <div className={cn('space-y-2', !showCard && 'hidden')}>
          <Label htmlFor={variable} className="capitalize flex gap-2">
            <VariableSwatch value={variable} />
            {variable}
          </Label>
          <Input id={variable} {...field} />
        </div>
      )}
    />
  );
};
