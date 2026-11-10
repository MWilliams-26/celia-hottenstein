import type { ImgHTMLAttributes } from 'react'
import imageSizes from './image-sizes.json'

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'width' | 'height'> & {
  /** File name in public/images, without extension. */
  name: string
  alt: string
}

const dims: Record<string, number[]> = imageSizes

/**
 * One of Celia's photos, with its intrinsic size (so the layout never jumps
 * while it loads) and a srcset of the 800px and full-size WebP copies.
 * Pass `sizes` to describe how wide the image renders.
 */
export function Photo({ name, sizes = '100vw', loading = 'lazy', ...rest }: Props) {
  const [w, h, smallW] = dims[name]
  return (
    <img
      src={`/images/${name}.webp`}
      srcSet={`/images/${name}-sm.webp ${smallW}w, /images/${name}.webp ${w}w`}
      sizes={sizes}
      width={w}
      height={h}
      loading={loading}
      decoding="async"
      {...rest}
    />
  )
}
