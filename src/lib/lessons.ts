import restaurantImg from "@/assets/lesson-restaurant.jpg";
import airportImg from "@/assets/lesson-airport.jpg";
import interviewImg from "@/assets/lesson-interview.jpg";
import friendsImg from "@/assets/lesson-friends.jpg";
import onlineImg from "@/assets/lesson-online.jpg";
import socialImg from "@/assets/lesson-social.jpg";

export type DialogLine = { speaker: string; en: string; ro: string };

export type VocabItem = {
  term: string;
  type: "idiom" | "phrasal" | "collocation" | "expression" | "word";
  meaning: string; // în română
  example: string; // în engleză
};

export type Exercise =
  | {
      kind: "fill";
      prompt: string;
      answers: string[];
      hint?: string;
    }
  | {
      kind: "choice";
      prompt: string;
      options: string[];
      correct: number;
      explain?: string;
    }
  | {
      kind: "transform";
      prompt: string; // instrucțiune RO
      sentence: string; // propoziție EN de transformat
      answers: string[]; // transformări acceptate
      hint?: string;
    };

export type MatchPair = { en: string; ro: string };

export type Lesson = {
  slug: string;
  title: string;
  titleRo: string;
  emoji: string;
  image: string;
  level: "B2+" | "C1" | "C1+";
  cefr: string; // ce CEFR competențe atinge lecția
  summary: string;
  dialog: DialogLine[];
  explanations: { title: string; body: string }[];
  vocabulary: VocabItem[];
  exercises: Exercise[];
  freePrompt: { prompt: string; hint: string };
  match: MatchPair[];
};

export const LESSONS: Lesson[] = [
  // =========================================================================
  // RESTAURANT
  // =========================================================================
  {
    slug: "restaurant",
    title: "Dining Out",
    titleRo: "La restaurant",
    emoji: "🍝",
    image: restaurantImg,
    level: "C1",
    cefr: "Registru semi-formal · politețe indirectă · vocabular culinar",
    summary:
      "Politețea indirectă a englezei la masă: cum comanzi, cum trimiți ceva înapoi fără să jignești, cum vorbești despre mâncare ca un connoisseur.",
    dialog: [
      { speaker: "Host", en: "Good evening. Do you have a reservation with us tonight?", ro: "Bună seara. Aveți o rezervare la noi în această seară?" },
      { speaker: "You", en: "Yes, under Popescu — a table for two, around 8.", ro: "Da, pe numele Popescu — o masă pentru doi, în jur de ora 8." },
      { speaker: "Host", en: "Perfect. Would you prefer to be seated by the window, or somewhere a bit quieter?", ro: "Perfect. Ați prefera să fiți așezați lângă fereastră, sau undeva mai liniștit?" },
      { speaker: "You", en: "Somewhere quieter would be lovely, thanks.", ro: "Undeva mai liniștit ar fi minunat, mulțumesc." },
      { speaker: "Waiter", en: "Can I get you anything to drink while you're looking at the menu?", ro: "Vă pot aduce ceva de băut cât timp vă uitați pe meniu?" },
      { speaker: "You", en: "I'd love a glass of whatever red you'd recommend with the lamb.", ro: "Aș dori un pahar din vinul roșu pe care l-ați recomanda cu mielul." },
      { speaker: "Waiter", en: "Excellent choice. Are you ready to order, or would you like a few more minutes?", ro: "Excelentă alegere. Sunteți gata de comandă, sau mai doriți câteva minute?" },
      { speaker: "You", en: "I think we're set. I'll go with the pappardelle to start, and the lamb shank as a main.", ro: "Cred că suntem gata. Iau pappardelle ca aperitiv și ciolanul de miel ca fel principal." },
      { speaker: "Waiter", en: "Any allergies or dietary requirements I should flag with the kitchen?", ro: "Aveți alergii sau cerințe dietetice de semnalat bucătăriei?" },
      { speaker: "You", en: "Nothing major — I'd just rather it wasn't too heavily seasoned.", ro: "Nimic major — aș prefera să nu fie prea condimentat." },
      { speaker: "You (later)", en: "Sorry to bother you — I think there's been a slight mix-up. I ordered the lamb medium, but this is closer to well done.", ro: "Scuze că vă deranjez — cred că a fost o mică încurcătură. Am cerut mielul mediu, dar acesta e mai aproape de bine făcut." },
      { speaker: "Waiter", en: "I'm so sorry about that. Let me take it back and have the chef sort it out straight away.", ro: "Îmi pare foarte rău. Permiteți-mi să-l duc înapoi și bucătarul-șef va rezolva imediat." },
      { speaker: "You", en: "Could we get the bill whenever you have a moment? And is service included?", ro: "Putem primi nota când aveți un moment? Și taxa de serviciu e inclusă?" },
    ],
    explanations: [
      {
        title: "Politețea indirectă: distanțarea ca instrument",
        body: "La C1, politețea engleză înseamnă a crea distanță gramaticală între tine și cerere. Compară: „I want…” → „I'd like…” → „I was wondering if I could…”. Cu cât mai mulți pași — pretenitiv, modal trecut, întrebare indirectă — cu atât mai politicos. „Could we possibly…” e standardul; „I don't suppose you could…” e foarte politicos.",
      },
      {
        title: "Hedging când reclami",
        body: "Englezii nu spun „This is wrong”. Folosesc hedge-uri pentru a atenua: „There's been a slight mix-up”, „I think there might be a small issue with…”, „I'm afraid this isn't quite what I ordered”. „I'm afraid” NU înseamnă teamă — e un marker de regret politicos.",
      },
      {
        title: "Colocații cu „order” și „bill”",
        body: "Verbe care însoțesc natural „order”: place an order, take an order, get an order wrong, rush an order. Pentru notă: settle the bill (a achita), split the bill (a împărți), foot the bill (a plăti totul, idiomatic). „Service charge”/„gratuity” = bacșișul inclus.",
      },
      {
        title: "Vocabular culinar de connoisseur",
        body: "Texturi: crispy, crunchy, tender, succulent, dense, flaky. Gusturi: rich, delicate, savoury, tangy, smoky, earthy. Critici: bland (fad), overcooked, underseasoned, stodgy (greoi). Aprecieri: cooked to perfection, beautifully presented, packed with flavour.",
      },
      {
        title: "„Would rather” + past pentru preferințe politicoase",
        body: "„I'd rather it wasn't too spicy” — atenție, după „would rather” + subiect diferit, verbul e la trecut (subjunctive). Nu „I'd rather it isn't”. Echivalent natural pentru „aș prefera să nu…”.",
      },
    ],
    vocabulary: [
      { term: "to flag (something) with someone", type: "phrasal", meaning: "a semnala / a aduce în atenție", example: "I'll flag your dietary requirements with the chef." },
      { term: "a mix-up", type: "expression", meaning: "o confuzie, o încurcătură (politicos)", example: "There's been a small mix-up with our order." },
      { term: "to settle the bill", type: "collocation", meaning: "a achita nota", example: "Shall we settle the bill and head out?" },
      { term: "cooked to perfection", type: "collocation", meaning: "gătit impecabil", example: "The steak was cooked to perfection." },
      { term: "to be packed with flavour", type: "idiom", meaning: "plin de aromă", example: "This curry is absolutely packed with flavour." },
      { term: "to wash (something) down with", type: "phrasal", meaning: "a stropi / a duce jos cu (băutură)", example: "We washed it down with a crisp Sauvignon." },
      { term: "I don't suppose…", type: "expression", meaning: "formulă super-politicoasă pentru a cere ceva", example: "I don't suppose you could bring some extra napkins?" },
      { term: "stodgy", type: "word", meaning: "greoi, sățios (peiorativ)", example: "The pudding was a bit stodgy for my taste." },
    ],
    exercises: [
      {
        kind: "fill",
        prompt: "I was ____ if we could possibly move to a quieter table.",
        answers: ["wondering"],
        hint: "Formulă maxim politicoasă: „mă întrebam dacă…”.",
      },
      {
        kind: "choice",
        prompt: "Cea mai naturală formă C1 pentru o reclamație politicoasă:",
        options: [
          "This food is bad. Change it.",
          "I'm afraid there's been a slight mix-up with my order.",
          "Excuse me, I don't like this.",
        ],
        correct: 1,
        explain: "„I'm afraid” + „a slight mix-up” = hedging clasic britanic.",
      },
      {
        kind: "transform",
        prompt: "Rescrie politicos, folosind „would rather”:",
        sentence: "Please don't season it heavily.",
        answers: [
          "i'd rather it wasn't seasoned heavily",
          "i would rather it wasn't seasoned heavily",
          "i'd rather it weren't seasoned heavily",
        ],
        hint: "„I'd rather it ___ + past”.",
      },
      {
        kind: "fill",
        prompt: "We were going to ____ the bill, but he insisted on paying.",
        answers: ["split"],
        hint: "colocație — a împărți nota",
      },
      {
        kind: "choice",
        prompt: "„Stodgy” descrie cel mai bine:",
        options: ["o supă ușoară", "o budincă grea, sățioasă", "un fel proaspăt și acrișor"],
        correct: 1,
      },
    ],
    freePrompt: {
      prompt:
        "Scrie un review scurt (60-80 de cuvinte) pentru un restaurant pe care l-ai vizitat. Folosește cel puțin: o colocație din lecție, un adjectiv de textură și un hedge politicos pentru un minus.",
      hint: "Începe cu „We popped in for…” sau „Tucked away on a side street, …”.",
    },
    match: [
      { en: "I don't suppose you could…", ro: "Nu cumva ați putea…" },
      { en: "There's been a slight mix-up.", ro: "A fost o mică încurcătură." },
      { en: "Cooked to perfection.", ro: "Gătit impecabil." },
      { en: "Packed with flavour.", ro: "Plin de aromă." },
      { en: "Shall we split the bill?", ro: "Împărțim nota?" },
      { en: "A tad overdone.", ro: "Puțin prea făcut." },
      { en: "Service is included.", ro: "Taxa de serviciu e inclusă." },
    ],
  },

  // =========================================================================
  // AIRPORT
  // =========================================================================
  {
    slug: "airport",
    title: "Navigating the Airport",
    titleRo: "La aeroport",
    emoji: "✈️",
    image: airportImg,
    level: "C1",
    cefr: "Engleză tranzacțională sub presiune · phrasal verbs de călătorie",
    summary:
      "Anunțuri criptice, conexiuni ratate, bagaje pierdute. Engleza de aeroport cere phrasal verbs precise și o atitudine calmă, fermă.",
    dialog: [
      { speaker: "Agent", en: "Good morning. Could I see your passport and booking reference, please?", ro: "Bună dimineața. Pot vedea pașaportul și codul de rezervare, vă rog?" },
      { speaker: "You", en: "Here you go. I'm hoping to check in two bags and keep one as carry-on.", ro: "Poftiți. Aș dori să predau două bagaje și să păstrez unul de mână." },
      { speaker: "Agent", en: "Just so you know, your carry-on looks a touch oversized — could you pop it on the sizer?", ro: "Doar să știți, bagajul de mână pare puțin supradimensionat — îl puneți pe cadrul de măsurat?" },
      { speaker: "You", en: "Of course. … There — does that fit?", ro: "Sigur. … Așa — încape?" },
      { speaker: "Agent", en: "Just barely. I'll let it through. Would you like to upgrade to extra legroom for £25?", ro: "La limită. Îl las să treacă. Doriți să faceți upgrade pentru spațiu suplimentar pentru picioare la 25 de lire?" },
      { speaker: "You", en: "I'll pass, thanks. Any chance of an aisle seat though?", ro: "Renunț, mulțumesc. Există vreo șansă pentru un loc la culoar?" },
      { speaker: "Agent", en: "Done. Boarding starts at 10:40 from Gate 24. Heads-up — the gate is a fair walk, so don't dawdle.", ro: "Gata. Îmbarcarea începe la 10:40 de la poarta 24. Atenție — poarta e cam departe, așa că nu zăboviți." },
      { speaker: "PA", en: "This is a final boarding call for passenger Popescu travelling to Lisbon. Please make your way to Gate 24 immediately.", ro: "Acesta este apelul final pentru îmbarcare pentru pasagerul Popescu cu destinația Lisabona. Vă rugăm să vă îndreptați imediat spre poarta 24." },
      { speaker: "You (later, at baggage claim)", en: "Excuse me — I've been waiting for my suitcase for about 40 minutes and it still hasn't come through. I think it may have been delayed.", ro: "Scuzați-mă — aștept valiza de aproximativ 40 de minute și încă nu a apărut. Cred că s-ar putea să fi fost întârziată." },
      { speaker: "Staff", en: "I'll need to file a missing-baggage report. Could you describe the bag and confirm your onward address?", ro: "Va trebui să întocmesc o reclamație pentru bagaj pierdut. Puteți descrie geanta și confirma adresa de destinație?" },
    ],
    explanations: [
      {
        title: "Phrasal verbs esențiale de călătorie",
        body: "check in (a se înregistra), check out (a face check-out de la hotel), board (a urca în avion), take off (a decola), touch down (a ateriza), look out for (a fi atent la), make it to (a reuși să ajungi la), put through (a fi conectat / direcționat). „I just made it to the gate” = am ajuns la limită.",
      },
      {
        title: "Anunțuri de aeroport: decodare rapidă",
        body: "„Final boarding call” = ultima chemare (rulează la gate-ul deja deschis). „Now boarding by row” = îmbarcare pe rânduri. „Flight delayed/cancelled/rescheduled”. „Gate change”. „Please proceed to…” = mergeți la… „Last call for…” = ultima chemare pentru…",
      },
      {
        title: "Hedging C1 pentru probleme",
        body: "Nu spune „My bag is lost!”. Spune „I think my bag may have been delayed” / „It appears my bag hasn't come through yet”. „It appears”, „it seems”, „may have + past participle” suavizează și sună profesionist.",
      },
      {
        title: "Idiomuri pentru întârzieri și grabă",
        body: "to cut it fine (a o lăsa pe ultima sută), to miss the boat (a pierde ocazia/avionul), a stone's throw away (foarte aproape), a fair walk (destul de departe), to dawdle (a zăbovi), to be held up (a fi întârziat).",
      },
      {
        title: "Pasiv impersonal: stilul anunțurilor",
        body: "Anunțurile folosesc pasivul: „Passengers are kindly requested to…”, „Smoking is not permitted”, „Liquids must be placed in a clear bag”. Reține structura — o vei recunoaște imediat, oriunde în lume.",
      },
    ],
    vocabulary: [
      { term: "to cut it fine", type: "idiom", meaning: "a o lăsa pe ultima sută de metri", example: "We cut it fine — boarding had already started." },
      { term: "a fair walk", type: "expression", meaning: "destul de departe", example: "Gate 24 is a fair walk from security." },
      { term: "to come through", type: "phrasal", meaning: "(despre bagaje) a apărea pe bandă", example: "My suitcase still hasn't come through." },
      { term: "heads-up", type: "expression", meaning: "atenționare amicală", example: "Heads-up — there's a long queue at security." },
      { term: "to be held up", type: "phrasal", meaning: "a fi întârziat / blocat", example: "I was held up at passport control." },
      { term: "onward journey", type: "collocation", meaning: "călătoria de continuare", example: "Enjoy your onward journey to Madrid." },
      { term: "stopover / layover", type: "word", meaning: "escală scurtă / lungă (UK / US)", example: "We've got a three-hour layover in Frankfurt." },
      { term: "to make it to (the gate)", type: "phrasal", meaning: "a reuși să ajungi", example: "We just about made it to the gate in time." },
    ],
    exercises: [
      {
        kind: "fill",
        prompt: "We had to run — we were really ____ it fine.",
        answers: ["cutting"],
        hint: "idiom: a o lăsa pe ultima sută",
      },
      {
        kind: "choice",
        prompt: "Cea mai politicoasă raportare a unui bagaj pierdut:",
        options: [
          "You lost my bag!",
          "Where is my bag?? It's not here!",
          "I think my bag may have been delayed — it hasn't come through yet.",
        ],
        correct: 2,
      },
      {
        kind: "transform",
        prompt: "Transformă în pasiv impersonal (stil anunț):",
        sentence: "You cannot bring liquids through security.",
        answers: [
          "liquids are not permitted through security",
          "liquids are not allowed through security",
          "liquids may not be brought through security",
        ],
      },
      {
        kind: "fill",
        prompt: "I was ____ up at passport control for nearly an hour.",
        answers: ["held"],
      },
      {
        kind: "choice",
        prompt: "Diferența UK vs US:",
        options: [
          "„Stopover” e britanic, „layover” e american.",
          "Sunt sinonime perfecte.",
          "„Layover” înseamnă întotdeauna peste 24h.",
        ],
        correct: 0,
        explain: "În uz general, britanicii zic „stopover”, americanii „layover”.",
      },
    ],
    freePrompt: {
      prompt:
        "Scrie un mesaj de 4-5 propoziții către un coleg explicând că zborul tău a fost întârziat și vei ajunge mai târziu la întâlnire. Folosește pasivul impersonal și un hedge.",
      hint: "„My flight's been…”, „It looks like I won't be able to make it until…”.",
    },
    match: [
      { en: "Final boarding call", ro: "Ultima chemare pentru îmbarcare" },
      { en: "We cut it fine.", ro: "Am ajuns pe ultima sută." },
      { en: "Heads-up.", ro: "Atenție / un mic avertisment." },
      { en: "A fair walk away", ro: "Destul de departe" },
      { en: "Held up at security", ro: "Întârziat la control" },
      { en: "Onward journey", ro: "Călătoria de continuare" },
      { en: "Carry-on / hand luggage", ro: "Bagaj de mână" },
    ],
  },

  // =========================================================================
  // INTERVIEW
  // =========================================================================
  {
    slug: "interview",
    title: "The Job Interview",
    titleRo: "La interviu",
    emoji: "💼",
    image: interviewImg,
    level: "C1+",
    cefr: "Limbaj profesional · STAR · hedging strategic",
    summary:
      "Engleza de interviu la nivel C1: răspunsuri structurate STAR, vocabular de leadership, cum să discuți eșecul fără să-l minimizezi.",
    dialog: [
      { speaker: "Interviewer", en: "Thanks for coming in. To kick things off, could you walk me through your background?", ro: "Mulțumim că ați venit. Pentru început, ne puteți prezenta parcursul dumneavoastră?" },
      { speaker: "You", en: "Of course. I've spent the past five years in product marketing, most recently leading go-to-market for a B2B SaaS platform. Before that, I cut my teeth in a small agency, which gave me a really hands-on grounding.", ro: "Desigur. Am petrecut ultimii cinci ani în marketing de produs, cel mai recent conducând lansările pentru o platformă SaaS B2B. Înainte, m-am format într-o agenție mică, ceea ce mi-a oferit o pregătire foarte practică." },
      { speaker: "Interviewer", en: "What drew you to this role specifically?", ro: "Ce v-a atras în mod specific la acest rol?" },
      { speaker: "You", en: "Honestly, two things. First, the scope — owning a category end-to-end is exactly the stretch I'm looking for. Second, your team's reputation for shipping fast without cutting corners.", ro: "Sincer, două lucruri. În primul rând, scopul — să dețin o categorie de la cap la coadă e exact provocarea pe care o caut. În al doilea rând, reputația echipei de a livra rapid fără a face rabat la calitate." },
      { speaker: "Interviewer", en: "Tell me about a time you had to push back on a senior stakeholder.", ro: "Povestiți-mi despre o situație în care a trebuit să vă opuneți unei părți interesate de rang superior." },
      { speaker: "You", en: "Sure. Our CMO was set on a campaign I felt wouldn't land with our ICP. I pulled together quick user interviews and walked her through the findings rather than the opinion. She ultimately green-lit a reframed version — and it outperformed projections by 30%.", ro: "Sigur. Directorul nostru de marketing era hotărât pe o campanie despre care credeam că nu va rezona cu publicul țintă. Am organizat rapid interviuri cu utilizatori și i-am prezentat datele, nu opinia. Până la urmă a aprobat o versiune reformulată — și a depășit prognozele cu 30%." },
      { speaker: "Interviewer", en: "And a time something didn't go to plan?", ro: "Și o situație în care lucrurile nu au mers conform planului?" },
      { speaker: "You", en: "We rushed a launch to hit a board deadline and the messaging fell flat. I owned it in the post-mortem, restructured how we validate copy, and that framework is still in use.", ro: "Am grăbit o lansare pentru un termen de la consiliu și mesajul nu a prins. Mi-am asumat în analiza post-eveniment, am restructurat modul în care validăm textul, iar acel cadru este folosit și astăzi." },
      { speaker: "Interviewer", en: "Where do you see yourself in three years?", ro: "Unde vă vedeți peste trei ani?" },
      { speaker: "You", en: "Ideally, leading a team and shaping strategy at the function level — but I'm wary of over-engineering the path. The next 12 months matter more than the next 36.", ro: "Ideal, conducând o echipă și modelând strategia la nivel de funcție — dar mă feresc să planific excesiv traseul. Următoarele 12 luni contează mai mult decât următoarele 36." },
    ],
    explanations: [
      {
        title: "Cadrul STAR pentru întrebări comportamentale",
        body: "S = Situation (contextul, 1 frază), T = Task (rolul tău), A = Action (ce ai făcut tu — verbe la persoana I), R = Result (cuantificat, dacă se poate). „Tell me about a time…” așteaptă STAR. Răspunsuri 60-90 de secunde. Evită „we did” — interviewer-ul vrea să audă „I did”.",
      },
      {
        title: "Verbe puternice pentru CV și interviu",
        body: "Spread, scaled, spearheaded, drove, owned, shipped, delivered, restructured, streamlined, secured, championed, led, mentored, untangled. Evită „helped”, „was involved in”, „assisted with” — toate spun „nu eram în control”.",
      },
      {
        title: "Hedging strategic vs slăbiciune",
        body: "Bun: „I'd argue that…”, „My take is…”, „It's worth noting that…”, „On balance, I'd say…”. Slab: „I think maybe…”, „Sort of…”, „I'm not sure but…”. Hedge-uiește OPINIA, nu COMPETENȚA.",
      },
      {
        title: "Vorbește despre eșec ca un profesionist",
        body: "Formula: ce s-a întâmplat → ce ai învățat → ce ai schimbat sistemic. Niciodată „it was the team's fault”, niciodată „nothing comes to mind”. „I owned it”, „I took the hit”, „lessons learned”. Eșecul fără learning = red flag.",
      },
      {
        title: "Idiomuri profesionale utile",
        body: "to cut your teeth (a te forma), to hit the ground running (a fi productiv de la început), to think outside the box (a fi creativ — clișeu, evită!), to move the needle (a avea impact măsurabil), to drop the ball (a rata), to be on the same page (a fi de acord), to take ownership (a-ți asuma).",
      },
    ],
    vocabulary: [
      { term: "to cut your teeth (in/on something)", type: "idiom", meaning: "a-ți face mâna, a te forma profesional", example: "I cut my teeth in a fast-paced agency." },
      { term: "to push back (on)", type: "phrasal", meaning: "a te opune, a contesta politicos", example: "I had to push back on the timeline." },
      { term: "to move the needle", type: "idiom", meaning: "a avea impact real, măsurabil", example: "This campaign actually moved the needle on revenue." },
      { term: "to take ownership", type: "collocation", meaning: "a-ți asuma responsabilitatea", example: "She took ownership of the entire launch." },
      { term: "to ship fast", type: "collocation", meaning: "a livra produse rapid", example: "We ship fast but rarely cut corners." },
      { term: "to cut corners", type: "idiom", meaning: "a face rabat la calitate", example: "We refuse to cut corners on testing." },
      { term: "to fall flat", type: "phrasal", meaning: "a eșua, a nu rezona", example: "The opening joke completely fell flat." },
      { term: "a stretch role", type: "collocation", meaning: "rol care te scoate din zona de confort", example: "This would be a real stretch role for me." },
      { term: "to green-light", type: "phrasal", meaning: "a aproba un proiect", example: "The board green-lit the budget." },
      { term: "post-mortem", type: "word", meaning: "analiză după un proiect (succes sau eșec)", example: "Let's do a quick post-mortem on Friday." },
    ],
    exercises: [
      {
        kind: "fill",
        prompt: "I ____ my teeth in a small startup before joining a corporate.",
        answers: ["cut"],
      },
      {
        kind: "choice",
        prompt: "Răspuns C1 la „What's your biggest weakness?”:",
        options: [
          "I'm a perfectionist.",
          "I have no weaknesses.",
          "I used to take on too much myself — I've been actively delegating more, and it's freed up my team to grow.",
        ],
        correct: 2,
        explain: "Slăbiciune reală + acțiune corectivă + rezultat. Niciodată „perfectionist” (clișeu obosit).",
      },
      {
        kind: "transform",
        prompt: "Întărește verbul (înlocuiește „helped with”):",
        sentence: "I helped with the product launch.",
        answers: [
          "i led the product launch",
          "i drove the product launch",
          "i spearheaded the product launch",
          "i owned the product launch",
          "i shipped the product launch",
        ],
        hint: "led / drove / spearheaded / owned / shipped",
      },
      {
        kind: "fill",
        prompt: "I had to ____ back on the deadline — it simply wasn't realistic.",
        answers: ["push"],
      },
      {
        kind: "choice",
        prompt: "Care e cel mai puternic închizător de răspuns STAR?",
        options: [
          "…and that's basically what happened.",
          "…which boosted conversion by 22% quarter-on-quarter.",
          "…and the team was happy.",
        ],
        correct: 1,
        explain: "Cuantifică rezultatul. „Boosted X by Y%” e standardul.",
      },
    ],
    freePrompt: {
      prompt:
        "Răspunde STAR la „Tell me about a time you turned around a difficult situation” (80-120 de cuvinte). Folosește minim 2 verbe puternice și un rezultat cuantificat (real sau plauzibil).",
      hint: "Situation (1) → Task (1) → Action (3-4 fraze, „I…”) → Result (cifre).",
    },
    match: [
      { en: "to cut your teeth", ro: "a te forma profesional" },
      { en: "to move the needle", ro: "a avea impact real" },
      { en: "to push back on", ro: "a te opune politicos" },
      { en: "to cut corners", ro: "a face rabat la calitate" },
      { en: "to take ownership", ro: "a-ți asuma" },
      { en: "to hit the ground running", ro: "a fi productiv din prima zi" },
      { en: "a stretch role", ro: "rol provocator" },
      { en: "to green-light", ro: "a aproba" },
    ],
  },

  // =========================================================================
  // FRIENDS
  // =========================================================================
  {
    slug: "friends",
    title: "Hanging Out with Friends",
    titleRo: "Conversație cu prieteni",
    emoji: "☕",
    image: friendsImg,
    level: "C1",
    cefr: "Slang · ironie · pragmatică conversațională",
    summary:
      "Conversația informală nativă: contracții, slang, sarcasm controlat, expresii idiomatice. Diferența între engleza de manual și engleza din pub.",
    dialog: [
      { speaker: "Alex", en: "Long time no see! How've you been?", ro: "Nu te-am mai văzut de mult! Ce-ai mai făcut?" },
      { speaker: "You", en: "Can't complain, honestly. Work's been mental, but I'm getting there. You?", ro: "Nu mă pot plânge, sincer. La muncă a fost nebunie, dar mă descurc. Tu?" },
      { speaker: "Alex", en: "Same old, same old. Actually, I've been meaning to catch up with you for ages.", ro: "Tot vechea poveste. De fapt, voiam să ne vedem de o veșnicie." },
      { speaker: "You", en: "Tell me about it. We keep saying we'll grab a drink and it never happens.", ro: "Nu-mi mai zice. Tot zicem că bem ceva și nu se întâmplă niciodată." },
      { speaker: "Alex", en: "What about Friday? There's this new place that's supposed to be brilliant.", ro: "Vineri ce zici? E un local nou care pare să fie excelent." },
      { speaker: "You", en: "Friday works. Shall we say 7-ish? My treat — I owe you one from last time.", ro: "Vineri merge. Ne vedem pe la 7? Fac eu cinste — îți datorez de data trecută." },
      { speaker: "Alex", en: "Don't be daft, we'll split it. By the way, did you hear about Sarah's new gig?", ro: "Nu fi prostuț, împărțim. Apropo, ai auzit de noul job al lui Sarah?" },
      { speaker: "You", en: "No way — spill the beans.", ro: "Nu se poate — dă-i drumul, spune!" },
      { speaker: "Alex", en: "She packed in the consultancy and is going freelance. Bold move, but it's so her.", ro: "A renunțat la consultanță și se face freelancer. Mișcare îndrăzneață, dar e foarte ea." },
      { speaker: "You", en: "Good for her. Anyway, I should probably get going — early start tomorrow.", ro: "Bravo ei. Oricum, ar trebui să plec — am o dimineață devreme mâine." },
      { speaker: "Alex", en: "Fair enough. Friday it is. Take care!", ro: "OK, e logic. Atunci vineri. Ai grijă!" },
    ],
    explanations: [
      {
        title: "Connected speech: cum sună de fapt",
        body: "„How have you been” = „How've you been” (/haʊv juː biːn/). „I have been meaning to” = „I've been meaning to”. „What about” → „Whaddabout”. „Going to” → „gonna”, „want to” → „wanna”, „got to” → „gotta”. Acestea se SCRIU rareori, dar se ROSTESC mereu. C1 le aude și le folosește.",
      },
      {
        title: "Discourse markers casual",
        body: "„Anyway” = schimbă subiectul. „Actually” = corectează sau adaugă. „By the way” = informație colaterală. „I mean…” = clarifică. „Like, …” (filler) = ca, gen. „You know what I mean?” = caută acord. „To be fair…” = recunoaște nuanțat.",
      },
      {
        title: "Britanic vs Americanism — diferențe vii",
        body: "UK: brilliant / mental / cheers / mate / proper good / take the mickey / knackered. US: awesome / crazy / thanks / dude / really good / make fun of / exhausted. „I'm pissed” = UK supărat, US beat. „Pants” = UK lenjerie, US pantaloni. Reține pentru ambele.",
      },
      {
        title: "Ironie și understatement britanic",
        body: "„Not bad” poate însemna „excellent”. „A bit of a nightmare” = catastrofă. „Quite good” = mediocru spre bun. „I wouldn't say no” = da, te rog. Englezii folosesc understatement-ul ca semnătură culturală. Nu lua literal.",
      },
      {
        title: "Phrasal verbs sociale",
        body: "to catch up (a se pune la curent), to hang out (a petrece timp), to drop by/in (a trece pe la), to bail on (a anula brusc), to flake out (a fi nesigur, a anula), to pack in (a renunța la un job), to fall out with (a se certa), to make up (a se împăca), to put up with (a tolera).",
      },
    ],
    vocabulary: [
      { term: "long time no see", type: "expression", meaning: "nu ne-am văzut de mult", example: "Long time no see! What's new?" },
      { term: "to catch up (with someone)", type: "phrasal", meaning: "a se pune la curent", example: "We need to catch up soon!" },
      { term: "can't complain", type: "expression", meaning: "nu mă pot plânge", example: "Work's busy but I can't complain." },
      { term: "to spill the beans", type: "idiom", meaning: "a divulga o veste", example: "Come on, spill the beans!" },
      { term: "to pack (something) in", type: "phrasal", meaning: "a renunța la (job, hobby)", example: "He packed in his job to travel." },
      { term: "to bail (on someone)", type: "phrasal", meaning: "a anula în ultimul moment", example: "Sorry I bailed on you last night." },
      { term: "knackered", type: "word", meaning: "epuizat (UK)", example: "I'm absolutely knackered." },
      { term: "fair enough", type: "expression", meaning: "OK, e logic / e corect", example: "Fair enough — see you Friday then." },
      { term: "tell me about it", type: "expression", meaning: "ironic: „nici nu-mi mai zice”", example: "— Mondays are rough. — Tell me about it." },
      { term: "good for (you/her/him)", type: "expression", meaning: "bravo, mă bucur pentru tine", example: "She got promoted — good for her!" },
    ],
    exercises: [
      {
        kind: "fill",
        prompt: "We really need to ____ up — it's been months.",
        answers: ["catch"],
      },
      {
        kind: "choice",
        prompt: "În UK, „I'm absolutely knackered” înseamnă:",
        options: ["Sunt furios.", "Sunt epuizat.", "Sunt beat."],
        correct: 1,
      },
      {
        kind: "choice",
        prompt: "Un britanic spune „Not bad at all, actually”. Cel mai probabil înseamnă:",
        options: ["Mediocru.", "Excelent (understatement).", "Catastrofal."],
        correct: 1,
        explain: "Understatement clasic. „Not bad” poate fi laudă reală.",
      },
      {
        kind: "transform",
        prompt: "Rescrie informal, folosind contracții și un phrasal verb:",
        sentence: "He has decided to leave his job and travel.",
        answers: [
          "he's decided to pack in his job and travel",
          "he's packed in his job to travel",
          "he's decided to pack his job in and travel",
        ],
      },
      {
        kind: "fill",
        prompt: "Don't ____ on me again — last time you cancelled an hour before!",
        answers: ["bail", "flake"],
        hint: "phrasal verb pentru a anula brusc",
      },
    ],
    freePrompt: {
      prompt:
        "Scrie un schimb de mesaje text (5-6 replici) cu un prieten care vrea să te vadă weekend-ul ăsta. Folosește minim 3 elemente colocviale (contracții, phrasal verb, slang, idiom).",
      hint: "„Mate, you free…?”, „Can't, I'm…”, „Fair enough”, „How about…?”",
    },
    match: [
      { en: "Long time no see!", ro: "Nu ne-am văzut de mult!" },
      { en: "Spill the beans.", ro: "Spune tot." },
      { en: "I'm knackered.", ro: "Sunt epuizat." },
      { en: "Tell me about it.", ro: "Nici nu-mi mai zice." },
      { en: "Fair enough.", ro: "OK, e corect." },
      { en: "Don't bail on me.", ro: "Nu mă lăsa baltă." },
      { en: "Good for her!", ro: "Bravo ei!" },
      { en: "My treat.", ro: "Fac eu cinste." },
    ],
  },

  // =========================================================================
  // ONLINE
  // =========================================================================
  {
    slug: "online",
    title: "Online: Chat, Email & Slack",
    titleRo: "Online: chat, email și Slack",
    emoji: "💬",
    image: onlineImg,
    level: "C1",
    cefr: "Registre digitale · email profesional · ton",
    summary:
      "Trei registre distincte: chat-ul de prieteni, Slack-ul de echipă, email-ul către un client. Aceeași limbă, trei lumi.",
    dialog: [
      { speaker: "WhatsApp", en: "u free 2nite? new burger place opened lol", ro: "ești liber diseară? a deschis un loc nou de burgeri lol" },
      { speaker: "You", en: "yeah down for it. 8?", ro: "da, sunt gata. la 8?" },
      { speaker: "Slack #team", en: "Quick one, team — anyone got bandwidth to QA the onboarding flow today? 🙏", ro: "Rapid, echipă — are cineva capacitate să testeze fluxul de onboarding azi? 🙏" },
      { speaker: "You (Slack)", en: "I can take a look after standup. Drop the Loom and acceptance criteria here?", ro: "Pot să mă uit după standup. Trimite Loom-ul și criteriile de acceptare aici?" },
      { speaker: "Email", en: "Subject: Q3 proposal — quick clarification\n\nHi Sarah,\n\nI hope this finds you well. Thanks for sending the draft proposal across on Friday — I've had a chance to review it in detail.\n\nOn the whole, it looks really strong. There are just two points I wanted to flag before we sign off:\n\n1. The scope under section 3 reads slightly ambiguously — could we tighten the deliverables?\n2. The timeline assumes a two-week QA window, which I suspect may be optimistic given the holiday period.\n\nHappy to jump on a call this week if that's easier. Otherwise, let me know your thoughts when you get a moment — no rush.\n\nMany thanks,\nAlex", ro: "Subiect: Propunere T3 — clarificare rapidă\n\nBună Sarah,\n\nSper că ești bine. Mulțumesc că ai trimis proiectul de propunere vineri — am avut ocazia să-l studiez în detaliu.\n\nÎn ansamblu, arată foarte bine. Sunt doar două puncte pe care voiam să le semnalez înainte de a aproba:\n\n1. Scopul de la secțiunea 3 e ușor ambiguu — putem strânge livrabilele?\n2. Calendarul presupune o fereastră de două săptămâni pentru QA, care suspectez că e optimistă având în vedere perioada de sărbători.\n\nCu plăcere intru într-un apel săptămâna asta dacă e mai ușor. Altfel, spune-mi părerea când ai un moment — nu e nicio grabă.\n\nMulte mulțumiri,\nAlex" },
    ],
    explanations: [
      {
        title: "Trei registre, trei seturi de reguli",
        body: "CHAT (prieteni): minuscule, fără punctuație, abrevieri (u, ur, idk, lol, lmao, brb), emoji liber. SLACK (colegi): propoziții scurte, emoji ocazional 🙏 ✅, ton direct, „quick one” / „bandwidth” / „let me circle back”. EMAIL (extern): paragrafe, salut + închidere completă, fără emoji, hedging politicos.",
      },
      {
        title: "Anatomia unui email C1",
        body: "1) Subiect specific („Q3 proposal — quick clarification”, nu „Hi”). 2) Salut potrivit: „Dear Ms Roberts” (formal) / „Hi Sarah” (cunoscut). 3) Linie de încălzire („I hope this finds you well” — clișeu acceptat). 4) Context („Thanks for…”). 5) Cererea principală cu hedging. 6) Pas următor clar. 7) Închidere: „Many thanks”, „Best regards”, „Kind regards”.",
      },
      {
        title: "Hedge-uri profesionale prin email",
        body: "„I just wanted to check…”, „Could I possibly ask…”, „I was wondering whether…”, „It might be worth…”, „I suspect…”, „I'd be inclined to…”, „On the off-chance you have a moment…”. Toate atenuează cererea fără să o slăbească.",
      },
      {
        title: "Acronime Slack/email de înțeles",
        body: "ASAP (cât mai repede), EOD (end of day), EOW (end of week), FYI (pentru informare), FYA (pentru acțiune), TL;DR (prea lung, n-am citit — rezumat), OOO (out of office), WFH (work from home), PTO (concediu), KPI/OKR (obiective), 1:1 (întâlnire individuală), heads-up, circle back, loop in, sync up.",
      },
      {
        title: "Tonul: cum eviți să suni nepoliticos accidental",
        body: "„Per my last email” = pasiv-agresiv; folosește „As mentioned previously…”. „K.” = rece; minim „Sounds good!”. „Why didn't you…?” → „Just curious — what was the thinking behind…?”. Adaugă „please”, „when you get a chance”, „happy to discuss”.",
      },
    ],
    vocabulary: [
      { term: "to loop (someone) in", type: "phrasal", meaning: "a include pe cineva pe email/chat", example: "Looping in Sarah for visibility." },
      { term: "to circle back", type: "phrasal", meaning: "a reveni asupra unui subiect", example: "Let's circle back on this next week." },
      { term: "to sign off (on)", type: "phrasal", meaning: "a aproba final / a încheia", example: "Once legal signs off, we can ship." },
      { term: "to flag (something)", type: "phrasal", meaning: "a semnala atent", example: "Just flagging a small issue with section 3." },
      { term: "EOD / EOW", type: "expression", meaning: "sfârșitul zilei / săptămânii", example: "I'll have it to you by EOD." },
      { term: "bandwidth", type: "word", meaning: "capacitate (timp/energie) pentru ceva", example: "I don't have the bandwidth this week." },
      { term: "no rush", type: "expression", meaning: "nu e grabă", example: "Whenever you get a chance — no rush." },
      { term: "to touch base", type: "idiom", meaning: "a lua scurt legătura", example: "Let's touch base on Thursday." },
      { term: "I hope this finds you well", type: "expression", meaning: "clișeu acceptat de deschidere de email", example: "Hi Mark, I hope this finds you well." },
      { term: "kind regards / many thanks", type: "collocation", meaning: "închideri standard de email", example: "Kind regards, Alex" },
    ],
    exercises: [
      {
        kind: "choice",
        prompt: "Cel mai potrivit subiect de email C1:",
        options: [
          "Hi",
          "Quick question!!!",
          "Q3 proposal — quick clarification",
        ],
        correct: 2,
      },
      {
        kind: "fill",
        prompt: "Looping ____ Sarah for visibility on this.",
        answers: ["in"],
        hint: "phrasal verb: a include pe cineva",
      },
      {
        kind: "transform",
        prompt: "Suavizează tonul (rescrie politicos):",
        sentence: "Why didn't you reply to my last email?",
        answers: [
          "just checking in — did my last email reach you ok?",
          "just following up on my last email — let me know when you get a chance",
          "just wanted to follow up on my previous email when you have a moment",
        ],
        hint: "„Just following up…” + „when you get a chance”",
      },
      {
        kind: "choice",
        prompt: "„Per my last email” într-un răspuns:",
        options: [
          "Profesionist și clar.",
          "Pasiv-agresiv — evită.",
          "Foarte politicos.",
        ],
        correct: 1,
        explain: "E celebru ca formulă pasiv-agresivă. Folosește „As mentioned previously” sau rezumă din nou.",
      },
      {
        kind: "fill",
        prompt: "I don't have the ____ this week — could we push it to next?",
        answers: ["bandwidth", "capacity"],
      },
    ],
    freePrompt: {
      prompt:
        "Scrie un email scurt (80-100 cuvinte) către un client cerând feedback pe un proiect. Folosește: subiect specific, o formulă de încălzire, cererea cu hedging, un termen sugerat și o închidere profesională.",
      hint: "„I hope this finds you well…”, „I'd be grateful if…”, „by EOW”, „Kind regards”.",
    },
    match: [
      { en: "To loop in", ro: "A include pe email" },
      { en: "To circle back", ro: "A reveni asupra subiectului" },
      { en: "To touch base", ro: "A lua scurt legătura" },
      { en: "No rush", ro: "Nu e grabă" },
      { en: "EOD", ro: "Sfârșitul zilei" },
      { en: "Bandwidth", ro: "Capacitate / timp" },
      { en: "Kind regards", ro: "Cu respect" },
      { en: "To sign off", ro: "A aproba final" },
    ],
  },

  // =========================================================================
  // SOCIAL MEDIA
  // =========================================================================
  {
    slug: "social-media",
    title: "Social Media & Internet Culture",
    titleRo: "Pe rețelele sociale",
    emoji: "📱",
    image: socialImg,
    level: "C1",
    cefr: "Engleză vie, în evoluție · meme literacy · Gen-Z slang",
    summary:
      "Caption-uri, comentarii, DM-uri, meme. Engleza de internet trăiește repede — vocabular Gen-Z, ironie meta și granița dintre cool și cringe.",
    dialog: [
      { speaker: "IG caption", en: "currently down a Lisbon rabbit hole 🇵🇹 send recs", ro: "momentan adâncit într-o spirală Lisabona 🇵🇹 trimiteți recomandări" },
      { speaker: "Comment", en: "okay but the lighting in that second pic is unreal ✨", ro: "ok dar lumina din a doua poză e nereală ✨" },
      { speaker: "Reply", en: "right?? pure golden hour magic, no filter", ro: "așa-i?? magie pură de golden hour, fără filtru" },
      { speaker: "TikTok caption", en: "POV: you said \"just one drink\" three hours ago 🙃 #relatable", ro: "POV: ai zis „doar un pahar” acum trei ore 🙃 #relatable" },
      { speaker: "DM", en: "hey! saw your story — that café screams my aesthetic. drop the @ when you have a sec?", ro: "salut! ți-am văzut story-ul — cafeneaua aia strigă estetica mea. îmi dai @-ul când ai un moment?" },
      { speaker: "You", en: "ahaha it's called Brew & Bloom — tiny, no wifi, perfect vibes. you'd live there.", ro: "ahaha se numește Brew & Bloom — micuță, fără wifi, vibe perfect. ai locui acolo." },
      { speaker: "X / Twitter", en: "hot take: airport coffee is good, actually. fight me.", ro: "părere controversată: cafeaua de la aeroport e bună, de fapt. luptați-mă." },
      { speaker: "Reply", en: "this is the wildest thing I've read all week 😭", ro: "ăsta e cel mai sălbatic lucru pe care l-am citit săptămâna asta 😭" },
    ],
    explanations: [
      {
        title: "Gramatica internetului: regulile noi",
        body: "Lowercase intenționat = ton casual, ironic, „relaxat”. Capitalizare = strigă sau emfază. Punct la final într-un text = sună sec, supărat. „lol” și „lmao” NU mai înseamnă întotdeauna „râd” — sunt softener-e (atenuatori). „K.” e tăios; „kk” e prietenos.",
      },
      {
        title: "Gen-Z slang activ în 2025",
        body: "slay (excelent), no cap (serios), it's giving X (transmite vibe-ul de X), main character energy (carismă centrală), the algorithm fed me (mi-a apărut în feed), unhinged (nebun, în sens pozitiv), iconic, lowkey/highkey (oarecum/intens), tea (bârfă), spill the tea, era (perioadă: „my running era”), based (curajos), mid (mediocru), it ate (a fost perfect), delulu (delusional — autoironic).",
      },
      {
        title: "Meme literacy: structuri recunoscute",
        body: "„POV: you…” = perspectiva personajului. „No one: / Me: …” = nimeni n-a întrebat, dar uite. „It's giving [adjectiv]” = transmite vibe-ul de. „Tell me you're X without telling me you're X.” „This is the [adjectiv]-est thing.” Acestea sunt cadre meme — recunoaște-le, folosește-le contextual.",
      },
      {
        title: "Ironie meta și autodepreciere",
        body: "Engleza online merge pe autodepreciere ironică: „i am once again opening LinkedIn to feel bad about myself”, „crying screaming throwing up” (despre lucruri ușoare), „I cannot be normal about this”. NU lua literal — e amuzament prin exagerare.",
      },
      {
        title: "Granița dintre cool și cringe",
        body: "Cringe = folosirea forțată, întârziată sau în context greșit. „How do you do, fellow kids?” energy. Reguli: 1) nu folosi slang pe care nu-l înțelegi complet, 2) un brand corporate folosind „slay” = instant cringe, 3) slang se învechește RAPID (un an = expirat). Privește ca observator înainte de a folosi.",
      },
    ],
    vocabulary: [
      { term: "to go down a rabbit hole", type: "idiom", meaning: "a te pierde adâncit într-un subiect", example: "I went down a Wikipedia rabbit hole about octopuses." },
      { term: "it's giving (X)", type: "expression", meaning: "transmite vibe-ul de X (Gen-Z)", example: "This outfit is giving main-character energy." },
      { term: "hot take", type: "collocation", meaning: "opinie controversată / curajoasă", example: "Hot take: emails are better than meetings." },
      { term: "the algorithm fed me", type: "expression", meaning: "mi-a apărut în feed", example: "The algorithm fed me 3 hours of bread-making videos." },
      { term: "to drop the @", type: "expression", meaning: "a trimite numele de utilizator", example: "Drop the @ — I need to follow her." },
      { term: "no cap", type: "expression", meaning: "fără minciună, serios", example: "That was the best meal I've ever had, no cap." },
      { term: "lowkey / highkey", type: "expression", meaning: "oarecum / intens", example: "I lowkey want to move to Portugal." },
      { term: "main character energy", type: "expression", meaning: "carismă, atitudine de protagonist", example: "She walked in with full main character energy." },
      { term: "to spill the tea", type: "idiom", meaning: "a spune bârfa", example: "Okay, spill the tea — what happened at dinner?" },
      { term: "mid", type: "word", meaning: "mediocru (peiorativ)", example: "Honestly, the sequel was mid." },
      { term: "cringe (adj/n)", type: "word", meaning: "jenant / jena", example: "That ad was peak cringe." },
      { term: "to be unhinged (positive)", type: "expression", meaning: "delicios de nebun", example: "Her comedy is genuinely unhinged — I love it." },
    ],
    exercises: [
      {
        kind: "choice",
        prompt: "„This outfit is giving main character energy” înseamnă:",
        options: [
          "Hainele aparțin personajului principal.",
          "Outfit-ul transmite carismă, atitudine de protagonist.",
          "Outfit-ul e prea simplu.",
        ],
        correct: 1,
      },
      {
        kind: "fill",
        prompt: "I went down a 3-hour ____ ____ on medieval recipes.",
        answers: ["rabbit hole"],
      },
      {
        kind: "choice",
        prompt: "Un brand corporate scrie „we just dropped our new collection — it slays, no cap”. Reacția nativă:",
        options: ["Foarte cool, vor cumpăra.", "Cringe — slang forțat de marketing.", "Foarte profesionist."],
        correct: 1,
      },
      {
        kind: "transform",
        prompt: "Scrie un caption Instagram (max 12 cuvinte) pentru o poză cu cafea de dimineață. Folosește lowercase intenționat:",
        sentence: "I am drinking coffee on a beautiful Tuesday morning.",
        answers: ["tuesday morning energy ☕"],
        hint: "Nu există un singur răspuns corect. Încearcă ceva scurt, casual: „slow tuesday”, „coffee era”, „it's giving monday again”. Răspunsul afișat e doar un exemplu.",
      },
      {
        kind: "choice",
        prompt: "Care propoziție e cea mai ironică / Gen-Z?",
        options: [
          "I really enjoyed the film.",
          "i cannot be normal about this movie. crying. screaming. throwing up.",
          "The film was quite good.",
        ],
        correct: 1,
      },
    ],
    freePrompt: {
      prompt:
        "Scrie un caption (max 25 cuvinte) + un comentariu de prieten + un răspuns al tău. Subiect: prima zi într-un oraș nou. Folosește lowercase, un emoji, și o structură meme („POV:”, „it's giving”, „no one: / me:”).",
      hint: "Caption → comment → reply. Citește-l cu voce tare: dacă sună ca un copywriter de bancă, mai relaxează tonul.",
    },
    match: [
      { en: "It's giving main character energy.", ro: "Transmite carismă de protagonist." },
      { en: "Hot take", ro: "Părere controversată" },
      { en: "Spill the tea", ro: "Dă bârfa" },
      { en: "Down a rabbit hole", ro: "Adâncit într-o spirală de subiect" },
      { en: "The algorithm fed me…", ro: "Mi-a apărut în feed…" },
      { en: "Lowkey obsessed", ro: "Cam obsedat(ă)" },
      { en: "Mid", ro: "Mediocru" },
      { en: "Peak cringe", ro: "Culmea jenei" },
    ],
  },
];

export const LESSONS_BY_SLUG: Record<string, Lesson> = Object.fromEntries(
  LESSONS.map((l) => [l.slug, l]),
);
