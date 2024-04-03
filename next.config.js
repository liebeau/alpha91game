/** @type {import('next').NextConfig} */


module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'rational.oss-cn-shenzhen.aliyuncs.com',
        },
      ],
    },
    output:"standalone",
    images:{
      unoptimized:true,
    },
  }

  const nextConfig = { 
    output: 'export',
  };
  module.exports = nextConfig