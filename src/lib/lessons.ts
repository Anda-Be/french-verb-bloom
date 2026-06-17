import restaurantImg from "@/assets/lesson-restaurant.jpg";
import airportImg from "@/assets/lesson-airport.jpg";
import interviewImg from "@/assets/lesson-interview.jpg";
import friendsImg from "@/assets/lesson-friends.jpg";
import onlineImg from "@/assets/lesson-online.jpg";
import socialImg from "@/assets/lesson-social.jpg";

export type DialogLine = { speaker: string; en: string; ro: string };

export type Exercise =
  | {
      kind: "fill";
      prompt: string; // English with ___
      answers: string[]; // accepted answers (lowercase)
      hint?: string;
    }
  | {
      kind: "choice";
      prompt: string;
      options: string[];
      correct: number;
      explain?: string;
    };

export type MatchPair = { en: string; ro: string };

export type Lesson = {
  slug: string;
  title: string;
  titleRo: string;
  emoji: string;
  image: string;
  level: "Începător" | "Intermediar" | "Avansat";
  summary: string;
  dialog: DialogLine[];
  explanations: { title: string; body: string }[]; // în română
  exercises: Exercise[];
  freePrompt: { prompt: string; hint: string };
  match: MatchPair[]; // mini-game
};

export const LESSONS: Lesson[] = [
  {
    slug: "restaurant",
    title: "At the Restaurant",
    titleRo: "La restaurant",
    emoji: "🍝",
    image: restaurantImg,
    level: "Începător",
    summary:
      "Cum comanzi mâncare, ceri nota și mulțumești chelnerului — fără să te bâlbâi.",
    dialog: [
      { speaker: "Waiter", en: "Good evening! Table for two?", ro: "Bună seara! Masă pentru doi?" },
      { speaker: "You", en: "Yes, please. By the window if possible.", ro: "Da, vă rog. Lângă fereastră, dacă se poate." },
      { speaker: "Waiter", en: "Of course. Here are the menus. Anything to drink?", ro: "Sigur. Iată meniurile. Doriți ceva de băut?" },
      { speaker: "You", en: "I'll have a sparkling water, thanks.", ro: "Aș dori o apă minerală, mulțumesc." },
      { speaker: "Waiter", en: "Are you ready to order?", ro: "Sunteți gata de comandă?" },
      { speaker: "You", en: "Yes — I'll go with the pasta, please.", ro: "Da — iau pastele, vă rog." },
      { speaker: "You", en: "Could we have the bill, please?", ro: "Putem primi nota, vă rog?" },
    ],
    explanations: [
      {
        title: "„I'll have…” = comand",
        body: "În engleză, când comanzi, nu spui „I want”. Sună prea direct. Folosește „I'll have…” sau „I'd like…”. E forma politicoasă naturală.",
      },
      {
        title: "„Could we…” > „Can we…”",
        body: "„Could” e mai politicos decât „can”. La restaurant, în magazine, la hotel — folosește „could” pentru cereri.",
      },
      {
        title: "„The bill” (UK) / „The check” (US)",
        body: "În Marea Britanie ceri „the bill”. În SUA — „the check”. Ambele se înțeleg oriunde.",
      },
    ],
    exercises: [
      {
        kind: "fill",
        prompt: "____ I have a glass of water, please?",
        answers: ["could", "can", "may"],
        hint: "Formă politicoasă de cerere.",
      },
      {
        kind: "choice",
        prompt: "Cea mai naturală formă să comanzi:",
        options: ["I want pizza.", "I'll have the pizza, please.", "Give me pizza."],
        correct: 1,
        explain: "„I'll have… please” este politicos și natural.",
      },
      {
        kind: "fill",
        prompt: "Could we have the ____, please? (nota)",
        answers: ["bill", "check"],
      },
    ],
    freePrompt: {
      prompt:
        "Scrie 2–3 propoziții în engleză: ești la restaurant, comanzi ceva și ceri nota.",
      hint: "Folosește „I'll have…” și „Could we…”.",
    },
    match: [
      { en: "I'll have…", ro: "Aș dori să comand…" },
      { en: "The bill, please.", ro: "Nota, vă rog." },
      { en: "Are you ready to order?", ro: "Sunteți gata de comandă?" },
      { en: "Sparkling water", ro: "Apă minerală" },
      { en: "Table for two", ro: "Masă pentru doi" },
    ],
  },
  {
    slug: "airport",
    title: "At the Airport",
    titleRo: "La aeroport",
    emoji: "✈️",
    image: airportImg,
    level: "Începător",
    summary: "Check-in, securitate, poarta de îmbarcare — supraviețuiește călătoriei.",
    dialog: [
      { speaker: "Agent", en: "Good morning. Passport, please.", ro: "Bună dimineața. Pașaportul, vă rog." },
      { speaker: "You", en: "Here you go.", ro: "Poftiți." },
      { speaker: "Agent", en: "Are you checking any bags?", ro: "Predați bagaje?" },
      { speaker: "You", en: "Just one. The other is carry-on.", ro: "Doar unul. Celălalt e de mână." },
      { speaker: "Agent", en: "Window or aisle seat?", ro: "Loc la fereastră sau la culoar?" },
      { speaker: "You", en: "Window, please. What's the gate?", ro: "La fereastră, vă rog. Care e poarta?" },
      { speaker: "Agent", en: "Gate 24. Boarding starts at 10:30.", ro: "Poarta 24. Îmbarcarea începe la 10:30." },
    ],
    explanations: [
      {
        title: "„Carry-on” vs „checked bag”",
        body: "„Carry-on” = bagaj de mână (intră în avion cu tine). „Checked bag” = bagaj predat la cală.",
      },
      {
        title: "„Here you go”",
        body: "Expresie super-utilă când dai ceva cuiva (pașaport, bani, un obiect). Echivalent cu „poftiți”.",
      },
      {
        title: "„Boarding”",
        body: "„Boarding” = îmbarcare. „Boarding pass” = cartea de îmbarcare. „Boarding starts at…” = îmbarcarea începe la…",
      },
    ],
    exercises: [
      {
        kind: "choice",
        prompt: "Bagaj de mână în engleză:",
        options: ["Checked bag", "Carry-on", "Hand suitcase"],
        correct: 1,
      },
      {
        kind: "fill",
        prompt: "Window or ____ seat?",
        answers: ["aisle"],
        hint: "loc la culoar",
      },
      {
        kind: "fill",
        prompt: "What's the ____? (poarta de îmbarcare)",
        answers: ["gate"],
      },
    ],
    freePrompt: {
      prompt:
        "Imaginează: ești la check-in. Scrie un mic schimb de replici cu agentul.",
      hint: "Folosește „carry-on”, „window seat”, „gate”.",
    },
    match: [
      { en: "Passport, please.", ro: "Pașaportul, vă rog." },
      { en: "Boarding pass", ro: "Carte de îmbarcare" },
      { en: "Carry-on", ro: "Bagaj de mână" },
      { en: "Aisle seat", ro: "Loc la culoar" },
      { en: "Delayed flight", ro: "Zbor întârziat" },
    ],
  },
  {
    slug: "interview",
    title: "Job Interview",
    titleRo: "La interviu",
    emoji: "💼",
    image: interviewImg,
    level: "Intermediar",
    summary: "Răspunsuri care sună profesionist — nu robotic.",
    dialog: [
      { speaker: "HR", en: "Tell me a little about yourself.", ro: "Spune-mi câteva cuvinte despre tine." },
      { speaker: "You", en: "Sure. I'm a developer with three years of experience in web apps.", ro: "Sigur. Sunt developer cu trei ani de experiență în aplicații web." },
      { speaker: "HR", en: "Why are you interested in this role?", ro: "De ce te interesează rolul acesta?" },
      { speaker: "You", en: "I'm looking for a team where I can grow and take on more responsibility.", ro: "Caut o echipă unde să cresc și să-mi asum mai multă responsabilitate." },
      { speaker: "HR", en: "What's your biggest weakness?", ro: "Care e cel mai mare defect al tău?" },
      { speaker: "You", en: "I sometimes focus too much on details — I'm working on it.", ro: "Uneori mă concentrez prea mult pe detalii — lucrez la asta." },
    ],
    explanations: [
      {
        title: "„Tell me about yourself”",
        body: "NU începe cu „I was born in…”. Începe cu rolul actual sau cu ce faci profesional. Apoi 1-2 puncte de experiență.",
      },
      {
        title: "„I'm looking for…” = caut",
        body: "Folosește prezentul continuu pentru obiective actuale: „I'm looking for…”, „I'm working on…”, „I'm building…”.",
      },
      {
        title: "Defect = oportunitate",
        body: "Un defect bine prezentat e onest + arată că lucrezi la el. „I sometimes… — I'm working on it.”",
      },
    ],
    exercises: [
      {
        kind: "choice",
        prompt: "Cel mai natural început la „Tell me about yourself”:",
        options: [
          "I was born in 1995 in Cluj.",
          "I'm a marketing specialist with 4 years of experience.",
          "My name is John and I like football.",
        ],
        correct: 1,
      },
      {
        kind: "fill",
        prompt: "I'm ____ for a role where I can grow.",
        answers: ["looking"],
        hint: "prezent continuu",
      },
      {
        kind: "fill",
        prompt: "I'm ____ on improving my public speaking.",
        answers: ["working"],
      },
    ],
    freePrompt: {
      prompt: "Răspunde în engleză la „Why should we hire you?” în 2-3 propoziții.",
      hint: "Începe cu „I bring…” sau „I have experience in…”.",
    },
    match: [
      { en: "Tell me about yourself.", ro: "Spune-mi despre tine." },
      { en: "Strengths and weaknesses", ro: "Puncte forte și slabe" },
      { en: "I'm a team player.", ro: "Lucrez bine în echipă." },
      { en: "Looking forward to hearing from you.", ro: "Aștept cu interes răspunsul." },
      { en: "Salary expectations", ro: "Așteptări salariale" },
    ],
  },
  {
    slug: "friends",
    title: "Chatting with Friends",
    titleRo: "Conversație cu prieteni",
    emoji: "☕",
    image: friendsImg,
    level: "Începător",
    summary: "Engleza relaxată, cu slang ușor — așa cum vorbesc oamenii.",
    dialog: [
      { speaker: "Alex", en: "Hey! How's it going?", ro: "Salut! Cum merge?" },
      { speaker: "You", en: "Pretty good, you?", ro: "Destul de bine, tu?" },
      { speaker: "Alex", en: "Same old. Wanna grab a coffee later?", ro: "Ca de obicei. Vrei să bem o cafea mai târziu?" },
      { speaker: "You", en: "Sure, sounds great. What time?", ro: "Sigur, sună bine. La ce oră?" },
      { speaker: "Alex", en: "Around 6? My treat.", ro: "Pe la 6? Fac eu cinste." },
      { speaker: "You", en: "Deal. See you then!", ro: "Bătut palma. Pe atunci!" },
    ],
    explanations: [
      {
        title: "„How's it going?”",
        body: "Cea mai naturală întrebare casual. Nu răspunzi cu detalii — „Pretty good”, „Not bad”, „Same old” sunt suficiente.",
      },
      {
        title: "„Wanna” = want to",
        body: "În vorbire informală, „want to” devine „wanna”. Doar oral și în chat — NU în email-uri formale.",
      },
      {
        title: "„My treat”",
        body: "= „Fac eu cinste”. Foarte natural când inviți pe cineva.",
      },
    ],
    exercises: [
      {
        kind: "choice",
        prompt: "Cea mai naturală replică la „How's it going?”:",
        options: ["I am very fine, thank you.", "Pretty good, you?", "Yes."],
        correct: 1,
      },
      {
        kind: "fill",
        prompt: "____ grab a coffee? (informal: vrei să…)",
        answers: ["wanna", "want to"],
      },
      {
        kind: "fill",
        prompt: "Don't worry about paying — my ____.",
        answers: ["treat"],
      },
    ],
    freePrompt: {
      prompt: "Invită un prieten la un film în engleză, în stil casual (2-3 propoziții).",
      hint: "Folosește „wanna”, „later”, „sounds good”.",
    },
    match: [
      { en: "How's it going?", ro: "Cum merge?" },
      { en: "My treat.", ro: "Fac eu cinste." },
      { en: "Sounds great.", ro: "Sună bine." },
      { en: "Same old.", ro: "Ca de obicei." },
      { en: "See you then!", ro: "Pe atunci!" },
    ],
  },
  {
    slug: "online",
    title: "Online: Chat & Email",
    titleRo: "Online: chat și email",
    emoji: "💬",
    image: onlineImg,
    level: "Intermediar",
    summary: "De la mesaje rapide la email-uri profesionale — știi când e care.",
    dialog: [
      { speaker: "Chat", en: "Hey, are u free now?", ro: "Salut, ești liber acum?" },
      { speaker: "You", en: "Yep, what's up?", ro: "Da, ce e?" },
      { speaker: "Chat", en: "Can u send me the file? ty!", ro: "Poți să-mi trimiți fișierul? mulțumesc!" },
      { speaker: "Email", en: "Hi Sarah,\nI hope you're doing well. Could you please send over the report by Friday?\nBest regards,\nAlex", ro: "Bună Sarah,\nSper că ești bine. Poți să-mi trimiți raportul până vineri?\nCu respect,\nAlex" },
    ],
    explanations: [
      {
        title: "Chat: prescurtări OK",
        body: "În chat: „u” (you), „ty” (thank you), „btw” (by the way), „idk” (I don't know). În email — NICIODATĂ.",
      },
      {
        title: "Email: deschidere",
        body: "Formal: „Dear Mr. Smith,”. Semi-formal: „Hi Sarah,”. Apoi: „I hope you're doing well.” — o linie de încălzire.",
      },
      {
        title: "Email: închidere",
        body: "Formal: „Best regards” / „Kind regards”. Casual: „Thanks” / „Cheers”. Niciodată „Bye” într-un email profesional.",
      },
    ],
    exercises: [
      {
        kind: "choice",
        prompt: "Într-un email profesional, închiderea corectă e:",
        options: ["xoxo", "Best regards,", "ty bye"],
        correct: 1,
      },
      {
        kind: "fill",
        prompt: "I hope you're doing ____.",
        answers: ["well"],
        hint: "formulă de email",
      },
      {
        kind: "choice",
        prompt: "„btw” înseamnă:",
        options: ["be there waiting", "by the way", "best to win"],
        correct: 1,
      },
    ],
    freePrompt: {
      prompt: "Scrie un email scurt (3-4 linii) către un coleg, cerând o ședință.",
      hint: "„Hi …,” / „Could we …?” / „Best regards,”.",
    },
    match: [
      { en: "Best regards,", ro: "Cu respect," },
      { en: "I hope you're doing well.", ro: "Sper că ești bine." },
      { en: "btw", ro: "apropo" },
      { en: "Looking forward to it.", ro: "Aștept cu nerăbdare." },
      { en: "Attached you'll find…", ro: "Atașat veți găsi…" },
    ],
  },
  {
    slug: "social-media",
    title: "Social Media",
    titleRo: "Pe rețelele sociale",
    emoji: "📱",
    image: socialImg,
    level: "Intermediar",
    summary: "Comentarii, DM-uri, caption-uri — engleza scurtă, punchy.",
    dialog: [
      { speaker: "Post", en: "Just landed in Lisbon 🇵🇹 ready for an adventure!", ro: "Tocmai am aterizat în Lisabona — gata de aventură!" },
      { speaker: "Comment", en: "No way! Have the best time 🙌", ro: "Nu se poate! Distracție maximă!" },
      { speaker: "DM", en: "Hey! Saw your story — what's that café called?", ro: "Salut! Ți-am văzut story-ul — cum se numește cafeneaua aceea?" },
      { speaker: "You", en: "It's called Brew & Bloom — super cozy, you'd love it!", ro: "Se numește Brew & Bloom — super primitor, ți-ar plăcea!" },
    ],
    explanations: [
      {
        title: "Caption-uri scurte",
        body: "Pe Insta/TikTok: scurt, vibrant. „Just landed”, „New favorite spot”, „Currently obsessed with…”.",
      },
      {
        title: "„No way!”",
        body: "= „Nu se poate!” / „Serios?!”. Reacție de surpriză foarte naturală.",
      },
      {
        title: "„You'd love it”",
        body: "= „Ți-ar plăcea”. Forma condițională scurtă pentru recomandări.",
      },
    ],
    exercises: [
      {
        kind: "fill",
        prompt: "Just ____ in Paris! 🇫🇷",
        answers: ["landed", "arrived"],
      },
      {
        kind: "choice",
        prompt: "Reacția cea mai naturală la o veste mare:",
        options: ["I am surprised.", "No way!", "Indeed."],
        correct: 1,
      },
      {
        kind: "fill",
        prompt: "It's super cozy — you'd ____ it!",
        answers: ["love"],
      },
    ],
    freePrompt: {
      prompt: "Scrie un caption în engleză (max 15 cuvinte) pentru o poză cu apus pe mare.",
      hint: "Sentimente + emoji opțional.",
    },
    match: [
      { en: "No way!", ro: "Nu se poate!" },
      { en: "DM me", ro: "Scrie-mi în privat" },
      { en: "Currently obsessed with…", ro: "Sunt obsedat(ă) de…" },
      { en: "You'd love it.", ro: "Ți-ar plăcea." },
      { en: "Tag a friend", ro: "Etichetează un prieten" },
    ],
  },
];

export const LESSONS_BY_SLUG: Record<string, Lesson> = Object.fromEntries(
  LESSONS.map((l) => [l.slug, l]),
);
