//MUI imports
import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

//local imports
import { typography } from './typography';
import { checkbox } from './checkbox';
import { switches } from './switches';
import { lightcolorpalette, darkcolorpalette } from './colorpalette';
import { radiobutton } from './radiobutton';

// Common settings across both light and dark themes
const commonSettings = Object.assign({}, typography, switches, checkbox, radiobutton);

// Merging light theme palette and common settings
export const lightTheme = createTheme(deepmerge( lightcolorpalette, commonSettings));

// Merging dark theme palette and common settings
export const darkTheme = createTheme(deepmerge( darkcolorpalette, commonSettings));