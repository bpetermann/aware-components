import { version } from 'react';

/**
 * Before version 19, react JSX treats empty string "" as truthy for inert prop.
 * */
export const inertValue = Number(version.split('.')[0]) >= 19 ? true : '';
