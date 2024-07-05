import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_flaxHome: TcapsCodeData = {
  ccc_project1_home1: {
    capsType: 'code',

    capsDB: {
      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsID: 'ccc_project1_home1',
      capsUserID: 'xxx1',
    },

    capsCodeInfo: {
      '1': {
        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },

        capsLabel: { 'pt-br': 'Projeto', en: 'project' },
        capsDescription: {
          'pt-br': 'Cápsula contendo o código para iniciar um projeto.',
          en: 'Capsule containing the code to start a project.',
        },
        capsCodeTypes: ['project'],

        capsCodeText: `
        import React from 'react'
        import * as RN from "react-native-web";

        const Project = (  ) => {
          const initRouter = { current: '!#!Tela Inicial!#!', list: [] };
          const [sttRouter, setRouter] = React.useState(initRouter);
          const [sttInit, setInit] = React.useState(true);

          const [sttComps, setComps] = React.useState([]);

          sttInit && fxInitLoop(sttInit,setInit,sttRouter,setRouter,setComps);

          let CurrScreen;

          sttComps.forEach(props => {
            if (!props) return;
            const { path, comp } = props;
            if (sttRouter.current === path) CurrScreen = comp;
          });

          if (!CurrScreen) {
            const firstItem = sttComps[0];
            if (!firstItem) return <></>;

            const FirstScreen = firstItem.comp;
            return <FirstScreen />;
          }

          return <CurrScreen />;
        }

        const fxInitLoop = (sttInit,setInit,sttRouter,setRouter,setComps) => {
          const funcToComps = [!#!Lista de Telas!#!]

          const getComps = funcToComps.map(setItem => {
            if (!sttInit) return;

            const getRoute = (route) => {
              const newRoute = { ...sttRouter, list: [...sttRouter.list, route] };
              setRouter(newRoute);
            };

            const goTo = (path) => {
              const changeRoute = { ...sttRouter, current: path };
              setRouter(changeRoute);
            };

            setInit(false);
            const Comp = setItem({ getRoute, goTo });

            return Comp;
          });

          setComps(getComps);
        };


        RN.AppRegistry.registerComponent("Project", () => Project)

        RN.AppRegistry.runApplication("Project", {
          rootTag: document.getElementById("root")
        });
        `,

        capsCodeInputs: {
          'ccc_project1_home1-0': {
            capsIptCodeID: 'ccc_project1_home1-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDfValue: 'home',

              capsIptTxtLabel: {
                'pt-br': 'Tela Inicial',
                en: 'Initial Screen',
              },
              capsIptTxtDescription: {
                'pt-br':
                  'Adicione o Caminho de URL da tela que vai iniciar o seu projeto.',
                en: 'Add the URL path of the screen that will initiate your project',
              },
            },
          },

          'ccc_project1_home1-1': {
            capsIptCodeID: 'ccc_project1_home1-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Lista de Telas',
                en: 'List of Screens',
              },
              capsIptCapsDescription: {
                'pt-br': 'Adicione Telas para o projeto.',
                en: 'Add screens to the project',
              },

              capsIptCapsDfCode: `({ getRoute, goTo }) => {
                const screenData = { path: 'home', name: 'Home' };
                getRoute(screenData.path);

                const Comp = () => {

                  const [sttDbString, setDbString] = React.useState('carregando do firestore... (pausado)');

                  const stlView = {
                    backgroundColor: 'black',

                    height: '100%',
                    width: '100%',

                    justifyContent:'center',
                    alignItems:'center',
                  }

                  const stlText1 = {
                    color:'#aaa',
                    marginTop: 20,
                    fontSize: 20,
                    textAlign:'center',
                  };
                  const stlText2 = {
                    ...stlText1,
                    color:'#555',
                    maxWidth: 180,
                    fontSize: 14,
                    fontStyle: 'italic'
                  };

                  return (
                    <RN.View style={stlView}>
                      <RN.Image
                        style={{ width:165, height: 40,}}
                        source={{uri: 'https://morfosweb.com/static/media/morfos-logo.d2181ead.png'}}
                        />
                      <RN.Text
                        style={stlText2}
                        children={sttDbString}
                        />
                      <RN.Text
                        style={stlText1}
                        children='Bem-Vindo!'
                        />
                      <RN.Text
                        style={stlText2}
                        children='Comece adicionando Telas ao seu projeto!'
                        />
                    </RN.View>
                  )
                };

                return { path: screenData.path, comp: Comp };

                return (
                  <RN.Text children='Bem-Vindo!'/>
                )
              }`,
              capsIptCapsTypesToAdd: ['Tela'],
            },
          },
        },
      },
    },
  },
};
