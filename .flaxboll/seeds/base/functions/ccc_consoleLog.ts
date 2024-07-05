import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_consoleLog: TcapsCodeData = {
  ccc_consoleLog: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'console log',
          en: 'console log',
        },
        capsDescription: {
          'pt-br': 'Exibe uma mensagem no console web',
          en: 'Outputs a message to the web console',
        },
        capsCodeTypes: ['function', 'console log'],

        capsCodeText: `(...args) => {
          // ---------- set Capsules Inputs
          const itemsToLog = [!#!items to log!#!];

          // ---------- set Console Log
          itemsToLog.forEach(item=>{

            if(typeof item === "function") return console.log({
              function: item,
              response: item(args)
            });

            if(typeof item === "string") {
              // ---------- set Arguments Values (If Exists)
              const checkArgs = item.startsWith('#');
              if(checkArgs) item = tools.argSel(args, item);

              // ---------- set Variables Values (If Exists)
              const [condVar, varValue] = tools.getVarValue(item, "noComponent");
              if(condVar) item = varValue;

              return console.log(item);
            }

            console.log(item);
          })
        }`,

        capsCodeInputs: {
          'ccc_consoleLog-0': {
            capsIptCodeID: 'ccc_consoleLog-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'itens para o log',
                en: 'items to log',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `"console log"`,
              capsIptCapsTypesToAdd: [],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_consoleLog',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
