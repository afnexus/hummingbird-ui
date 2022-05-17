//MUI imports
import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

//local imports
import { typography } from './typography';
import { switches } from './switches';
import { icon } from './icon';
import { lightcolorpalette, darkcolorpalette } from './colorpalette';

// Common settings across both light and dark themes
const commonSettings = Object.assign({}, typography, switches, icon);

// Merging light theme palette and common settings
export const lightTheme = createTheme(deepmerge( lightcolorpalette, commonSettings));

// Merging dark theme palette and common settings
export const darkTheme = createTheme(deepmerge( darkcolorpalette, commonSettings));