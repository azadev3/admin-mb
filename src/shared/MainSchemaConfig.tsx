import type { FieldDefinition } from './form/FormField';

export const MainSeoSchema: FieldDefinition[] = [
  {
    label: 'Şəkil Başlığı (AZ)',
    name: 'ImageTitleAz',
    placeholder: 'SEO Üçün Şəkil Başlığı... (az)',
    type: 'text',
  },
  {
    label: 'Şəkil Başlığı (EN)',
    name: 'ImageTitleEn',
    placeholder: 'SEO Üçün Şəkil Başlığı... (en)',
    type: 'text',
  },
  {
    label: 'Şəkil ALT (AZ)',
    name: 'ImageAltAz',
    type: 'text',
  },
  {
    label: 'Şəkil ALT (EN)',
    name: 'ImageAltEn',
    type: 'text',
  },
  {
    label: 'Meta Başlıq (AZ)',
    name: 'MetaTitleAz',
    type: 'text',
  },
  {
    label: 'Meta Başlıq (EN)',
    name: 'MetaTitleEn',
    type: 'text',
  },
  {
    label: 'Meta Açıqlama (AZ)',
    name: 'MetaDescriptionAz',
    type: 'text',
  },
  {
    label: 'Meta Açıqlama (EN)',
    name: 'MetaDescriptionEn',
    type: 'text',
  },
  {
    label: 'Meta Açar Söz (AZ)',
    name: 'MetaKeywordAz',
    type: 'text',
  },
  {
    label: 'Meta Açar Söz (EN)',
    name: 'MetaKeywordEn',
    type: 'text',
  },
];

export const MainSeoSchemaOnlyMeta: FieldDefinition[] = [
  {
    label: 'Meta Başlıq (AZ)',
    name: 'MetaTitleAz',
    type: 'text',
  },
  {
    label: 'Meta Başlıq (EN)',
    name: 'MetaTitleEn',
    type: 'text',
  },
  {
    label: 'Meta Açıqlama (AZ)',
    name: 'MetaDescriptionAz',
    type: 'text',
  },
  {
    label: 'Meta Açıqlama (EN)',
    name: 'MetaDescriptionEn',
    type: 'text',
  },
  {
    label: 'Meta Açar Söz (AZ)',
    name: 'MetaKeywordAz',
    type: 'text',
  },
  {
    label: 'Meta Açar Söz (EN)',
    name: 'MetaKeywordEn',
    type: 'text',
  },
];
