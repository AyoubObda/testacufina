export type Service = { slug: string; title: string; excerpt: string; body: string };
export type Case = { slug: string; title: string; excerpt: string; body: string };
export type Post = { slug: string; title: string; excerpt: string; body: string; date: string };

export const services: Service[] = [
  {
    slug: "boekhouding-jaarrekening",
    title: "Boekhouding & Jaarrekening",
    excerpt: "Volledige ontzorging + realtime rapporten.",
    body: "Wij verzorgen dagelijkse boekingen, periodieke afsluit, jaarrekening neerlegging en managementrapporten (maandelijks/kwartaal). Inclusief tooling-advies (Yuki, Exact, Silverfin) en duidelijke responstijden.",
  },
  {
    slug: "fiscale-optimalisatie",
    title: "Fiscale optimalisatie & aangiftes",
    excerpt: "BTW, VenB & IPP zonder verrassingen.",
    body: "Proactieve optimalisaties (VVPRbis, liquidatiereserve, VAA, autokosten, investeringsaftrek), correcte aangiftes en heldere planning zodat je nooit deadlines mist.",
  },
  {
    slug: "starters-vennootschap",
    title: "Starters & vennootschapsvorming",
    excerpt: "Van idee naar bv met de juiste structuur.",
    body: "Keuze eenmanszaak vs. bv, aandeelhoudersovereenkomsten, statuten en opstart- en BTW-formaliteiten. We bouwen meteen een schaalbare finance set-up.",
  },
  {
    slug: "cfo-as-a-service",
    title: "CFO-as-a-Service & rapportering",
    excerpt: "Sturing op cash, marge en groei.",
    body: "Rolling forecast, budget vs. actuals, KPI-dashboard (marge, DSO/DPO, cash runway). Maandelijkse boardpack en actieplan.",
  },
  {
    slug: "herstructurering-asset-protection",
    title: "Herstructurering & asset protection",
    excerpt: "Slimme holdings en risicoscheiding.",
    body: "(Her)tekenen van groepsstructuur, fiscale rulings waar nuttig, inbreng/afsplitsing, vastgoed in aparte vennootschap en successieplanning i.s.m. notarissen.",
  },
  {
    slug: "btw-internationale-handel",
    title: "BTW & internationale handel",
    excerpt: "OSS/IOSS, intrastat en ketentransacties.",
    body: "We zorgen voor correcte BTW-behandeling bij e-commerce en grensoverschrijdende handel: OSS/IOSS, driehoeksverkeer, intrastat en bewijsvoering.",
  },
  {
    slug: "subsidies-vlaio",
    title: "Subsidies & VLAIO",
    excerpt: "Maximaliseer steun met correcte dossiers.",
    body: "Scan van relevante steunmaatregelen (VLAIO, KMO-portefeuille, ecologiepremies) en begeleiding van aanvraag tot uitbetaling.",
  },
  {
    slug: "cashflow-budgetplanning",
    title: "Cashflow- & budgetplanning",
    excerpt: "Nooit nog verrassingen op de rekening.",
    body: "12-maanden cashforecast, scenario-analyses en werkkapitaalverbeteringen (voorraad, betalingstermijnen, facturatieproces).",
  },
];

export const cases = [
  {
    slug: "artsenpraktijk-fiscale-optimalisatie",
    title: "Artsenpraktijk — fiscale optimalisatie & cashflow",
    excerpt: "Minder belastingdruk en meer cashflow.",
    body: "Deze artsenpraktijk zat met hoge fiscale druk. Door herstructurering en betere cashflowplanning konden we de belastingdruk met 15% verlagen en de cashpositie verbeteren."
  },
  {
    slug: "advocatenkantoor-digitalisering",
    title: "Advocatenkantoor — digitalisering boekhouding",
    excerpt: "Realtime rapportering en tijdswinst.",
    body: "Door de overstap naar een digitale boekhouding kreeg dit kantoor realtime inzicht in hun cijfers en bespaarden ze gemiddeld 10 uur administratie per maand."
  }
];

export const posts = [
  {
    slug: "vennootschap-vs-eenmanszaak-2025",
    title: "Vennootschap vs. eenmanszaak (2025)",
    excerpt: "Wat is voordeliger anno 2025?",
    body: "In dit artikel vergelijken we de fiscale en praktische voordelen van een vennootschap versus een eenmanszaak. Je leest o.a. over sociale bijdragen, aansprakelijkheid en optimalisaties."
  },
  {
    slug: "beroepskosten-advocaten",
    title: "Beroepskosten voor advocaten",
    excerpt: "Wat kan je aftrekken?",
    body: "Advocaten kunnen diverse beroepskosten aftrekken, zoals opleidingen, lidgelden en vakliteratuur. Hier overlopen we de belangrijkste aftrekposten met voorbeelden."
  },
  {
    slug: "btw-valkuilen-consultants",
    title: "5 btw-valkuilen voor consultants",
    excerpt: "Veelgemaakte fouten en hoe je ze vermijdt.",
    body: "Consultants maken vaak dezelfde fouten met btw: verkeerde tarieven, buitenlandse prestaties, OSS-regeling, enz. We zetten de 5 grootste valkuilen op een rij."
  }
];
