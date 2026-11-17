// =====================================================================
//  O'zbegim Taomlari — barcha kontent shu faylda.
//  Narx, telefon, havolalarni o'zgartirish uchun faqat shu yerni tahrirlang.
// =====================================================================

export type Lang = "uz" | "ru";
export type T = { uz: string; ru: string };

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const CONTACT = {
  phones: ["+998995002020", "+998997005050"],
  phonesPretty: ["+998 99 500 20 20", "+998 99 700 50 50"],
  address: {
    uz: "Marg'ilon sh., Chevarchilik ko'chasi, 1-Bo'sim ro'parasida",
    ru: "г. Маргилан, ул. Чеварчилик, напротив 1-Бўсим",
  },
  // Hozircha Marg'ilon markazi (keyin aniq manzilga almashtiriladi)
  mapEmbed: "https://www.google.com/maps?q=Margilan+city+center,+Uzbekistan&z=15&output=embed",
  mapLink: "https://maps.google.com/?q=Margilan+city+center,+Uzbekistan",
  // Hozircha vaqtinchalik havola — keyin oshxonaning o'z sahifalariga almashtiriladi
  instagram: "https://www.instagram.com/janob.dasturchi/",
  telegram: "https://www.instagram.com/janob.dasturchi/",
  facebook: "https://www.instagram.com/janob.dasturchi/",
  express24: "https://express24.uz/",
};

export const IMAGES = {
  hero: img("1671048116858-e8ef69175b2d", 1800),
  plov: img("1671048116663-eda1518a169b"),
  plovKhiva: img("1793648127020-cd123f31f757"),
  lagman: img("1671048116404-454fefede763"),
  manti: img("1616895427217-5318221a3e79"),
  soup: img("1648726445011-9fbf3a5ddb90"),
  soup2: img("1630684789391-d59419768fb1"),
  kebab: img("1783684539282-cc34b91ed983", 1400),
  shashlik: img("1532636875304-0c89119d9b4d"),
  interior: img("1709548145082-04d0cde481d4", 1400),
  interior2: img("1650490632010-e18cbb694dd1"),
  banquet: img("1763429338698-439aa108e7fb", 1600),
  banquet2: img("1666617710768-425d2d9088f8"),
  bread: img("1792582427551-8cc8d9d3ff45"),
  breads: img("1672478694242-f95b5a4b21ab"),
  tea: img("1723130028856-782987201bfb"),
  teapot: img("1756144730025-4832701784a1"),
  tiles: img("1759518158486-59839bfc01b5"),
};

export const PROMO_PERCENT = 20;

export type Dish = {
  name: T;
  desc: T;
  price: number;
  unit?: T;
  promo?: boolean;
  hit?: boolean;
};

export type Category = {
  id: string;
  name: T;
  image: string;
  dishes: Dish[];
};

export const MENU: Category[] = [
  {
    id: "palov",
    name: { uz: "Milliy palovlar", ru: "Национальные пловы" },
    image: IMAGES.plov,
    dishes: [
      {
        name: { uz: "Toshkent oshi", ru: "Ташкентский плов" },
        desc: { uz: "Devzira guruch, qazi, bedana tuxumi va mol go'shti", ru: "Рис девзира, казы, перепелиные яйца и говядина" },
        price: 40000,
        promo: true,
        hit: true,
      },
      {
        name: { uz: "Samarqand oshi", ru: "Самаркандский плов" },
        desc: { uz: "Qatlamli usulda, sariq sabzi va yumshoq go'sht bilan", ru: "Послойный, с жёлтой морковью и нежным мясом" },
        price: 42000,
        promo: true,
      },
      {
        name: { uz: "Choyxona palov", ru: "Чайханский плов" },
        desc: { uz: "Qo'y go'shti, no'xat va mayiz bilan klassik palov", ru: "Классический плов с бараниной, нутом и изюмом" },
        price: 38000,
        promo: true,
      },
    ],
  },
  {
    id: "shorva",
    name: { uz: "Qadimiy sho'rvalar", ru: "Старинные супы" },
    image: IMAGES.soup,
    dishes: [
      {
        name: { uz: "Qaynatma sho'rva", ru: "Кайнатма шурпа" },
        desc: { uz: "Qo'y go'shti va sabzavotlar bilan tiniq sho'rva", ru: "Прозрачная шурпа с бараниной и овощами" },
        price: 40000,
      },
      {
        name: { uz: "Mastava", ru: "Мастава" },
        desc: { uz: "Guruchli quyuq sho'rva, qatiq va ko'katlar bilan", ru: "Густой рисовый суп с катыком и зеленью" },
        price: 28000,
      },
      {
        name: { uz: "Moshxo'rda", ru: "Машхурда" },
        desc: { uz: "Mosh, guruch va go'shtli to'yimli sho'rva", ru: "Сытный суп из маша, риса и мяса" },
        price: 28000,
      },
    ],
  },
  {
    id: "xamir",
    name: { uz: "Xamirli taomlar", ru: "Блюда из теста" },
    image: IMAGES.manti,
    dishes: [
      {
        name: { uz: "Lag'mon", ru: "Лагман" },
        desc: { uz: "Qo'lda cho'zilgan ugra, go'sht va sabzavotli vaju", ru: "Тянутая вручную лапша с мясом и овощами" },
        price: 35000,
      },
      {
        name: { uz: "Qovurma lag'mon", ru: "Жареный лагман" },
        desc: { uz: "Qozonda qovurilgan ugra, go'sht va qalampir", ru: "Обжаренная в казане лапша с мясом и перцем" },
        price: 42000,
        hit: true,
      },
      {
        name: { uz: "Manti", ru: "Манты" },
        desc: { uz: "Bug'da pishgan, qo'y go'shti va piyozli", ru: "На пару, с бараниной и луком" },
        price: 10000,
        unit: { uz: "dona", ru: "шт." },
      },
      {
        name: { uz: "Chuchvara", ru: "Чучвара" },
        desc: { uz: "Mayda tugilgan chuchvara, qatiq bilan", ru: "Маленькие пельмени с катыком" },
        price: 35000,
      },
      {
        name: { uz: "Xonim", ru: "Ханум" },
        desc: { uz: "O'ralgan xamir, go'sht va kartoshka bilan", ru: "Рулет из теста с мясом и картофелем" },
        price: 30000,
      },
    ],
  },
  {
    id: "qozon",
    name: { uz: "Qozon taomlar", ru: "Блюда из казана" },
    image: IMAGES.kebab,
    dishes: [
      {
        name: { uz: "Qozon kabob", ru: "Казан-кабоб" },
        desc: { uz: "Qozonda dimlangan qo'y go'shti va oltin kartoshka", ru: "Томлёная в казане баранина и золотистый картофель" },
        price: 55000,
        hit: true,
      },
      {
        name: { uz: "Dimlama", ru: "Димляма" },
        desc: { uz: "Go'sht va bahor sabzavotlari o'z sharbatida", ru: "Мясо и овощи, томлённые в собственном соку" },
        price: 45000,
      },
    ],
  },
  {
    id: "ananaviy",
    name: { uz: "An'anaviy taomlar", ru: "Традиционные блюда" },
    image: IMAGES.shashlik,
    dishes: [
      {
        name: { uz: "Norin", ru: "Нарын" },
        desc: { uz: "Ingichka to'g'ralgan xamir va ot go'shti, sovuq holda", ru: "Тонко нарезанное тесто с кониной, подаётся холодным" },
        price: 38000,
      },
      {
        name: { uz: "No'xat sho'rak", ru: "Нухат шурак" },
        desc: { uz: "Qaynatilgan no'xat, sirka-piyoz va ziravorlar", ru: "Отварной нут с маринованным луком и специями" },
        price: 40000,
      },
    ],
  },
  {
    id: "salat",
    name: { uz: "Milliy salatlar", ru: "Национальные салаты" },
    image: IMAGES.plovKhiva,
    dishes: [
      { name: { uz: "Achchiq-chuchuk", ru: "Аччик-чучук" }, desc: { uz: "Pomidor, piyoz va achchiq qalampir", ru: "Томаты, лук и острый перец" }, price: 15000 },
      { name: { uz: "Toshkent salati", ru: "Салат «Ташкент»" }, desc: { uz: "Mol go'shti, turp va qovurilgan piyoz", ru: "Говядина, редька и жареный лук" }, price: 28000 },
      { name: { uz: "Vitamin salat", ru: "Витаминный салат" }, desc: { uz: "Karam, sabzi va yangi ko'katlar", ru: "Капуста, морковь и свежая зелень" }, price: 18000 },
    ],
  },
  {
    id: "gazak",
    name: { uz: "Sovuq gazaklar", ru: "Холодные закуски" },
    image: IMAGES.interior2,
    dishes: [
      { name: { uz: "Qazi assorti", ru: "Ассорти из казы" }, desc: { uz: "Qazi, qarta va tilning nozik bo'laklari", ru: "Казы, карта и язык тонкими ломтиками" }, price: 75000 },
      { name: { uz: "Suzma va ko'katlar", ru: "Сузьма с зеленью" }, desc: { uz: "Uy suzmasi, rayhon va yalpiz", ru: "Домашняя сузьма, базилик и мята" }, price: 15000 },
      { name: { uz: "Tuzlamalar", ru: "Соленья" }, desc: { uz: "Uyda tuzlangan bodring, pomidor va karam", ru: "Домашние огурцы, томаты и капуста" }, price: 18000 },
    ],
  },
  {
    id: "non",
    name: { uz: "Non mahsulotlari", ru: "Хлеб и выпечка" },
    image: IMAGES.bread,
    dishes: [
      { name: { uz: "Marg'ilon patiri", ru: "Маргиланская патыр" }, desc: { uz: "Tandirda yopilgan qatlamli patir", ru: "Слоёная лепёшка из тандыра" }, price: 10000 },
      { name: { uz: "Tandir non", ru: "Тандырная лепёшка" }, desc: { uz: "Issiq, yangi yopilgan non", ru: "Горячая свежая лепёшка" }, price: 5000 },
      { name: { uz: "Tandir somsa", ru: "Тандыр-самса" }, desc: { uz: "Qo'y go'shti va dumba bilan", ru: "С бараниной и курдючным жиром" }, price: 12000, unit: { uz: "dona", ru: "шт." } },
    ],
  },
  {
    id: "ichimlik",
    name: { uz: "Ichimliklar", ru: "Напитки" },
    image: IMAGES.tea,
    dishes: [
      { name: { uz: "Ko'k choy", ru: "Зелёный чай" }, desc: { uz: "Choynakda, an'anaviy usulda", ru: "В чайнике, по традиции" }, price: 5000 },
      { name: { uz: "Limonli qora choy", ru: "Чёрный чай с лимоном" }, desc: { uz: "Limon va navvot bilan", ru: "С лимоном и навватом" }, price: 8000 },
      { name: { uz: "Uy kompoti", ru: "Домашний компот" }, desc: { uz: "Quritilgan mevalardan, 1 litr", ru: "Из сухофруктов, 1 литр" }, price: 15000 },
      { name: { uz: "Ayron", ru: "Айран" }, desc: { uz: "Sovuq, yalpiz bilan", ru: "Холодный, с мятой" }, price: 8000 },
    ],
  },
  {
    id: "shirinlik",
    name: { uz: "Shirinliklar", ru: "Десерты" },
    image: IMAGES.teapot,
    dishes: [
      { name: { uz: "Chak-chak", ru: "Чак-чак" }, desc: { uz: "Asal bilan, uy usulida", ru: "С мёдом, по-домашнему" }, price: 20000 },
      { name: { uz: "Holvaytar", ru: "Халвайтар" }, desc: { uz: "Qadimiy o'zbek shirinligi", ru: "Старинная узбекская сладость" }, price: 15000 },
      { name: { uz: "Mevalar to'plami", ru: "Фруктовая тарелка" }, desc: { uz: "Mavsumiy Farg'ona mevalari", ru: "Сезонные ферганские фрукты" }, price: 35000 },
    ],
  },
];

export const REVIEWS = [
  {
    name: "Aliyev Javohir",
    text: {
      uz: "Palovning tami juda ajoyib! Xuddi uyimizdagi eski an'anaviy palovdek. Xizmat ham a'lo darajada.",
      ru: "Вкус плова просто потрясающий! Как старый домашний традиционный плов. И обслуживание на высшем уровне.",
    },
  },
  {
    name: "Karimova Madina",
    text: {
      uz: "Oila bilan keldik, juda mamnun bo'ldik. Taomlar mazali, muhit esa juda shinam.",
      ru: "Пришли всей семьёй и остались очень довольны. Блюда вкусные, атмосфера очень уютная.",
    },
  },
  {
    name: "Rasulov Sardor",
    text: {
      uz: "Go'shti yumshoq, tami o'ziga xos. Albatta yana kelaman.",
      ru: "Мясо мягкое, вкус особенный. Обязательно приду ещё.",
    },
  },
  {
    name: "Abdullayeva Nilufar",
    text: {
      uz: "Milliy taomlar, samimiy xizmat va toza muhit. Bunday joylar ko'payishi kerak.",
      ru: "Национальные блюда, душевное обслуживание и чистота. Таких мест должно быть больше.",
    },
  },
];

export const GALLERY = [
  { src: IMAGES.plovKhiva, span: "tall" },
  { src: IMAGES.interior, span: "wide" },
  { src: IMAGES.lagman, span: "" },
  { src: IMAGES.breads, span: "" },
  { src: IMAGES.banquet2, span: "wide" },
  { src: IMAGES.soup2, span: "" },
  { src: IMAGES.tiles, span: "tall" },
  { src: IMAGES.tea, span: "" },
];

export const formatPrice = (n: number) =>
  n.toLocaleString("ru-RU").replace(/ |,/g, " ");

export const promoPrice = (n: number) => Math.round((n * (100 - PROMO_PERCENT)) / 100 / 100) * 100;
