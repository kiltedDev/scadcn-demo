import { CardDemoCardContent } from './components/group-cards/card-demo.card-content';
import { ContextMenuCardContent } from './components/group-cards/context-menu.card-content';
import { DefaultButtonCardContent } from './components/group-cards/default-button.card-content';
import { DestructiveButtonCardContent } from './components/group-cards/destructive-button.card-content';
import { InputCardContent } from './components/group-cards/input.card-content';
import { OutlineButtonCardContent } from './components/group-cards/outline-button.card-content';
import { SecondaryButtonCardContent } from './components/group-cards/secondary-button.card-content';
import { TabsCardContent } from './components/group-cards/tabs.card-content';

export const ThemeGroupIds = {
  primaryButton: 'primary-button',
  secondaryButton: 'secondary-button',
  destructiveButton: 'destructive-button',
  ghostButton: 'ghost-button',
  outlineButton: 'outline-button',
  linkButton: 'link-button',
  input: 'input',
  card: 'card',
  tabs: 'tabs',
  contextMenu: 'context-menu',
} as const;

const ThemeVariables = [
  'background',
  'foreground',
  'card',
  'card-foreground',
  'popover',
  'popover-foreground',
  'primary',
  'primary-foreground',
  'secondary',
  'secondary-foreground',
  'muted',
  'muted-foreground',
  'accent',
  'accent-foreground',
  'destructive',
  'destructive-foreground',
  'border',
  'input',
  'ring',
] as const;
export const CheckableThemeVariables: string[] = Array.from(ThemeVariables);

const defaultValues = {
  groupId: ThemeGroupIds.primaryButton,
  showAll: false,
  background: '',
  foreground: '',
  card: '',
  'card-foreground': '',
  popover: '',
  'popover-foreground': '',
  primary: '',
  'primary-foreground': '',
  secondary: '',
  'secondary-foreground': '',
  muted: '',
  'muted-foreground': '',
  accent: '',
  'accent-foreground': '',
  destructive: '',
  'destructive-foreground': '',
  border: '',
  input: '',
  ring: '',
};

const EvergreenThemeVariables = ['background', 'foreground', 'card', 'card-foreground'];

const ThemeGroups = [
  {
    id: ThemeGroupIds.primaryButton,
    title: 'Button',

    component: <DefaultButtonCardContent />,
    variables: ['primary', 'primary-foreground', 'ring'],
  },
  {
    id: ThemeGroupIds.secondaryButton,
    title: 'Secondary Button',

    component: <SecondaryButtonCardContent />,
    variables: ['secondary', 'secondary-foreground', 'ring'],
  },
  {
    id: ThemeGroupIds.destructiveButton,
    title: 'Destructive Button',

    component: <DestructiveButtonCardContent />,
    variables: ['destructive', 'destructive-foreground', 'ring'],
  },
  {
    id: ThemeGroupIds.outlineButton,
    title: 'Outline Button',
    component: <OutlineButtonCardContent />,
    variables: ['muted-foreground', 'accent', 'accent-foreground', 'input', 'ring'],
  },
  {
    id: ThemeGroupIds.input,
    title: 'Input',
    component: <InputCardContent />,
    variables: ['muted-foreground', 'border', 'input'],
  },
  {
    id: ThemeGroupIds.card,
    title: 'Card',
    description: 'Card Description',
    component: <CardDemoCardContent />,
    variables: ['muted-foreground', 'border'],
  },
  {
    id: ThemeGroupIds.contextMenu,
    title: 'Context Menu',
    component: <ContextMenuCardContent />,
    variables: ['popover', 'popover-foreground'],
  },
  {
    id: ThemeGroupIds.tabs,
    title: 'Tabs',
    component: <TabsCardContent />,
    variables: ['muted', 'muted-foreground'],
  },
];

export { EvergreenThemeVariables, ThemeGroups, ThemeVariables, defaultValues };
