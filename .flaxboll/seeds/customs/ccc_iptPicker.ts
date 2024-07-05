import { TcapsCodeData } from '../../types/Tcaps/TcapsCode';

export const ccc_iptPicker: TcapsCodeData = {
  // (ocorrências: 11)
  ccc_iptPicker: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'IptPicker (custom)',
          en: 'IptPicker (custom)',
        },
        capsDescription: { 'pt-br': '', en: '' },
        capsCodeTypes: ['Elemento de Tela', 'IptPicker'],

        capsCodeText: `(...args:any) => <customs.IptPicker pass={{
          pathList: [!#!Path List!#!],
          pathEdit: [!#!Path Edit!#!],
          arrFuncs: [!#!OnValueChange Functions!#!],
          pathReturn: [!#!Path Return!#!],
          args,
        }}/>`,

        capsCodeInputs: {
          // ---------- Type (text field)
          'ccc_iptPicker-0': {
            capsIptCodeID: 'ccc_iptPicker-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Caminho da Lista *',
                en: 'Path List',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `''`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_iptPicker-1': {
            capsIptCodeID: 'ccc_iptPicker-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Caminho de Edição',
                en: 'Edit Path',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `''`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
          'ccc_iptPicker-2': {
            capsIptCodeID: 'ccc_iptPicker-2',
            capsIptPosition: '2',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Funções OnValueChange',
                en: 'OnValueChange Functions',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `() => {console.log("function default")}`,
              capsIptCapsTypesToAdd: ['function', 'findBy'],
            },
          },
          'ccc_iptPicker-3': {
            capsIptCodeID: 'ccc_iptPicker-3',
            capsIptPosition: '3',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': '(Entrada descontinuada)',
                en: 'Path Return',
              },
              capsIptCapsDescription: { 'pt-br': 'Não usar mais', en: '' },

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
      capsID: 'ccc_iptPicker',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
