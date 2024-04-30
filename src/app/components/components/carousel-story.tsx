'use client';

import { madeForYouAlbums } from '@/app/music/data/albums';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

export const CarouselStory = () => {
  const [mainCarouselApi, setMainCarouselApi] = useState<CarouselApi>();
  const [thumbnailCarouselApi, setThumbnailCarouselApi] = useState<CarouselApi>();
  const [_selectedIndex, setSelectedIndex] = useState(0);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!mainCarouselApi || !thumbnailCarouselApi) return;
      mainCarouselApi.scrollTo(index);
      thumbnailCarouselApi.scrollTo(index);
    },
    [mainCarouselApi, thumbnailCarouselApi],
  );

  const onSelect = useCallback(() => {
    if (!mainCarouselApi || !thumbnailCarouselApi) return;
    setSelectedIndex(mainCarouselApi.selectedScrollSnap());
    thumbnailCarouselApi.scrollTo(mainCarouselApi.selectedScrollSnap());
  }, [mainCarouselApi, thumbnailCarouselApi, setSelectedIndex]);

  useEffect(() => {
    if (!mainCarouselApi) return;
    onSelect();
    mainCarouselApi.on('select', onSelect);
    mainCarouselApi.on('reInit', onSelect);
  }, [mainCarouselApi, onSelect]);

  return (
    <div className="max-w-3xl p-12 flex flex-col gap-2">
      <Carousel
        opts={{
          loop: true,
          align: 'center',
        }}
        setApi={setMainCarouselApi}
      >
        <CarouselContent>
          {madeForYouAlbums.map(album => (
            <CarouselItem key={album.name}>
              <Image
                src={album.cover}
                alt={album.name}
                width={300}
                height={300}
                className={cn('h-auto w-auto object-cover transition-all mx-auto')}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel
        opts={{
          loop: true,
          align: 'center',
        }}
        setApi={setThumbnailCarouselApi}
      >
        <CarouselContent>
          {madeForYouAlbums.map((album, index) => (
            <CarouselItem
              key={album.name}
              className="basis-1/3"
              onClick={() => onThumbClick(index)}
            >
              <Image
                src={album.cover}
                alt={album.name}
                width={150}
                height={150}
                className={cn(
                  'h-auto w-auto object-cover transition-all hover:scale-105 aspect-square',
                )}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
