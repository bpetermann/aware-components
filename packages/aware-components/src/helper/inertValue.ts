import { version } from 'react';

/**
 * An empty string "" is truthy for inert prop, before react version 19
 * @see {@link https://github.com/facebook/react/issues/17157}
 * */
export const inertValue = Number(version.split('.')[0]) >= 19 ? true : '';
