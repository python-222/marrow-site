/** @type {import('next').NextConfig} */
const config = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/index.html' },
      ],
    };
  },
};
module.exports = config;
