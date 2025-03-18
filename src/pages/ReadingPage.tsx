
import React from 'react';
import OracleReading from '@/components/OracleReading';

const ReadingPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-b from-oracle-gold/5 to-transparent opacity-70"></div>
        
        {/* Sacred geometry shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-oracle-gold/10 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-oracle-gold/10 rounded-full"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 border border-oracle-gold/10 transform rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-3xl md:text-4xl font-serif mb-2 text-center shimmer-text">Oracle Reading</h1>
        
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-oracle-gold to-transparent mx-auto mb-6"></div>
        
        <p className="text-center text-oracle-gold/80 max-w-2xl mx-auto mb-10">
          Consult the Oracle of the Hypogeum. Draw cards to create a divination map that reveals the currents influencing your situation.
        </p>
        
        <OracleReading />
      </div>
    </div>
  );
};

export default ReadingPage;
