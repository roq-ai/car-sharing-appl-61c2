interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member', 'Car Owner', 'Customer Service Representative'],
  tenantName: 'Team',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage car models',
    'Manage locations',
    'Manage reviews',
    'Manage bookings',
    'Manage cars',
    'Manage users',
    'Manage teams',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/9702a9ff-d688-4dd1-b8f1-db1a6724e73a',
};
