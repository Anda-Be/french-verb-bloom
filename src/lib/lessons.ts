import restaurantImg from "@/assets/lesson-restaurant.jpg";
import airportImg from "@/assets/lesson-airport.jpg";
import interviewImg from "@/assets/lesson-interview.jpg";
import friendsImg from "@/assets/lesson-friends.jpg";
import onlineImg from "@/assets/lesson-online.jpg";
import socialImg from "@/assets/lesson-social.jpg";
import doctorImg from "@/assets/lesson-doctor.jpg";
import apartmentImg from "@/assets/lesson-apartment.jpg";
import customerServiceImg from "@/assets/lesson-customer-service.jpg";
import meetingImg from "@/assets/lesson-meeting.jpg";


export type DialogLine = { speaker: string; en: string };

export type VocabItem = {
  term: string;
  type: "idiom" | "phrasal" | "collocation" | "expression" | "word";
  meaning: string; // Romanian gloss (kept as the only RO content — these are new items to learn)
  example: string; // English
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
      prompt: string;
      sentence: string;
      answers: string[];
      hint?: string;
    };

export type MatchPair = { en: string; ro: string };

export type Lesson = {
  slug: string;
  title: string;
  tagline: string;
  emoji: string;
  image: string;
  level: "B2+" | "C1" | "C1+";
  cefr: string;
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
    tagline: "Ordering, complaining and praising — politely",
    emoji: "🍝",
    image: restaurantImg,
    level: "C1",
    cefr: "Semi-formal register · indirect politeness · culinary vocabulary",
    summary:
      "How English does politeness at the table: ordering with grace, sending something back without causing offence, and talking about food like a connoisseur.",
    dialog: [
      { speaker: "Host", en: "Good evening. Do you have a reservation with us tonight?" },
      { speaker: "You", en: "Yes, under Popescu — a table for two, around 8." },
      { speaker: "Host", en: "Perfect. Would you prefer to be seated by the window, or somewhere a bit quieter?" },
      { speaker: "You", en: "Somewhere quieter would be lovely, thanks." },
      { speaker: "Waiter", en: "Can I get you anything to drink while you're looking at the menu?" },
      { speaker: "You", en: "I'd love a glass of whatever red you'd recommend with the lamb." },
      { speaker: "Waiter", en: "Excellent choice. Are you ready to order, or would you like a few more minutes?" },
      { speaker: "You", en: "I think we're set. I'll go with the pappardelle to start, and the lamb shank as a main." },
      { speaker: "Waiter", en: "Any allergies or dietary requirements I should flag with the kitchen?" },
      { speaker: "You", en: "Nothing major — I'd just rather it wasn't too heavily seasoned." },
      { speaker: "You (later)", en: "Sorry to bother you — I think there's been a slight mix-up. I ordered the lamb medium, but this is closer to well done." },
      { speaker: "Waiter", en: "I'm so sorry about that. Let me take it back and have the chef sort it out straight away." },
      { speaker: "You", en: "Could we get the bill whenever you have a moment? And is service included?" },
    ],
    explanations: [
      {
        title: "Indirect politeness: distancing as a tool",
        body: "At C1, English politeness is mostly grammatical distance between you and the request. Compare: ‘I want…’ → ‘I'd like…’ → ‘I was wondering if I could…’. The more layers — pretérite, past modal, embedded question — the more polite. ‘Could we possibly…’ is the standard register; ‘I don't suppose you could…’ is extra polite.",
      },
      {
        title: "Hedging a complaint",
        body: "English speakers don't say ‘This is wrong.’ They hedge: ‘There's been a slight mix-up’, ‘I think there might be a small issue with…’, ‘I'm afraid this isn't quite what I ordered.’ ‘I'm afraid’ has nothing to do with fear — it's a marker of polite regret.",
      },
      {
        title: "Collocations with ‘order’ and ‘bill’",
        body: "Verbs that pair naturally with order: place an order, take an order, get an order wrong, rush an order. For the bill: settle the bill (pay), split the bill (share), foot the bill (pay for everything — idiomatic). ‘Service charge’ / ‘gratuity’ = the tip that's already included.",
      },
      {
        title: "Connoisseur vocabulary for food",
        body: "Texture: crispy, crunchy, tender, succulent, dense, flaky. Flavour: rich, delicate, savoury, tangy, smoky, earthy. Criticism: bland, overcooked, underseasoned, stodgy (heavy and dull). Praise: cooked to perfection, beautifully presented, packed with flavour.",
      },
      {
        title: "‘Would rather’ + past for polite preferences",
        body: "‘I'd rather it wasn't too spicy.’ Note: after ‘would rather’ + a different subject, the verb goes into the past (a subjunctive use). Not ‘I'd rather it isn't’. This is the natural way to express ‘I'd prefer it not to be…’.",
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
        hint: "Maximum-politeness opener: ‘I was ___ if…’",
      },
      {
        kind: "choice",
        prompt: "The most natural C1 way to complain politely:",
        options: [
          "This food is bad. Change it.",
          "I'm afraid there's been a slight mix-up with my order.",
          "Excuse me, I don't like this.",
        ],
        correct: 1,
        explain: "‘I'm afraid’ + ‘a slight mix-up’ is classic British hedging.",
      },
      {
        kind: "transform",
        prompt: "Rewrite politely using ‘would rather’:",
        sentence: "Please don't season it heavily.",
        answers: [
          "i'd rather it wasn't seasoned heavily",
          "i would rather it wasn't seasoned heavily",
          "i'd rather it weren't seasoned heavily",
        ],
        hint: "‘I'd rather it ___ + past’.",
      },
      {
        kind: "fill",
        prompt: "We were going to ____ the bill, but he insisted on paying.",
        answers: ["split"],
        hint: "Collocation — share the bill",
      },
      {
        kind: "choice",
        prompt: "‘Stodgy’ best describes:",
        options: ["a light, clear soup", "a heavy, doughy pudding", "a fresh, tangy starter"],
        correct: 1,
      },
    ],
    freePrompt: {
      prompt:
        "Write a short review (60–80 words) of a restaurant you've been to. Use at least: one collocation from the lesson, one texture adjective, and one polite hedge for a minor criticism.",
      hint: "Open with ‘We popped in for…’ or ‘Tucked away on a side street, …’.",
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
    tagline: "Transactional English under pressure",
    emoji: "✈️",
    image: airportImg,
    level: "C1",
    cefr: "Transactional English under pressure · travel phrasal verbs",
    summary:
      "Cryptic announcements, missed connections, lost luggage. Airport English calls for precise phrasal verbs and a calm, firm tone.",
    dialog: [
      { speaker: "Agent", en: "Good morning. Could I see your passport and booking reference, please?" },
      { speaker: "You", en: "Here you go. I'm hoping to check in two bags and keep one as carry-on." },
      { speaker: "Agent", en: "Just so you know, your carry-on looks a touch oversized — could you pop it on the sizer?" },
      { speaker: "You", en: "Of course. … There — does that fit?" },
      { speaker: "Agent", en: "Just barely. I'll let it through. Would you like to upgrade to extra legroom for £25?" },
      { speaker: "You", en: "I'll pass, thanks. Any chance of an aisle seat though?" },
      { speaker: "Agent", en: "Done. Boarding starts at 10:40 from Gate 24. Heads-up — the gate is a fair walk, so don't dawdle." },
      { speaker: "PA", en: "This is a final boarding call for passenger Popescu travelling to Lisbon. Please make your way to Gate 24 immediately." },
      { speaker: "You (later, at baggage claim)", en: "Excuse me — I've been waiting for my suitcase for about 40 minutes and it still hasn't come through. I think it may have been delayed." },
      { speaker: "Staff", en: "I'll need to file a missing-baggage report. Could you describe the bag and confirm your onward address?" },
    ],
    explanations: [
      {
        title: "Essential travel phrasal verbs",
        body: "check in (register at the desk), check out (leave a hotel), board (get on the plane), take off (depart), touch down (land), look out for (watch for), make it to (manage to reach), put through (be connected). ‘I just made it to the gate’ = I got there at the very last moment.",
      },
      {
        title: "Decoding airport announcements fast",
        body: "‘Final boarding call’ = the very last call (the gate is already closing). ‘Now boarding by row’ = boarding in row groups. ‘Flight delayed / cancelled / rescheduled.’ ‘Gate change.’ ‘Please proceed to…’ = move towards… ‘Last call for…’ = final chance for…",
      },
      {
        title: "C1 hedging for problems",
        body: "Don't say ‘My bag is lost!’ Say ‘I think my bag may have been delayed’ or ‘It appears my bag hasn't come through yet.’ ‘It appears’, ‘it seems’ and ‘may have + past participle’ both soften the claim and sound more professional.",
      },
      {
        title: "Idioms for delays and rushing",
        body: "to cut it fine (to leave it dangerously late), to miss the boat (miss your chance / your plane), a stone's throw away (very close), a fair walk (a long way), to dawdle (to dally), to be held up (to be delayed).",
      },
      {
        title: "Impersonal passive: the style of announcements",
        body: "Announcements lean on the passive: ‘Passengers are kindly requested to…’, ‘Smoking is not permitted’, ‘Liquids must be placed in a clear bag.’ Memorise the rhythm — you'll recognise it instantly in any airport in the world.",
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
        hint: "Idiom: leaving it dangerously late",
      },
      {
        kind: "choice",
        prompt: "The most polite way to report a missing bag:",
        options: [
          "You lost my bag!",
          "Where is my bag?? It's not here!",
          "I think my bag may have been delayed — it hasn't come through yet.",
        ],
        correct: 2,
      },
      {
        kind: "transform",
        prompt: "Rewrite in the impersonal passive (announcement style):",
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
        prompt: "UK vs US difference:",
        options: [
          "‘Stopover’ is British, ‘layover’ is American.",
          "They're perfect synonyms.",
          "‘Layover’ always means more than 24 hours.",
        ],
        correct: 0,
        explain: "In general usage, Brits say ‘stopover’, Americans say ‘layover’.",
      },
    ],
    freePrompt: {
      prompt:
        "Write a 4–5 sentence message to a colleague explaining that your flight has been delayed and you'll be late to a meeting. Use the impersonal passive and at least one hedge.",
      hint: "‘My flight's been…’, ‘It looks like I won't be able to make it until…’.",
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
    tagline: "Sound senior, structured and self-aware",
    emoji: "💼",
    image: interviewImg,
    level: "C1+",
    cefr: "Professional register · STAR answers · strategic hedging",
    summary:
      "C1 interview English: STAR-structured answers, leadership vocabulary, and how to talk about failure without minimising it.",
    dialog: [
      { speaker: "Interviewer", en: "Thanks for coming in. To kick things off, could you walk me through your background?" },
      { speaker: "You", en: "Of course. I've spent the past five years in product marketing, most recently leading go-to-market for a B2B SaaS platform. Before that, I cut my teeth in a small agency, which gave me a really hands-on grounding." },
      { speaker: "Interviewer", en: "What drew you to this role specifically?" },
      { speaker: "You", en: "Honestly, two things. First, the scope — owning a category end-to-end is exactly the stretch I'm looking for. Second, your team's reputation for shipping fast without cutting corners." },
      { speaker: "Interviewer", en: "Tell me about a time you had to push back on a senior stakeholder." },
      { speaker: "You", en: "Sure. Our CMO was set on a campaign I felt wouldn't land with our ICP. I pulled together quick user interviews and walked her through the findings rather than the opinion. She ultimately green-lit a reframed version — and it outperformed projections by 30%." },
      { speaker: "Interviewer", en: "And a time something didn't go to plan?" },
      { speaker: "You", en: "We rushed a launch to hit a board deadline and the messaging fell flat. I owned it in the post-mortem, restructured how we validate copy, and that framework is still in use." },
      { speaker: "Interviewer", en: "Where do you see yourself in three years?" },
      { speaker: "You", en: "Ideally, leading a team and shaping strategy at the function level — but I'm wary of over-engineering the path. The next 12 months matter more than the next 36." },
    ],
    explanations: [
      {
        title: "The STAR framework for behavioural questions",
        body: "S = Situation (context, one sentence), T = Task (your role), A = Action (what YOU did — first-person verbs), R = Result (quantified where possible). ‘Tell me about a time…’ always expects STAR. Aim for 60–90 second answers. Avoid ‘we did’ — interviewers want to hear ‘I did’.",
      },
      {
        title: "Strong verbs for CVs and interviews",
        body: "spearheaded, scaled, drove, owned, shipped, delivered, restructured, streamlined, secured, championed, led, mentored, untangled. Avoid ‘helped’, ‘was involved in’, ‘assisted with’ — they all say ‘I wasn't really in charge’.",
      },
      {
        title: "Strategic hedging vs weakness",
        body: "Good: ‘I'd argue that…’, ‘My take is…’, ‘It's worth noting that…’, ‘On balance, I'd say…’. Weak: ‘I think maybe…’, ‘Sort of…’, ‘I'm not sure but…’. Hedge the OPINION, never the COMPETENCE.",
      },
      {
        title: "Talking about failure like a pro",
        body: "Formula: what happened → what you learnt → what you changed systemically. Never ‘it was the team's fault’, never ‘nothing comes to mind’. Use ‘I owned it’, ‘I took the hit’, ‘lessons learned’. Failure without learning = red flag.",
      },
      {
        title: "Useful professional idioms",
        body: "to cut your teeth (to learn the trade), to hit the ground running (to be productive from day one), to think outside the box (creative — clichéd, avoid!), to move the needle (to have measurable impact), to drop the ball (to fail / miss), to be on the same page (to agree), to take ownership (to take responsibility).",
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
        prompt: "A C1-level answer to ‘What's your biggest weakness?’:",
        options: [
          "I'm a perfectionist.",
          "I have no weaknesses.",
          "I used to take on too much myself — I've been actively delegating more, and it's freed up my team to grow.",
        ],
        correct: 2,
        explain: "Real weakness + corrective action + result. Never ‘perfectionist’ (tired cliché).",
      },
      {
        kind: "transform",
        prompt: "Strengthen the verb (replace ‘helped with’):",
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
        prompt: "Which is the strongest STAR closer?",
        options: [
          "…and that's basically what happened.",
          "…which boosted conversion by 22% quarter-on-quarter.",
          "…and the team was happy.",
        ],
        correct: 1,
        explain: "Quantify the result. ‘Boosted X by Y%’ is the standard.",
      },
    ],
    freePrompt: {
      prompt:
        "Give a STAR answer to ‘Tell me about a time you turned around a difficult situation’ (80–120 words). Use at least two strong verbs and one quantified result (real or plausible).",
      hint: "Situation (1) → Task (1) → Action (3–4 sentences, ‘I…’) → Result (numbers).",
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
    tagline: "Native casual: contractions, slang, dry irony",
    emoji: "☕",
    image: friendsImg,
    level: "C1",
    cefr: "Slang · irony · conversational pragmatics",
    summary:
      "Native casual conversation: contractions, slang, controlled sarcasm, idiomatic expressions. The gap between textbook English and pub English.",
    dialog: [
      { speaker: "Alex", en: "Long time no see! How've you been?" },
      { speaker: "You", en: "Can't complain, honestly. Work's been mental, but I'm getting there. You?" },
      { speaker: "Alex", en: "Same old, same old. Actually, I've been meaning to catch up with you for ages." },
      { speaker: "You", en: "Tell me about it. We keep saying we'll grab a drink and it never happens." },
      { speaker: "Alex", en: "What about Friday? There's this new place that's supposed to be brilliant." },
      { speaker: "You", en: "Friday works. Shall we say 7-ish? My treat — I owe you one from last time." },
      { speaker: "Alex", en: "Don't be daft, we'll split it. By the way, did you hear about Sarah's new gig?" },
      { speaker: "You", en: "No way — spill the beans." },
      { speaker: "Alex", en: "She packed in the consultancy and is going freelance. Bold move, but it's so her." },
      { speaker: "You", en: "Good for her. Anyway, I should probably get going — early start tomorrow." },
      { speaker: "Alex", en: "Fair enough. Friday it is. Take care!" },
    ],
    explanations: [
      {
        title: "Connected speech: how it actually sounds",
        body: "‘How have you been’ → ‘How've you been’ (/haʊv juː biːn/). ‘I have been meaning to’ → ‘I've been meaning to’. ‘What about’ → ‘Whaddabout’. ‘Going to’ → ‘gonna’, ‘want to’ → ‘wanna’, ‘got to’ → ‘gotta’. Rarely written, almost always spoken. A C1 listener hears them and uses them.",
      },
      {
        title: "Casual discourse markers",
        body: "‘Anyway’ = changes topic. ‘Actually’ = corrects or adds. ‘By the way’ = side info. ‘I mean…’ = clarifies. ‘Like, …’ (filler) = like, sort of. ‘You know what I mean?’ = seeks agreement. ‘To be fair…’ = concedes nuance.",
      },
      {
        title: "British vs American — living differences",
        body: "UK: brilliant / mental / cheers / mate / proper good / take the mickey / knackered. US: awesome / crazy / thanks / dude / really good / make fun of / exhausted. ‘I'm pissed’ = UK angry, US drunk. ‘Pants’ = UK underwear, US trousers. Keep both registers in mind.",
      },
      {
        title: "British irony and understatement",
        body: "‘Not bad’ can mean ‘excellent’. ‘A bit of a nightmare’ = a disaster. ‘Quite good’ = mediocre-to-good. ‘I wouldn't say no’ = yes, please. The British use understatement as a cultural signature. Don't take it literally.",
      },
      {
        title: "Social phrasal verbs",
        body: "to catch up (to compare news), to hang out (to spend time), to drop by/in (to stop by), to bail on (to cancel abruptly), to flake out (to be unreliable, to cancel), to pack in (to quit a job), to fall out with (to argue with), to make up (to reconcile), to put up with (to tolerate).",
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
        prompt: "In the UK, ‘I'm absolutely knackered’ means:",
        options: ["I'm furious.", "I'm exhausted.", "I'm drunk."],
        correct: 1,
      },
      {
        kind: "choice",
        prompt: "A British speaker says ‘Not bad at all, actually’. They most likely mean:",
        options: ["Mediocre.", "Excellent (understatement).", "Awful."],
        correct: 1,
        explain: "Classic understatement. ‘Not bad’ can be real praise.",
      },
      {
        kind: "transform",
        prompt: "Rewrite informally, using contractions and a phrasal verb:",
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
        hint: "Phrasal verb for cancelling abruptly",
      },
    ],
    freePrompt: {
      prompt:
        "Write a short text exchange (5–6 messages) with a friend who wants to meet up this weekend. Use at least three casual elements (contractions, a phrasal verb, slang, an idiom).",
      hint: "‘Mate, you free…?’, ‘Can't, I'm…’, ‘Fair enough’, ‘How about…?’",
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
    tagline: "Three registers, three sets of rules",
    emoji: "💬",
    image: onlineImg,
    level: "C1",
    cefr: "Digital registers · professional email · tone",
    summary:
      "Three distinct registers: chatting with friends, posting on team Slack, emailing a client. Same language, three different worlds.",
    dialog: [
      { speaker: "WhatsApp", en: "u free 2nite? new burger place opened lol" },
      { speaker: "You", en: "yeah down for it. 8?" },
      { speaker: "Slack #team", en: "Quick one, team — anyone got bandwidth to QA the onboarding flow today? 🙏" },
      { speaker: "You (Slack)", en: "I can take a look after standup. Drop the Loom and acceptance criteria here?" },
      { speaker: "Email", en: "Subject: Q3 proposal — quick clarification\n\nHi Sarah,\n\nI hope this finds you well. Thanks for sending the draft proposal across on Friday — I've had a chance to review it in detail.\n\nOn the whole, it looks really strong. There are just two points I wanted to flag before we sign off:\n\n1. The scope under section 3 reads slightly ambiguously — could we tighten the deliverables?\n2. The timeline assumes a two-week QA window, which I suspect may be optimistic given the holiday period.\n\nHappy to jump on a call this week if that's easier. Otherwise, let me know your thoughts when you get a moment — no rush.\n\nMany thanks,\nAlex" },
    ],
    explanations: [
      {
        title: "Three registers, three sets of rules",
        body: "CHAT (friends): lowercase, no punctuation, abbreviations (u, ur, idk, lol, lmao, brb), emoji freely. SLACK (colleagues): short sentences, occasional emoji 🙏 ✅, direct tone, ‘quick one’ / ‘bandwidth’ / ‘let me circle back’. EMAIL (external): full paragraphs, proper opening + closing, no emoji, polite hedging.",
      },
      {
        title: "Anatomy of a C1 email",
        body: "1) Specific subject line (‘Q3 proposal — quick clarification’, not ‘Hi’). 2) Appropriate greeting: ‘Dear Ms Roberts’ (formal) / ‘Hi Sarah’ (known). 3) Warm-up line (‘I hope this finds you well’ — accepted cliché). 4) Context (‘Thanks for…’). 5) Main request with hedging. 6) Clear next step. 7) Sign-off: ‘Many thanks’, ‘Best regards’, ‘Kind regards’.",
      },
      {
        title: "Professional email hedges",
        body: "‘I just wanted to check…’, ‘Could I possibly ask…’, ‘I was wondering whether…’, ‘It might be worth…’, ‘I suspect…’, ‘I'd be inclined to…’, ‘On the off-chance you have a moment…’. All soften the ask without weakening it.",
      },
      {
        title: "Slack / email acronyms to know",
        body: "ASAP (as soon as possible), EOD (end of day), EOW (end of week), FYI (for your information), FYA (for your action), TL;DR (too long; didn't read — summary), OOO (out of office), WFH (work from home), PTO (paid time off), KPI/OKR (objectives), 1:1 (one-to-one meeting), heads-up, circle back, loop in, sync up.",
      },
      {
        title: "Tone: how to avoid sounding rude by accident",
        body: "‘Per my last email’ = passive-aggressive; use ‘As mentioned previously…’. ‘K.’ = cold; at least ‘Sounds good!’. ‘Why didn't you…?’ → ‘Just curious — what was the thinking behind…?’. Add ‘please’, ‘when you get a chance’, ‘happy to discuss’.",
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
        prompt: "The most appropriate C1 email subject line:",
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
        hint: "Phrasal verb: include someone",
      },
      {
        kind: "transform",
        prompt: "Soften the tone (rewrite politely):",
        sentence: "Why didn't you reply to my last email?",
        answers: [
          "just checking in — did my last email reach you ok?",
          "just following up on my last email — let me know when you get a chance",
          "just wanted to follow up on my previous email when you have a moment",
        ],
        hint: "‘Just following up…’ + ‘when you get a chance’",
      },
      {
        kind: "choice",
        prompt: "‘Per my last email’ in a reply is:",
        options: [
          "Professional and clear.",
          "Passive-aggressive — avoid.",
          "Very polite.",
        ],
        correct: 1,
        explain: "Famously read as passive-aggressive. Use ‘As mentioned previously’ or just resummarise.",
      },
      {
        kind: "fill",
        prompt: "I don't have the ____ this week — could we push it to next?",
        answers: ["bandwidth", "capacity"],
      },
    ],
    freePrompt: {
      prompt:
        "Write a short email (80–100 words) to a client asking for feedback on a project. Use: a specific subject, a warm-up line, the request with hedging, a suggested deadline, and a professional sign-off.",
      hint: "‘I hope this finds you well…’, ‘I'd be grateful if…’, ‘by EOW’, ‘Kind regards’.",
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
    tagline: "Captions, comments, memes, vibes",
    emoji: "📱",
    image: socialImg,
    level: "C1",
    cefr: "Living English · meme literacy · Gen-Z slang",
    summary:
      "Captions, comments, DMs, memes. Internet English moves fast — Gen-Z vocabulary, meta-irony, and the thin line between cool and cringe.",
    dialog: [
      { speaker: "IG caption", en: "currently down a Lisbon rabbit hole 🇵🇹 send recs" },
      { speaker: "Comment", en: "okay but the lighting in that second pic is unreal ✨" },
      { speaker: "Reply", en: "right?? pure golden hour magic, no filter" },
      { speaker: "TikTok caption", en: "POV: you said \"just one drink\" three hours ago 🙃 #relatable" },
      { speaker: "DM", en: "hey! saw your story — that café screams my aesthetic. drop the @ when you have a sec?" },
      { speaker: "You", en: "ahaha it's called Brew & Bloom — tiny, no wifi, perfect vibes. you'd live there." },
      { speaker: "X / Twitter", en: "hot take: airport coffee is good, actually. fight me." },
      { speaker: "Reply", en: "this is the wildest thing I've read all week 😭" },
    ],
    explanations: [
      {
        title: "Internet grammar: the new rules",
        body: "Deliberate lowercase = casual, ironic, ‘chill’ tone. ALL CAPS = shouting or strong emphasis. A full stop at the end of a text reads as dry, even annoyed. ‘lol’ and ‘lmao’ rarely mean actual laughing anymore — they're softeners. ‘K.’ is curt; ‘kk’ is friendly.",
      },
      {
        title: "Active Gen-Z slang (2025)",
        body: "slay (excellent), no cap (no lie / serious), it's giving X (gives off the vibe of X), main character energy (central, charismatic presence), the algorithm fed me (it showed up in my feed), unhinged (wild — often positive), iconic, lowkey/highkey (somewhat / intensely), tea (gossip), spill the tea, era (phase: ‘my running era’), based (boldly opinionated), mid (mediocre), it ate (it was flawless), delulu (delusional — self-mocking).",
      },
      {
        title: "Meme literacy: recognised structures",
        body: "‘POV: you…’ = the character's perspective. ‘No one: / Me: …’ = nobody asked, but here it is. ‘It's giving [adjective]’ = gives off the vibe of. ‘Tell me you're X without telling me you're X.’ ‘This is the [adj]-est thing.’ These are meme frames — recognise them, deploy them in the right context.",
      },
      {
        title: "Meta-irony and self-deprecation",
        body: "Online English runs on ironic self-deprecation: ‘i am once again opening LinkedIn to feel bad about myself’, ‘crying screaming throwing up’ (about something tiny), ‘I cannot be normal about this’. Don't read it literally — it's humour through exaggeration.",
      },
      {
        title: "The line between cool and cringe",
        body: "Cringe = forced, late or misplaced use. ‘How do you do, fellow kids?’ energy. Rules: 1) don't use slang you don't fully understand, 2) a corporate brand using ‘slay’ = instant cringe, 3) slang ages FAST (one year = expired). Watch first, deploy later.",
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
        prompt: "‘This outfit is giving main character energy’ means:",
        options: [
          "The clothes belong to the main character.",
          "The outfit projects charisma, protagonist energy.",
          "The outfit is too plain.",
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
        prompt: "A corporate brand posts ‘we just dropped our new collection — it slays, no cap’. A native reaction:",
        options: ["Very cool, they'll buy.", "Cringe — forced marketing slang.", "Very professional."],
        correct: 1,
      },
      {
        kind: "transform",
        prompt: "Write an Instagram caption (max 12 words) for a morning coffee photo. Use deliberate lowercase:",
        sentence: "I am drinking coffee on a beautiful Tuesday morning.",
        answers: ["tuesday morning energy ☕"],
        hint: "There isn't one correct answer. Try something short and casual: ‘slow tuesday’, ‘coffee era’, ‘it's giving monday again’. The displayed answer is just one example.",
      },
      {
        kind: "choice",
        prompt: "Which sentence sounds most ironic / Gen-Z?",
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
        "Write a caption (max 25 words) + a friend's comment + your reply. Topic: first day in a new city. Use lowercase, an emoji, and a meme structure (‘POV:’, ‘it's giving’, ‘no one: / me:’).",
      hint: "Caption → comment → reply. Read it out loud: if it sounds like a bank's copywriter, loosen it up.",
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
