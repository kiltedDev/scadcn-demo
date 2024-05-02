import { RadioGroup } from '@/components/ui/radio-group';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Controller, useFormContext } from 'react-hook-form';
import { ThemeGroups } from '../theme.constants';
import { type ThemeFormFields } from '../theme.types';
import { ThemeRadioCard } from './theme-radio.card';

export const ThemeRadioGroup = () => {
  const { control } = useFormContext<ThemeFormFields>();

  return (
    <TooltipProvider>
      <Controller
        name="groupId"
        control={control}
        render={({ field }) => (
          <RadioGroup {...field} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ThemeGroups.map(group => (
              <ThemeRadioCard key={group.id} themeGroup={group} field={field} />
            ))}
          </RadioGroup>
        )}
      />
    </TooltipProvider>
  );
};
