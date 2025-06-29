import { useState, useEffect } from 'react';
import { caseStudiesService } from '@/services/api/caseStudiesService';

export const useCaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadCaseStudies = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await caseStudiesService.getAll();
      setCaseStudies(data);
    } catch (err) {
      setError(err.message || 'Failed to load case studies');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCaseStudies();
  }, []);

  const retry = () => {
    loadCaseStudies();
  };

  return {
    caseStudies,
    loading,
    error,
    retry,
    reload: loadCaseStudies
  };
};