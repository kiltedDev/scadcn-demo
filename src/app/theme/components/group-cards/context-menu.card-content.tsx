import { Badge } from '@/components/ui/badge';
import { CardContent } from '@/components/ui/card';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import { VariableSwatch } from '../variable-swatch';

export const ContextMenuCardContent = () => {
  return (
    <CardContent>
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <Badge>Right Click Me</Badge>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem className="gap-2">
            <VariableSwatch value="popover" />
            Background: popover
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem className="gap-2">
            <VariableSwatch value="popover-foreground" />
            Text: popover-foreground
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </CardContent>
  );
};
