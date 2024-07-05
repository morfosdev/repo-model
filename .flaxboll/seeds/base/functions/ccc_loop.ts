import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_loop: TcapsCodeData = {
  ccc_loop: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'loop', en: 'loop' },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['Função', 'function', 'loop'],

        capsCodeText: `Elements.F7({ pass: {
            A: [
                !#!loop path!#!
              ],
            B: [
                !#!functions!#!
              ],
            args
        }})`,

        capsCodeInputs: {
          'ccc_loop-0': {
            capsIptCodeID: 'ccc_loop-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'caminho do loop', en: 'loop path' },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsTypesToAdd: [
                'free value',
                'join strings value',
                'string value',
              ],
              capsIptCapsDfCode: '"{{true}}"',
            },
          },
          'ccc_loop-1': {
            capsIptCodeID: 'ccc_loop-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'funções', en: 'functions' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },
              capsIptCapsTypesToAdd: ['Função', 'function'],
              capsIptCapsDfCode: '() => console.log("função default code");',
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_loop',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
