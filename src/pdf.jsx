import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker?url";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

export default function PdfViewer() {
  return (
    <div className="w-full min-h-screen flex justify-center overflow-auto py-10 bg-neutral-100">
      <Document file="/2023030397.pdf">
        <Page
          pageNumber={1}
          scale={1.4}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
}

