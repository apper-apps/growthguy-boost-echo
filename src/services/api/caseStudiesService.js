import caseStudiesData from '@/services/mockData/caseStudies.json';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const caseStudiesService = {
  async getAll() {
    await delay(350);
    return [...caseStudiesData];
  },

  async getById(id) {
    await delay(200);
    const caseStudy = caseStudiesData.find(item => item.Id === parseInt(id));
    if (!caseStudy) {
      throw new Error('Case study not found');
    }
    return { ...caseStudy };
  },

  async create(caseStudyData) {
    await delay(500);
    const newId = Math.max(...caseStudiesData.map(item => item.Id)) + 1;
    const newCaseStudy = { ...caseStudyData, Id: newId };
    caseStudiesData.push(newCaseStudy);
    return { ...newCaseStudy };
  },

  async update(id, updateData) {
    await delay(350);
    const index = caseStudiesData.findIndex(item => item.Id === parseInt(id));
    if (index === -1) {
      throw new Error('Case study not found');
    }
    caseStudiesData[index] = { ...caseStudiesData[index], ...updateData };
    return { ...caseStudiesData[index] };
  },

  async delete(id) {
    await delay(300);
    const index = caseStudiesData.findIndex(item => item.Id === parseInt(id));
    if (index === -1) {
      throw new Error('Case study not found');
    }
    const deletedCaseStudy = { ...caseStudiesData[index] };
    caseStudiesData.splice(index, 1);
    return deletedCaseStudy;
  }
};