# O'zbegim Taomlari — landing sahifa

Next.js 16 + React 19 + TypeScript. Ikki til (UZ / RU), mobilga moslashgan.

## Ishga tushirish

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Kontentni o'zgartirish

- **Menyu, narxlar, telefon, manzil, ijtimoiy tarmoqlar, rasmlar** → `lib/data.ts`
- **Sahifadagi barcha matnlar (UZ/RU)** → `lib/i18n.ts`
- **Ranglar va dizayn** → `app/globals.css` (`:root` dagi o'zgaruvchilar)
- **Logotip** → `public/logo.png`

## Vaqtinchalik qiymatlar (keyin almashtiring)

- `CONTACT.instagram / telegram / facebook` — hozircha vaqtinchalik havola
- `CONTACT.mapEmbed / mapLink` — hozircha Marg'ilon markazi
- Bron formasi namuna: ma'lumot hech qayerga yuborilmaydi
  (`components/Booking.tsx` → `submit` ichiga Telegram bot / API ulanadi)
- Salatlar, gazaklar, non, ichimlik va shirinliklar narxlari taxminiy
