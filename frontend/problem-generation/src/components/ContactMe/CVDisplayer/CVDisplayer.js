import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFViewer() {
		return (
			<div>
				<div style={{ width: 600 }}>
					<Document
						file="https://www.africau.edu/images/default/sample.pdf"
            onLoadError={console.error}
					>
						<Page pageNumber={1} width={600} />
					</Document>
				</div>
			</div>
		);
	}

export default PDFViewer;