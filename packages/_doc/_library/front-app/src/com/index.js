import '@support/front-reset-css';
import './doc.scss';

export default async ({ Vue }) => {
    const { default: ui } = await import('./ui');
    const { default: com } = await import('./com');
    const { default: element } = await import('./element');
    Vue.use(ui);
    Vue.use(com);
    Vue.use(element);
};
