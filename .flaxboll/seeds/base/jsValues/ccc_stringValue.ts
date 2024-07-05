import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_stringValue: TcapsCodeData = {
  ccc_stringValue: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'ccc_stringValue',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 766000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsType: 'code',
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'valor string',
          en: 'string value',
        },
        capsDescription: {
          'pt-br': '',
          en: '',
        },
        capsCodeTypes: ['string value', 'jsValue', 'string process'],
        capsCodeText: `jsvals.j8({pass: {
          propertieValues: "!#!string value!#!"
        }})`,

        capsCodeVersionID: '1',
        capsCodeInputs: {
          'ccc_stringValue-0': {
            capsIptType: 'text',
            capsIptRemoved: false,
            capsIptCodeID: 'ccc_stringValue-0',
            capsIptPosition: '0',
            capsIptTxtInfo: {
              capsIptTxtLabel: {
                'pt-br': 'valor string',
                en: 'string value',
              },

              capsIptTxtDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptTxtDfValue: ``,
            },
          },
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 766000000 },
      },
    },
  },
};
