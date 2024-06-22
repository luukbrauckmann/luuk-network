import { Plugin } from 'vite';

declare module 'vituum' {
  export default function vituum(): Plugin;
}