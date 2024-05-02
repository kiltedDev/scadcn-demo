import { cn } from '@/lib/utils';
import { CheckableThemeVariables } from '../theme.constants';

export const VariableSwatch = ({ value }: { value: string }) => {
  if (!CheckableThemeVariables.includes(value)) return null;
  return <div className={cn('h-4 w-4 rounded-sm border', `bg-${value}`)} />;
};
