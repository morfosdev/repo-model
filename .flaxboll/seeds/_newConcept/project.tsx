// ---------- import React Packs
import React from 'react';
import * as RN from 'react-native';
import { SafeAreaView, Platform, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// ---------- import Variables Pack
// import { create } from 'zustand';

// ---------- import Local Tools
import { mapElements } from '../../../../../src/tools/project/mapElements';
// import { mapElements } from '../../tools/project/mapElements';
// import * as Elements from '../../tools/Elements';
// import * as stls from '../../tools/stls';
// import * as props from '../../tools/props';
// import * as jsvals from '../../tools/jsvals';
// import { tools } from '../../tools';

// ---------- set Caps Inputs
const currRoute = '!#!initial screen!#!';

let args: any = [];

// const screens = [
//   !#!Lista de Telas!#!
// ]

// export const initCt = {
//   !#!Lista de Variáveis!#!
// };

// const arrInitFuncs = [
//   !#!Start Functions!#!
// ];

// export const useRoutes = create(() => ({currRoute}))
// export const useData = create(() => ({ ...initCt }));

type Tprops = {
  configData: {
    screens: any[];
    initCt: Record<string, any>;
    arrInitFuncs: (() => void)[];
  };
};

// ---------- set Main Component
export const Project = ({ configData }: Tprops) => {
  // ---------- set Data
  const { screens, arrInitFuncs } = configData;

  // ---------- call Functions (If Exists)
  React.useEffect(() => {
    const callFn = async () => {
      for (const currFunc of arrInitFuncs) await currFunc();
    };

    callFn().catch(err => console.log('Project Start Functions', { err }));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {Platform.OS !== 'web' && (
        <View style={{ height: 30, backgroundColor: '#0067a5' }} />
      )}
      {mapElements(screens)}
      <StatusBar style="light" />
    </SafeAreaView>
  );
};
