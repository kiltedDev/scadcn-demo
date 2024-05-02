import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { Tooltip, TooltipTrigger } from '@/components/ui/tooltip';
import { ThemeTooltipContent } from './theme-tooltip-content';

export const DefaultButtonCardContent = () => {
  return (
    <CardContent>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Default</Button>
        </TooltipTrigger>
        <ThemeTooltipContent
          values={{
            background: 'primary',
            text: 'primary-foreground',
            'focus ring': 'ring',
          }}
        />
      </Tooltip>
    </CardContent>
  );
};
