import React from 'react';
import { Download } from 'lucide-react';
import Button from '../ui/Button';
import { generatePDF } from '../utils/pdfGenerator';

const PDFExport = ({ variant = 'primary' }) => {
  return (
    <Button 
      onClick={generatePDF}
      variant={variant}
      icon={Download}
    >
      Download Ramadan Plan (PDF)
    </Button>
  );
};

export default PDFExport;