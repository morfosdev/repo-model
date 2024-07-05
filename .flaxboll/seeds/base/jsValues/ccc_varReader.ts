import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_varReader: TcapsCodeData = {
  ccc_varReader: {
    capsDB: {
      capsUserID: 'usrn5e3jr2CvvnDpHigA',
      capsID: 'ccc_varReader',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 766000000 },
      capsPrjID: 'ZOqi3kZm6c7XjObC79xk',
    },
    capsType: 'code',
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'leitor var', en: 'var reader' },
        capsDescription: { 'pt-br': 'leitor var', en: 'var reader' },
        capsCodeTypes: ['var reader', 'jsValue', 'string process'],

        capsCodeText: `jsvals.varReader({pass: {
          path: !#!string value!#!
        }})`,

        capsCodeVersionID: '1',
        capsCodeInputs: {
          'ccc_varReader-0': {
            capsIptRemoved: false,
            capsIptCodeID: 'ccc_varReader-0',
            capsIptPosition: '0',

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'caminho string',
                en: 'string path',
              },
              capsIptCapsDescription: {
                'pt-br':
                  'Escreva o path do local da variável que deseja pegar o valor.',
                en: 'Write the path to the location of the variable you want to get the value.',
              },
              capsIptCapsDfCode: '"true"',
              capsIptCapsTypesToAdd: ['string process'],
            },
          },
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 766000000 },
      },
    },
  },
};
