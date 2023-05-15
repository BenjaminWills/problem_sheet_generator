import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import file from './ben_wills_cv_data_science.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFViewer() {
		return (
			<div>
				<div style={{ width: 600 }}>
					<Document
						file={file}
            onLoadError={console.error}
					>
						<Page pageNumber={1} width={600} />
					</Document>
				</div>
			</div>
		);
	}

export default PDFViewer;