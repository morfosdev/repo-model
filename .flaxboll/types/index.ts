// ---------- import Packs
import React from 'react';

// ---------- import Internals
import { TcapsCodeData } from './Tcaps/TcapsCode';
import { TcapsUseCodeData } from './Tcaps/TcapsUseCode';
import { TcurrProject } from './TcurrProject';
import { TObjProps } from './utils';

export type TlangString = { 'pt-br': string; en?: string };

export type TcapsCard = {
  cardID: string;
  parentID: string;
  // iptID: string;
  inputID: string;
  // childIdx: number;
  toggle?: boolean;
};

export type TcodeCache = () => Record<string, any>;
export type Tproject = {
  currProject: TcurrProject;
  seeds: TcapsCodeData;
  capsules: TcapsUseCodeData;
  actions: any;

  codeCache: TcodeCache;
};

export type TflaxUI = Tproject & {
  refElements: TObjProps<() => HTMLHtmlElement>;

  copy: { capsUseID: string };

  currCardFamily: TcapsCard[];

  drag: { dragLine: number; halfLine: '' | 'A' | 'B'; isMoving: boolean };

  // #ATTENTION: Juan Review

  codeInjection: {
    autoReinject: boolean;
    reinject: number;
    htmlScript: string;
    hideLoader: boolean;
    setScMask: boolean;
  };

  projects: {
    showProjects: boolean;

    projectsInfo: { [prjUserID: string]: TprojectItems };
    prjLoaded: { [prjUserID: string]: boolean };

    capsUsesInit: { [prjUserID: string]: TcapsUseCodeData };
  };
};

export type TctData = {
  // flaxUI: TflaxUI;
  system: TflaxUI;

  project: any;

  devLog: number;
};

// ---------- set Common Types
export type TsetBool = React.Dispatch<React.SetStateAction<boolean>>;
export type TbtnAdd = (setOpenList: TsetBool) => void;
