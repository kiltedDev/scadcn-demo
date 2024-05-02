import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { Tooltip, TooltipTrigger } from '@/components/ui/tooltip';
import { ThemeTooltipContent } from './theme-tooltip-content';

export const DestructiveButtonCardContent = () => {
  return (
    <CardContent>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="destructive">Destructive</Button>
        </TooltipTrigger>
        <ThemeTooltipContent
          values={{
            background: 'destructive',
            text: 'destructive-foreground',
            'focus ring': 'ring',
          }}
        />
      </Tooltip>
    </CardContent>
  );
};
