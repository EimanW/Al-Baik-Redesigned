export interface Branch {
  id: string;
  city: 'jeddah' | 'makkah' | 'madinah' | 'riyadh' | 'dammam';
  nameEn: string;
  nameAr: string;
  areaEn: string;
  areaAr: string;
  hours: string;
  dineIn: boolean;
  driveThru: boolean;
  family: boolean;
}

export const cities = ['jeddah', 'makkah', 'madinah', 'riyadh', 'dammam'] as const;

export const cityLabels: Record<Branch['city'], { en: string; ar: string }> = {
  jeddah: { en: 'Jeddah', ar: 'جدة' },
  makkah: { en: 'Makkah', ar: 'مكة المكرمة' },
  madinah: { en: 'Madinah', ar: 'المدينة المنورة' },
  riyadh: { en: 'Riyadh', ar: 'الرياض' },
  dammam: { en: 'Dammam', ar: 'الدمام' },
};

export const branches: Branch[] = [
  { id: 'jed-balad', city: 'jeddah', nameEn: 'Al-Balad', nameAr: 'البلد', areaEn: 'Historic Jeddah', areaAr: 'جدة التاريخية', hours: '11:00 – 01:00', dineIn: true, driveThru: false, family: true },
  { id: 'jed-corniche', city: 'jeddah', nameEn: 'Corniche', nameAr: 'الكورنيش', areaEn: 'Jeddah Waterfront', areaAr: 'واجهة جدة البحرية', hours: '11:00 – 02:00', dineIn: true, driveThru: true, family: true },
  { id: 'jed-tahlia', city: 'jeddah', nameEn: 'Tahlia Street', nameAr: 'شارع التحلية', areaEn: 'Al-Andalus District', areaAr: 'حي الأندلس', hours: '11:00 – 01:00', dineIn: true, driveThru: true, family: true },
  { id: 'mak-aziziyah', city: 'makkah', nameEn: 'Al-Aziziyah', nameAr: 'العزيزية', areaEn: 'Near the Haram area', areaAr: 'بالقرب من منطقة الحرم', hours: '10:00 – 02:00', dineIn: true, driveThru: false, family: true },
  { id: 'mak-shawqiyah', city: 'makkah', nameEn: 'Al-Shawqiyah', nameAr: 'الشوقية', areaEn: 'Western Makkah', areaAr: 'غرب مكة', hours: '11:00 – 01:00', dineIn: true, driveThru: true, family: true },
  { id: 'mad-central', city: 'madinah', nameEn: 'Central Area', nameAr: 'المنطقة المركزية', areaEn: 'Near Al-Masjid an-Nabawi', areaAr: 'بالقرب من المسجد النبوي', hours: '10:00 – 02:00', dineIn: true, driveThru: false, family: true },
  { id: 'mad-qiblatain', city: 'madinah', nameEn: 'Qiblatain', nameAr: 'القبلتين', areaEn: 'Western Madinah', areaAr: 'غرب المدينة', hours: '11:00 – 01:00', dineIn: true, driveThru: true, family: true },
  { id: 'riy-olaya', city: 'riyadh', nameEn: 'Olaya', nameAr: 'العليا', areaEn: 'Olaya Street', areaAr: 'شارع العليا', hours: '11:00 – 01:00', dineIn: true, driveThru: true, family: true },
  { id: 'riy-nakheel', city: 'riyadh', nameEn: 'Al-Nakheel', nameAr: 'النخيل', areaEn: 'Northern Riyadh', areaAr: 'شمال الرياض', hours: '11:00 – 01:00', dineIn: true, driveThru: true, family: true },
  { id: 'riy-shifa', city: 'riyadh', nameEn: 'Al-Shifa', nameAr: 'الشفاء', areaEn: 'Southern Riyadh', areaAr: 'جنوب الرياض', hours: '11:00 – 12:00', dineIn: true, driveThru: false, family: true },
  { id: 'dam-corniche', city: 'dammam', nameEn: 'Dammam Corniche', nameAr: 'كورنيش الدمام', areaEn: 'Eastern Province seafront', areaAr: 'واجهة المنطقة الشرقية', hours: '11:00 – 01:00', dineIn: true, driveThru: true, family: true },
  { id: 'dam-faisaliyah', city: 'dammam', nameEn: 'Al-Faisaliyah', nameAr: 'الفيصلية', areaEn: 'Central Dammam', areaAr: 'وسط الدمام', hours: '11:00 – 01:00', dineIn: true, driveThru: true, family: true },
];
