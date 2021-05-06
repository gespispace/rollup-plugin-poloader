import { FilterPattern } from '@rollup/pluginutils';

export interface RollupPoLoaderOptions {
  /**
   * A minimatch pattern, or array of patterns, of files that should be
   * processed by this plugin (if omitted, all files are included by default)
   */
  include?: FilterPattern;
  /**
   * Files that should be excluded, if `include` is otherwise too permissive.
   */
  exclude?: FilterPattern;
  /**
   * Whether to include fuzzy translation in JSON or not. Should be either true or false. Defaults to false.
   */
  fuzzy?: boolean;
  /**
   * If true, returns a JSON string. Otherwise returns a plain Javascript object. Defaults to false.
   */
  stringify?: boolean;
  /**
   * If true, the resulting JSON string will be pretty-printed. Has no effect when stringify is false. Defaults to false
   */
  pretty?: boolean;
  /**
   * Defaults to raw.
   * raw produces a "raw" JSON output
   * jed produces an output that is 100% compatible with Jed >= 1.1.0
   * jedold produces an output that is 100% compatible with Jed < 1.1.0
   * mf produces simple key:value output.
   */
  format?: 'raw' | 'jed' | 'jedold' | 'mf';
  /**
   * The domain the messages will be wrapped inside. Only has effect if format: 'jed'.
   */
  domain?: string;
  /**
   *  If true, for those entries that would be omitted (fuzzy entries without the fuzzy flag) 
   *  and for those that are empty, the msgid will be used as translation in the json file.
   *  If the entry is plural, msgid_plural will be used for msgstr[1].
   *  This means that this option makes sense only for those languages that have nplurals=2.
   */
  fallbackToMsgid?: boolean;
}
