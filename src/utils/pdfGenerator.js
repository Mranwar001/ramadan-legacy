import html2pdf from 'html2pdf.js';

export const generatePDF = () => {
  const element = document.getElementById('pdf-content');
  
  if (!element) {
    console.error('PDF content element not found');
    return;
  }

  const opt = {
    margin: [0.5, 0.5, 0.5, 0.5],
    filename: 'Ramadan_Legacy_By_Anwar_Dahir_Yahaya.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 2,
      letterRendering: true,
      useCORS: true,
      logging: true
    },
    jsPDF: { 
      unit: 'in', 
      format: 'a4', 
      orientation: 'portrait'
    }
  };

  return html2pdf().set(opt).from(element).save();
};