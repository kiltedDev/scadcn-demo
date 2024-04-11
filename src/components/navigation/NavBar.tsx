'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

const examples = [
  {
    name: 'Mail',
    href: '/mail',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/mail',
  },
  {
    name: 'Dashboard',
    href: '/dashboard',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/dashboard',
  },
  {
    name: 'Cards',
    href: '/cards',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/cards',
  },
  {
    name: 'Tasks',
    href: '/tasks',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/tasks',
  },
  {
    name: 'Playground',
    href: '/playground',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/playground',
  },
  {
    name: 'Forms',
    href: '/forms',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/forms',
  },
  {
    name: 'Music',
    href: '/music',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/music',
  },
  {
    name: 'Authentication',
    href: '/authentication',
    code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/authentication',
  },
];

type ExamplesNavProps = React.HTMLAttributes<HTMLDivElement>;

export function NavBar({ className, ...props }: ExamplesNavProps) {
  const pathname = usePathname();

  return (
    <div className="relative">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn('mb-4 flex items-center', className)} {...props}>
          {examples.map((example, index) => (
            <Link
              href={example.href}
              key={example.href}
              className={cn(
                'flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary',
                pathname?.startsWith(example.href) || (index === 0 && pathname === '/')
                  ? 'bg-muted font-medium text-primary'
                  : 'text-muted-foreground',
              )}
            >
              {example.name}
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  );
}
