// PDF VIEWER — MOBILE-OPTIMIZED (Controls at Bottom)
import { Document, Page, pdfjs } from "react-pdf";
import pdfWorker from "pdfjs-dist/build/pdf.worker?url";

import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useQuestions } from "./contexts/QuestionContext";
import {
  ZoomIn,
  ZoomOut,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  Download,
  ArrowLeft,
  Maximize2,
  X,
} from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

function useResponsive() {
  const [isMobile, setIsMobile] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1024,
    height: typeof window !== "undefined" ? window.innerHeight : 768,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowSize({
        width,
        height: window.innerHeight,
      });
      setIsMobile(width < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile, windowSize };
}

export default function PdfViewer() {
  const { id: subjectId, pdfId } = useParams();
  const { getSubject } = useQuestions();
  const { isMobile, windowSize } = useResponsive();

  const subject = getSubject(subjectId);
  const pdfMeta = subject?.pdfs?.find((p) => p.id === pdfId);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [inputPage, setInputPage] = useState("1");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const viewerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (scale === null) {
      const defaultScale = isMobile ? 1.0 : 1.2;
      setScale(defaultScale);
    }
  }, [isMobile, scale]);

  useEffect(() => {
    setPageNumber(1);
    setInputPage("1");
  }, [pdfId]);

  // Touch gesture support
  useEffect(() => {
    const container = viewerRef.current;
    if (!container) return;

    let touchStartDistance = 0;

    const handleTouchStart = (e) => {
      if (e.touches.length === 2) {
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        touchStartDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const touchEndDistance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );
        const diff = touchEndDistance - touchStartDistance;
        if (Math.abs(diff) > 10) {
          const zoomDirection = diff > 0 ? 1 : -1;
          setScale((s) =>
            Math.max(0.5, Math.min(3, s + zoomDirection * 0.1))
          );
          touchStartDistance = touchEndDistance;
        }
      }
    };

    container.addEventListener("touchstart", handleTouchStart, false);
    container.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  if (!subject) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="text-center px-4">
          <h2 className="text-xl font-bold mb-4">Subject not found</h2>
          <Link to="/subjects">
            <Button>Back to Subjects</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!pdfMeta) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="text-center px-4">
          <h2 className="text-xl font-bold mb-4">PDF not found</h2>
          <Link to={`/subject/${subjectId}/pdfs`}>
            <Button>Back to PDFs</Button>
          </Link>
        </div>
      </div>
    );
  }

  const goToPage = (p) => {
    if (!numPages) return;
    const page = Math.max(1, Math.min(numPages, p));
    setPageNumber(page);
    setInputPage(page.toString());
    viewerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleZoomIn = () => {
    setScale((s) => Math.min(3, s + 0.1));
  };

  const handleZoomOut = () => {
    setScale((s) => Math.max(0.5, s - 0.1));
  };

  const handleRotate = () => {
    setRotation((r) => (r + 90) % 360);
  };

  return (
    <div
      ref={containerRef}
      className={`w-full ${
        isFullscreen ? "fixed inset-0 flex flex-col" : "min-h-screen"
      } bg-gradient-to-br from-slate-900 to-slate-800 text-white ${
        !isFullscreen && "py-4 md:py-6"
      }`}
    >
      {/* Header */}
      {!isFullscreen && (
        <div className="max-w-6xl mx-auto w-full px-3 md:px-4 mb-3 md:mb-4 flex-shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="min-w-0 flex-1">
              <h2 className="text-lg md:text-2xl font-bold truncate">
                {pdfMeta.title}
              </h2>
              <p className="text-xs md:text-sm text-slate-400 truncate">
                {subject.title}
              </p>
            </div>

            <div className="flex gap-2 flex-shrink-0">
              <a href={pdfMeta.file} download className="flex-1 sm:flex-none">
                <Button variant="outline" size={isMobile ? "sm" : "default"}>
                  <Download className="w-4 h-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">Download</span>
                </Button>
              </a>

              <Link
                to={`/subject/${subjectId}/pdfs`}
                className="flex-1 sm:flex-none"
              >
                <Button variant="outline" size={isMobile ? "sm" : "default"}>
                  <ArrowLeft className="w-4 h-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">Back</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Controls - Above PDF */}
      {!isMobile && !isFullscreen && (
        <div className="flex-shrink-0 bg-slate-800 border border-slate-700 rounded p-3 mx-auto max-w-6xl w-full mb-4 flex items-center justify-between gap-3">
          {/* Zoom Controls */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={handleZoomOut}
              className="h-10 w-10"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-4 h-4" />
            </Button>

            <span className="text-sm font-mono w-14 text-center flex-shrink-0">
              {Math.round(scale * 100)}%
            </span>

            <Button
              variant="outline"
              size="icon"
              onClick={handleZoomIn}
              className="h-10 w-10"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={handleRotate}
              className="h-10 w-10"
              aria-label="Rotate page"
            >
              <RotateCw className="w-4 h-4" />
            </Button>
          </div>

          {/* Page Navigation */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(pageNumber - 1)}
              disabled={pageNumber <= 1}
              className="h-10 w-10"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex items-center gap-2 flex-shrink-0">
              <input
                type="number"
                value={inputPage}
                onChange={(e) => setInputPage(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && goToPage(Number(inputPage))
                }
                className="w-14 text-center px-2 py-2 rounded bg-slate-700 text-white border border-slate-600 text-sm"
                aria-label="Go to page number"
              />
              <span className="text-sm flex-shrink-0">
                / {numPages ?? "—"}
              </span>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(pageNumber + 1)}
              disabled={numPages && pageNumber >= numPages}
              className="h-10 w-10"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {/* PDF Viewer */}
      <div
        ref={viewerRef}
        className={`flex-1 overflow-auto bg-slate-900 md:bg-white md:rounded md:shadow md:mx-auto md:max-w-6xl md:w-full ${
          isMobile ? "mb-32" : ""
        }`}
      >
        <Document
          file={pdfMeta.file}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center h-screen">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white md:border-slate-900"></div>
                <p className="mt-4 text-white md:text-slate-900">
                  Loading PDF...
                </p>
              </div>
            </div>
          }
        >
          <div className="flex flex-col items-center justify-start p-3 md:p-4">
            <Page
              pageNumber={pageNumber}
              scale={scale}
              rotate={rotation}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </div>
        </Document>
      </div>

      {/* Mobile Controls - Fixed at Bottom */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-800/98 border-t border-slate-700 p-3 flex flex-col gap-3 z-50 backdrop-blur-sm shadow-2xl">
          {/* Zoom & Fullscreen Row */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleZoomOut}
                className="h-9 w-9"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-4 h-4" />
              </Button>

              <span className="text-xs font-mono w-12 text-center flex-shrink-0">
                {Math.round(scale * 100)}%
              </span>

              <Button
                variant="outline"
                size="sm"
                onClick={handleZoomIn}
                className="h-9 w-9"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleRotate}
                className="h-9 w-9"
                aria-label="Rotate page"
              >
                <RotateCw className="w-4 h-4" />
              </Button>
            </div>

            {/* Fullscreen toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="h-9 w-9"
              aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? (
                <X className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Page Navigation Row */}
          <div className="flex items-center justify-between w-full">
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(pageNumber - 1)}
              disabled={pageNumber <= 1}
              className="h-9 w-9"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex items-center gap-2 flex-1 justify-center">
              <input
                type="number"
                value={inputPage}
                onChange={(e) => setInputPage(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && goToPage(Number(inputPage))
                }
                className="w-12 text-center px-2 py-1.5 rounded bg-slate-700 text-white border border-slate-600 text-sm"
                aria-label="Go to page number"
              />
              <span className="text-xs flex-shrink-0">
                / {numPages ?? "—"}
              </span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(pageNumber + 1)}
              disabled={numPages && pageNumber >= numPages}
              className="h-9 w-9"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Hint Text */}
          <div className="text-center text-xs text-slate-400 pt-1">
            Pinch to zoom • Swipe to scroll
          </div>
        </div>
      )}
    </div>
  );
}
