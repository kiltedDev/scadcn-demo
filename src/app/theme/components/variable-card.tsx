import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Controller } from 'react-hook-form';

type VariableCardProps = {
  variable: string;
};

export const VariableCard = ({ variable }: VariableCardProps) => {
  return (
    <Controller
      name={variable}
      render={({ field }) => (
        <div className="space-y-2">
          <Label htmlFor={variable} className="capitalize">
            {variable}
          </Label>
          <Input id={variable} {...field} />
        </div>
      )}
    />
  );
};
