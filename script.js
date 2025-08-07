const translations = {
  ar: {
    title: "🧠 حكمة اليوم",
    showQuote: "📜 اعرض حكمة",
    darkMode: "🌓 الوضع الداكن",
    language: "اختر اللغة:"
  },
  en: {
    title: "🧠 Quote of the Day",
    showQuote: "📜 Show Quote",
    darkMode: "🌓 Dark Mode",
    language: "Choose Language:"
  },
  zh: {
    title: "🧠 每日格言",
    showQuote: "📜 显示格言",
    darkMode: "🌓 深色模式",
    language: "选择语言:"
  },
  ru: {
    title: "🧠 Мудрость дня",
    showQuote: "📜 Показать цитату",
    darkMode: "🌓 Тёмная тема",
    language: "Выберите язык:"
  }
};

const quotes = {
  ar: [
    "العقل زينة.",
    "السكوت من ذهب.",
    "العلم نور.",
    "من جد وجد.",
    "لا تؤجل عمل اليوم إلى الغد.",
    "الصبر مفتاح الفرج.",
    "خير الكلام ما قل ودل.",
    "درهم وقاية خير من قنطار علاج.",
    "إذا كان الكلام من فضة فالسكوت من ذهب.",
    "كما تدين تدان.",
    "القناعة كنز لا يفنى.",
    "العين لا تعلو على الحاجب.",
    "الصديق وقت الضيق.",
    "الوقت كالسيف إن لم تقطعه قطعك.",
    "الجار قبل الدار.",
    "رحم الله امرءًا عرف قدر نفسه.",
    "من طلب العلا سهر الليالي.",
    "إن مع العسر يسرا.",
    "لا يلدغ المؤمن من جحر مرتين.",
    "اتق شر من أحسنت إليه."
  ],
  en: [
    "Knowledge is power.",
    "Silence is golden.",
    "Practice makes perfect.",
    "Time is money.",
    "Actions speak louder than words.",
    "Better late than never.",
    "Honesty is the best policy.",
    "What goes around comes around.",
    "Where there’s a will, there’s a way.",
    "The early bird catches the worm.",
    "Don’t count your chickens before they hatch.",
    "A journey of a thousand miles begins with a single step.",
    "Practice what you preach.",
    "No pain, no gain.",
    "Two heads are better than one.",
    "Rome wasn’t built in a day.",
    "The pen is mightier than the sword.",
    "Look before you leap.",
    "Don’t judge a book by its cover.",
    "Every cloud has a silver lining."
  ],
  zh: [
    "知识就是力量。",
    "沉默是金。",
    "熟能生巧。",
    "时间就是金钱。",
    "行动胜于言语。",
    "亡羊补牢，为时未晚。",
    "诚实为上策。",
    "善有善报，恶有恶报。",
    "有志者，事竟成。",
    "早起的鸟儿有虫吃。",
    "一步一个脚印。",
    "千里之行，始于足下。",
    "痛苦之后有成长。",
    "实践出真知。",
    "书山有路勤为径。",
    "人无完人。",
    "失败是成功之母。",
    "滴水穿石，非一日之功。",
    "吃一堑，长一智。",
    "天无绝人之路。"
  ],
  ru: [
    "Знание — сила.",
    "Молчание — золото.",
    "Повторение — мать учения.",
    "Время — деньги.",
    "Дела говорят громче слов.",
    "Лучше поздно, чем никогда.",
    "Честность — лучшая политика.",
    "Как аукнется, так и откликнется.",
    "Где есть воля, там есть путь.",
    "Раннюю пташку червяк клюёт.",
    "Не считай цыплят до осени.",
    "Дорога в тысячу ли начинается с одного шага.",
    "Без труда не вытащишь и рыбку из пруда.",
    "Нет худа без добра.",
    "Повторение — мать учения.",
    "Москва не сразу строилась.",
    "На ошибках учатся.",
    "Поспешишь — людей насмешишь.",
    "Не всё то золото, что блестит.",
    "Каждый кулик своё болото хвалит."
  ]
};

let currentLang = "ar";

function updateTexts() {
  const t = translations[currentLang];
  document.getElementById("title").innerText = t.title;
  document.getElementById("quoteButton").innerText = t.showQuote;
  document.getElementById("darkModeButton").innerText = t.darkMode;
  document.getElementById("languageLabel").innerText = t.language;
}

function showQuote() {
  const list = quotes[currentLang];
  const random = Math.floor(Math.random() * list.length);
  document.getElementById("quote").innerText = list[random];
}

function changeLanguage() {
  currentLang = document.getElementById("languageSelect").value;
  updateTexts();
  showQuote(); // لو عايز تظهر اقتباس جديد
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// أول مرة تحميل
document.addEventListener("DOMContentLoaded", () => {
  updateTexts();
  showQuote();
});
