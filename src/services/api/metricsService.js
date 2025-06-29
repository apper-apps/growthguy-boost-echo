import metricsData from '@/services/mockData/metrics.json';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const metricsService = {
  async getAll() {
    await delay(200);
    return [...metricsData];
  },

  async getById(id) {
    await delay(150);
    const metric = metricsData.find(item => item.Id === parseInt(id));
    if (!metric) {
      throw new Error('Metric not found');
    }
    return { ...metric };
  },

  async create(metricData) {
    await delay(300);
    const newId = Math.max(...metricsData.map(item => item.Id)) + 1;
    const newMetric = { ...metricData, Id: newId };
    metricsData.push(newMetric);
    return { ...newMetric };
  },

  async update(id, updateData) {
    await delay(250);
    const index = metricsData.findIndex(item => item.Id === parseInt(id));
    if (index === -1) {
      throw new Error('Metric not found');
    }
    metricsData[index] = { ...metricsData[index], ...updateData };
    return { ...metricsData[index] };
  },

  async delete(id) {
    await delay(200);
    const index = metricsData.findIndex(item => item.Id === parseInt(id));
    if (index === -1) {
      throw new Error('Metric not found');
    }
    const deletedMetric = { ...metricsData[index] };
    metricsData.splice(index, 1);
    return deletedMetric;
  }
};