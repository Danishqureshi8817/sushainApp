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

export const medicineBestSellingData = [
  {
    id: 1,
    title: 'Amlant Tablet Maharishi Ayurveda',
    image: images.bestSelling1,
    price:'30'
  },
  {
    id: 2,
    title: 'Trailokya Vijaya Vati By Hempstreet',
    image: images.bestSelling2,
    price:'180'
  },
  {
    id: 3,
    title: 'Trailokya Vijaya Vati By Hempstreet',
    image: images.bestSelling2,
    price:'180'
  },
  // {
  //   id: 3,
  //   title: 'Homeopathic Products',
  //   image: images.homeopathicProducts,
  // },
  // {
  //   id: 4,
  //   title: 'Immunity & Wellness',
  //   image: images.immunityWellness,
  // },
];

export const saveBigData = [
  {
    id: 1,
    title: 'Get The Glow Combo',
    image: images.saveBig1,
    price:'1,197'
  },
  {
    id: 2,
    title: 'Golden Radiance Combo',
    image: images.saveBig2,
    price:'1,098'
  },
  {
    id: 3,
    title: 'Golden Radiance Combo',
    image: images.saveBig2,
    price:'1,098'
  },
  
];

export const sushainProductData = [
  {
    id: 1,
    title: 'Giloy Extract Cap 500 Mg',
    image: images.sushainPr1,
    price:'165'
  },
  {
    id: 2,
    title: 'Triphala Extract Cap 500 Mg',
    image: images.sushainPr2,
    price:'165'
  },
  {
    id: 3,
    title: 'Triphala Extract Cap 500 Mg',
    image: images.sushainPr2,
    price:'165'
  },
  
];

export const medicinesConcernsData = [
  {
    id: 1,
    title: 'Digestive',
    image: images.ayurvedicProduct,
  },
  {
    id: 2,
    title: 'Gynaecology & Fertility',
    image: images.personalCare,
  },
  {
    id: 3,
    title: 'Diabetes',
    image: images.homeopathicProducts,
  },
  {
    id: 4,
    title: 'Eyes',
    image: images.immunityWellness,
  },
  {
    id: 5,
    title: 'Reproductive',
    image: images.homeopathicProducts,
  },
  {
    id: 6,
    title: 'Piles',
    image: images.immunityWellness,
  },
  {
    id: 7,
    title: 'Neuro',
    image: images.homeopathicProducts,
  },
  {
    id: 8,
    title: 'Ear, Nose & Throat',
    image: images.immunityWellness,
  },
  {
    id: 9,
    title: 'Liver & Kidney',
    image: images.homeopathicProducts,
  },
  {
    id: 10,
    title: 'Bones & Joints',
    image: images.immunityWellness,
  },
  {
    id: 11,
    title: 'Skin Care',
    image: images.homeopathicProducts,
  },
  {
    id: 12,
    title: 'Heart & Lungs',
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


export const cityData = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

