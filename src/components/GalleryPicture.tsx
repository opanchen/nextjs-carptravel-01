import { addLeadingZero } from "@helpers";

type Props = {
  order: number;
  name: string;
  desc: string;
};

const GalleryPicture = ({ order, name, desc }: Props) => {
  const num = addLeadingZero(order);
  return (
    <picture className="block tablet:w-415px">
      <source
        srcSet={`/assets/images/mobile/gallery/gallery-${num}-${name}.webp 1x,
        /assets/images/mobile/gallery/gallery-${num}-${name}@2x.webp 2x`}
        media="(max-width: 767px)"
        type="image/webp"
      />
      <source
        srcSet={`/assets/images/tablet/gallery/gallery-${num}-${name}.webp 1x,
        /assets/images/tablet/gallery/gallery-${num}-${name}@2x.webp 2x`}
        media="(max-width: 1279px)"
        type="image/webp"
      />
      <source
        srcSet={`/assets/images/desktop/gallery/gallery-${num}-${name}.webp 1x,
        /assets/images/desktop/gallery/gallery-${num}-${name}@2x.webp 2x`}
        media="(min-width: 1280px)"
        type="image/webp"
      />

      <source
        srcSet={`/assets/images/mobile/gallery/gallery-${num}-${name}.jpg 1x,
        /assets/images/mobile/gallery/gallery-${num}-${name}@2x.jpg 2x`}
        media="(max-width: 767px)"
      />
      <source
        srcSet={`/assets/images/tablet/gallery/gallery-${num}-${name}.jpg 1x,
        /assets/images/tablet/gallery/gallery-${num}-${name}@2x.jpg 2x`}
        media="(max-width: 1279px)"
      />
      <source
        srcSet={`/assets/images/desktop/gallery/gallery-${num}-${name}.jpg 1x,
        /assets/images/desktop/gallery/gallery-${num}-${name}@2x.jpg 2x`}
        media="(min-width: 1280px)"
      />

      <img
        className="object-cover"
        loading="lazy"
        src={`/assets/images/mobile/gallery/gallery-${num}-${name}.jpg`}
        alt={desc}
        sizes="(min-width: 1200px) 606px, (min-width: 768px) 415px, 100vw"
      />
    </picture>
  );
};

export default GalleryPicture;
