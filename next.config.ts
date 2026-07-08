import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 127.0.0.1로 접속 시 개발 서버의 HMR(Fast Refresh) 웹소켓이 차단되어
  // 클릭 등 클라이언트 상호작용이 전혀 동작하지 않는 문제를 방지합니다.
  allowedDevOrigins: ["localhost", "127.0.0.1"],
};

export default nextConfig;
