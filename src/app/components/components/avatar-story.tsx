import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const AvatarStory = () => {
  return (
    <div>
      <Avatar>
        <AvatarImage src="/avatars/02.png" />
        <AvatarFallback>JL</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="/non-existent/02.png" />
        <AvatarFallback>NO</AvatarFallback>
      </Avatar>
    </div>
  );
};
