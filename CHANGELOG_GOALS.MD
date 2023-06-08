MR 1 | 06.06.2023 - STRUKTURA APP

1. Utworzenie struktury projektu (routing)
2. Utworzenie/dostosowanie komponentu Layout oraz jego uzycie
3. Wykorzystanie MetaDataAPI
4. Wykorzystanie narzędzia do pobierania danych (useSWR) dla strony CSR - alternatywa dla react-query
5. Dodanie fetchowania: CSR, SSR, SSG, ISR
6. Wykorzystanie nowego mechanizmu do generowania statyczych sciezek pod routing (aktualny: generateStaticParams, stary: getStaticPaths)
7. Obsługa mechanizmu generateStaticParams za pomocą dynamicParams (ustawienie zachowania fallback)

---

NOTATKI:

Link do migracji: https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#migrating-from-pages-to-app

1. HOOKI

- W najnowszej wersji Next 13.4 zostały wprowadzone duze zmiany odnosnie wbudowanych funkcji. Chodzi konkretnie o hooki.
  Wczesniej byl jeden glowny hook useRouter(), ktory posiadal wiele wlasciwosci. Od najnowszej wersji ten hook zostal rozbity na pomniejsze hooki, takie jak:
- useRouter()
- usePathname()
- useSearchParams()
- ... i kilka innych

Zmieniła się równiez sciezka importu na importu "next/navigation";
useRouter hook zaimportowany z next/router nie jest obsługiwany w katalogu app, ale nadal może być używany w katalogu pages.
Te nowe hooki są obsługiwane tylko w Client Components. Nie można ich używać w Server Components.

2. Fetching

- Domyślnie funkcja 'fetch' automatycznie pobiera i przechowuje dane w pamięci podręcznej przez czas nieokreślony. (caching oraz dedupling )

Przykład:

- klasyczne SSG: await fetch(RickAndMortyApiUrl, {cache: 'force-cache'}); - tak jest domyślnie dla fetch'a
- rewalidacja ISR: await fetch(RickAndMortyApiUrl, {next: {revalidate: 10}});
- klasyczny SSR: await fetch(RickAndMortyApiUrl, {cache: 'no-story'});

Aby zminimalizować waterfall'e pomiędzy klientem a serverem, zaleca się wzorzec do równoległego pobierania danych: Promise.All()

getStaticPaths zostało zastąpione - generateStaticParams.

W wersji pages getStaticPaths posiadało opcję ustawienia:
fallback: "true" | "false" | "blocking"

dla false: it means that only above prepared paths will be valid
dla true: it means that i can pregenerate some of the most rare paths, and others still will be valid but not pre generated in build time (must be handled)
dla blocking: app awaits for data

aktualnie zostało to zastąpione na

true: (default) Dynamic segments not included in generateStaticParams are generated on demand. - połączenie true i blocking
false: Dynamic segments not included in generateStaticParams will return a 404.- takie samo
ustawia się to za pomocą 'export const dynamicParams = true' - i tyle

---
