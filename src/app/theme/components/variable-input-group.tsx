import { ThemeVariables } from '../theme.constants';
import { VariableInput } from './variable-input';

export const VariableInputGroup = () => {
  return (
    <div className="grow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 gap-x-4">
        {ThemeVariables.map(themeVariable => (
          <VariableInput key={themeVariable} variable={themeVariable} />
        ))}
      </div>
    </div>
  );
};
