import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_imagePicker: TcapsCodeData = {
  ccc_imagePicker: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'função imagePicker',
          en: 'function imagePicker',
        },
        capsDescription: { 'pt-br': '', en: '' },
        capsCodeTypes: ['Função', 'function', 'imagePicker'],

        capsCodeText: `

        // FIX_F6 //
        Elements.F6({ pass: {
          A: [
            !#!return functions!#!
          ],
        }})`,

        capsCodeInputs: {
          'ccc_imagePicker-0': {
            capsIptCodeID: 'ccc_imagePicker-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'funções de retorno',
                en: 'return functions',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },
              capsIptCapsTypesToAdd: ['Função', 'function'],
              capsIptCapsDfCode: '() => console.log({args});',
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_imagePicker',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
