#!/usr/bin/env bash
# Writes src/image-sizes.json: { name: [width, height, smallWidth] } for every
# image in public/images, so <img> tags can reserve space and offer a srcset.
set -euo pipefail
DIR="$(dirname "$0")/.."
OUT="$DIR/src/image-sizes.json"
{
  echo '{'
  sep=''
  for f in "$DIR"/public/images/*.webp; do
    name="$(basename "$f" .webp)"
    [[ "$name" == *-sm ]] && continue
    read -r w h <<<"$(magick identify -format '%w %h' "$f")"
    sw="$(magick identify -format '%w' "$DIR/public/images/$name-sm.webp")"
    printf '%s  "%s": [%s, %s, %s]' "$sep" "$name" "$w" "$h" "$sw"
    sep=$',\n'
  done
  printf '\n}\n'
} > "$OUT"
