import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_argReader: TcapsCodeData = {
  ccc_argReader: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'ccc_argReader',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 766000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsType: 'code',
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'leitor arg',
          en: 'arg reader',
        },
        capsDescription: {
          'pt-br': 'leitor arg',
          en: 'arg reader',
        },
        capsCodeTypes: ['jsValue', 'arg reader', 'string process'],

        capsCodeText: `jsvals.argReader({pass: {
          argPath: !#!string value!#!,
          args
        }})`,

        capsCodeVersionID: '1',
        capsCodeInputs: {
          'ccc_argReader-0': {
            capsIptRemoved: false,
            capsIptCodeID: 'ccc_argReader-0',
            capsIptPosition: '0',

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'caminho string',
                en: 'string path',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Escreva o path do argumento que deseja pegar o valor.',
                en: 'Write the path of the argument you want to get the value.',
              },
              capsIptCapsDfCode: `'#0'`,
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 766000000 },
      },
    },
  },
};
