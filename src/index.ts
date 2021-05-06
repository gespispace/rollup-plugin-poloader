import { Plugin } from 'rollup';
import { createFilter } from '@rollup/pluginutils';
import { dataToEsm } from '@rollup/pluginutils';
import { parse } from 'po2json/index';
import { RollupPoLoaderOptions } from '../types';

export default function po(options: RollupPoLoaderOptions = { format: 'jed', include: '**/*.po'}): Plugin {
  const { include, exclude, ...parseOptions } = options;
  const filter = createFilter(include, exclude);
  return {
    name: 'po-loader',
    transform(source, id) {
      if (!filter(id)) {
        return null;
      }
      const json = parse(source, parseOptions);
      return { code: dataToEsm(json, { indent: '\t' }) };
    },
  };
}