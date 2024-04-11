import { api } from '@/trpc/server';
import { Showcase } from './_components/showcase';

export default async function Home() {
  const hello = await api.post.hello({ text: 'from tRPC' });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center dark bg-background text-foreground">
      <Showcase />
    </main>
  );
}
