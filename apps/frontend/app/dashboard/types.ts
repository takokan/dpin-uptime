export interface WebsiteData {
  id: number;
  name: string;
  url: string;
  status: 'up' | 'down';
  uptime: number;
  uptimeHistory: boolean[];
}