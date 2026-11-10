#!/usr/bin/env bash
# Downloads Celia's photos from her current Squarespace site and writes
# optimized WebP copies to public/images (full size + 800px thumbnail).
# Also writes src/image-sizes.json (intrinsic sizes for width/height and srcset).
# Sources, credits, and licensing status are tracked in ASSETS.md.
set -euo pipefail

CDN="https://images.squarespace-cdn.com/content/v1/57164493d51cd48f82af7ad1"
OUT="$(dirname "$0")/../public/images"
TMP="$(mktemp -d)"
mkdir -p "$OUT"

while read -r name path; do
  [ -z "$name" ] && continue
  curl -sfL "$CDN/$path?format=2500w" -o "$TMP/$name"
  magick "$TMP/$name" -auto-orient -strip -resize '1800x1800>' -quality 80 "$OUT/$name.webp"
  magick "$TMP/$name" -auto-orient -strip -resize '800x800>' -quality 76 "$OUT/$name-sm.webp"
  echo "  $name"
done <<'LIST'
portrait-noir 1520394153324-WW1KAORWGOUHL1QVMWUF/unnamed.jpg
portrait-bw 1495510358775-QS1K3ZANMTZAAIZUPW8X/170504_CeliaH_876-2.jpg
portrait-teal-1 1518500207757-J3YZPICHS4NUB1YXS2PR/IMG_2218.JPG
portrait-teal-2 1518500210131-FXUKWIT3ZWVE0MA913GO/IMG_2204.JPG
portrait-teal-3 1518500207499-WMFW9LEMHVS3NAG10RKZ/341A5BD6-4CD3-4B63-8412-B00DBB915665.JPG
portrait-black 1548088346508-QDD22ZFRA82RE1K9VOZV/Celia+Hottenstein+Headshot+2019.jpg
portrait-light 1548884924840-ZBR0JROW9G1ZL7WTLU1N/Hottenstein_Celia_3244_ret4.jpg
portrait-grey 1548884917031-82K2ZQ9HDRI96MVV3E40/Hottenstein_Celia_3046_ret3.jpg
headshot-green d0a7f867-5d81-4452-a692-dc31c7eabca1/Celia+Hottenstein+Headshot.jpeg
philadelphia-house 1461097997499-KYZKBZF9WL8Y0MAL4O6X/IMG_2309.jpg
phantom-stage 1461107287378-QAZ4CSI01NISTC276UYE/tumblr_nk8d0bq5Ho1sk5qfno1_1280.jpg
phantom-mirror 1461107310481-FTTA3UAB55L9ZY1EWDQD/Matthew+Murphy+Phantom+backstage+1.jpg
phantom-quickchange 1461107409150-UCFAKPNY9CTC2WBR4H86/a32cee_48727b540d0741068f0f40d3b04e9d1e.jpg
phantom-masquerade 1461107461721-05A2FH08WK8QSHKFZT2C/IMG_1989.jpg
phantom-backstage 1461107516008-7C6MRD6UL4G16IZC6LCB/IMG_6741.jpg
phantom-opening-la 1517257929999-B892VT6M6E0QM155UPPI/040A47D6-BA55-4C38-8E7D-DADF6AFAD303.JPG
dm-bella 1531978053343-567MQGN8RBSKMZFMSH9R/Bella1.jpg
dm-bella-2 1531978598139-V47HRQCXF4MS4XCGIKDK/bella2.jpg
dm-opening 1531978156733-QOXVB6FAOZGSAZAM1WEV/DMopeningnight.jpg
lily-secret-garden 1550629364520-GTYKXI787XTNCTPAFR44/Lily+Secret+Garden.jpg
glinda-gown-2019 1608865419918-QFO6S4IVNFKROQMDYA3P/A2149E33-A4B1-48A9-BFF1-669F36319C36.jpg
glinda-shoba 1608865797262-YKUBF6UR4H1M6SXH1F1C/D50E0CB1-72EF-44CF-ABDB-1DC85F09A5A6.jpg
glinda-debut-2020 1614714283785-23MBKVNKYLTT0TEWPJQ5/EE4A3192-62FC-4D86-A10C-ABD2211DB937.JPG
tour-dancing 1687887117344-J7ILN2QZSOTLC7SWN48K/23-5wickedmunchkin_0004r.jpg
tour-witches 1687887106714-4CHJ44JKRKJNQKHYOD5A/23-5wickedmunchkin_0162r.jpg
tour-dorm 1687887100973-ZM5DDJO6L13QPXM0VLE3/23-5wickedmunchkin_0034r.jpg
tour-bubble 1699635351339-GRV3Y38BIWVL5FU08SGP/23-5wickedmunchkin_0190r-4.jpg
tour-arrival 1699635530681-BYAR4GRI01MOV3TDULKB/23-5wickedmunchkin_0273r+copy.jpg
tour-bubble-company 1699635530681-P5Z3I7N411E43SIIXB10/23-5wickedmunchkin_0280r+copy.jpg
tour-popular 1699635668061-VE6YVRNJ7VKGC5PN1DHG/23-5wickedmunchkin_0023r+copy.jpg
tour-field 1699635668237-XC62OJ4UPF1R4MK1HHUI/23-5wickedmunchkin_0229r+copy.jpg
tour-emerald 1699635670312-PO4PF976U78KNR0D9FUL/23-5wickedmunchkin_0135r+copy.jpg
tour-farewell 1699635670460-FWU2PGJ4RBR35JCFM1I1/23-5wickedmunchkin_0222r+copy.jpg
tour-ozdust 1699635532991-4W51TFAIFU71FXLV676S/23-5wickedmunchkin_0339r+copy.jpg
zebra-canyon 1614714145164-WDWKOTFVKBMMEW1TT67M/IMG_1021.JPG
golden-hour 1614732472323-SLS4OAYNRUANXQ04OU27/3H1A8072.jpg
london-tea 1461097548462-IASYAGQA5VMAFI2MD1UY/IMG_3771.jpg
albuquerque 1531977968179-3L1QSXOLQU5767WBCTIX/Abq1.jpg
LIST

rm -rf "$TMP"
"$(dirname "$0")/image-sizes.sh"
