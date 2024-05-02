import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tooltip, TooltipTrigger } from '@/components/ui/tooltip';
import { ThemeTooltipContent } from './theme-tooltip-content';

export const InputCardContent = () => {
  return (
    <CardContent>
      <Tooltip>
        <TooltipTrigger asChild>
          <Input placeholder="placeholder" />
        </TooltipTrigger>
        <ThemeTooltipContent
          values={{
            'input background': 'background',
            'placeholder text': 'muted-foreground',
            'input border': 'input',
            'input focus ring': 'ring',
          }}
        />
      </Tooltip>
    </CardContent>
  );
};
