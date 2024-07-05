import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

const css1 =
  "'color: yellow; background-color: black; font-size: 11px; padding: 2px 6px; border-radius: 3px'";
const css2 =
  "'color: green; background-color: black; font-size: 10px; padding: 2px 6px; border-radius: 3px'";

export const ccc_fetchResponse: TcapsCodeData = {
  ccc_fetchResponse_B: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'fetch Response',
          en: 'fetch Response',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['fetch response'],

        capsCodeText: `async (...args) => {
          // ---------- set Capsules Inputs
          const resMethod = "!#!method after response!#!"
          const pathToSet = "!#!variable to save!#!"
          const argToPass = !#!arguments to pass!#!

          // ---------- set Consoles Pattern
          const css1 = ${css1};
          const css2 = ${css2};

          console.log("%cfetch response", css1);

          // ---------- set Update CtData
          const response = args[0];
          const value = await response[resMethod]();
          const checkKeys = pathToSet.includes('{{');

          let cleanPath = pathToSet;
          if(checkKeys) {
            cleanPath = pathToSet.replace("{{", "").replace("}}", "")
          }

          tools.setData({path: cleanPath, value});
          console.log("%cfetch save path", css2, cleanPath);
          console.table("%cfetch save value", css2, value);
        }`,

        capsCodeInputs: {
          'ccc_fetchResponse_B-0': {
            capsIptCodeID: 'ccc_fetchResponse_B-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDfValue: 'json',

              capsIptTxtLabel: {
                'pt-br': 'método após resposta',
                en: 'method after response',
              },
              capsIptTxtDescription: { 'pt-br': ' ', en: '' },
            },
          },

          'ccc_fetchResponse_B-1': {
            capsIptCodeID: 'ccc_fetchResponse_B-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDfValue: 'sc.A1.lists.arrProds',

              capsIptTxtLabel: {
                'pt-br': 'variável para salvar',
                en: 'variable to save',
              },
              capsIptTxtDescription: { 'pt-br': ' ', en: '' },
            },
          },

          'ccc_fetchResponse_B-2': {
            capsIptCodeID: 'ccc_fetchResponse_B-2',
            capsIptPosition: '2',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsDfCode: 'undefined',
              capsIptCapsTypesToAdd: ['jsValue'],

              capsIptCapsLabel: {
                'pt-br': 'argumentos para passar',
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
      capsID: 'ccc_fetchResponse_B',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },

  // ccc_fetchResponse: {
  //   capsCodeInfo: {
  //     '1': {
  //       capsLabel: { 'pt-br': 'fetch Response_A' },
  //       capsDescription: { 'pt-br': '' },
  //       capsCodeTypes: ['fetchResponse_A'],

  //       capsCodeText: `async (...args) => {
  //         // ---------- set Capsules Inputs
  //         const resMethod = "!#!method after response!#!"
  //         const pathToSet = "!#!variable to save!#!"

  //         // ---------- set Update CtData
  //         console.log({args});
  //         const response = args[0];
  //         console.log({response});
  //         const value = await response[resMethod]();
  //         console.log({value});

  //         const cleanPath = pathToSet.replace("{{", "").replace("}}", "")
  //         console.log({cleanPath});
  //         tools.setData({path: cleanPath, value});
  //       }`,

  //       capsCodeInputs: {
  //         'ccc_fetchResponse-0': {
  //           capsIptCodeID: 'ccc_fetchResponse-0',
  //           capsIptPosition: '0',
  //           capsIptRemoved: false,

  //           capsIptType: 'text',
  //           capsIptTxtInfo: {
  //             capsIptTxtDfValue: 'err',

  //             capsIptTxtLabel: { 'pt-br': 'method after response' },
  //             capsIptTxtDescription: { 'pt-br': 'xxx' },
  //           },
  //         },

  //         'ccc_fetchResponse-1': {
  //           capsIptCodeID: 'ccc_fetchResponse-1',
  //           capsIptPosition: '1',
  //           capsIptRemoved: false,

  //           capsIptType: 'text',
  //           capsIptTxtInfo: {
  //             capsIptTxtDfValue: 'response return value',

  //             capsIptTxtLabel: { 'pt-br': 'variable to save' },
  //             capsIptTxtDescription: { 'pt-br': 'xxx' },
  //           },
  //         },
  //       },

  //       capsCodeVersionID: '1',
  //       capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
  //     },
  //   },

  //   capsType: 'code',

  //   capsDB: {
  //     capsID: 'ccc_fetchResponse',

  //     capsPrjID: 'yyy1',
  //     capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
  //     capsUserID: 'xxx1',
  //   },
  // },
};
