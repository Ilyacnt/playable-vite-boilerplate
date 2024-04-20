import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import zipPack from 'vite-plugin-zip-pack'
import path from 'node:path'

const currentDir = path.basename(process.cwd())

export default defineConfig({
    plugins: [viteSingleFile(), zipPack({ outDir: 'dist', outFileName: `${currentDir}.zip` })],
})
