export type ThemeFormFields = {
  groupId: string;
  showAll: boolean;
  ['background']: string;
  ['foreground']: string;
  ['card']: string;
  ['card-foreground']: string;
  ['popover']: string;
  ['popover-foreground']: string;
  ['primary']: string;
  ['primary-foreground']: string;
  ['secondary']: string;
  ['secondary-foreground']: string;
  ['muted']: string;
  ['muted-foreground']: string;
  ['accent']: string;
  ['accent-foreground']: string;
  ['destructive']: string;
  ['destructive-foreground']: string;
  ['border']: string;
  ['input']: string;
  ['ring']: string;
};

export type ThemeGroup = {
  id: string;
  title: string;
  description: string;
  component: React.ReactNode;
};
