import type { StageType } from 'brackets-model';

export interface Dataset {
    title: string;
    type: StageType;
    roster: { id: number; name: string }[];
  }

  interface Window {
    bracketsViewer?: any | undefined;
  }