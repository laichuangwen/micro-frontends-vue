import Env from '@support/front-env';

export default (app, option) => {
    const { env } = option;
    Env(app, {
        env,
    });
};
