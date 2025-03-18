
import React from 'react';
import OracleReading from '@/components/OracleReading';

const ReadingPage: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-serif text-oracle-mystical mb-8 text-center">Oracle Reading</h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Consult the Oracle of the Hypogeum. Draw cards to create a divination map that reveals the currents influencing your situation.
        </p>
        
        <OracleReading />
      </div>
    </div>
  );
};

export default ReadingPage;
