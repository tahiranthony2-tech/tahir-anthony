import React, { useState, useRef } from 'react';
import {
  X,
  Upload,
  Camera,
  Image as ImageIcon,
  Check,
  RotateCcw,
  FolderOpen,
  Plus,
  Trash2,
  AlertCircle,
  FileCode,
  TrendingUp,
  Hash,
  CheckCircle2,
  Clock,
  Utensils,
  Stethoscope,
  HeartHandshake,
  Users,
  GraduationCap,
  Award,
  Building,
  Mail,
  Copy,
} from 'lucide-react';
import { useImageContext } from '../context/ImageContext';
import { GALLERY_CATEGORIES, GalleryImageItem, ImpactStatItem } from '../data/organizationData';

export const AdminPhotoModal: React.FC = () => {
  const {
    isAdminModalOpen,
    setIsAdminModalOpen,
    adminTargetSlot,
    tahirAnthonyPhoto,
    setTahirAnthonyPhoto,
    heroPhoto,
    setHeroPhoto,
    organizationLogo,
    setOrganizationLogo,
    galleryItems,
    updateGalleryItemPhoto,
    addGalleryItem,
    removeGalleryItem,
    impactStats,
    updateImpactStat,
    addImpactStat,
    removeImpactStat,
    resetImpactStats,
    resetAllPhotosToDefault,
  } = useImageContext();

  const [activeTab, setActiveTab] = useState<'tahir' | 'hero' | 'logo' | 'gallery' | 'impact' | 'newsletter' | 'developer'>(
    adminTargetSlot === 'hero'
      ? 'hero'
      : adminTargetSlot === 'tahir'
      ? 'tahir'
      : adminTargetSlot === 'logo'
      ? 'logo'
      : adminTargetSlot === 'impact'
      ? 'impact'
      : 'gallery'
  );

  const [subscribers, setSubscribers] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('tawo_newsletter_subscribers');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const refreshSubscribers = () => {
    try {
      const stored = localStorage.getItem('tawo_newsletter_subscribers');
      setSubscribers(stored ? JSON.parse(stored) : []);
    } catch {
      setSubscribers([]);
    }
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [currentGalleryTargetId, setCurrentGalleryTargetId] = useState<string | null>(
    adminTargetSlot &&
      adminTargetSlot !== 'hero' &&
      adminTargetSlot !== 'tahir' &&
      adminTargetSlot !== 'logo' &&
      adminTargetSlot !== 'impact'
      ? adminTargetSlot
      : null
  );

  // New gallery item state
  const [newItem, setNewItem] = useState({
    title: '',
    category: 'Medical Camps' as string,
    description: '',
    altText: '',
  });

  // New impact stat state
  const [newStat, setNewStat] = useState({
    label: '',
    value: 1000,
    suffix: '+',
    prefix: '',
    description: '',
    iconName: 'HeartHandshake',
  });
  const [saveToast, setSaveToast] = useState<string | null>(null);

  const triggerSaveNotification = (msg: string) => {
    setSaveToast(msg);
    setTimeout(() => setSaveToast(null), 2000);
  };

  if (!isAdminModalOpen) return null;

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    destination: 'tahir' | 'hero' | 'logo' | 'gallery-target' | 'gallery-new'
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Read as Base64 data URL for instant live preview and LocalStorage persistence
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (!dataUrl) return;

      if (destination === 'tahir') {
        setTahirAnthonyPhoto(dataUrl);
      } else if (destination === 'hero') {
        setHeroPhoto(dataUrl);
      } else if (destination === 'logo') {
        setOrganizationLogo(dataUrl);
      } else if (destination === 'gallery-target' && currentGalleryTargetId) {
        updateGalleryItemPhoto(currentGalleryTargetId, dataUrl);
      } else if (destination === 'gallery-new') {
        addGalleryItem({
          title: newItem.title || file.name.replace(/\.[^/.]+$/, ''),
          category: newItem.category,
          description: newItem.description || 'Authentic community activity of Tahir Anthony Welfare Organization.',
          altText: newItem.altText || newItem.title,
          imageSrc: dataUrl,
          defaultPath: `/images/gallery/${file.name}`,
        });
        setNewItem({ title: '', category: 'Medical Camps', description: '', altText: '' });
      }
    };
    reader.readAsDataURL(file);
    e.target.value = ''; // Reset input
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-150"
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-blue-900 text-white flex items-center justify-center">
              <Camera className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-blue-950">
                Official Photo & Asset Manager
              </h3>
              <p className="text-xs text-slate-500">
                Manage authentic photographs for Tahir Anthony Welfare Organization
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsAdminModalOpen(false)}
            className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs Bar */}
        <div className="flex items-center gap-1 border-b border-slate-200 px-4 pt-2 bg-white overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('tahir')}
            className={`px-3 py-2 text-xs font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'tahir'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-slate-600 hover:text-blue-950'
            }`}
          >
            Tahir Anthony's Photo
          </button>
          <button
            onClick={() => setActiveTab('hero')}
            className={`px-3 py-2 text-xs font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'hero'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-slate-600 hover:text-blue-950'
            }`}
          >
            Hero Banner Photo
          </button>
          <button
            onClick={() => setActiveTab('logo')}
            className={`px-3 py-2 text-xs font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'logo'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-slate-600 hover:text-blue-950'
            }`}
          >
            Organization Logo
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-3 py-2 text-xs font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'gallery'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-slate-600 hover:text-blue-950'
            }`}
          >
            Gallery Items ({galleryItems.length})
          </button>
          <button
            onClick={() => setActiveTab('impact')}
            className={`px-3 py-2 text-xs font-bold border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'impact'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-slate-600 hover:text-blue-950'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Impact Figures ({impactStats.length})</span>
          </button>
          <button
            onClick={() => {
              refreshSubscribers();
              setActiveTab('newsletter');
            }}
            className={`px-3 py-2 text-xs font-bold border-b-2 whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeTab === 'newsletter'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-slate-600 hover:text-blue-950'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Subscribers ({subscribers.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('developer')}
            className={`px-3 py-2 text-xs font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'developer'
                ? 'border-blue-900 text-blue-900'
                : 'border-transparent text-slate-600 hover:text-blue-950'
            }`}
          >
            Static Files Guide
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          
          {/* TAB 1: Tahir Anthony's Photo */}
          {activeTab === 'tahir' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-950">
                <strong>Requirement:</strong> Tahir Anthony's photo must be a real photograph. AI or synthetic generated portraits are strictly prohibited.
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-48 aspect-[3/4] bg-slate-100 rounded-xl overflow-hidden border-2 border-slate-300 flex items-center justify-center shrink-0">
                  {tahirAnthonyPhoto ? (
                    <img
                      src={tahirAnthonyPhoto}
                      alt="Tahir Anthony Preview"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center p-4">
                      <Camera className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                      <span className="text-[11px] font-bold text-slate-600 uppercase">
                        No Photo Loaded
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-3 flex-1 text-xs">
                  <h4 className="text-sm font-bold text-slate-800">
                    Upload Original Portrait of Tahir Anthony
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Upload the original photograph (e.g. <code>Tahir Anthony Picture.jpg</code>) from your computer. It will immediately appear in the About Us section and persist across page views.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <label className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2.5 px-4 rounded-lg cursor-pointer transition-colors shadow-xs">
                      <Upload className="w-4 h-4 text-amber-300" />
                      <span>Choose File to Upload</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, 'tahir')}
                      />
                    </label>

                    {tahirAnthonyPhoto && (
                      <button
                        onClick={() => setTahirAnthonyPhoto(null)}
                        className="inline-flex items-center gap-1.5 text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 font-semibold py-2 px-3 rounded-lg transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Revert to Placeholder</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Hero Banner Photo */}
          {activeTab === 'hero' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-950">
                <strong>Hero Section Photo:</strong> Display authentic field activity of the organization in Lahore.
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-56 aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden border-2 border-slate-300 flex items-center justify-center shrink-0">
                  {heroPhoto ? (
                    <img
                      src={heroPhoto}
                      alt="Hero Photo Preview"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center p-4">
                      <Camera className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                      <span className="text-[11px] font-bold text-slate-600 uppercase">
                        Placeholder Active
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-3 flex-1 text-xs">
                  <h4 className="text-sm font-bold text-slate-800">
                    Upload Original Hero Photograph
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Select a photograph of a medical camp, food distribution, or organization relief activity.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <label className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2.5 px-4 rounded-lg cursor-pointer transition-colors shadow-xs">
                      <Upload className="w-4 h-4 text-amber-300" />
                      <span>Choose File to Upload</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, 'hero')}
                      />
                    </label>

                    {heroPhoto && (
                      <button
                        onClick={() => setHeroPhoto(null)}
                        className="inline-flex items-center gap-1.5 text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 font-semibold py-2 px-3 rounded-lg transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Revert to Placeholder</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Organization Logo */}
          {activeTab === 'logo' && (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-950">
                <strong>Organization Logo:</strong> By default, an accurate SVG seal with the white peace dove and clasping hands is displayed. You can also upload your exact <code>tahir anthony logo.JPG</code> file here.
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-36 h-36 bg-slate-100 rounded-full overflow-hidden border-2 border-slate-300 flex items-center justify-center shrink-0 p-2">
                  {organizationLogo ? (
                    <img
                      src={organizationLogo}
                      alt="Logo Preview"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <div className="text-center p-2">
                      <span className="text-xs font-bold text-blue-950">Vector Emblem Active</span>
                    </div>
                  )}
                </div>

                <div className="space-y-3 flex-1 text-xs">
                  <h4 className="text-sm font-bold text-slate-800">
                    Upload Custom Logo Image
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Upload the circular emblem of Tahir Anthony Welfare Organization to replace the vector logo across the header and footer.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <label className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white font-bold py-2.5 px-4 rounded-lg cursor-pointer transition-colors shadow-xs">
                      <Upload className="w-4 h-4 text-amber-300" />
                      <span>Upload Logo Image</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, 'logo')}
                      />
                    </label>

                    {organizationLogo && (
                      <button
                        onClick={() => setOrganizationLogo(null)}
                        className="inline-flex items-center gap-1.5 text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 font-semibold py-2 px-3 rounded-lg transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Revert to Official Emblem</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Gallery Items Management */}
          {activeTab === 'gallery' && (
            <div className="space-y-8">
              {/* Add New Gallery Item Section */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                <h4 className="font-bold text-blue-950 text-sm mb-3 flex items-center gap-2">
                  <Plus className="w-4 h-4 text-emerald-600" />
                  <span>Add New Original Photo to Gallery</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Photo Title:</label>
                    <input
                      type="text"
                      placeholder="e.g. Free Medical Camp In Sabzazar"
                      value={newItem.title}
                      onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                      className="w-full px-3 py-2 rounded border bg-white"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Category:</label>
                    <select
                      value={newItem.category}
                      onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                      className="w-full px-3 py-2 rounded border bg-white"
                    >
                      {GALLERY_CATEGORIES.filter((c) => c !== 'All').map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-3 text-xs">
                  <label className="font-semibold text-slate-700 block mb-1">Description:</label>
                  <input
                    type="text"
                    placeholder="Brief description of the humanitarian activity..."
                    value={newItem.description}
                    onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                    className="w-full px-3 py-2 rounded border bg-white"
                  />
                </div>

                <label className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-4 rounded-lg cursor-pointer transition-colors shadow-xs">
                  <Upload className="w-4 h-4 text-emerald-100" />
                  <span>Select Image & Add to Gallery</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileUpload(e, 'gallery-new')}
                  />
                </label>
              </div>

              {/* Existing Gallery Items Table */}
              <div>
                <h4 className="font-bold text-blue-950 text-sm mb-3">
                  Existing Gallery Slots & Photos ({galleryItems.length})
                </h4>

                <div className="space-y-3">
                  {galleryItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-colors text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-12 rounded bg-slate-100 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center">
                          {item.imageSrc ? (
                            <img
                              src={item.imageSrc}
                              alt={item.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <Camera className="w-5 h-5 text-slate-400" />
                          )}
                        </div>
                        <div>
                          <span className="font-bold text-slate-900 block">{item.title}</span>
                          <span className="text-[11px] text-emerald-700 font-semibold">{item.category}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                        <label
                          onClick={() => setCurrentGalleryTargetId(item.id)}
                          className="inline-flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-900 font-semibold px-3 py-1.5 rounded-lg border border-blue-200 cursor-pointer"
                        >
                          <Upload className="w-3.5 h-3.5 text-blue-800" />
                          <span>{item.imageSrc ? 'Replace' : 'Upload'}</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleFileUpload(e, 'gallery-target')}
                          />
                        </label>

                        {item.imageSrc && (
                          <button
                            onClick={() => updateGalleryItemPhoto(item.id, '')}
                            className="text-slate-500 hover:text-slate-700 p-1.5"
                            title="Reset to neutral placeholder"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                          </button>
                        )}

                        <button
                          onClick={() => removeGalleryItem(item.id)}
                          className="text-rose-600 hover:text-rose-800 p-1.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB: Dynamic Impact Figures Configuration */}
          {activeTab === 'impact' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <strong className="block font-bold text-sm mb-0.5">Homepage Impact Figures Configuration</strong>
                  <p className="text-slate-600">
                    Customize the real-time figures (e.g., Volunteer Hours, Meals Provided, Medical Consultations) shown on the homepage animated counters.
                  </p>
                </div>
                {saveToast && (
                  <div className="shrink-0 flex items-center gap-1.5 bg-emerald-600 text-white font-bold px-3 py-1.5 rounded-lg text-xs animate-in fade-in">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{saveToast}</span>
                  </div>
                )}
              </div>

              {/* Existing Impact Stats List */}
              <div className="space-y-4">
                <h4 className="font-bold text-blue-950 text-sm flex items-center gap-2">
                  <Hash className="w-4 h-4 text-emerald-600" />
                  <span>Configured Impact Metrics ({impactStats.length})</span>
                </h4>

                <div className="grid grid-cols-1 gap-4">
                  {impactStats.map((stat) => (
                    <div
                      key={stat.id}
                      className="p-4 bg-slate-50 border border-slate-200 hover:border-emerald-300 rounded-xl transition-colors space-y-3"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 text-xs">
                        <div className="sm:col-span-5">
                          <label className="font-bold text-slate-700 block mb-1">Metric Title / Label:</label>
                          <input
                            type="text"
                            value={stat.label}
                            onChange={(e) => {
                              updateImpactStat(stat.id, { label: e.target.value });
                              triggerSaveNotification('Metric updated');
                            }}
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 bg-white font-semibold text-slate-900"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label className="font-bold text-slate-700 block mb-1">Numerical Count:</label>
                          <input
                            type="number"
                            value={stat.value}
                            onChange={(e) => {
                              const val = parseInt(e.target.value, 10);
                              updateImpactStat(stat.id, { value: isNaN(val) ? 0 : val });
                              triggerSaveNotification('Value updated');
                            }}
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 bg-white font-mono font-bold text-blue-950"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="font-bold text-slate-700 block mb-1">Suffix (e.g. +):</label>
                          <input
                            type="text"
                            value={stat.suffix || ''}
                            onChange={(e) => {
                              updateImpactStat(stat.id, { suffix: e.target.value });
                              triggerSaveNotification('Suffix updated');
                            }}
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 bg-white font-bold text-amber-600"
                            placeholder="+"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="font-bold text-slate-700 block mb-1">Icon:</label>
                          <select
                            value={stat.iconName}
                            onChange={(e) => {
                              updateImpactStat(stat.id, { iconName: e.target.value });
                              triggerSaveNotification('Icon updated');
                            }}
                            className="w-full px-2 py-1.5 rounded-lg border border-slate-300 bg-white"
                          >
                            <option value="Clock">Clock (Hours)</option>
                            <option value="Utensils">Utensils (Meals)</option>
                            <option value="Stethoscope">Stethoscope (Medical)</option>
                            <option value="HeartHandshake">Handshake (Families)</option>
                            <option value="Users">Users (Community)</option>
                            <option value="GraduationCap">Cap (Education)</option>
                            <option value="Award">Award (Milestone)</option>
                            <option value="Building">Building (Centers)</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center gap-3 text-xs">
                        <div className="flex-1 w-full">
                          <input
                            type="text"
                            value={stat.description}
                            placeholder="Brief description for public display..."
                            onChange={(e) => {
                              updateImpactStat(stat.id, { description: e.target.value });
                              triggerSaveNotification('Description updated');
                            }}
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 text-xs"
                          />
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            removeImpactStat(stat.id);
                            triggerSaveNotification('Metric removed');
                          }}
                          className="text-rose-600 hover:text-rose-800 p-1.5 hover:bg-rose-50 rounded-lg flex items-center gap-1 font-semibold text-xs shrink-0"
                          title="Remove this metric"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add New Impact Metric Box */}
              <div className="p-4 sm:p-5 bg-emerald-50/50 border border-emerald-200 rounded-xl space-y-3">
                <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-2">
                  <Plus className="w-4 h-4 text-emerald-700" />
                  <span>Add New Impact Metric</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 text-xs">
                  <div className="sm:col-span-5">
                    <label className="font-bold text-slate-700 block mb-1">Metric Title:</label>
                    <input
                      type="text"
                      placeholder="e.g. Free Eye Checkups"
                      value={newStat.label}
                      onChange={(e) => setNewStat({ ...newStat, label: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border bg-white"
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label className="font-bold text-slate-700 block mb-1">Target Figure:</label>
                    <input
                      type="number"
                      placeholder="e.g. 5000"
                      value={newStat.value}
                      onChange={(e) => setNewStat({ ...newStat, value: parseInt(e.target.value, 10) || 0 })}
                      className="w-full px-3 py-2 rounded-lg border bg-white font-mono"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="font-bold text-slate-700 block mb-1">Suffix:</label>
                    <input
                      type="text"
                      placeholder="+"
                      value={newStat.suffix}
                      onChange={(e) => setNewStat({ ...newStat, suffix: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border bg-white"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="font-bold text-slate-700 block mb-1">Icon:</label>
                    <select
                      value={newStat.iconName}
                      onChange={(e) => setNewStat({ ...newStat, iconName: e.target.value })}
                      className="w-full px-2 py-2 rounded-lg border bg-white"
                    >
                      <option value="HeartHandshake">Handshake</option>
                      <option value="Clock">Clock</option>
                      <option value="Utensils">Utensils</option>
                      <option value="Stethoscope">Stethoscope</option>
                      <option value="Users">Users</option>
                      <option value="GraduationCap">Cap</option>
                      <option value="Award">Award</option>
                      <option value="Building">Building</option>
                    </select>
                  </div>
                </div>

                <div className="text-xs">
                  <label className="font-bold text-slate-700 block mb-1">Short Description:</label>
                  <input
                    type="text"
                    placeholder="e.g. Free eye screenings and spectacles distributed across Lahore"
                    value={newStat.description}
                    onChange={(e) => setNewStat({ ...newStat, description: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border bg-white"
                  />
                </div>

                <div className="pt-1 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      if (!newStat.label.trim()) {
                        alert('Please enter a metric label');
                        return;
                      }
                      addImpactStat(newStat);
                      setNewStat({
                        label: '',
                        value: 1000,
                        suffix: '+',
                        prefix: '',
                        description: '',
                        iconName: 'HeartHandshake',
                      });
                      triggerSaveNotification('New metric added to homepage');
                    }}
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-4 rounded-lg shadow-xs transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add to Homepage Counters</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm('Reset all impact statistics to default verified figures?')) {
                        resetImpactStats();
                        triggerSaveNotification('Reset to defaults');
                      }
                    }}
                    className="text-slate-500 hover:text-slate-700 flex items-center gap-1.5 text-xs font-semibold"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset to Defaults</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB: Newsletter Subscribers */}
          {activeTab === 'newsletter' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <strong className="block font-bold text-sm mb-0.5">Captured Email Subscribers ({subscribers.length})</strong>
                  <p className="text-slate-600">
                    Emails collected through the "Join Our Newsletter" form in the footer.
                  </p>
                </div>
                {subscribers.length > 0 && (
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(subscribers.join('\n'));
                      triggerSaveNotification('All emails copied!');
                    }}
                    className="inline-flex items-center gap-1.5 bg-blue-900 hover:bg-blue-950 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-colors shrink-0"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy All Emails</span>
                  </button>
                )}
              </div>

              {subscribers.length > 0 ? (
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                  <div className="p-3 bg-slate-50 border-b border-slate-200 font-bold text-xs text-slate-700 flex justify-between items-center">
                    <span>Subscriber Email Address</span>
                    <span>Action</span>
                  </div>
                  <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
                    {subscribers.map((email, idx) => (
                      <div key={idx} className="p-3 flex items-center justify-between text-xs hover:bg-slate-50 transition-colors">
                        <span className="font-mono text-slate-800">{email}</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(email);
                              triggerSaveNotification('Email copied');
                            }}
                            className="text-slate-500 hover:text-blue-950 p-1"
                            title="Copy email"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              const updated = subscribers.filter((_, i) => i !== idx);
                              setSubscribers(updated);
                              localStorage.setItem('tawo_newsletter_subscribers', JSON.stringify(updated));
                              triggerSaveNotification('Subscriber removed');
                            }}
                            className="text-rose-600 hover:text-rose-800 p-1"
                            title="Remove subscriber"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-xl">
                  <Mail className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                  <h4 className="text-sm font-bold text-slate-800">No Newsletter Subscribers Yet</h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                    When visitors submit their email in the footer "Join Our Newsletter" form, they will appear here.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 5: Static Files Guide for Developers */}
          {activeTab === 'developer' && (
            <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950">
                <h4 className="font-bold text-sm mb-1 flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-blue-900" />
                  <span>Permanent Static Image Location Guide</span>
                </h4>
                <p>
                  As specified in the technical requirements, the website developer can place original photo files in the repository directory:
                </p>
              </div>

              <div className="p-4 bg-slate-900 text-slate-200 rounded-xl font-mono text-[11px] overflow-x-auto space-y-1">
                <div className="text-amber-400"># Permanent static image folder structure:</div>
                <div>/public/images/tahir-anthony.jpg</div>
                <div>/public/images/hero.jpg</div>
                <div>/public/images/logo.png</div>
                <div>/public/images/gallery/photo-01.jpg</div>
                <div>/public/images/gallery/photo-02.jpg</div>
                <div>/public/images/gallery/photo-03.jpg</div>
              </div>

              <p>
                Any image placed in <code>public/images/...</code> can be mapped directly to <code>defaultPath</code> in <code>src/data/organizationData.ts</code>.
              </p>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-slate-500">Need to restore original default state?</span>
                <button
                  onClick={() => {
                    if (window.confirm('Reset all uploaded photos to default placeholders?')) {
                      resetAllPhotosToDefault();
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-rose-700 hover:text-rose-800 font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All to Default Placeholders</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
          <span className="text-slate-500">
            Real photos remain saved in your browser storage.
          </span>
          <button
            onClick={() => setIsAdminModalOpen(false)}
            className="bg-blue-950 hover:bg-blue-900 text-white font-bold py-2 px-5 rounded-lg transition-colors"
          >
            Close & View Website
          </button>
        </div>

      </div>
    </div>
  );
};
