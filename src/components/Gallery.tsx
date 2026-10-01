import React, { useState } from 'react';
import {
  Camera,
  Maximize2,
  X,
  Upload,
  FolderOpen,
  Info,
  Calendar,
  Tag,
  CheckCircle2,
} from 'lucide-react';
import { GALLERY_CATEGORIES, GalleryImageItem } from '../data/organizationData';
import { useImageContext } from '../context/ImageContext';

export const Gallery: React.FC = () => {
  const { galleryItems, openAdminModalForSlot } = useImageContext();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryImageItem | null>(null);

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Documenting Service & Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 font-sans mt-1">
            Our Gallery
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-slate-600 text-base sm:text-lg">
            A glimpse of our organization's activities and community services.
          </p>
        </div>

        {/* Real photo notice banner */}
        <div className="max-w-4xl mx-auto mb-10 p-4 rounded-xl bg-blue-900/5 border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-700">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-blue-950 block">Authentic Activity Photographs</span>
              <span>
                All gallery images represent genuine field activities, medical camps, and community distributions of Tahir Anthony Welfare Organization. No artificial or AI-generated photos are permitted.
              </span>
            </div>
          </div>
          <button
            onClick={() => openAdminModalForSlot(null)}
            className="shrink-0 inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white font-semibold px-4 py-2 rounded-lg transition-colors shadow-xs"
          >
            <Camera className="w-4 h-4 text-amber-300" />
            <span>Manage / Upload Photos</span>
          </button>
        </div>

        {/* Category Filter Tabs (Interactive Segmented Controls) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-1.5 no-scrollbar">
          {GALLERY_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${
                  isActive
                    ? 'bg-blue-950 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-blue-950 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const hasImage = Boolean(item.imageSrc);

            return (
              <div
                key={item.id}
                className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                {/* Photo Display or Neutral Placeholder */}
                <div
                  onClick={() => setActiveLightboxItem(item)}
                  className="relative aspect-[4/3] bg-slate-100 cursor-pointer overflow-hidden flex items-center justify-center"
                >
                  {hasImage ? (
                    <>
                      <img
                        src={item.imageSrc}
                        alt={item.altText || item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white/90 text-blue-950 flex items-center justify-center shadow-lg">
                          <Maximize2 className="w-5 h-5" />
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Neutral Placeholder strictly following instructions */
                    <div className="w-full h-full p-6 bg-gradient-to-b from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-800 mb-3 shadow-xs">
                        <Camera className="w-6 h-6 text-blue-800" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                        Original Photo Coming Soon
                      </span>
                      <p className="text-xs font-bold text-slate-800 mt-1 max-w-[220px]">
                        ORIGINAL ORGANIZATION PHOTO WILL BE ADDED HERE
                      </p>
                      <span className="text-[10px] text-slate-400 mt-2">
                        Click to view details or upload
                      </span>
                    </div>
                  )}

                  {/* Category tag watermark */}
                  <span className="absolute top-3 left-3 bg-blue-950/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                    {item.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-bold text-blue-950 text-base group-hover:text-blue-900 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <button
                      onClick={() => setActiveLightboxItem(item)}
                      className="text-emerald-700 hover:text-emerald-800 font-semibold"
                    >
                      View Photo
                    </button>
                    <button
                      onClick={() => openAdminModalForSlot(item.id)}
                      className="text-slate-500 hover:text-blue-950 flex items-center gap-1 text-[11px]"
                    >
                      <Upload className="w-3 h-3 text-amber-600" />
                      <span>{hasImage ? 'Replace' : 'Upload'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if category has no items */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <Camera className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-700">No photos in this category yet</h4>
            <p className="text-xs text-slate-500 mt-1">
              Photographs for this category can be uploaded by the administrator.
            </p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-4 text-xs font-semibold text-blue-800 hover:underline"
            >
              View All Photos
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setActiveLightboxItem(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                  {activeLightboxItem.category}
                </span>
                <span className="text-xs text-slate-500">Tahir Anthony Welfare Organization</span>
              </div>
              <button
                onClick={() => setActiveLightboxItem(null)}
                className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6">
              {activeLightboxItem.imageSrc ? (
                <div className="rounded-xl overflow-hidden bg-slate-950 max-h-[60vh] flex items-center justify-center">
                  <img
                    src={activeLightboxItem.imageSrc}
                    alt={activeLightboxItem.altText || activeLightboxItem.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[60vh] w-auto object-contain"
                  />
                </div>
              ) : (
                <div className="aspect-[16/9] rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
                  <Camera className="w-12 h-12 text-slate-400 mb-3" />
                  <h4 className="text-base font-bold text-slate-800">
                    ORIGINAL ORGANIZATION PHOTO WILL BE ADDED HERE
                  </h4>
                  <p className="text-xs text-slate-500 mt-2 max-w-md">
                    Photos from our real activities will be added here. Upload the authentic original image file using the button below.
                  </p>
                  <button
                    onClick={() => {
                      const id = activeLightboxItem.id;
                      setActiveLightboxItem(null);
                      openAdminModalForSlot(id);
                    }}
                    className="mt-4 inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold px-4 py-2 rounded-lg"
                  >
                    <Upload className="w-3.5 h-3.5 text-amber-300" />
                    <span>Upload This Photo</span>
                  </button>
                </div>
              )}

              {/* Title & Description */}
              <div className="mt-5">
                <h3 className="text-xl font-bold text-blue-950">
                  {activeLightboxItem.title}
                </h3>
                <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                  {activeLightboxItem.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                  <span>Photo category: {activeLightboxItem.category}</span>
                  <button
                    onClick={() => {
                      const id = activeLightboxItem.id;
                      setActiveLightboxItem(null);
                      openAdminModalForSlot(id);
                    }}
                    className="text-blue-900 hover:underline font-semibold flex items-center gap-1"
                  >
                    <Upload className="w-3.5 h-3.5 text-amber-600" />
                    <span>Upload / Replace this image file</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
