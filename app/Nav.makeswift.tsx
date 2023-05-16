import { ReactRuntime } from '@makeswift/runtime/react';
import { Nav } from './Nav';

ReactRuntime.registerComponent(Nav, {
    type: 'nav',
    label: 'Nav',
    props: {},
  })