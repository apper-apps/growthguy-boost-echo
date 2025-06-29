import { useState, useEffect } from 'react';
import { servicesService } from '@/services/api/servicesService';

export const useServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadServices = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await servicesService.getAll();
      setServices(data);
    } catch (err) {
      setError(err.message || 'Failed to load services');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  const retry = () => {
    loadServices();
  };

  return {
    services,
    loading,
    error,
    retry,
    reload: loadServices
  };
};