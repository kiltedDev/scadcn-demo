import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroupItem } from '@/components/ui/radio-group';
import { useCallback } from 'react';
import { useFormContext, type ControllerRenderProps } from 'react-hook-form';
import { type ThemeFormFields } from '../theme.types';

type ThemeRadioCardProps = {
  field: ControllerRenderProps<ThemeFormFields, 'groupId'>;
  themeGroup: {
    id: string;
    title: string;
    description?: string;
    component: React.ReactNode;
  };
};

export const ThemeRadioCard = ({ themeGroup, field }: ThemeRadioCardProps) => {
  const { setValue } = useFormContext();

  const handleCardClick = useCallback(() => {
    setValue('groupId', themeGroup.id);
  }, [themeGroup.id, setValue]);

  return (
    <div
      key={themeGroup.id}
      className="group"
      data-state={field.value === themeGroup.id ? 'checked' : 'unchecked'}
    >
      <RadioGroupItem
        {...field}
        value={themeGroup.id}
        id={themeGroup.id}
        className="peer sr-only"
        onClick={handleCardClick}
      />
      <Label htmlFor={themeGroup.id}>
        <Card className="h-full flex flex-col justify-between items-center cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground group-data-[state=checked]:border-primary">
          <CardHeader className="text-center">
            <CardTitle className="text-lg">{themeGroup.title}</CardTitle>
            {themeGroup.description && <CardDescription>{themeGroup.description}</CardDescription>}
          </CardHeader>
          {themeGroup.component}
        </Card>
      </Label>
    </div>
  );
};
