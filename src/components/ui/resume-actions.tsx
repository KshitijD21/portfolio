"use client";

import { Download } from "lucide-react";

export function ResumeActions() {
  const fileId = "1oYiwMg8LBGpowf7PcFSqPe1oXujRFu3-";
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const handleResumeClick = () => {
    // Open in new tab
    window.open(`https://drive.google.com/file/d/${fileId}/view`, "_blank");
    // Trigger download
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Kshitij_Dumbre_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleResumeClick}
      className="inline-flex items-center gap-2 rounded-lg px-12 py-4 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
      style={
        {
          backgroundColor: "#FF6B6B",
          "--hover-bg": "#FF5252",
        } as React.CSSProperties & { "--hover-bg": string }
      }
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FF5252")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FF6B6B")}
    >
      <Download className="h-5 w-5" />
      View Resume
    </button>
  );
}
