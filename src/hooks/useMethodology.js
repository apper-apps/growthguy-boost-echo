import { useState, useEffect } from 'react';
import { methodologyService } from '@/services/api/methodologyService';

export const useMethodology = () => {
  const [phases, setPhases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadMethodology = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await methodologyService.getAll();
      setPhases(data);
    } catch (err) {
      setError(err.message || 'Failed to load methodology');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMethodology();
  }, []);

  const retry = () => {
    loadMethodology();
  };

  return {
    phases,
    loading,
    error,
    retry,
    reload: loadMethodology
  };
};