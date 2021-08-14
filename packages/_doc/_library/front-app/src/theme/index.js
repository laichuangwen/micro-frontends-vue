// import { version } from 'element-ui/package.json';
import Theme from '@support/front-theme';

export default async ({ Vue }) => {
    const theme = localStorage.getItem('theme');
    Vue.$ctx.theme = new Theme({ color: theme || '#11a983' });
};
