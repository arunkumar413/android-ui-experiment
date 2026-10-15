import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/').pop()
const base =
  process.env.GITHUB_ACTIONS === 'true' &&
  repositoryName &&
  !repositoryName.endsWith('.github.io')
    ? `/${repositoryName}/`
    : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
