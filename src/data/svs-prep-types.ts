// TypeScript interfaces for SVS Prep screenshot data

export interface SVSDayData {
  name: string;
  description: string;
  screenshotUrl: string;
  icon: string;
  placement?: number; // Optional ranking/placement for the day
  points?: number; // Optional points earned
}

export interface SVSPrepData {
  id: string;
  title: string;
  dateRange: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  days: SVSDayData[];
  overall: {
    name: string;
    screenshotUrl: string;
    totalPoints: number;
    finalPlacement: number;
    description: string;
  };
  victory: boolean; // Whether this prep was won
  highlights?: string[]; // Key achievements or notes
}

export interface SVSPrepComponentProps {
  preps: SVSPrepData[];
  title?: string;
  description?: string;
}