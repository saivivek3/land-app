export const propertyDetailsConfig = {
  sections: [
    {
      id: 'basic',
      grid: 'grid-cols-2',
      fields: [
        {
          name: 'propertyName',
          label: 'Property Name',
          type: 'text',
          placeholder: 'Premium Property',
          required: true,
          width: 'full',
        },
        {
          name: 'propertySize',
          label: 'Property Size',
          type: 'size-input',
          required: true,
          placeholder: 'sqft',
          options: [
            { value: 'sqft', label: 'sq ft' },
            { value: 'acres', label: 'acres' },
          ],
        },
        {
          name: 'costPerAcre',
          label: 'Property Cost per Acre',
          type: 'text',
          placeholder: '4.2cr',
        },
        {
          name: 'totalCost',
          label: 'Total Property Cost',
          type: 'text',
          placeholder: '4.2cr',
        },
      ],
    },
    {
      id: 'propertyDetails',
      grid: 'grid-cols-2',
      fields: [
        {
          name: 'propertyType',
          label: 'Property Type',
          type: 'select',
          required: true,
          placeholder: 'Agricultural',
          options: [
            { value: 'agricultural', label: 'Agricultural' },
            { value: 'residential', label: 'Residential' },
            { value: 'commercial', label: 'Commercial' },
          ],
        },
        {
          name: 'legalStatus',
          label: 'Property Legal Status',
          type: 'select',
          placeholder: 'Legal',
          options: [
            { value: 'legal', label: 'Legal' },
            { value: 'pending', label: 'Pending' },
          ],
        },
      ],
    },
    {
      id: 'zoning',
      grid: 'grid-cols-2',
      fields: [
        {
          name: 'landZone',
          label: 'Property Land Zone',
          type: 'select',

          placeholder: 'Agricultural',
          options: [
            { value: 'agricultural', label: 'Agricultural' },
            { value: 'residential', label: 'Residential' },
            { value: 'commercial', label: 'Commercial' },
          ],
        },
      ],
    },
  ],
};
export const stepsArr = [
  {
    stepIndex: 0,
    title: 'Land Basic Details',
    subtitle: 'Agricultural or Commercial Lands',
    completed: true,
    active: true,
  },
  {
    stepIndex: 1,
    title: 'Property Details',
    subtitle: 'Step 2',
    active: true,
    completed: false,
  },
  {
    stepIndex: 2,
    title: 'Location Details',
    subtitle: 'Step 3',
    active: false,
    completed: false,
  },
  {
    stepIndex: 3,
    title: 'Land Map',
    subtitle: 'Step 4',
    active: false,
    completed: false,
  },
  {
    stepIndex: 4,
    title: 'Photos',
    subtitle: 'Step 5',
    active: false,
    completed: false,
  },
  {
    stepIndex: 5,
    title: 'Owner Details',
    subtitle: 'Step 6',
    active: false,
    completed: false,
  },
  {
    stepIndex: 6,
    title: 'Documents',
    subtitle: 'Step 7',
    active: false,
    completed: false,
  },
];

export const openSidesOptions = ['01', '02', '03', '04'];

export const LocationDetailsConfig = {
  sections: [
    {
      id: 'basic',
      grid: 'grid-cols-2',
      fields: [
        {
          name: 'villageName',
          label: 'Village',
          type: 'text',
          placeholder: 'Hyderabad',
          required: true,
          width: 'full',
        },
        {
          name: 'mandal',
          label: 'Mandal',
          type: 'select',
          required: true,
          placeholder: 'Mamidipally, Shamshabad',
          options: [
            { value: 'agricultural', label: 'Agricultural' },
            { value: 'residential', label: 'Residential' },
            { value: 'commercial', label: 'Commercial' },
          ],
        },
        {
          name: 'districtName',
          label: 'District ',
          type: 'select',
          required: true,
          placeholder: 'Rangareddy',
          options: [
            { value: 'agricultural', label: 'Agricultural' },
            { value: 'residential', label: 'Residential' },
            { value: 'commercial', label: 'Commercial' },
          ],
        },
        {
          name: 'stateName',
          label: 'State ',
          type: 'select',
          required: true,
          placeholder: 'Telangana',
          options: [
            { value: 'agricultural', label: 'Agricultural' },
            { value: 'residential', label: 'Residential' },
            { value: 'commercial', label: 'Commercial' },
          ],
        },
        {
          name: 'propertySurveyNumber',
          label: 'Property Survey Number',
          type: 'text',
          placeholder: '985/B2',
          required: true,
          width: 'full',
        },
      ],
    },
  ],
};

export const OwnerDetailsConfig = {
  sections: [
    {
      id: 'basic',
      grid: 'grid-cols-2',
      fields: [
        {
          name: 'propertyOwnerName',
          label: 'Property Owner Name',
          type: 'text',
          placeholder: 'Madhusudan Reddy',
          required: true,
          width: 'full',
        },
        {
          name: 'propertyOwnerContact',
          label: 'Property Owner Contact',
          type: 'text',
          required: true,
          placeholder: '98455xxxxx',
          width: 'full',
        },
        {
          name: 'propertyLegalStatus',
          label: 'Property Legal Status',
          type: 'text',
          required: true,
          placeholder: 'Legal',
          width: 'full',
        },
        {
          name: 'propertyType',
          label: 'Property Type ',
          type: 'select',
          required: true,
          placeholder: 'Agricultural',
          options: [
            { value: 'agricultural', label: 'Agricultural' },
            { value: 'residential', label: 'Residential' },
            { value: 'commercial', label: 'Commercial' },
          ],
        },
        {
          name: 'propertyLandZone',
          label: 'Property Land Zone',
          type: 'select',
          required: true,
          placeholder: 'Agricultural',
          options: [
            { value: 'agricultural', label: 'Agricultural' },
            { value: 'residential', label: 'Residential' },
            { value: 'commercial', label: 'Commercial' },
          ],
        },
      ],
    },
  ],
};
