import { useState, useEffect } from 'react';
import { metricsService } from '@/services/api/metricsService';

export const useMetrics = () => {
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadMetrics = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await metricsService.getAll();
      setMetrics(data);
    } catch (err) {
      setError(err.message || 'Failed to load metrics');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMetrics();
  }, []);

  const retry = () => {
    loadMetrics();
  };

  return {
    metrics,
    loading,
    error,
    retry,
    reload: loadMetrics
  };
};