import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import file from './ben_wills_cv_data_science.pdf';
import './CVDisplayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFViewer() {
		return (
      <div className="main-container">
				<div className="pdf-container">
					<Document className="pdf-document"
						file={file}
            onLoadError={console.error}
					>
						<Page pageNumber={1} renderTextLayer={false} width={600} />
					</Document>
				</div>
      </div>
		);
	}

export default PDFViewer;