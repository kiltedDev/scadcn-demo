import { cn } from '@/lib/utils';
import { type EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

type ThumbnailGalleryProps = {
  slides: number[];
  options?: EmblaOptionsType;
};

const ThumbnailGallery = (props: ThumbnailGalleryProps) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla max-w-3xl	m-auto">
      <div className="embla__viewport overflow-hidden" ref={emblaMainRef}>
        <div className="embla__container flex touch-pan-y -ml-4">
          {slides.map(index => (
            <div className="embla__slide flex-[0_0_100%] min-w-0 pl-4" key={index}>
              <div className="embla__slide__number shadow-inner shadow-muted rounded-3xl text-6xl flex items-center justify-center h-80">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs mt-3">
        <div className="embla-thumbs__viewport overflow-hidden" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container flex -ml-3 gap-2">
            {slides.map(index => (
              <ThumbnailButton
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

type ThumbnailButtonProps = {
  selected: boolean;
  index: number;
  onClick: () => void;
};

export const ThumbnailButton = (props: ThumbnailButtonProps) => {
  const { selected, index, onClick } = props;

  return (
    <div
      className={cn(
        'embla-thumbs__slide flex-[0_0_22%] md:flex-[0_0_15%] min-w-0 pl-3 text-muted',
        selected && 'embla-thumbs__slide--selected text-foreground',
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number rounded-lg bg-transparent touch-manipulation flex cursor-pointe shadow-inner shadow-muted  text-xl items-center justify-center h-24 w-24"
      >
        {index + 1}
      </button>
    </div>
  );
};

export default ThumbnailGallery;
