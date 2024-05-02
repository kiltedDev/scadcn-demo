import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { Tooltip, TooltipTrigger } from '@/components/ui/tooltip';
import { ThemeTooltipContent } from './theme-tooltip-content';

export const SecondaryButtonCardContent = () => {
  return (
    <CardContent>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Secondary</Button>
        </TooltipTrigger>
        <ThemeTooltipContent
          values={{
            background: 'secondary',
            text: 'secondary-foreground',
            'focus ring': 'ring',
          }}
        />
      </Tooltip>
    </CardContent>
  );
};
