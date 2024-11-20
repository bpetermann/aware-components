import { useContext } from 'react';
import { ListContext } from './provider';

export const useList = () => useContext(ListContext);
