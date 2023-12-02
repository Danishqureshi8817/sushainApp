import images from '../assets/images';

declare const global: {
  settingData: {
    data: {
      generalSettings: {
        img_path_s3: string;
        img_s3_new_path: string;
      };
    }[];
  };
};

export const BASE_IMAGE_PATH =
  global?.settingData?.data[0]?.generalSettings?.img_path_s3 ?? '';

export const BASE_IMG_NEW_PATH =
  global?.settingData?.data[0]?.generalSettings?.img_s3_new_path ?? '';

export const shopByategoryData = [
  {
    id: 1,
    title: 'Ayurvedic Products',
    image: images.ayurvedicProduct,
  },
  {
    id: 2,
    title: 'Personal Care',
    image: images.personalCare,
  },
  {
    id: 3,
    title: 'Homeopathic Products',
    image: images.homeopathicProducts,
  },
  {
    id: 4,
    title: 'Immunity & Wellness',
    image: images.immunityWellness,
  },
];

export const genderData = [
  {label: 'Male', value: 'Male'},
  {label: 'Female', value: 'Female'},
  {label: 'Other', value: 'Other'},
];

export const healthIssuesData = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
]

export const languageData = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
]

export const sampleData = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];
