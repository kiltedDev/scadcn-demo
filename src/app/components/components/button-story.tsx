import { Button } from '@/components/ui/button';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Fragment } from 'react';

const buttonVariants = ['default', 'secondary', 'destructive', 'link', 'outline', 'ghost'] as const;

const buttonSizes = ['sm', 'default', 'lg'] as const;

export const ButtonStory = () => {
  return (
    <div className="grid grid-cols-[repeat(7,auto)] gap-2">
      <div className="m-auto">icon</div>
      {buttonVariants.map(variant => (
        <Button key={`${variant}-icon`} variant={variant} size="icon" className="mx-auto">
          <GitHubLogoIcon />
        </Button>
      ))}

      {buttonSizes.map(size => (
        <Fragment key={size}>
          <div className="m-auto">{size}</div>
          {buttonVariants.map(variant => (
            <Button
              key={`${variant}-${size}`}
              variant={variant}
              size={size}
              className="w-fit mx-auto"
            >
              {variant}
            </Button>
          ))}
        </Fragment>
      ))}
      {/* {buttonVariants.map(variant => (
        <div key={`${variant}-col`} className="flex flex-col gap-2">
          {buttonSizes.map(size => (
            <Button key={`${variant}-${size}`} variant={variant} size={size}>
              {size === 'default' ? variant : size}
            </Button>
          ))}
        </div>
      ))} */}
    </div>
  );
};
