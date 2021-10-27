import axios from '@/axios';

/**
 * 拼接服务IP地址
 * @param host 192.168.0.1
 * @param port 8080
 * @prefix /v1
 */
export const SplicingServeIPWithBaseURL = (host: string, port: string) => {
  return `http://${host}:${port}`;
};

export const PingServeIP = async (host: string, port: string) => {
  const PingServeIPUrl = SplicingServeIPWithBaseURL(host, port) + '/v1/PingApi';
  return await axios.request({ method: 'POST', url: PingServeIPUrl, timeout: 5000 });
};
