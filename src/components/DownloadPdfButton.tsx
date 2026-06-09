'use client';

import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { toJpeg } from 'html-to-image';

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
      
      const pdf = new jsPDF('p', 'mm', 'a4', true); // Enable compression
      const imgWidth = 210; // A4 width in mm

      for (let i = 0; i < pages.length; i++) {
        const pageElement = pages[i];
        
        // Also temporarily ensure any animations inside are disabled during capture
        pageElement.classList.add('no-animations');

        // Capture with html-to-image
        const dataUrl = await toJpeg(pageElement, {
          quality: 0.85, // Slightly lower quality for much faster generation and smaller file size
          pixelRatio: 1.5, // Reduced from 2 for smoother/faster performance on mobile
          backgroundColor: '#F3F4F6',
          style: {
            width: '1000px',
            maxWidth: '1000px',
            minWidth: '1000px',
            margin: '0',
            transform: 'scale(1)',
          }
        });
        
        pageElement.classList.remove('no-animations');

        const imgProps = pdf.getImageProperties(dataUrl);
        const imgHeight = (imgProps.height * imgWidth) / imgProps.width;
        
        if (i > 0) {
          pdf.addPage();
        }
        
        pdf.addImage(dataUrl, 'JPEG', 0, 0, imgWidth, imgHeight);
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
      className={`btn-sweep-blue flex items-center justify-center gap-2 bg-[#0A5191] text-white px-6 py-3.5 rounded-[12px] font-medium hover:bg-[#083D6D] transition-all shadow-[0_4px_14px_rgba(10,81,145,0.25)] w-full sm:w-auto ${isDownloading ? 'opacity-70 cursor-not-allowed' : ''}`}
      style={{ fontFamily: "'Poppins', sans-serif", fontSize: "16px" }}
    >
      {isDownloading ? <Loader2 className="animate-spin w-5 h-5" /> : <Download className="w-4 h-4" />}
      {isDownloading ? 'Generating PDF...' : 'Download PDF Pamphlet'}
    </button>
  );
};
