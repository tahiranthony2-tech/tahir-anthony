import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  GalleryImageItem,
  INITIAL_GALLERY_ITEMS,
  ImpactStatItem,
  DEFAULT_IMPACT_STATS,
} from '../data/organizationData';

interface BankDetails {
  bankName: string;
  accountTitle: string;
  accountNumber: string;
  iban: string;
  isConfigured: boolean;
}

interface ImageContextType {
  // Key photos
  tahirAnthonyPhoto: string | null;
  heroPhoto: string | null;
  organizationLogo: string | null;
  galleryItems: GalleryImageItem[];
  
  // Bank details
  bankDetails: BankDetails;
  updateBankDetails: (details: Partial<BankDetails>) => void;

  // Impact stats
  impactStats: ImpactStatItem[];
  updateImpactStat: (id: string, updated: Partial<ImpactStatItem>) => void;
  addImpactStat: (stat: Omit<ImpactStatItem, 'id'>) => void;
  removeImpactStat: (id: string) => void;
  resetImpactStats: () => void;
  
  // Actions
  setTahirAnthonyPhoto: (url: string | null) => void;
  setHeroPhoto: (url: string | null) => void;
  setOrganizationLogo: (url: string | null) => void;
  updateGalleryItemPhoto: (id: string, newSrc: string) => void;
  addGalleryItem: (item: Omit<GalleryImageItem, 'id'>) => void;
  removeGalleryItem: (id: string) => void;
  resetAllPhotosToDefault: () => void;
  
  // Admin modal state
  isAdminModalOpen: boolean;
  setIsAdminModalOpen: (open: boolean) => void;
  adminTargetSlot: string | null;
  openAdminModalForSlot: (slotId: string | null) => void;
}

const STORAGE_KEYS = {
  TAHIR_PHOTO: 'tawo_tahir_photo',
  HERO_PHOTO: 'tawo_hero_photo',
  LOGO_PHOTO: 'tawo_logo_photo',
  GALLERY: 'tawo_gallery_items',
  BANK: 'tawo_bank_details',
  IMPACT: 'tawo_impact_stats',
};

const DEFAULT_BANK: BankDetails = {
  bankName: '',
  accountTitle: '',
  accountNumber: '',
  iban: '',
  isConfigured: false,
};

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tahirAnthonyPhoto, setTahirPhotoState] = useState<string | null>(() => {
    return localStorage.getItem(STORAGE_KEYS.TAHIR_PHOTO) || null;
  });

  const [heroPhoto, setHeroPhotoState] = useState<string | null>(() => {
    return localStorage.getItem(STORAGE_KEYS.HERO_PHOTO) || null;
  });

  const [organizationLogo, setLogoState] = useState<string | null>(() => {
    return localStorage.getItem(STORAGE_KEYS.LOGO_PHOTO) || null;
  });

  const [galleryItems, setGalleryItemsState] = useState<GalleryImageItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.GALLERY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_GALLERY_ITEMS;
      }
    }
    return INITIAL_GALLERY_ITEMS;
  });

  const [bankDetails, setBankDetailsState] = useState<BankDetails>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.BANK);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return DEFAULT_BANK;
      }
    }
    return DEFAULT_BANK;
  });

  const [impactStats, setImpactStatsState] = useState<ImpactStatItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.IMPACT);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return DEFAULT_IMPACT_STATS;
      }
    }
    return DEFAULT_IMPACT_STATS;
  });

  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [adminTargetSlot, setAdminTargetSlot] = useState<string | null>(null);

  // Sync state to local storage
  const setTahirAnthonyPhoto = (url: string | null) => {
    setTahirPhotoState(url);
    if (url) {
      localStorage.setItem(STORAGE_KEYS.TAHIR_PHOTO, url);
    } else {
      localStorage.removeItem(STORAGE_KEYS.TAHIR_PHOTO);
    }
  };

  const setHeroPhoto = (url: string | null) => {
    setHeroPhotoState(url);
    if (url) {
      localStorage.setItem(STORAGE_KEYS.HERO_PHOTO, url);
    } else {
      localStorage.removeItem(STORAGE_KEYS.HERO_PHOTO);
    }
  };

  const setOrganizationLogo = (url: string | null) => {
    setLogoState(url);
    if (url) {
      localStorage.setItem(STORAGE_KEYS.LOGO_PHOTO, url);
    } else {
      localStorage.removeItem(STORAGE_KEYS.LOGO_PHOTO);
    }
  };

  const updateGalleryItemPhoto = (id: string, newSrc: string) => {
    setGalleryItemsState((prev) => {
      const updated = prev.map((item) =>
        item.id === id ? { ...item, imageSrc: newSrc } : item
      );
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(updated));
      return updated;
    });
  };

  const addGalleryItem = (item: Omit<GalleryImageItem, 'id'>) => {
    setGalleryItemsState((prev) => {
      const newItem: GalleryImageItem = {
        ...item,
        id: `gal-${Date.now()}`,
      };
      const updated = [newItem, ...prev];
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(updated));
      return updated;
    });
  };

  const removeGalleryItem = (id: string) => {
    setGalleryItemsState((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(updated));
      return updated;
    });
  };

  const updateBankDetails = (details: Partial<BankDetails>) => {
    setBankDetailsState((prev) => {
      const updated = { ...prev, ...details };
      localStorage.setItem(STORAGE_KEYS.BANK, JSON.stringify(updated));
      return updated;
    });
  };

  const updateImpactStat = (id: string, updated: Partial<ImpactStatItem>) => {
    setImpactStatsState((prev) => {
      const modified = prev.map((item) => (item.id === id ? { ...item, ...updated } : item));
      localStorage.setItem(STORAGE_KEYS.IMPACT, JSON.stringify(modified));
      return modified;
    });
  };

  const addImpactStat = (stat: Omit<ImpactStatItem, 'id'>) => {
    setImpactStatsState((prev) => {
      const newStat: ImpactStatItem = {
        ...stat,
        id: `stat-${Date.now()}`,
      };
      const modified = [...prev, newStat];
      localStorage.setItem(STORAGE_KEYS.IMPACT, JSON.stringify(modified));
      return modified;
    });
  };

  const removeImpactStat = (id: string) => {
    setImpactStatsState((prev) => {
      const modified = prev.filter((item) => item.id !== id);
      localStorage.setItem(STORAGE_KEYS.IMPACT, JSON.stringify(modified));
      return modified;
    });
  };

  const resetImpactStats = () => {
    localStorage.removeItem(STORAGE_KEYS.IMPACT);
    setImpactStatsState(DEFAULT_IMPACT_STATS);
  };

  const resetAllPhotosToDefault = () => {
    localStorage.removeItem(STORAGE_KEYS.TAHIR_PHOTO);
    localStorage.removeItem(STORAGE_KEYS.HERO_PHOTO);
    localStorage.removeItem(STORAGE_KEYS.LOGO_PHOTO);
    localStorage.removeItem(STORAGE_KEYS.GALLERY);
    localStorage.removeItem(STORAGE_KEYS.IMPACT);
    setTahirPhotoState(null);
    setHeroPhotoState(null);
    setLogoState(null);
    setGalleryItemsState(INITIAL_GALLERY_ITEMS);
    setImpactStatsState(DEFAULT_IMPACT_STATS);
  };

  const openAdminModalForSlot = (slotId: string | null) => {
    setAdminTargetSlot(slotId);
    setIsAdminModalOpen(true);
  };

  return (
    <ImageContext.Provider
      value={{
        tahirAnthonyPhoto,
        heroPhoto,
        organizationLogo,
        galleryItems,
        bankDetails,
        updateBankDetails,
        impactStats,
        updateImpactStat,
        addImpactStat,
        removeImpactStat,
        resetImpactStats,
        setTahirAnthonyPhoto,
        setHeroPhoto,
        setOrganizationLogo,
        updateGalleryItemPhoto,
        addGalleryItem,
        removeGalleryItem,
        resetAllPhotosToDefault,
        isAdminModalOpen,
        setIsAdminModalOpen,
        adminTargetSlot,
        openAdminModalForSlot,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
};
