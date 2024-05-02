import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { TooltipContent } from '@/components/ui/tooltip';
import { VariableSwatch } from '../variable-swatch';

type ThemeTooltipContentProps = {
  values: Record<string, string>;
};

export const ThemeTooltipContent = ({ values }: ThemeTooltipContentProps) => {
  return (
    <TooltipContent>
      <Table>
        <TableBody>
          {Object.entries(values).map(([key, value]) => (
            <TableRow key={key}>
              <TableCell>{key}</TableCell>
              <TableCell>
                <VariableSwatch value={value} />
              </TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TooltipContent>
  );
};
