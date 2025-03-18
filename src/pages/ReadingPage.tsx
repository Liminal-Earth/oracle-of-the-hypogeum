
import React from 'react';
import OracleReading from '@/components/OracleReading';

const ReadingPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-3xl md:text-4xl font-serif mb-6 text-center">
          Oracle Reading
        </h1>
        
        <div className="w-32 h-1 bg-oracle-gold mx-auto mb-8"></div>
        
        <div className="max-w-4xl mx-auto mb-8 p-4">
          <p className="text-center mb-6">
            Draw cards to reveal the currents influencing your situation.
          </p>
          <p className="text-center">
            Consult the Oracle of the Hypogeum. The ancients speak through these cards.
          </p>
        </div>
        
        <OracleReading />
      </div>
    </div>
  );
};

export default ReadingPage;
