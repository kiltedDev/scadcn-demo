import { CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipTrigger } from '@/components/ui/tooltip';
import { ThemeTooltipContent } from './theme-tooltip-content';

export const TabsCardContent = () => {
  return (
    <CardContent>
      <Tabs defaultValue="selected">
        <TabsList>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <TabsTrigger value="selected" id="selected">
                  Selected
                </TabsTrigger>
              </div>
            </TooltipTrigger>
            <ThemeTooltipContent
              values={{
                background: 'background',
                text: 'foreground',
              }}
            />
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <TabsTrigger value="unselected" id="unselected">
                  Unselected
                </TabsTrigger>
              </div>
            </TooltipTrigger>
            <ThemeTooltipContent
              values={{
                background: 'muted',
                text: 'muted-foreground',
              }}
            />
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <TabsTrigger value="disabled" disabled aria-disabled>
                  Disabled
                </TabsTrigger>
              </div>
            </TooltipTrigger>
            <ThemeTooltipContent
              values={{
                background: 'background',
                text: 'muted',
                opacity: '50%',
              }}
            />
          </Tooltip>
        </TabsList>
      </Tabs>
    </CardContent>
  );
};
