# 🍽️ Kanak Cafe & Restaurant — Order App

**Live app:** https://misbahraza288-tech.github.io/kanak-cafe/

GT Road, Bich Bazar, Govindpur (Dhanbad) ke **Kanak Cafe** ka mobile app (PWA) — menu dekho, cart banao, **WhatsApp pe order bhejo**. Phone pe *Install* bhi hota hai (Play Store ki zaroorat nahi) aur offline bhi khulta hai.

> Made by **Misbah Digital** · WhatsApp 7488484114 · `clients/_template-cafe` (misbah-digital-computer) se bana

## ✨ Features
- Splash screen + neeche 5 tabs: **Home · Menu · Cart · Orders · More**
- Home: asli photos ka carousel, Google ★5.0 badge, Open/Closed status (11:30 AM – 10:30 PM), offers, bestsellers
- Menu: 145 items (cafe ke menu card se), categories, search, Veg/Non-veg filter, Half/Full, item detail sheet
- Cart: Delivery / Pickup, address, coupon (**KANAK10** demo), WhatsApp pe poora order ek tap mein
- Orders: order history + status tracker (Placed → Ban raha hai → Ready → Delivered)
- More: Gallery, About/Contact (Call, WhatsApp, Maps, Instagram), Google review
- Settings: Dark/Light, Hinglish/English, Notifications (demo), **App install karo**, **App share karo** (share + QR + copy link), Clear data
- **Owner panel** (More → Owner login, PIN `1234`): aaj ki kamai, 7 din ka chart, orders ka status badlo, menu price/stock edit, naya item, offers, settings

## ⚙️ Kya badalna hai (sirf `data.js`)
| Cheez | Line |
|---|---|
| Order WhatsApp number | `WHATSAPP_NUMBER: "917488484114"` (demo = Misbah ka number → cafe haan bole to unka number) |
| Timing | `OPEN_TIME`, `CLOSE_TIME` |
| Owner PIN | `OWNER_PIN` |
| Menu / price | `window.KANAK_MENU` (h/f = Half/Full, `v:true` = veg, `img` = `img/` ki photo) |
| Offers / coupons | `KANAK_OFFERS`, `KANAK_COUPONS` |

Update ke baad `sw.js` mein `CACHE` naam badal do (jaise `kanak-v2.0.1`) taaki installed app naya version le.

## 📝 Note
- Menu aur prices cafe ke menu card (Google Maps photo) se likhe gaye hain — badal sakte hain, cafe se confirm karo.
- Delivery charge ₹20 / ₹499+ free, coupons KANAK10/FIRST50 — **sample** hain.
- Abhi data phone ke andar (localStorage) save hota hai — server nahi. Owner panel us phone ke orders dikhata hai jis pe order hua (demo).
- Koi API key / password is repo mein nahi hai, aur kabhi daalna bhi mat.

## 🗂️ Files
```
index.html     app ka dhaancha
styles.css     design (dark + gold theme)
app.js         saara logic (pages, cart, orders, owner panel)
data.js        ⚙️ config + menu  ← yahi edit karo
sw.js          offline (service worker)
manifest.json  install (PWA)
img/           asli photos (webp) + icons
vendor/        QR code library (MIT, Kazuhiko Arase)
```
