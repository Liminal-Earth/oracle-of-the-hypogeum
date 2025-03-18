
import React from 'react';
import { Button } from "@/components/ui/button";
import { Shuffle, BookOpen } from "lucide-react";

interface ReadingControlsProps {
  onDrawCard: () => void;
  onResetReading: () => void;
  disableDrawCard: boolean;
}

const ReadingControls: React.FC<ReadingControlsProps> = ({ 
  onDrawCard, 
  onResetReading, 
  disableDrawCard 
}) => {
  return (
    <div className="flex gap-4">
      <Button
        onClick={onDrawCard}
        disabled={disableDrawCard}
        className="bg-oracle-mystical hover:bg-oracle-mystical/80"
      >
        <BookOpen className="mr-2 h-4 w-4" />
        Draw Card
      </Button>
      
      <Button
        onClick={onResetReading}
        variant="outline"
        className="border-oracle-mystical text-oracle-mystical hover:bg-oracle-mystical/10"
      >
        <Shuffle className="mr-2 h-4 w-4" />
        New Reading
      </Button>
    </div>
  );
};

export default ReadingControls;
