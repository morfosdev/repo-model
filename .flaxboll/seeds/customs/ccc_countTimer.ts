import { TcapsCodeData } from '../../types/Tcaps/TcapsCode';

export const ccc_countTimer: TcapsCodeData = {
  // (ocorrências: 11)
  ccc_countTimer: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'CountTimer', en: 'CountTimer' },
        capsDescription: { 'pt-br': '', en: '' },
        capsCodeTypes: ['Elemento de Tela', 'CountTimer'],

        capsCodeText: `
          (...args) => <customs.CountTimer pass={{
                pathToCheck: [!#!Path to Check!#!],
                pathRunning: [!#!Path Running!#!],
                args
            }} />`,

        capsCodeInputs: {
          // ---------- Path To Check
          'ccc_countTimer-0': {
            capsIptCodeID: 'ccc_countTimer-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Caminho Segundos',
                en: 'Path to Init (seconds)',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `''`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          // ---------- Path Running
          'ccc_countTimer-1': {
            capsIptCodeID: 'ccc_countTimer-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Path Start / Stop',
                en: 'Path Running',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `''`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_countTimer',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
