import methodologyData from '@/services/mockData/methodology.json';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const methodologyService = {
  async getAll() {
    await delay(250);
    return [...methodologyData];
  },

  async getById(id) {
    await delay(200);
    const phase = methodologyData.find(item => item.Id === parseInt(id));
    if (!phase) {
      throw new Error('Methodology phase not found');
    }
    return { ...phase };
  },

  async create(phaseData) {
    await delay(400);
    const newId = Math.max(...methodologyData.map(item => item.Id)) + 1;
    const newPhase = { ...phaseData, Id: newId };
    methodologyData.push(newPhase);
    return { ...newPhase };
  },

  async update(id, updateData) {
    await delay(300);
    const index = methodologyData.findIndex(item => item.Id === parseInt(id));
    if (index === -1) {
      throw new Error('Methodology phase not found');
    }
    methodologyData[index] = { ...methodologyData[index], ...updateData };
    return { ...methodologyData[index] };
  },

  async delete(id) {
    await delay(250);
    const index = methodologyData.findIndex(item => item.Id === parseInt(id));
    if (index === -1) {
      throw new Error('Methodology phase not found');
    }
    const deletedPhase = { ...methodologyData[index] };
    methodologyData.splice(index, 1);
    return deletedPhase;
  }
};