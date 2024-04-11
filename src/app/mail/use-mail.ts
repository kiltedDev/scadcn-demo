import { atom, useAtom } from 'jotai';

import type { Mail } from '@/app/mail/data';
import { mails } from '@/app/mail/data';

type Config = {
  selected: Mail['id'] | null;
};

const configAtom = atom<Config>({
  selected: mails[0]?.id ?? null,
});

export function useMail() {
  return useAtom(configAtom);
}
