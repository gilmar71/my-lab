/* React/Next */
import Image from 'next/image';

/* Api/Data */
// import { baseImage, baseImageGallery } from 'src/services/api';

/* Styles */
import * as S from './styles';

interface NextImageProps {
  isBaseUrl?: boolean;
  isBaseImageGallery?: boolean;
  src: string | undefined;
  alt: string;
  layout: 'fill' | 'fixed' | 'intrinsic' | 'responsive' | 'raw' | undefined;
  loading?: 'eager' | 'lazy' | undefined;
  priority?: boolean;
}
export function NextImage({
  src,
  layout,
  isBaseUrl,
  isBaseImageGallery,
  alt,
}: NextImageProps) {
  return (
    <S.Image>
      <Image
        alt={alt}
        src={
          src
            ? isBaseUrl
              ? baseImage + src
              : isBaseImageGallery
              ? baseImageGallery + src
              : src
            : '/images/default-image.webp'
        }
        layout={layout}
      />
    </S.Image>
  );
}
