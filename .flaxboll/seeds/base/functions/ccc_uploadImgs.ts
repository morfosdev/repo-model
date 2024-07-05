import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_uploadImgs: TcapsCodeData = {
  ccc_uploadImgs: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'seed', en: 'seed' },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['Função', 'function', 'uploadImgs'],

        capsCodeText: `Elements.F8({ pass: {
          loopPath: [
                !#!loop path!#!
              ],
              functions: [
                !#!functions!#!
              ],
            args
        }})`,

        capsCodeInputs: {
          'ccc_uploadImgs-0': {
            capsIptCodeID: 'ccc_uploadImgs-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'caminho do loop', en: 'loop path' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },
              capsIptCapsTypesToAdd: [
                'free value',
                'join strings value',
                'string value',
              ],
              capsIptCapsDfCode: '"{{true}}"',
            },
          },
          'ccc_uploadImgs-1': {
            capsIptCodeID: 'ccc_uploadImgs-1',
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
      capsID: 'ccc_uploadImgs',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
