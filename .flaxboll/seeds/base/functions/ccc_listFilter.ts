import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_listFilter: TcapsCodeData = {
  ccc_listFilter: {
    capsDB: {
      capsID: 'ccc_listFilter',
      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
    capsType: 'code',
    capsCodeInfo: {
      '1': {
        capsCodeVersionID: '1',
        capsDescription: {
          'pt-br':
            'Recebe o valor por meio de parâmetro(s) e atualiza a lista com os resultados encontrados.',
          en: 'Receives the value through parameter(s) and updates the list with the results found.',
        },
        capsLabel: {
          'pt-br': 'listFilterFromString',
          en: 'listFilterFromString',
        },
        capsCodeText: `async (...args) => {
              // ---------- set Caps Inputs
              let pathOrigin = "!#!Origin Path!#!";
							const field = "!#!Origin Field To Filter!#!";
							const arrFuncs = [!#!Get Value Functions!#!];

							// ---------- set Arguments Values (If Exists)
							const checkArgs = pathOrigin.startsWith('#');
							if(checkArgs) pathOrigin = tools.argSel(args, pathOrigin);

							// ---------- set Variables Values (If Exists)
							const [condVar, varValue] = tools.getVarValue(pathOrigin, 'noComponent');
							if(condVar) pathOrigin = varValue;

              // ---------- set Filtered Array
              const filteredArr = pathOrigin.filter(currItem => {
                let term1 = "";
								if(field) {
									term1 = currItem[field].toLowerCase();
								}
								else{
									term1 = currItem.toLowerCase();
								}

                const term2 = args[0].toLowerCase();

                return term1.includes(term2);
              })

              // ---------- set Get Value Functions
							for (const currFunc of arrFuncs) await currFunc(filteredArr, args);

							return filteredArr;
            }`,

        capsCodeInputs: {
          'ccc_listFilter-0': {
            capsIptCodeID: 'ccc_listFilter-0',
            capsIptRemoved: false,
            capsIptType: 'text',
            capsIptPosition: '0',
            capsIptTxtInfo: {
              capsIptTxtLabel: {
                'pt-br': 'Caminho de Origem',
                en: 'Origin Path',
              },
              capsIptTxtDescription: { 'pt-br': '', en: '' },
              capsIptTxtDfValue: '',
            },
          },
          'ccc_listFilter-1': {
            capsIptCodeID: 'ccc_listFilter-1',
            capsIptRemoved: false,
            capsIptType: 'text',
            capsIptPosition: '1',
            capsIptTxtInfo: {
              capsIptTxtLabel: {
                'pt-br': 'Campo de origem para filtrar',
                en: 'Origin Field To Filter',
              },
              capsIptTxtDescription: { 'pt-br': '', en: '' },
              capsIptTxtDfValue: '',
            },
          },
          'ccc_listFilter-2': {
            capsIptCodeID: 'ccc_listFilter-2',
            capsIptRemoved: false,
            capsIptPosition: '2',

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Funções para Pegar Valores',
                en: 'Get Value Functions',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: '() => {}',
              capsIptCapsTypesToAdd: ['Função', 'function'],
            },
          },
        },
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 792000000 },

        capsCodeTypes: ['Função', 'listFilter', 'function'],
      },
    },
  },
};
