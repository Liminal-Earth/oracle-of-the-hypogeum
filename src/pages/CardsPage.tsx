
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import OracleCardLibrary from '@/components/OracleCardLibrary';

const CardsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tabParam = queryParams.get('tab');

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-serif text-oracle-mystical mb-8 text-center">Oracle Card Library</h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Explore the 48 cards of the Oracle of the Hypogeum. Click on any card to view its detailed description and meaning.
        </p>
        
        <OracleCardLibrary />
      </div>
    </div>
  );
};

export default CardsPage;
