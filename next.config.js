/** @type {import('next').NextConfig} */
const nextConfig = {
    generateBuildId: async () => {
        const buildId = Math.random().toString(36).substring(2, 15)
        console.log({buildId})
        return buildId
    }
}

module.exports = nextConfig
