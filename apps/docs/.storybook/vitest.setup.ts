import { setProjectAnnotations } from '@storybook/react';
import * as a11yAnnotations from '@storybook/addon-a11y/preview';
import * as previewAnnotations from './preview.tsx';

setProjectAnnotations([a11yAnnotations, previewAnnotations]);
