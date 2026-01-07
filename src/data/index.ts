// Data loader utilities for alliance and event information
import { Alliance, AllianceEventData } from './types';
import { SVSPrepData } from './svs-prep-types';
import alliancesData from './alliances.json';
import eventsData from './events.json';
import configData from './config.json';
import svsPrepData from './svs-prep-data.json';
import videosData from './videos.json';

// Type-safe data imports
export const alliances: Alliance[] = alliancesData as Alliance[];
export const allianceEvents: AllianceEventData[] = eventsData as AllianceEventData[];
export const svsPreps: SVSPrepData[] = svsPrepData as SVSPrepData[];
export const serverConfig = configData;

// Video type
export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  channel: string;
  date?: string;
}

export const videos: Video[] = videosData as Video[];

// Utility functions for data access
export const getAlliances = (): Alliance[] => {
  return alliances.sort((a, b) => a.rank - b.rank);
};

export const getAllianceById = (id: string): Alliance | undefined => {
  return alliances.find(alliance => alliance.id === id);
};

export const getAllianceByName = (name: string): Alliance | undefined => {
  return alliances.find(alliance => alliance.name === name);
};

export const getEventsByAlliance = (allianceName: string): AllianceEventData | undefined => {
  return allianceEvents.find(eventData => eventData.name === allianceName);
};

export const getAllEvents = (): AllianceEventData[] => {
  return allianceEvents;
};

export const getSVSPreps = (): SVSPrepData[] => {
  return svsPreps.sort((a, b) => new Date(b.dateRange.split('-')[0]).getTime() - new Date(a.dateRange.split('-')[0]).getTime());
};

export const getSVSPrepById = (id: string): SVSPrepData | undefined => {
  return svsPreps.find(prep => prep.id === id);
};

export const getVideos = (): Video[] => {
  return videos;
};

export const getVideoById = (id: string): Video | undefined => {
  return videos.find(video => video.id === id);
};

// Calculate dynamic stats
export const getTotalMembers = (): number => {
  return alliances.reduce((total, alliance) => total + alliance.members, 0);
};

export const getTopRankedAlliance = (): Alliance | undefined => {
  return alliances.find(alliance => alliance.rank === 1);
};

// Data validation helper
export const validateData = (): boolean => {
  try {
    // Check if alliances have required fields
    const validAlliances = alliances.every(alliance => 
      alliance.id && 
      alliance.name && 
      alliance.fullName && 
      typeof alliance.rank === 'number' &&
      typeof alliance.members === 'number'
    );

    // Check if events match alliance names
    const allianceNames = new Set(alliances.map(a => a.name));
    const eventAllianceNames = new Set(allianceEvents.map(e => e.name));
    const eventsMatchAlliances = [...eventAllianceNames].every(name => allianceNames.has(name));

    return validAlliances && eventsMatchAlliances;
  } catch (error) {
    console.error('Data validation failed:', error);
    return false;
  }
};

// Export default for convenience
const dataExport = {
  alliances: getAlliances(),
  events: getAllEvents(),
  svsPreps: getSVSPreps(),
  config: serverConfig,
  utils: {
    getAllianceById,
    getAllianceByName,
    getEventsByAlliance,
    getSVSPrepById,
    getTotalMembers,
    getTopRankedAlliance,
    validateData
  }
};

export default dataExport;