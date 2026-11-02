import { links, type Platform } from "./i18n";

// O instalador de cada sistema na última versão, lido da API do GitHub no
// build. O nome do arquivo leva o número da versão (`Bando_0.2.1_aarch64.dmg`),
// então não há link fixo que sirva: `.github/workflows/pages.yml` refaz o site
// a cada release publicado, e o botão passa a apontar para os arquivos dele.
const API = "https://api.github.com/repos/databando/bando/releases/latest";

// O que se baixa em cada sistema, como o README do repositório descreve.
const installers: Record<Platform, RegExp> = {
  macos: /\.dmg$/,
  windows: /-setup\.exe$/,
  linux: /\.AppImage$/,
};

interface Release {
  tag_name: string;
  assets: { name: string; browser_download_url: string }[];
}

/**
 * O link de cada sistema. Um sistema sem instalador na última versão, ou um
 * build sem acesso à API, leva à página do release, como antes: o site sai do
 * mesmo jeito, e o aviso no log do build diz o que faltou.
 */
export function latestDownloads(): Promise<Record<Platform, string>> {
  // Uma consulta por build, e não uma por página: cada idioma desenha o botão.
  return (cached ??= fetchDownloads());
}

let cached: Promise<Record<Platform, string>> | undefined;

async function fetchDownloads(): Promise<Record<Platform, string>> {
  const downloads = { ...links.downloads };
  const token = process.env.GITHUB_TOKEN;
  try {
    const response = await fetch(API, {
      headers: { Accept: "application/vnd.github+json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const release = (await response.json()) as Release;
    for (const [platform, pattern] of Object.entries(installers) as [Platform, RegExp][]) {
      const asset = release.assets.find(({ name }) => pattern.test(name));
      if (asset) downloads[platform] = asset.browser_download_url;
      else console.warn(`release: ${release.tag_name} não tem instalador para ${platform}; o botão leva à página do release`);
    }
  } catch (e) {
    console.warn(`release: a API do GitHub não respondeu (${String(e)}); os botões levam à página do release`);
  }
  return downloads;
}
