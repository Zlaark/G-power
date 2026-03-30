'use client';

import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

interface Props {
  targetId: string;
  filename: string;
}

export const DownloadPdfButton = ({ targetId, filename }: Props) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const element = document.getElementById(targetId);
      if (!element) {
        throw new Error('Datasheet content not found');
      }

      // Filter out non-Element nodes and extract the main sections (Cover and Sheet)
      const pages = Array.from(element.children).filter(child => child.nodeType === Node.ELEMENT_NODE) as HTMLElement[];
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm

      for (let i = 0; i < pages.length; i++) {
        const pageElement = pages[i];
        
        // Hide specific elements that shouldn't appear in the PDF if needed
        // (For example, we might not want certain hover animations or shadows to trigger during capture)
        const canvas = await html2canvas(pageElement, {
          scale: window.devicePixelRatio > 1 ? window.devicePixelRatio : 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#FFFFFF',
          logging: false
        });
        
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        
        if (i > 0) {
          pdf.addPage();
        }
        
        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      }
      
      pdf.save(filename);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`btn-sweep btn-glow btn-float-hover mt-4 text-white font-semibold flex items-center justify-center gap-2 px-6 py-3 rounded-[8px] shadow-md transition-all duration-300 w-full sm:w-auto ${isDownloading ? 'opacity-70 cursor-not-allowed' : ''}`}
      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "16px" }}
    >
      {isDownloading ? <Loader2 className="animate-spin w-5 h-5" /> : <Download className="w-5 h-5" />}
      {isDownloading ? 'Generating PDF...' : 'Download PDF Pamphlet'}
    </button>
  );
};
