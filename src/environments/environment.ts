// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  slides: [
    { name: 'home', showHeader: false, showFooter: false },
    { name: 'about-me', showHeader: true, showFooter: true },
    { name: 'conquete-history-1', showHeader: true, showFooter: true },
    { name: 'questions', showHeader: true, showFooter: true },
    { name: 'end', showHeader: true, showFooter: true }
  ]
};
