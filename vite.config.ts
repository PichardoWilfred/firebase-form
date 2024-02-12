import { defineConfig, loadEnv } from 'vite'

const environment_variables = [
    "SOME_KEY_IN_YOUR_ENV_FILE",
    "SOME_OTHER_KEY_IN_YOUR_ENV_FILE",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    const processEnv = {};
    environment_variables.forEach(key => processEnv[key] = env[key]);

    return {
        define: {
        'process.env': processEnv
        },
    }
})