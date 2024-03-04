const questions = [
  {
    title: "Выбери текстуру",
    options: [
      { text: "КРЕМОВАЯ, <br>БАРХАТИСТАЯ" },
      { text: "ГЛАДКАЯ, <br>ШЕЛКОВИСТАЯ" },
      { text: "ЛЕГКАЯ, <br>ОСВЕЖАЮЩАЯ" },
    ],
    btnText: "далее",
    classes: ["question--one"],
  },
  {
    title: "ТВОЙ ТИП КОЖИ",
    options: [
      { text: "СУХАЯ", icon: "img/icon1.png", desc: "Всегда нужно <br>увлажнение." },
      { text: "НОРМАЛЬНАЯ", icon: "img/icon2.png", desc: "Мне повезло <br>с рождения." },
      { text: "ЖИРНАЯ", icon: "img/icon3.png", desc: "Я все время блещу." },
      { text: "КОМБИНИРОВАННАЯ", icon: "img/icon4.png", desc: "У меня микс." },
    ],
    btnText: "далее",
    classes: ["question--two"],
  },
  {
    title: "ЧТО НУЖНО СКОРРЕКТИРОВАТЬ?",
    options: [
      { text: "РАСШИРЕННЫЕ <br>ПОРЫ", icon: "img/face1.png" },
      { text: "ЖИРНЫЙ <br>БЛЕСК", icon: "img/face2.png" },
      { text: "ПОКРАСНЕНИЯ", icon: "img/face3.png" },
      { text: "ТУСКЛЫЙ <br>И НЕРОВНЫЙ <br>ТОН КОЖИ", icon: "img/face4.png" },
      { text: "СУХИЕ <br>УЧАСТКИ", icon: "img/face5.png" },
      { text: "НИЧЕГО, У МЕНЯ НЕТ ПРОБЛЕМ" },
    ],
    btnText: "смотреть результаты",
    classes: ["question--three"],
  },
];

const products = [
  {
    name: "REDUCE REDNESS",
    desc: "Праймер зеленого оттенка корректирует покраснения, скрывает расширенные поры и видимые мимические морщины, успокаивает кожу за счет растительных экстрактов.",
    img: "img/products/REDUCE_REDNESS.png",
    href: "https://shop.rivegauche.ru/product/smashbox-photo-finish-color-correcting-foundation-primer-adjust",
    sequences: ["002", "012", "022", "032", "102", "112", "122", "132", "202", "212", "222", "232"],
    id: 0,
  },
  {
    name: "EVEN SKINTONE",
    desc: "Праймер персикового оттенка выравнивает тон кожи, сокращает появление пигментных пятен, скрывает расширенные поры и видимые мимические морщины,успокаивает кожу за счет растительных экстрактов.",
    img: "img/products/EVEN_SKINTONE_.png",
    href: "https://shop.rivegauche.ru/product/smashbox-photo-finish-color-correcting-foundation-primer-blend",
    sequences: ["003", "013", "023", "033", "123"],
    id: 1,
  },
  {
    name: "THE ORIGINAL PRIMER",
    desc: "Выравнивает текстуру кожи, маскирует несовершенства, продлевает стойкость макияжа. Фильтры для фото больше не нужны!",
    img: "img/products/THE_ORIGINAL_PRIMER_.png",
    href: "https://shop.rivegauche.ru/product/smashbox-photo-finish-pore-minimizing-primer",
    sequences: ["000", "005", "015", "035", "100", "110", "115", "125", "135"],
    id: 2,
  },
  {
    name: "OIL & SHINE CONTROL",
    desc: "Контролирует нежелательный блеск и выработку себума в течение 12 часов.",
    img: "img/products/OIL_&_SHINE_CONTROL.png",
    href: "https://shop.rivegauche.ru/product/smashbox-photo-finish-oil-and-shine-control-primer",
    sequences: ["001", "011", "021", "031", "101", "111", "121", "131", "201", "211", "221", "231", "220"],
    id: 3,
  },
  {
    name: "PORE MINIMIZING",
    desc: "Уменьшает поры и устраняет блеск, контролирует выработку себума в течение 8 часов.",
    img: "img/products/PORE_MINIMIZING_.png",
    href: "https://shop.rivegauche.ru/product/smashbox-photo-finish-pore-minimizing-primer",
    sequences: ["010", "020", "025", "030", "120", "130", "200", "210", "230"],
    id: 4,
  },
  {
    name: "PRIMERIZER",
    desc: "Увлажняет на 24 часа, фиксирует макияж, выравнивает текстуру и повышает упругость кожи благодаря гиалуроновой кислоте. ",
    img: "img/products/PRIMERIZER.png",
    href: "https://shop.rivegauche.ru/product/smashbox-photo-finish-primerizer",
    sequences: ["004", "014", "024", "034", "104", "105", "124", "224"],
    id: 5,
  },
  {
    name: "PRIMER OIL",
    desc: "Питает кожу, придает сияние, делает морщины менее заметными, содержит богатые липидами растительные масла.",
    img: "img/products/PRIMER_OIL_.png",
    href: "https://shop.rivegauche.ru/product/smashbox-photo-finish-primer-oil",
    sequences: ["240"],
    id: 6,
  },
  {
    name: "PRIMER WATER",
    desc: "Подготавливает кожу к нанесению макияжа, увлажняет и освежает макияж в течение дня. ",
    img: "img/products/PRIMER_WATER.png",
    href: "https://shop.rivegauche.ru/product/smashbox-photo-finish-primer-water",
    sequences: ["215", "223", "225", "235"],
    id: 7,
  },
  {
    name: "PHOTO FINISH VITAMIN GLOW",
    desc: "Подчеркивает естественное сияние кожи, наполняет ее энергией и влагой. Содержит витамины В, С и Е. ",
    img: "img/products/PHOTO_FINISH_VITAMIN_GLOW_.png",
    href: "https://shop.rivegauche.ru/product/smashbox-photo-finish-vitamin-glow-primer",
    sequences: ["103", "114", "113", "134", "133", "203", "205", "214", "213", "234", "233"],
    id: 8,
  },
];