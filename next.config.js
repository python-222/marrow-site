/** @type {import('next').NextConfig} */
const config = {
  async rewrites() {
    return [
      { source: '/', destination: '/index.html' },
    ];
  },
};
module.exports = config;
