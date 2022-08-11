import CommerceSDK from '@chec/commerce.js';

const client = new CommerceSDK(process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY);

client.categories.retrieve('cat_ypbroEM17o8n4e').then((category) => console.log(category.name));

export default client;
