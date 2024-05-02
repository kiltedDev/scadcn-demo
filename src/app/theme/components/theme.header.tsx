import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useCallback } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export const ThemeHeader = () => {
  const { setValue, control } = useFormContext<{ showAll: boolean }>();

  const handleCheckedChange = useCallback(
    (checked: boolean) => {
      setValue('showAll', checked);
    },
    [setValue],
  );

  return (
    <div className="grid grid-cols-12 gap-8">
      <h2 className="text-2xl font-bold tracking-tight col-span-12">Theme Exploration</h2>
      <p className="text-muted-foreground col-span-8">
        Adjust the values in the inputs below to find the values you need or want in your theme!
        Inputs can ingest hsl, hex, rgb or rgba values. If you want to use percentages. Alternately,
        you can stick with the formats used in the CSS variables (HSL, but without the hsl() wrapper
        or commas)
      </p>
      <div className="col-span-4 flex gap-1">
        <Label htmlFor="showAll" className="flex flex-col gap-1 cursor-pointer">
          <span>Show All Variables</span>
          <span className="font-normal leading-snug text-muted-foreground">
            Choose to show all theme variables or only those relevant to the selected component.
          </span>
        </Label>
        <Controller
          name="showAll"
          control={control}
          render={({ field }) => (
            <Switch
              id="showAll"
              {...field}
              value={undefined}
              onCheckedChange={handleCheckedChange}
            />
          )}
        />
      </div>
    </div>
  );
};
