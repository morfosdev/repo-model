import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_project: TcapsCodeData = {
  ccc_project: {
    capsCodeInfo: {
      '1': {
        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },

        capsLabel: { 'pt-br': 'Projeto', en: 'Project' },
        capsDescription: {
          'pt-br': 'Cápsula contendo o código para iniciar um projeto.',
          en: 'Capsule containing the code to start a project.',
        },
        capsCodeTypes: ['project'],

        capsCodeText: `
        // ---------- import React Packs
        import React from 'react';
        import * as RN from 'react-native';

        // ---------- import Variables Pack
        import { create } from 'zustand';

        // ---------- import Local Tools
        import {mapElements} from './tools/base/project/mapElements';
        import * as functions from './tools/base/functions';
        import * as Elements from './tools/base/Elements';
        import { Project } from './tools/base/project/';
        import * as jsvals from './tools/base/jsvals';
        import { props } from './tools/base/props';
        import * as customs from './tools/customs';
        import * as stls from './tools/base/stls';
        import { tools } from "./tools";

        // ---------- set Temp Dev DataBase
        import * as devDB from './devDB';
        import { devVars } from './devDB';
        import { mock } from './devDB';

        // ---------- set Caps Inputs
        const currRoute = '!#!initial screen!#!'

        let args:any = []

        const screens = [
          !#!Lista de Telas!#!
        ]

        const initCt = () => ({
          !#!Lista de Variáveis!#!
        });
        const initObj = initCt();
        // console.log(initObj);

        const arrInitFuncs = [
          !#!Start Functions!#!
        ];

        const isObject = item => {
          return item && typeof item === 'object' && !Array.isArray(item);
        };

        const mergeDeep = (target, ...sources) => {
          if (!sources.length) return target;
          const source = sources.shift();

          if (isObject(target) && isObject(source)) {
            for (const key in source) {
              if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                mergeDeep(target[key], source[key]);
              } else {
                Object.assign(target, { [key]: source[key] });
              }
            }
          }

          return mergeDeep(target, ...sources);
        };

        const newMergedObj = mergeDeep(initObj, devVars);

        console.log({ newMergedObj });
        export const useRoutes = create(() => ({ currRoute }));
        export const useData = create(() => newMergedObj);

        // ---------- set Main Component
        export const Router = () => {
          return (
            <Project
              configData={{
                screens,
                initCt,
                arrInitFuncs,
              }}
            />
          );
      };`,

        capsCodeInputs: {
          'ccc_project-0': {
            capsIptCodeID: 'ccc_project-0',
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
                en: 'Add the URL Path of the screen that will start your project.',
              },
            },
          },

          'ccc_project-1': {
            capsIptCodeID: 'ccc_project-1',
            capsIptPosition: '3',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Lista de Telas',
                en: 'Screens List',
              },
              capsIptCapsDescription: {
                'pt-br': 'Adicione Telas para o projeto.',
                en: 'Add Screens to the project.',
              },

              capsIptCapsDfCode: `[]`,
              capsIptCapsTypesToAdd: ['Tela'],
            },
          },

          'ccc_project-2': {
            capsIptCodeID: 'ccc_project-2',
            capsIptPosition: '2',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Lista de Variáveis',
                en: 'Variables List',
              },
              capsIptCapsDescription: {
                'pt-br': 'Adicione Variáveis para o projeto.',
                en: 'Add Variables to the project.',
              },

              capsIptCapsDfCode: `true: "true"`,
              capsIptCapsTypesToAdd: ['propValue'],
            },
          },

          'ccc_project-3': {
            capsIptCodeID: 'ccc_project-3',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: {
                'pt-br': 'Função de Início',
                en: 'Start Function',
              },
              capsIptCapsDescription: {
                'pt-br': '',
                en: '',
              },

              capsIptCapsDfCode: `()=>{}`,
              capsIptCapsTypesToAdd: ['function'],
            },
          },
        },
      },
    },

    capsType: 'code',

    capsDB: {
      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsID: 'ccc_project',
      capsUserID: 'xxx1',
    },
  },
};
