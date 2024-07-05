import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_freeValue: TcapsCodeData = {
  ccc_freeValue: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'ccc_freeValue',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 766000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsType: 'code',
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'valor livre', en: 'free value' },

        capsDescription: { 'pt-br': '', en: '' },
        capsCodeTypes: ['jsValue', 'free value'],
        capsCodeText: `jsvals.j8({pass: {
          propertieValues: !#!free value!#!
        }})`,

        capsCodeVersionID: '1',
        capsCodeInputs: {
          'ccc_freeValue-0': {
            capsIptType: 'text',
            capsIptRemoved: false,
            capsIptCodeID: 'ccc_freeValue-0',
            capsIptPosition: '0',
            capsIptTxtInfo: {
              capsIptTxtLabel: {
                'pt-br': 'valor livre',
                en: 'free value',
              },

              capsIptTxtDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptTxtDfValue: 'undefined',
            },
          },
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 766000000 },
      },
    },
  },
};
