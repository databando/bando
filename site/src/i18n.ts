// O catálogo do site. Os nomes de marketing só aparecem aqui (ADR-011): a
// troca de idioma troca a marca junto, e um `git grep` acha cada ocorrência.

export type Locale = "en-US" | "pt-BR";

const RELEASES = "https://github.com/databando/bando/releases/latest";

/** Um trecho de código do painel de exemplo: a cor e o texto. */
export type Token = [color: "" | "muted" | "purple" | "blue" | "green" | "accent", text: string];

interface Demo {
  tab: string;
  footLeft: string;
  footRight: string;
  lines: Token[][];
}

export interface SiteMessages {
  lang: string;
  brand: string;
  path: string;
  other: { locale: Locale; label: string; path: string };
  title: string;
  description: string;
  nav: {
    label: string;
    home: string;
    sections: { id: string; label: string }[];
    releases: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    eyebrow: string;
    /** A primeira linha, e a segunda em duas partes: a última vem em cinza. */
    title: [string, string, string];
    lead: string;
    download: string;
    /** O botão depois que se sabe o sistema; `{os}` vira o nome dele. */
    downloadFor: string;
    /** O nome acessível do seletor de sistema ao lado do botão. */
    platform: string;
    explore: string;
    notes: string[];
  };
  preview: {
    label: string;
    run: string;
    results: string;
    rows: string;
    tools: string;
    gridLabel: string;
    data: [string, string, string][];
    columns: string;
    ready: string;
    tag: string;
    tagLine: string;
    /** O nome do carrossel de telas, lido pelo leitor de tela. */
    carousel: string;
    /**
     * O texto de cada tela de `assets/screens/`, pela chave do arquivo sem o
     * número (`01-editor.png` é `editor`): a aba na barra da janela e o texto
     * alternativo da imagem.
     */
    screens: Record<string, { tab: string; alt: string }>;
  };
  proof: string;
  features: {
    eyebrow: string;
    title: [string, string];
    lead: string;
    cards: { title: string; body: string }[];
    wide: { title: string; body: string };
  };
  showcase: {
    eyebrow: string;
    title: [string, string];
    lead: string;
    steps: { title: string; body: string }[];
    panel: string;
    tabsLabel: string;
    demos: Demo[];
  };
  ai: {
    eyebrow: string;
    title: [string, string];
    lead: string;
    stack: { eyebrow: string; title: string; body: string; others: string };
    audit: { eyebrow: string; title: string; body: string; lines: string[] };
    note: string;
  };
  connections: {
    label: string;
    kinds: { relational: string; embedded: string; documents: string; memory: string };
    eyebrow: string;
    title: [string, string];
    body: string;
    button: string;
  };
  footer: { tagline: string; rights: string; contact: string; downloads: string };
  notFound: { title: string; back: string };
}

const en: SiteMessages = {
  lang: "en",
  brand: "DataBando",
  path: "/",
  other: { locale: "pt-BR", label: "Português", path: "/pt-br/" },
  title: "DataBando — Data Workspace",
  description:
    "Bando is a fast, efficient desktop data IDE: a professional SQL editor, an interactive grid and multi-provider AI in one workspace.",
  nav: {
    label: "Main navigation",
    home: "Bando — home",
    sections: [
      { id: "features", label: "Features" },
      { id: "experience", label: "Experience" },
      { id: "ai", label: "Multi-provider AI" },
      { id: "connections", label: "Connections" },
    ],
    releases: "See releases",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  hero: {
    eyebrow: "A new way to work with data",
    title: ["Less noise.", "More", "discovery."],
    lead: "A desktop data IDE that combines a professional SQL editor, an interactive grid and multi-provider AI. Fast to use, efficient with resources and simple by nature.",
    download: "Download Bando",
    downloadFor: "Download for {os}",
    platform: "Operating system",
    explore: "Explore features",
    notes: ["Native Rust desktop app", "Light and responsive"],
  },
  preview: {
    label: "Illustrative preview of the Bando interface",
    run: "Run",
    results: "Results",
    rows: "1,248 rows",
    tools: "⌕ Filter   ↕ Sort   ⊞ Group",
    gridLabel: "Example results grid",
    data: [
      ["Electronics", "482", "$84,290"],
      ["Home & Living", "376", "$52,840"],
      ["Accessories", "251", "$28,615"],
    ],
    columns: "3 columns · 1,248 rows",
    ready: "Ready · 42 ms",
    tag: "Interactive grid",
    tagLine: "Explore. Combine. Discover.",
    carousel: "Bando screens",
    screens: {},
  },
  proof: "One workspace for different technologies.",
  features: {
    eyebrow: "Built for real work",
    title: ["Power where it matters.", "Simplicity everywhere."],
    lead: "Bando brings the tools you use every day into one straightforward environment, without turning every task into a configuration project.",
    cards: [
      {
        title: "Native performance",
        body: "Built in Rust for fast startup, efficient memory use and an interface that keeps up with you.",
      },
      {
        title: "Professional SQL editor",
        body: "An organized editing space to write, review and run queries without losing context.",
      },
      {
        title: "A real grid",
        body: "Filter, sort, group, aggregate and edit results on a surface built for interactive exploration.",
      },
      {
        title: "Queries and results together",
        body: "Keep the query and its output in the same workflow, ready for the next question.",
      },
      {
        title: "Data that combines",
        body: "Join results from queries, different connections and CSV files without leaving your workspace.",
      },
      {
        title: "Frictionless analysis",
        body: "Prepare data for comparisons, reports and new perspectives without starting over in another tool.",
      },
    ],
    wide: {
      title: "One flow. Fewer tools in the way.",
      body: "From SQL to result, from exploration to comparison: Bando connects the steps so you stay focused on the problem, not on switching apps.",
    },
  },
  showcase: {
    eyebrow: "From code to discovery",
    title: ["Your result is where", "the work begins."],
    lead: "Run a query and keep exploring. The interactive grid is part of the flow — not just an output screen.",
    steps: [
      { title: "Query", body: "Write SQL in an editor designed to keep code readable and context close at hand." },
      { title: "Explore", body: "Investigate values with filters, sorting and grouping right in the grid." },
      { title: "Combine", body: "Cross results from different sources and compare sets to find differences." },
      { title: "Share the result", body: "Export the data and take your analysis to the next step of your work." },
    ],
    panel: "Explore result",
    tabsLabel: "Feature examples",
    demos: [
      {
        tab: "Filter",
        footLeft: "Interactive filter",
        footRight: "284 rows",
        lines: [
          [["muted", "-- Explore the data without rewriting the query"]],
          [["purple", "WHERE"], ["", " "], ["blue", "status"], ["", " = "], ["green", "'completed'"]],
          [["", "  "], ["purple", "AND"], ["", " "], ["blue", "total"], ["", " > "], ["accent", "500"]],
          [],
          [["muted", "▸ 284 matching rows"]],
          [["muted", "▸ Filters applied to the result"]],
          [["accent", "✓ Ready to keep exploring"]],
        ],
      },
      {
        tab: "Group",
        footLeft: "Grouped by category",
        footRight: "8 groups",
        lines: [
          [["muted", "-- Summarize the results by dimension"]],
          [["purple", "GROUP BY"], ["", " "], ["blue", "category"]],
          [["purple", "AGGREGATE"], ["", " "], ["blue", "SUM"], ["", "(revenue), "], ["blue", "COUNT"], ["", "(*)"]],
          [],
          [["green", "Electronics"], ["", "   482 orders"]],
          [["green", "Home & Living"], ["", " 376 orders"]],
          [["green", "Accessories"], ["", "   251 orders"]],
          [],
          [["accent", "✓ Summary ready for analysis"]],
        ],
      },
      {
        tab: "Combine",
        footLeft: "Combined results",
        footRight: "2 sources",
        lines: [
          [["muted", "-- Cross results from different sources"]],
          [["blue", "orders_2026"], ["", "  +  "], ["blue", "customers.csv"]],
          [],
          [["purple", "JOIN ON"], ["", " "], ["green", "customer_id"]],
          [["muted", "▸ Matches found"]],
          [["muted", "▸ Fields available in the combined set"]],
          [],
          [["accent", "✓ Combined result"]],
        ],
      },
    ],
  },
  ai: {
    eyebrow: "Intelligence under your control",
    title: ["Multi-provider AI.", "No black box."],
    lead: "Choose the models that make sense for your work. Use agents as partners to explore schemas, build queries and investigate results.",
    stack: {
      eyebrow: "Choose your stack",
      title: "Your model. Your flow.",
      body: "Bando acts as a gateway to the providers you configure. The flexibility to choose models and adapt how you use AI to your needs.",
      others: "Other compatible providers",
    },
    audit: {
      eyebrow: "Operational transparency",
      title: "Understand what the agent does.",
      body: "A workflow that puts context, traceability and control of operations first, keeping you in charge of the decisions that matter.",
      lines: [
        "Schema context for relevant tasks",
        "Traceable interactions and operations",
        "Confirmation before writes, where applicable",
      ],
    },
    note: "The availability of providers, models and controls depends on your configuration and the enabled integration.",
  },
  connections: {
    label: "Supported database technologies",
    kinds: { relational: "Relational", embedded: "Embedded", documents: "Documents", memory: "In-memory" },
    eyebrow: "One environment",
    title: ["Your databases.", "One workspace."],
    body: "Work with relational and non-relational technologies without fragmenting your flow. MariaDB, TimescaleDB, TiDB, YugabyteDB and other compatible databases can also be part of your environment, depending on the available drivers.",
    button: "Discover Bando",
  },
  footer: {
    tagline: "DATA WORKSPACE",
    rights: "All rights reserved.",
    contact: "Contact",
    downloads: "Downloads",
  },
  notFound: { title: "Page not found", back: "Go to the home page" },
};

const pt: SiteMessages = {
  lang: "pt-BR",
  brand: "Bando de Dados",
  path: "/pt-br/",
  other: { locale: "en-US", label: "English", path: "/" },
  title: "Bando de Dados — Data Workspace",
  description:
    "Bando — uma IDE de dados desktop, rápida e eficiente. Editor SQL profissional, grid interativo e IA multiprovedor em um único workspace.",
  nav: {
    label: "Navegação principal",
    home: "Bando — início",
    sections: [
      { id: "recursos", label: "Recursos" },
      { id: "experiencia", label: "Experiência" },
      { id: "ia", label: "IA multiprovedor" },
      { id: "conexoes", label: "Conexões" },
    ],
    releases: "Ver versões",
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
  },
  hero: {
    eyebrow: "Uma nova forma de trabalhar com dados",
    title: ["Menos ruído.", "Mais", "descoberta."],
    lead: "Uma IDE de dados desktop que combina editor SQL profissional, grid interativo e IA multiprovedor. Rápida no uso, eficiente nos recursos e simples por natureza.",
    download: "Baixar Bando",
    downloadFor: "Baixar para {os}",
    platform: "Sistema operacional",
    explore: "Explorar recursos",
    notes: ["Desktop nativo em Rust", "Leve e responsivo"],
  },
  preview: {
    label: "Prévia ilustrativa da interface do Bando",
    run: "Executar",
    results: "Resultados",
    rows: "1.248 linhas",
    tools: "⌕ Filtrar   ↕ Ordenar   ⊞ Agrupar",
    gridLabel: "Exemplo de grid de resultados",
    data: [
      ["Electronics", "482", "R$ 84.290"],
      ["Home & Living", "376", "R$ 52.840"],
      ["Accessories", "251", "R$ 28.615"],
    ],
    columns: "3 colunas · 1.248 linhas",
    ready: "Pronto · 42 ms",
    tag: "Grid interativo",
    tagLine: "Explore. Combine. Descubra.",
    carousel: "Telas do Bando",
    screens: {},
  },
  proof: "Um workspace para diferentes tecnologias.",
  features: {
    eyebrow: "Feito para o trabalho real",
    title: ["Potência onde importa.", "Simplicidade em tudo."],
    lead: "O Bando reúne as ferramentas que você usa todos os dias em um ambiente direto, sem transformar cada tarefa em um projeto de configuração.",
    cards: [
      {
        title: "Performance nativa",
        body: "Desenvolvido em Rust para inicialização ágil, uso eficiente de memória e uma interface que acompanha seu ritmo.",
      },
      {
        title: "Editor SQL profissional",
        body: "Um espaço de edição organizado para escrever, revisar e executar consultas sem perder o contexto.",
      },
      {
        title: "Grid de verdade",
        body: "Filtre, ordene, agrupe, agregue e edite resultados em uma superfície feita para exploração interativa.",
      },
      {
        title: "Consultas e resultados juntos",
        body: "Mantenha a consulta e sua saída no mesmo fluxo de trabalho, prontos para a próxima pergunta.",
      },
      {
        title: "Dados que se combinam",
        body: "Junte resultados de consultas, conexões diferentes e arquivos CSV sem sair do ambiente de trabalho.",
      },
      {
        title: "Análise sem atrito",
        body: "Prepare dados para comparação, relatórios e novas perspectivas sem reiniciar o trabalho em outra ferramenta.",
      },
    ],
    wide: {
      title: "Um fluxo. Menos ferramentas no caminho.",
      body: "Do SQL ao resultado, da exploração à comparação: o Bando conecta as etapas para você manter o foco no problema, não na troca de aplicativos.",
    },
  },
  showcase: {
    eyebrow: "Do código à descoberta",
    title: ["Seu resultado é o", "começo do trabalho."],
    lead: "Execute uma consulta e continue explorando. O grid interativo faz parte do fluxo — não é só uma tela de saída.",
    steps: [
      { title: "Consulte", body: "Escreva SQL em um editor projetado para manter o código legível e o contexto por perto." },
      { title: "Explore", body: "Investigue valores com filtros, ordenação e agrupamentos diretamente no grid." },
      { title: "Combine", body: "Cruze resultados de fontes diferentes e compare conjuntos para encontrar diferenças." },
      { title: "Compartilhe o resultado", body: "Exporte os dados e leve sua análise para o próximo passo do trabalho." },
    ],
    panel: "Explorar resultado",
    tabsLabel: "Exemplos de recursos",
    demos: [
      {
        tab: "Filtrar",
        footLeft: "Filtro interativo",
        footRight: "284 linhas",
        lines: [
          [["muted", "-- Explore os dados sem refazer a consulta"]],
          [["purple", "WHERE"], ["", " "], ["blue", "status"], ["", " = "], ["green", "'completed'"]],
          [["", "  "], ["purple", "AND"], ["", " "], ["blue", "total"], ["", " > "], ["accent", "500"]],
          [],
          [["muted", "▸ 284 linhas correspondentes"]],
          [["muted", "▸ Filtros aplicados ao resultado"]],
          [["accent", "✓ Pronto para continuar explorando"]],
        ],
      },
      {
        tab: "Agrupar",
        footLeft: "Agrupamento por categoria",
        footRight: "8 grupos",
        lines: [
          [["muted", "-- Resuma os resultados por dimensão"]],
          [["purple", "GROUP BY"], ["", " "], ["blue", "category"]],
          [["purple", "AGGREGATE"], ["", " "], ["blue", "SUM"], ["", "(revenue), "], ["blue", "COUNT"], ["", "(*)"]],
          [],
          [["green", "Electronics"], ["", "   482 pedidos"]],
          [["green", "Home & Living"], ["", " 376 pedidos"]],
          [["green", "Accessories"], ["", "   251 pedidos"]],
          [],
          [["accent", "✓ Resumo pronto para análise"]],
        ],
      },
      {
        tab: "Combinar",
        footLeft: "Combinação de resultados",
        footRight: "2 fontes",
        lines: [
          [["muted", "-- Cruze resultados de diferentes fontes"]],
          [["blue", "orders_2026"], ["", "  +  "], ["blue", "customers.csv"]],
          [],
          [["purple", "JOIN ON"], ["", " "], ["green", "customer_id"]],
          [["muted", "▸ Correspondências encontradas"]],
          [["muted", "▸ Campos disponíveis no conjunto combinado"]],
          [],
          [["accent", "✓ Resultado combinado"]],
        ],
      },
    ],
  },
  ai: {
    eyebrow: "Inteligência sob seu controle",
    title: ["IA multiprovedor.", "Sem caixa-preta."],
    lead: "Escolha os modelos que fazem sentido para o seu trabalho. Use agentes como parceiros para explorar schemas, construir consultas e investigar resultados.",
    stack: {
      eyebrow: "Escolha seu stack",
      title: "Seu modelo. Seu fluxo.",
      body: "O Bando atua como gateway para provedores configurados por você. Flexibilidade para escolher modelos e adaptar o uso da IA às suas necessidades.",
      others: "Outros compatíveis",
    },
    audit: {
      eyebrow: "Transparência operacional",
      title: "Entenda o que o agente faz.",
      body: "Um fluxo de trabalho que prioriza contexto, rastreabilidade e controle das operações, mantendo você no comando das decisões importantes.",
      lines: [
        "Contexto de schema para tarefas relevantes",
        "Interações e operações com rastreabilidade",
        "Confirmação antes de escritas, quando aplicável",
      ],
    },
    note: "A disponibilidade de provedores, modelos e controles depende da configuração e da integração habilitada.",
  },
  connections: {
    label: "Tecnologias de banco de dados suportadas",
    kinds: { relational: "Relacional", embedded: "Embarcado", documents: "Documentos", memory: "Em memória" },
    eyebrow: "Um só ambiente",
    title: ["Seus bancos.", "Um só workspace."],
    body: "Trabalhe com tecnologias relacionais e não relacionais sem fragmentar seu fluxo. MariaDB, TimescaleDB, TiDB, YugabyteDB e outros bancos compatíveis também podem fazer parte do seu ambiente, conforme os drivers disponíveis.",
    button: "Conhecer o Bando",
  },
  footer: {
    tagline: "DATA WORKSPACE",
    rights: "Todos os direitos reservados.",
    contact: "Contato",
    downloads: "Downloads",
  },
  notFound: { title: "Página não encontrada", back: "Ir para o início" },
};

export const messages: Record<Locale, SiteMessages> = { "en-US": en, "pt-BR": pt };

/** Os sistemas com instalador, na ordem do seletor. */
export const platforms = [
  { id: "macos", name: "macOS" },
  { id: "windows", name: "Windows" },
  { id: "linux", name: "Linux" },
] as const;

export type Platform = (typeof platforms)[number]["id"];

export const links = {
  releases: RELEASES,
  // O instalador de cada sistema. Por ora todos levam à página da última
  // versão: o `databando/bando` ainda não publicou release, e os nomes dos arquivos
  // só existem quando houver uma.
  downloads: { macos: RELEASES, windows: RELEASES, linux: RELEASES } satisfies Record<Platform, string>,
  support: "mailto:support@databando.com",
};
