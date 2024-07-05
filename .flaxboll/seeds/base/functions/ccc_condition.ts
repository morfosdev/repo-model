import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_condition: TcapsCodeData = {
  ccc_condition: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'condição (if)', en: 'condition (if)' },
        capsDescription: { 'pt-br': '', en: '' },
        capsCodeTypes: ['Função', 'function', 'condition'],

        capsCodeText: `async (...args) =>
        functions.condition({ args, pass:{
          conditionPath: [!#!variable path!#!],
          expectedValue: [!#!expected value!#!],
          functionsTrue: [!#!functions (case true)!#!],
          functionsFalse: [!#!functions (case false)!#!],
          args
        }})`,

        capsCodeInputs: {
          'ccc_condition-0': {
            capsIptCodeID: 'ccc_condition-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Caminho da Variável',
                en: 'variable path',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsTypesToAdd: ['string process'],
              capsIptCapsDfCode: ' ',
            },
          },

          'ccc_condition-1': {
            capsIptCodeID: 'ccc_condition-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Valor Esperado',
                en: 'Expected Value',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: ' ',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },

          'ccc_condition-2': {
            capsIptCodeID: 'ccc_condition-2',
            capsIptPosition: '2',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'funções (caso verdadeiro)',
                en: 'functions (case true)',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `()=>{}`,
              capsIptCapsTypesToAdd: ['function'],
            },
          },

          'ccc_condition-3': {
            capsIptCodeID: 'ccc_condition-3',
            capsIptPosition: '3',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'funções (caso falso)',
                en: 'functions (case false)',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `()=>{}`,
              capsIptCapsTypesToAdd: ['function'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_condition',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
  ccc_condFuncs: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'conditional functions (multiple conds - if)',
          en: 'conditional functions (multiple conds - if)',
        },
        capsDescription: {
          'pt-br':
            'Para o operador informar as seguintes opções: "falsy", "===","||" ou "!==".',
          en: '',
        },
        capsCodeTypes: ['Função', 'function', 'toggle functions'],

        capsCodeText: `async (...args) =>
        functions.togglFuncs({ args, pass:{
          conditions: [!#!variable path!#!],
          expectedValue: [!#!expected value!#!],
          functionsTrue: [!#!functions (case true)!#!],
          functionsFalse: [!#!functions (case false)!#!],
          args
        }})`,

        capsCodeInputs: {
          'ccc_condFuncs-0': {
            capsIptCodeID: 'ccc_condFuncs-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': '...',
                en: '...',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsTypesToAdd: ['string process'],
              capsIptCapsDfCode: ' ',
            },
          },

          'ccc_condFuncs-1': {
            capsIptCodeID: 'ccc_condFuncs-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'Condições', en: 'Conditions' },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: ' ',
              capsIptCapsTypesToAdd: ['where conditions'],
            },
          },

          'ccc_condFuncs-2': {
            capsIptCodeID: 'ccc_condFuncs-2',
            capsIptPosition: '2',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'funções (caso verdadeiro)',
                en: 'functions (case true)',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `()=>{}`,
              capsIptCapsTypesToAdd: ['function'],
            },
          },

          'ccc_condFuncs-3': {
            capsIptCodeID: 'ccc_condFuncs-3',
            capsIptPosition: '3',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'funções (caso falso)',
                en: 'functions (case false)',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `()=>{}`,
              capsIptCapsTypesToAdd: ['function'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_condFuncs',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
