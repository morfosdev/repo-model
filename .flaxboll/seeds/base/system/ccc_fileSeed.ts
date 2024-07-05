import { TcapsCodeData } from '../../../types/Tcaps/TcapsCode';

export const ccc_fileSeed: TcapsCodeData = {
  ccc_testeSystemSeed1: {
    capsCodeInfo: {
      '1': {
        capsLabel: {
          'pt-br': 'ccc_testeSystemSeed1',
          en: 'ccc_testeSystemSeed1',
        },
        capsDescription: { 'pt-br': '', en: '' },
        capsCodeTypes: ['flaxSystem'],

        capsCodeText: `
// ---------- import React Packs
import React from 'react';
import * as RN from 'react-native';

// ---------- set Caps Inputs
const string1 = "!#!String 1!#!"
const Arr1 = [!#!Arr 1!#!]

// ---------- set Main Component
export const Router = () => {
  const msg = 'Olá pessoal 1!!!'
  return (
    <RN.View><RN.Text style={{color: 'red'}}>{msg}</RN.Text></RN.View>
  );
};
      `,

        capsCodeInputs: {
          'ccc_testeSystemSeed1-0': {
            capsIptCodeID: 'ccc_testeSystemSeed1-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDfValue: 'noName',

              capsIptTxtLabel: { 'pt-br': 'String 1', en: 'String 1' },
              capsIptTxtDescription: { 'pt-br': '', en: '' },
            },
          },
          'ccc_testeSystemSeed1-1': {
            capsIptCodeID: 'ccc_testeSystemSeed1-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'code text', en: 'code text' },
              capsIptCapsDescription: { 'pt-br': 'Arr 1', en: 'Arr 1' },

              capsIptCapsDfCode: `"No Items!"`,
              capsIptCapsTypesToAdd: ['string process', 'project'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_testeSystemSeed1',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },

  ccc_fileSeed: {
    capsCodeInfo: {
      '1': {
        capsLabel: { 'pt-br': 'fileSeed', en: 'fileSeed' },
        capsDescription: { 'pt-br': '', en: '' },
        capsCodeTypes: ['flaxSystem', 'fileSeed'],

        capsCodeText: `
// file: !#!name!#!
!#!code!#!
        `,

        capsCodeInputs: {
          'ccc_fileSeed-0': {
            capsIptCodeID: 'ccc_fileSeed-0',
            capsIptPosition: '0',
            capsIptRemoved: false,

            capsIptType: 'text',
            capsIptTxtInfo: {
              capsIptTxtDfValue: 'noName',

              capsIptTxtLabel: { 'pt-br': 'name', en: 'name' },
              capsIptTxtDescription: { 'pt-br': '', en: '' },
            },
          },
          'ccc_fileSeed-1': {
            capsIptCodeID: 'ccc_fileSeed-1',
            capsIptPosition: '1',
            capsIptRemoved: false,

            capsIptType: 'capsules',
            capsIptCapsInfo: {
              capsIptCapsLabel: { 'pt-br': 'code text', en: 'code text' },
              capsIptCapsDescription: { 'pt-br': '', en: '' },

              capsIptCapsDfCode: `// no code to inject`,
              capsIptCapsTypesToAdd: ['string process', 'project'],
            },
          },
        },

        capsCodeVersionID: '1',
        capsVersionCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      },
    },

    capsType: 'code',

    capsDB: {
      capsID: 'ccc_fileSeed',

      capsPrjID: 'yyy1',
      capsCreatedAt: { seconds: 1669821908, nanoseconds: 764000000 },
      capsUserID: 'xxx1',
    },
  },
};
