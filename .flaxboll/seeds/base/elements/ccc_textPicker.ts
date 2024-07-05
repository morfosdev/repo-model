import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_textPicker: TcapsCodeData = {
  ccc_textPicker: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'Seletor de Texto',
          en: 'TextPicker',
        },
        capsDescription: {
          'pt-br': 'Um seletor de texto suspenso',
          en: 'A dropdown text picker',
        },
        capsCodeTypes: ['Elemento de Tela', 'TextPicker'],

        capsCodeText: `(...args) => {
          // ---------- set Capsules Inputs
          // ****** A - SET INPUT value
          let iptValue = "!#!Input Value!#!";

          // ****** D - SET OUTERBOX inputs
          const arrPickerBoxProps = [!#!Picker Box Properties!#!];
          const arrPickerBoxStls = [!#!Picker Box Styles!#!];

          // ****** E - SET OPTIONAL elements
          const arrElBeforeInput = [!#!Elements Before Input!#!];
          const arrElAfterInput = [!#!Elements After Input!#!];

          // ****** B - SET TEXTINPUT inputs
          const arrIptProps = [!#!Input Properties!#!];
          const arrIptStls = [!#!Input Styles!#!];
          const arrIptFuncs = [!#!Input Functions!#!];

          // ****** C - SET LIST inputs
          const arrListProps = [!#!List Properties!#!];
          const arrListBoxStls = [!#!List Box Styles!#!];
          // let pathListData = "!!Path List Data!!";
          // const arrListItems = [!!List Item Elements!!];

          // ****** A - SET INPUT value

          const refValue = React.useRef(null);
          React.useEffect(() => {
            refValue.current.value = iptValue
          },[iptValue])

          // ---------- set Arguments Values (If Exists)
          const checkArgsA = iptValue.startsWith('#');
          if(checkArgsA) iptValue = tools.argSel(args, iptValue);

          // ---------- set Variables Values (If Exists)
          const [condVarA, varValueA ] = tools.getVarValue(iptValue);
          if(condVarA) iptValue = varValueA;

          // ****** B - SET TEXTINPUT inputs

          // ------- set Variables Styles (If Exists)
          const stlIpt = tools.getStlValues(arrIptStls);

          // ------- set User Element Properties (If Exists)
          const userIptProps = {};

          for (const object of arrIptProps) {
            for (const keyProp in object) {
              const valueProp = object[keyProp];
              userIptProps[keyProp] = valueProp;
            }
          }

          const inputProps = {
            ref: refValue,
            style: [stlIpt],
            onFocus: () => setList(true),
            onBlur: () => setList(false),
            onChangeText: async (val) => {
              for (const currFunc of arrIptFuncs) await currFunc(val)
            },

            ...userIptProps
          };

          // ****** C - SET LIST inputs

          // // ------- set Variables Styles (If Exists)
          // const stlListBox = tools.getStlValues(arrListBoxStls);

          // // ---------- set Arguments Values (If Exists)
          // const checkArgsC = pathListData.startsWith('#');
          // if(checkArgsC) pathListData = tools.argSel(args, pathListData);

          // // ---------- set Variables Values (If Exists)
          // const [condVarC, varValueC] = tools.getVarValue(pathListData);
          // if(condVarC) pathListData = varValueC;

          // // ---------- set List Item
          // const renderItem = ({ item }) =>  {
          //   return(
          //   <>
          //     {arrListItems.map((Item, idx) => {
          //       return <Item key={idx} item={item} />;
          //     })}
          //   </>
          // )}

          // ------- set User Element Properties (If Exists)
          // const userListProps = {};

          // for (const object of arrListProps) {
          //   for (const keyProp in object) {
          //     const valueProp = object[keyProp];
          //     userListProps[keyProp] = valueProp;
          //   }
          // }

          const listProps = {
            // style: [stlListBox],
            // data: pathListData,
            // renderItem,

            // ...userListProps
          };

          // ****** D - SET OUTERBOX inputs

          // ------- set Variables Styles (If Exists)
          const stlPickerBox = tools.getStlValues(arrPickerBoxStls);

          // ------- set User Element Properties (If Exists)
          const userPickerBoxProps = {};

          for (const object of arrPickerBoxProps) {
            for (const keyProp in object) {
              const valueProp = object[keyProp];
              userPickerBoxProps[keyProp] = valueProp;
            }
          }

          const outerPickerProps = {
            style: [stlPickerBox],

            ...userPickerBoxProps
          };


          // ****** E - SET OPTIONAL elements
          const renderBefore = arrElBeforeInput.map((Item, idx) => (
            <Item key={idx} {...args} />
          ));

          const renderAfter = arrElAfterInput.map((Item, idx) => (
            <Item key={idx} {...args} />
          ));

          // ****** SET COMMON logics

          const [sttList, setList] = React.useState(false);

          // ---------- set Render
          return (
            <>
              <RN.View {...outerPickerProps}>
                {renderBefore}
                <RN.TextInput {...inputProps} />
                {renderAfter}
              </RN.View>

              {sttList && <RN.FlatList {...listProps} />}
            </>
          );
        }
        `,

        capsCodeInputs: {
          // ---------- element properties
          'ccc_textPicker-0': {
            capsIptCodeID: 'ccc_textPicker-0',
            capsIptPosition: '0',
            capsIptRemoved: false,
            capsIptType: 'text',

            capsIptTxtInfo: {
              capsIptTxtLabel: {
                'pt-br': 'Valor de Entrada',
                en: 'Input Value',
              },
              capsIptTxtDescription: {
                'pt-br': '',
                en: '',
              },
              capsIptTxtDfValue: '',
            },
          },

          'ccc_textPicker-1': {
            capsIptCodeID: 'ccc_textPicker-1',
            capsIptPosition: '1',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Propriedades da Caixa do Seletor',
                en: 'Picker Box Properties',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `{}`,
              capsIptCapsTypesToAdd: [
                'Propriedade Caixa',
                'Propriedade Rolagem',
              ],
            },
          },
          // ---------- element styles
          'ccc_textPicker-2': {
            capsIptCodeID: 'ccc_textPicker-2',
            capsIptPosition: '2',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Estilos da Caixa do Seletor',
                en: 'Picker Box Styles',
              },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `{ borderColor: 'white', borderWidth: 1}`,
              capsIptCapsTypesToAdd: ['Estilo Caixa'],
            },
          },

          'ccc_textPicker-3': {
            capsIptCodeID: 'ccc_textPicker-3',
            capsIptPosition: '3',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Elementos da Lista de Itens',
                en: 'List Item Elements',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `
              () => {
                return (
                  <RN.Text>
                    Adicione os campos que quer mostrar aqui.
                  </RN.Text>
                );
              }
              `,
              capsIptCapsTypesToAdd: ['Elemento de Tela'],
            },
          },

          // 'ccc_textPicker-4': {
          //   capsIptCodeID: 'ccc_textPicker-4',
          //   capsIptPosition: '4',
          //   capsIptRemoved: false,
          //   capsIptType: 'capsules',

          //   capsIptCapsInfo: {
          //     capsIptCapsLabel: { 'pt-br': 'List Item Elements' },
          //     capsIptCapsDescription: { 'pt-br': '' },

          //     capsIptCapsDfCode: `
          //     () => {
          //       return (
          //         <RN.Text>
          //           Adicione os campos que quer mostrar aqui.
          //         </RN.Text>
          //       );
          //     }
          //     `,
          //     capsIptCapsTypesToAdd: ['Elemento de Tela'],
          //   },
          // },

          // ---------- element properties
          'ccc_textPicker-5': {
            capsIptCodeID: 'ccc_textPicker-5',
            capsIptPosition: '5',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Propriedades da Entrada',
                en: 'Input Properties',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{
                placeholder: 'Escreva...',
              }`,
              capsIptCapsTypesToAdd: ['Propriedade Texto', 'Propriedade Caixa'],
            },
          },
          // ---------- element styles
          'ccc_textPicker-6': {
            capsIptCodeID: 'ccc_textPicker-6',
            capsIptPosition: '6',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Estilos da Entrada',
                en: 'Input Styles',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{
                borderColor: 'white',
                borderWidth: 1,
                color: 'black',
                fontSize: 20,
              }`,
              capsIptCapsTypesToAdd: ['Estilo Texto'],
            },
          },
          // ---------- element functions
          'ccc_textPicker-7': {
            capsIptCodeID: 'ccc_textPicker-7',
            capsIptPosition: '7',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Funções da Entrada',
                en: 'Input Functions',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `() => {}`,
              capsIptCapsTypesToAdd: ['Função'],
            },
          },

          // ---------- list element properties
          'ccc_textPicker-8': {
            capsIptCodeID: 'ccc_textPicker-8',
            capsIptPosition: '8',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Propriedades da Lista',
                en: 'List Properties',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{}`,
              capsIptCapsTypesToAdd: [
                'Propriedade Caixa',
                'Propriedade Rolagem',
              ],
            },
          },

          'ccc_textPicker-9': {
            capsIptCodeID: 'ccc_textPicker-9',
            capsIptPosition: '9',
            capsIptRemoved: false,
            capsIptType: 'capsules',

            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Estilos da Caixa da Lista',
                en: 'List Box Styles',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `{
                borderColor: 'white',
                borderWidth: 1,
              }`,
              capsIptCapsTypesToAdd: ['Estilo Caixa'],
            },
          },

          // 'ccc_textPicker-10': {
          //   capsIptCodeID: 'ccc_textPicker-10',
          //   capsIptPosition: '10',
          //   capsIptRemoved: false,
          //   capsIptType: 'text',

          //   capsIptTxtInfo: {
          //     capsIptTxtLabel: { 'pt-br': 'Path List Data' },
          //     capsIptTxtDescription: { 'pt-br': '' },
          //     capsIptTxtDfValue: 'A',
          //   },
          // },

          // 'ccc_textPicker-11': {
          //   capsIptCodeID: 'ccc_textPicker-11',
          //   capsIptPosition: '11',
          //   capsIptRemoved: false,
          //   capsIptType: 'capsules',

          //   capsIptCapsInfo: {
          //     capsIptCapsLabel: { 'pt-br': 'List Item Elements' },
          //     capsIptCapsDescription: { 'pt-br': '' },

          //     capsIptCapsDfCode: `
          //     () => {
          //       return (
          //         <RN.Text>
          //           Adicione os campos que quer mostrar aqui.
          //         </RN.Text>
          //       );
          //     }
          //     `,
          //     capsIptCapsTypesToAdd: ['Elemento de Tela'],
          //   },
          // },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_textPicker',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
