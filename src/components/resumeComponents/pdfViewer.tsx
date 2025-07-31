import { Document, Page } from "react-pdf";
import classes from "./pdfViewer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { RefObject } from "react";
import { setPageNumber } from "../../store/slices/resumeSlice";

export interface PdfProps {
  src: string;
  onDocSuccess: any;
  scale: number;
  pageRef: RefObject<HTMLDivElement>;
}

const PdfReact = (props: PdfProps) => {
  const { src, onDocSuccess, scale, pageRef } = props;
  const { mode } = useSelector((state: RootState) => state.container);
  const { numPages, pageNumber } = useSelector(
    (state: RootState) => state.resume
  );
  const dispatch = useDispatch();

  const handlePageScroll = () => {
    if (pageRef?.current) {
      dispatch(
        setPageNumber(
          pageRef.current.scrollTop === 0
            ? 1
            : Math.ceil(
                (+pageRef.current.scrollTop.toFixed(0) * numPages) /
                  (pageRef.current.scrollHeight - pageRef.current.clientHeight)
              )
        )
      );
    }
  };

  return (
    <div
      className={`${classes.pdf_window} ${classes[mode]}`}
      onScroll={handlePageScroll}
      ref={pageRef}
    >
      <Document file={src} onLoadSuccess={onDocSuccess} scale={scale}>
        {/* <Page
          pageNumber={pageNumber}
          className={classes.pdf_document}
          canvasBackground="#00000099"
          renderTextLayer={false}
          renderAnnotationLayer={false}
        /> */}
        {Array.apply(null, Array(numPages))
          .map((_, i) => i + 1)
          .map((page) => (
            <Page
              key={`page_${page}`}
              pageIndex={pageNumber}
              pageNumber={page}
              className={classes.pdf_document}
              canvasBackground="#00000099"
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ))}
      </Document>
    </div>
  );
};

export default PdfReact;
