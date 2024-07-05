import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_objectValue: TcapsCodeData = {
  ccc_objectValue: {
    capsDB: {
      capsID: 'ccc_objectValue',
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 766000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'valor objeto',
          en: 'object value',
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 766000000 },
        capsCodeTypes: ['jsValue'],
        capsCodeVersionID: '1',
        capsCodeText: `jsvals.j8({pass: {
          propertieValues: {!#!object properties!#!}
        }})`,
        capsDescription: {
          'pt-br': '',
          en: '',
        },

        capsCodeInputs: {
          'ccc_objectValue-0': {
            capsIptCodeID: 'ccc_objectValue-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'propriedades de objeto',
                en: 'object properties',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptCapsDfCode: ' ',
              capsIptCapsTypesToAdd: ['propValue'],
            },
          },
        },
      },
    },
    capsType: 'code',
  },
};
