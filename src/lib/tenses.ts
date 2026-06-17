export type Pronoun = "je" | "tu" | "il/elle" | "nous" | "vous" | "ils/elles";

export const PRONOUNS: Pronoun[] = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];

export interface Conjugation {
  infinitive: string;
  english: string;
  forms: Record<Pronoun, string>;
}

export interface Tense {
  slug: string;
  name: string;
  mood: "Indicatif" | "Conditionnel" | "Subjonctif" | "Impératif";
  difficulty: 1 | 2 | 3;
  english: string;
  summary: string;
  usage: string[];
  formation: string;
  examples: { fr: string; en: string }[];
  conjugations: Conjugation[];
}

const elide = (p: Pronoun, form: string) => {
  if (p === "je" && /^[aeiouéèêëhAEIOU]/.test(form)) return `j'${form}`;
  return `${p} ${form}`;
};
export const display = elide;

export const TENSES: Tense[] = [
  {
    slug: "present",
    name: "Présent",
    mood: "Indicatif",
    difficulty: 1,
    english: "Present",
    summary: "Actions happening now, habits, and general truths.",
    usage: [
      "Current actions: Je mange une pomme.",
      "Habits: Tous les matins, je bois du café.",
      "General truths: L'eau bout à 100°C.",
    ],
    formation:
      "Drop the infinitive ending (-er, -ir, -re) and add the present endings. -er: e, es, e, ons, ez, ent. -ir: is, is, it, issons, issez, issent. -re: s, s, —, ons, ez, ent.",
    examples: [
      { fr: "Je parle français tous les jours.", en: "I speak French every day." },
      { fr: "Nous finissons nos devoirs.", en: "We are finishing our homework." },
    ],
    conjugations: [
      { infinitive: "être", english: "to be", forms: { "je": "suis", "tu": "es", "il/elle": "est", "nous": "sommes", "vous": "êtes", "ils/elles": "sont" } },
      { infinitive: "avoir", english: "to have", forms: { "je": "ai", "tu": "as", "il/elle": "a", "nous": "avons", "vous": "avez", "ils/elles": "ont" } },
      { infinitive: "parler", english: "to speak", forms: { "je": "parle", "tu": "parles", "il/elle": "parle", "nous": "parlons", "vous": "parlez", "ils/elles": "parlent" } },
      { infinitive: "finir", english: "to finish", forms: { "je": "finis", "tu": "finis", "il/elle": "finit", "nous": "finissons", "vous": "finissez", "ils/elles": "finissent" } },
      { infinitive: "vendre", english: "to sell", forms: { "je": "vends", "tu": "vends", "il/elle": "vend", "nous": "vendons", "vous": "vendez", "ils/elles": "vendent" } },
      { infinitive: "aller", english: "to go", forms: { "je": "vais", "tu": "vas", "il/elle": "va", "nous": "allons", "vous": "allez", "ils/elles": "vont" } },
    ],
  },
  {
    slug: "passe-compose",
    name: "Passé Composé",
    mood: "Indicatif",
    difficulty: 1,
    english: "Compound Past",
    summary: "Completed past actions — the everyday past tense in spoken French.",
    usage: [
      "Specific completed actions: Hier, j'ai mangé une pizza.",
      "Sequence of events: Je suis arrivé, j'ai vu, j'ai vaincu.",
    ],
    formation:
      "Auxiliary (avoir or être) in the present + past participle. Most verbs use avoir. Verbs of motion/state and reflexive verbs use être (and agree in gender/number).",
    examples: [
      { fr: "J'ai mangé une pomme.", en: "I ate / have eaten an apple." },
      { fr: "Elle est partie tôt.", en: "She left early." },
    ],
    conjugations: [
      { infinitive: "parler", english: "to speak", forms: { "je": "ai parlé", "tu": "as parlé", "il/elle": "a parlé", "nous": "avons parlé", "vous": "avez parlé", "ils/elles": "ont parlé" } },
      { infinitive: "finir", english: "to finish", forms: { "je": "ai fini", "tu": "as fini", "il/elle": "a fini", "nous": "avons fini", "vous": "avez fini", "ils/elles": "ont fini" } },
      { infinitive: "aller", english: "to go", forms: { "je": "suis allé(e)", "tu": "es allé(e)", "il/elle": "est allé(e)", "nous": "sommes allé(e)s", "vous": "êtes allé(e)(s)", "ils/elles": "sont allé(e)s" } },
      { infinitive: "être", english: "to be", forms: { "je": "ai été", "tu": "as été", "il/elle": "a été", "nous": "avons été", "vous": "avez été", "ils/elles": "ont été" } },
      { infinitive: "avoir", english: "to have", forms: { "je": "ai eu", "tu": "as eu", "il/elle": "a eu", "nous": "avons eu", "vous": "avez eu", "ils/elles": "ont eu" } },
    ],
  },
  {
    slug: "imparfait",
    name: "Imparfait",
    mood: "Indicatif",
    difficulty: 2,
    english: "Imperfect",
    summary: "Ongoing, habitual, or descriptive past actions.",
    usage: [
      "Past habits: Quand j'étais jeune, je jouais au foot.",
      "Descriptions: Il faisait beau et les oiseaux chantaient.",
      "Background actions: Je lisais quand le téléphone a sonné.",
    ],
    formation:
      "Take the nous-form of the present, drop -ons, add: -ais, -ais, -ait, -ions, -iez, -aient. Only être is irregular (stem ét-).",
    examples: [
      { fr: "Nous habitions à Paris.", en: "We used to live in Paris." },
      { fr: "Il pleuvait doucement.", en: "It was raining softly." },
    ],
    conjugations: [
      { infinitive: "être", english: "to be", forms: { "je": "étais", "tu": "étais", "il/elle": "était", "nous": "étions", "vous": "étiez", "ils/elles": "étaient" } },
      { infinitive: "avoir", english: "to have", forms: { "je": "avais", "tu": "avais", "il/elle": "avait", "nous": "avions", "vous": "aviez", "ils/elles": "avaient" } },
      { infinitive: "parler", english: "to speak", forms: { "je": "parlais", "tu": "parlais", "il/elle": "parlait", "nous": "parlions", "vous": "parliez", "ils/elles": "parlaient" } },
      { infinitive: "finir", english: "to finish", forms: { "je": "finissais", "tu": "finissais", "il/elle": "finissait", "nous": "finissions", "vous": "finissiez", "ils/elles": "finissaient" } },
      { infinitive: "vendre", english: "to sell", forms: { "je": "vendais", "tu": "vendais", "il/elle": "vendait", "nous": "vendions", "vous": "vendiez", "ils/elles": "vendaient" } },
    ],
  },
  {
    slug: "plus-que-parfait",
    name: "Plus-que-parfait",
    mood: "Indicatif",
    difficulty: 2,
    english: "Pluperfect",
    summary: "An action that happened before another past action.",
    usage: [
      "Earlier past action: Quand il est arrivé, j'avais déjà mangé.",
      "Regrets with si: Si j'avais su, je serais venu.",
    ],
    formation:
      "Auxiliary (avoir or être) in the imparfait + past participle.",
    examples: [
      { fr: "Elle avait fini avant moi.", en: "She had finished before me." },
      { fr: "Nous étions partis tôt.", en: "We had left early." },
    ],
    conjugations: [
      { infinitive: "parler", english: "to speak", forms: { "je": "avais parlé", "tu": "avais parlé", "il/elle": "avait parlé", "nous": "avions parlé", "vous": "aviez parlé", "ils/elles": "avaient parlé" } },
      { infinitive: "aller", english: "to go", forms: { "je": "étais allé(e)", "tu": "étais allé(e)", "il/elle": "était allé(e)", "nous": "étions allé(e)s", "vous": "étiez allé(e)(s)", "ils/elles": "étaient allé(e)s" } },
      { infinitive: "finir", english: "to finish", forms: { "je": "avais fini", "tu": "avais fini", "il/elle": "avait fini", "nous": "avions fini", "vous": "aviez fini", "ils/elles": "avaient fini" } },
    ],
  },
  {
    slug: "passe-simple",
    name: "Passé Simple",
    mood: "Indicatif",
    difficulty: 3,
    english: "Simple Past",
    summary: "Literary past tense — found in books, history, formal writing.",
    usage: [
      "Literary narration: Il ouvrit la porte et entra.",
      "Historical writing: Napoléon mourut en 1821.",
    ],
    formation:
      "-er verbs: -ai, -as, -a, -âmes, -âtes, -èrent. -ir/-re verbs: -is, -is, -it, -îmes, -îtes, -irent. Many irregular stems.",
    examples: [
      { fr: "Il marcha longtemps.", en: "He walked for a long time." },
      { fr: "Ils furent surpris.", en: "They were surprised." },
    ],
    conjugations: [
      { infinitive: "être", english: "to be", forms: { "je": "fus", "tu": "fus", "il/elle": "fut", "nous": "fûmes", "vous": "fûtes", "ils/elles": "furent" } },
      { infinitive: "avoir", english: "to have", forms: { "je": "eus", "tu": "eus", "il/elle": "eut", "nous": "eûmes", "vous": "eûtes", "ils/elles": "eurent" } },
      { infinitive: "parler", english: "to speak", forms: { "je": "parlai", "tu": "parlas", "il/elle": "parla", "nous": "parlâmes", "vous": "parlâtes", "ils/elles": "parlèrent" } },
      { infinitive: "finir", english: "to finish", forms: { "je": "finis", "tu": "finis", "il/elle": "finit", "nous": "finîmes", "vous": "finîtes", "ils/elles": "finirent" } },
    ],
  },
  {
    slug: "futur-simple",
    name: "Futur Simple",
    mood: "Indicatif",
    difficulty: 1,
    english: "Simple Future",
    summary: "Actions that will happen in the future.",
    usage: [
      "Future plans: Demain, je partirai à Lyon.",
      "Predictions: Il fera beau dimanche.",
    ],
    formation:
      "Use the infinitive (drop final -e for -re verbs) + endings: -ai, -as, -a, -ons, -ez, -ont. Some irregular stems (aller → ir-, avoir → aur-, être → ser-).",
    examples: [
      { fr: "Je parlerai au directeur.", en: "I will speak to the director." },
      { fr: "Nous irons en France.", en: "We will go to France." },
    ],
    conjugations: [
      { infinitive: "être", english: "to be", forms: { "je": "serai", "tu": "seras", "il/elle": "sera", "nous": "serons", "vous": "serez", "ils/elles": "seront" } },
      { infinitive: "avoir", english: "to have", forms: { "je": "aurai", "tu": "auras", "il/elle": "aura", "nous": "aurons", "vous": "aurez", "ils/elles": "auront" } },
      { infinitive: "parler", english: "to speak", forms: { "je": "parlerai", "tu": "parleras", "il/elle": "parlera", "nous": "parlerons", "vous": "parlerez", "ils/elles": "parleront" } },
      { infinitive: "finir", english: "to finish", forms: { "je": "finirai", "tu": "finiras", "il/elle": "finira", "nous": "finirons", "vous": "finirez", "ils/elles": "finiront" } },
      { infinitive: "aller", english: "to go", forms: { "je": "irai", "tu": "iras", "il/elle": "ira", "nous": "irons", "vous": "irez", "ils/elles": "iront" } },
    ],
  },
  {
    slug: "futur-proche",
    name: "Futur Proche",
    mood: "Indicatif",
    difficulty: 1,
    english: "Near Future",
    summary: "Going to do something — common in everyday speech.",
    usage: [
      "Immediate plans: Je vais manger.",
      "Near intentions: Nous allons partir bientôt.",
    ],
    formation: "aller (in present) + infinitive.",
    examples: [
      { fr: "Je vais étudier ce soir.", en: "I'm going to study tonight." },
      { fr: "Ils vont arriver.", en: "They're about to arrive." },
    ],
    conjugations: [
      { infinitive: "parler", english: "to speak", forms: { "je": "vais parler", "tu": "vas parler", "il/elle": "va parler", "nous": "allons parler", "vous": "allez parler", "ils/elles": "vont parler" } },
      { infinitive: "finir", english: "to finish", forms: { "je": "vais finir", "tu": "vas finir", "il/elle": "va finir", "nous": "allons finir", "vous": "allez finir", "ils/elles": "vont finir" } },
    ],
  },
  {
    slug: "futur-anterieur",
    name: "Futur Antérieur",
    mood: "Indicatif",
    difficulty: 3,
    english: "Future Perfect",
    summary: "An action that will have been completed before another future action.",
    usage: [
      "Future completed action: Quand tu arriveras, j'aurai fini.",
    ],
    formation: "Auxiliary (avoir/être) in futur simple + past participle.",
    examples: [
      { fr: "J'aurai terminé avant midi.", en: "I will have finished before noon." },
    ],
    conjugations: [
      { infinitive: "parler", english: "to speak", forms: { "je": "aurai parlé", "tu": "auras parlé", "il/elle": "aura parlé", "nous": "aurons parlé", "vous": "aurez parlé", "ils/elles": "auront parlé" } },
      { infinitive: "aller", english: "to go", forms: { "je": "serai allé(e)", "tu": "seras allé(e)", "il/elle": "sera allé(e)", "nous": "serons allé(e)s", "vous": "serez allé(e)(s)", "ils/elles": "seront allé(e)s" } },
    ],
  },
  {
    slug: "conditionnel-present",
    name: "Conditionnel Présent",
    mood: "Conditionnel",
    difficulty: 2,
    english: "Present Conditional",
    summary: "Would do — hypotheticals, polite requests, wishes.",
    usage: [
      "Politeness: Je voudrais un café, s'il vous plaît.",
      "Hypothesis: Si j'étais riche, j'achèterais une maison.",
    ],
    formation: "Future stem + imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient).",
    examples: [
      { fr: "Tu devrais te reposer.", en: "You should rest." },
      { fr: "Nous aimerions venir.", en: "We would like to come." },
    ],
    conjugations: [
      { infinitive: "être", english: "to be", forms: { "je": "serais", "tu": "serais", "il/elle": "serait", "nous": "serions", "vous": "seriez", "ils/elles": "seraient" } },
      { infinitive: "avoir", english: "to have", forms: { "je": "aurais", "tu": "aurais", "il/elle": "aurait", "nous": "aurions", "vous": "auriez", "ils/elles": "auraient" } },
      { infinitive: "parler", english: "to speak", forms: { "je": "parlerais", "tu": "parlerais", "il/elle": "parlerait", "nous": "parlerions", "vous": "parleriez", "ils/elles": "parleraient" } },
      { infinitive: "aller", english: "to go", forms: { "je": "irais", "tu": "irais", "il/elle": "irait", "nous": "irions", "vous": "iriez", "ils/elles": "iraient" } },
    ],
  },
  {
    slug: "conditionnel-passe",
    name: "Conditionnel Passé",
    mood: "Conditionnel",
    difficulty: 3,
    english: "Past Conditional",
    summary: "Would have done — regrets and unrealized past possibilities.",
    usage: [
      "Regret: J'aurais aimé venir.",
      "Hypothesis: Si tu avais étudié, tu aurais réussi.",
    ],
    formation: "Auxiliary in conditionnel présent + past participle.",
    examples: [
      { fr: "Nous aurions dû partir plus tôt.", en: "We should have left earlier." },
    ],
    conjugations: [
      { infinitive: "parler", english: "to speak", forms: { "je": "aurais parlé", "tu": "aurais parlé", "il/elle": "aurait parlé", "nous": "aurions parlé", "vous": "auriez parlé", "ils/elles": "auraient parlé" } },
      { infinitive: "aller", english: "to go", forms: { "je": "serais allé(e)", "tu": "serais allé(e)", "il/elle": "serait allé(e)", "nous": "serions allé(e)s", "vous": "seriez allé(e)(s)", "ils/elles": "seraient allé(e)s" } },
    ],
  },
  {
    slug: "subjonctif-present",
    name: "Subjonctif Présent",
    mood: "Subjonctif",
    difficulty: 3,
    english: "Present Subjunctive",
    summary: "Doubt, desire, emotion, necessity — after que.",
    usage: [
      "Necessity: Il faut que tu partes.",
      "Emotion: Je suis content que tu sois là.",
      "Doubt: Je ne pense pas qu'il vienne.",
    ],
    formation:
      "Take ils-form of the present, drop -ent, add: -e, -es, -e, -ions, -iez, -ent. Several irregular (être, avoir, aller, faire, pouvoir, savoir, vouloir).",
    examples: [
      { fr: "Il faut que je parte.", en: "I need to leave." },
      { fr: "Je veux qu'elle vienne.", en: "I want her to come." },
    ],
    conjugations: [
      { infinitive: "être", english: "to be", forms: { "je": "sois", "tu": "sois", "il/elle": "soit", "nous": "soyons", "vous": "soyez", "ils/elles": "soient" } },
      { infinitive: "avoir", english: "to have", forms: { "je": "aie", "tu": "aies", "il/elle": "ait", "nous": "ayons", "vous": "ayez", "ils/elles": "aient" } },
      { infinitive: "parler", english: "to speak", forms: { "je": "parle", "tu": "parles", "il/elle": "parle", "nous": "parlions", "vous": "parliez", "ils/elles": "parlent" } },
      { infinitive: "finir", english: "to finish", forms: { "je": "finisse", "tu": "finisses", "il/elle": "finisse", "nous": "finissions", "vous": "finissiez", "ils/elles": "finissent" } },
      { infinitive: "aller", english: "to go", forms: { "je": "aille", "tu": "ailles", "il/elle": "aille", "nous": "allions", "vous": "alliez", "ils/elles": "aillent" } },
    ],
  },
  {
    slug: "subjonctif-passe",
    name: "Subjonctif Passé",
    mood: "Subjonctif",
    difficulty: 3,
    english: "Past Subjunctive",
    summary: "Subjunctive for completed past actions.",
    usage: [
      "Past emotion: Je suis content que tu sois venu.",
    ],
    formation: "Auxiliary (avoir/être) in subjonctif présent + past participle.",
    examples: [
      { fr: "Bien qu'il ait plu, nous sommes sortis.", en: "Although it rained, we went out." },
    ],
    conjugations: [
      { infinitive: "parler", english: "to speak", forms: { "je": "aie parlé", "tu": "aies parlé", "il/elle": "ait parlé", "nous": "ayons parlé", "vous": "ayez parlé", "ils/elles": "aient parlé" } },
      { infinitive: "aller", english: "to go", forms: { "je": "sois allé(e)", "tu": "sois allé(e)", "il/elle": "soit allé(e)", "nous": "soyons allé(e)s", "vous": "soyez allé(e)(s)", "ils/elles": "soient allé(e)s" } },
    ],
  },
  {
    slug: "imperatif",
    name: "Impératif",
    mood: "Impératif",
    difficulty: 2,
    english: "Imperative",
    summary: "Commands and instructions — only tu, nous, vous forms.",
    usage: [
      "Commands: Parle ! / Parlez !",
      "Suggestions: Allons-y !",
    ],
    formation:
      "Use present tense forms for tu, nous, vous (drop the pronoun). For -er verbs, drop final -s from tu form.",
    examples: [
      { fr: "Écoute-moi !", en: "Listen to me!" },
      { fr: "Soyons patients.", en: "Let's be patient." },
    ],
    conjugations: [
      { infinitive: "être", english: "to be", forms: { "je": "—", "tu": "sois", "il/elle": "—", "nous": "soyons", "vous": "soyez", "ils/elles": "—" } },
      { infinitive: "avoir", english: "to have", forms: { "je": "—", "tu": "aie", "il/elle": "—", "nous": "ayons", "vous": "ayez", "ils/elles": "—" } },
      { infinitive: "parler", english: "to speak", forms: { "je": "—", "tu": "parle", "il/elle": "—", "nous": "parlons", "vous": "parlez", "ils/elles": "—" } },
      { infinitive: "finir", english: "to finish", forms: { "je": "—", "tu": "finis", "il/elle": "—", "nous": "finissons", "vous": "finissez", "ils/elles": "—" } },
    ],
  },
];

export const MOODS = ["Indicatif", "Conditionnel", "Subjonctif", "Impératif"] as const;

export function getTense(slug: string) {
  return TENSES.find((t) => t.slug === slug);
}
