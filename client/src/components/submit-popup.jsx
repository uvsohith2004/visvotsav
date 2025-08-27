import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const LoadingSpinner = () => (
  <motion.div
    className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full"
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  />
);

const ConfettiPopup = ({ isOpen, onClose, title, description, isSuccess, isLoading }) => {
  const navigate = useNavigate();
  const [windowDimensions, setWindowDimensions] = useState({ 
    width: window.innerWidth, 
    height: window.innerHeight 
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClose = () => {
    onClose();
    navigate('/');
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DialogHeader>
            <DialogTitle className={cn(
              "text-2xl font-bold mb-2",
              isLoading ? 'text-blue-500' : (isSuccess ? 'text-green-500' : 'text-red-500')
            )}>
              {isLoading ? 'Processing...' : title}
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              {isLoading ? 'Please wait while we process your request.' : description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            {isLoading ? (
              <div className="flex justify-center items-center h-10">
                <LoadingSpinner />
              </div>
            ) : (
              <Button 
                onClick={handleClose}
                className={cn(
                  "w-full py-2 text-white font-semibold rounded-lg transition-all duration-300",
                  isSuccess ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
                )}
              >
                Close and Return Home
              </Button>
            )}
          </div>
        </motion.div>
      </DialogContent>
      {isOpen && isSuccess && !isLoading && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.1}
        />
      )}
    </Dialog>
  );
};

export default ConfettiPopup;
