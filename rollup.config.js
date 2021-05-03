import resolve from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import { string } from "rollup-plugin-string";

const dist ='dist';
const bundle = 'SAD';
const production = !process.env.ROLLUP_WATCH
const common = {
    input: 'src/index.js',
    plugins: [
        resolve(),
        string({
          include: '**/*.css'
        }),
        production && terser()
      ]
}
const outputs = [
    {
        file: `${dist}/${bundle}.cjs.js`,
        format: 'cjs'
    },
    {
        file: `${dist}/${bundle}.esm.js`,
        format: 'esm'
    },
    {
        name:'SAD',
        file: `${dist}/${bundle}.umd.js`,
        format: 'umd'
    },
]

export default outputs.map((output)=>(
    {...common, output}
));