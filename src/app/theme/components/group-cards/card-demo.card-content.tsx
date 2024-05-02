import { CardContent } from '@/components/ui/card';
import { Tooltip, TooltipTrigger } from '@/components/ui/tooltip';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { ThemeTooltipContent } from './theme-tooltip-content';

export const CardDemoCardContent = () => {
  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <CardContent className="flex gap-1">
            Card Content
            <InfoCircledIcon className="text-muted-foreground" />
          </CardContent>
        </TooltipTrigger>
        <ThemeTooltipContent
          values={{
            background: 'card',
            'title/content text': 'card-foreground',
            'description text': 'muted-foreground',
            border: 'border',
          }}
        />
      </Tooltip>
    </>
  );
};
