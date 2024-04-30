import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AvatarStory } from './components/avatar-story';
import { ButtonStory } from './components/button-story';
import { CardStory } from './components/card-story';
import { CarouselStory } from './components/carousel-story';

const components = [
  {
    value: 'avatar',
    component: <AvatarStory />,
  },
  {
    value: 'button',
    component: <ButtonStory />,
  },
  {
    value: 'card',
    component: <CardStory />,
  },
  {
    value: 'carousel',
    component: <CarouselStory />,
  },
];

export default function ComponentsPage() {
  return (
    <Tabs defaultValue="avatar" className="h-full flex flex-row gap-2">
      <TabsList className="flex-col h-fit">
        {components.map(({ value }) => (
          <TabsTrigger key={value} value={value} className="capitalize">
            {value}
          </TabsTrigger>
        ))}
      </TabsList>
      {components.map(({ value, component }) => (
        <TabsContent key={value} value={value} className="h-full">
          {component}
        </TabsContent>
      ))}
    </Tabs>
  );
}
