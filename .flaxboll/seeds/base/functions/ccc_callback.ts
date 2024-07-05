import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_callback: TcapsCodeData = {
  ccc_callback: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'callback',
          en: 'callback',
        },
        capsDescription: {
          'pt-br': 'Invoca funções callback',
          en: 'Invokes callback functions',
        },
        capsCodeTypes: ['function', 'callback'],

        capsCodeText: `Elements.F3({ pass: {
          functions:[
              !#!functions!#!
            ],
          }})`,

        capsCodeInputs: {
          'ccc_callback-0': {
            capsIptCodeID: 'ccc_callback-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'funções', en: 'functions' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: '() => {}',
              capsIptCapsTypesToAdd: ['Função', 'function'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_callback',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },

  ccc_callback_B: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'callback',
          en: 'callback',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['function', 'fetch response B'],

        capsCodeText: `async (...args) => {
          // ---------- set Capsules Inputs
          const resMethod = "!#!method after response!#!"
          const pathToSet = "!#!variable to save!#!"
          const argToPass = !#!arguments to pass!#!

          // ---------- set Update CtData
          // console.log({args});
          const response = args[0];
          // console.log({response});
          const value = await response[resMethod](argToPass);
          // console.log({value});

          const cleanPath = pathToSet.replace("{{", "").replace("}}", "")
          // console.log({cleanPath});
          tools.setData({path: cleanPath, value});
        }`,

        capsCodeInputs: {
          'ccc_callback_B-0': {
            capsIptCodeID: 'ccc_callback_B-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDfValue: 'err',

              capsIptTxtLabel: {
                'pt-br': 'método depois da resposta',
                en: 'method after response',
              },
              capsIptTxtDescription: {
                'pt-br': ' ',
                en: ' ',
              },
            },
          },

          'ccc_callback_B-1': {
            capsIptCodeID: 'ccc_callback_B-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDfValue: 'response return value',

              capsIptTxtLabel: {
                'pt-br': 'variável para salvar',
                en: 'variable to save',
              },
              capsIptTxtDescription: {
                'pt-br': ' ',
                en: ' ',
              },
            },
          },

          'ccc_callback_B-2': {
            capsIptCodeID: 'ccc_callback_B-2',
            capsIptPosition: '2',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsDfCode: 'undefined',
              capsIptCapsTypesToAdd: ['jsValue'],

              capsIptCapsLabel: {
                'pt-br': 'argumentos a passar',
                en: 'arguments to pass',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_callback_B',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
