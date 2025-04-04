/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "picsum.photos",
      "i.pinimg.com",
      "source.unsplash.com", // 👈 Add this line
    ],
  },
};

export default nextConfig;

