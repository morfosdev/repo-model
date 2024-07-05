import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_dirSeed: TcapsCodeData = {
  ccc_dirSeed: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'dirSeed', en: 'dirSeed' },
        capsDescription: { 'pt-br': '', en: '' },
        capsCodeTypes: ['flaxSystem', 'dirSeed'],

        capsCodeText: `// "!#!name!#!", [!#!files!#!]`,

        capsCodeInputs: {
          'ccc_dirSeed-0': {
            capsIptCodeID: 'ccc_dirSeed-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDfValue: '',

              capsIptTxtLabel: { 'pt-br': 'name', en: 'name' },
              capsIptTxtDescription: { 'pt-br': '', en: '' },
            },
          },
          'ccc_dirSeed-1': {
            capsIptCodeID: 'ccc_dirSeed-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Diretórios e Arquivos',
                en: 'Directories and Files',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: ``,
              capsIptCapsTypesToAdd: ['flaxSystem'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_dirSeed',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
