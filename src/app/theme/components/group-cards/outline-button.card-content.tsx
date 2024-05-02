import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { Tooltip, TooltipTrigger } from '@/components/ui/tooltip';
import { ThemeTooltipContent } from './theme-tooltip-content';

export const OutlineButtonCardContent = () => {
  return (
    <CardContent>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Outline</Button>
        </TooltipTrigger>
        <ThemeTooltipContent
          values={{
            background: 'background',
            text: 'muted-foreground',
            'hover-background': 'accent',
            'hover-text': 'accent-foreground',
            border: 'input',
            'focus ring': 'ring',
          }}
        />
      </Tooltip>
    </CardContent>
  );
};
