//MUI imports
import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

//local imports
import { typography } from './typography';
import { checkbox } from './checkbox';
import { switches } from './switches';
import { lightcolorpalette, darkcolorpalette } from './colorpalette';
import { radiobutton } from './radiobutton';

// Themes overrides for components
const components = { components: Object.assign({}, checkbox, switches, radiobutton) };

// Common settings across both light and dark themes
const commonSettings = Object.assign({}, typography, components);

// Merging light theme palette and common settings
export const lightTheme = createTheme(deepmerge( lightcolorpalette, commonSettings));

// Merging dark theme palette and common settings
export const darkTheme = createTheme(deepmerge( darkcolorpalette, commonSettings));