import { useRef, useState } from "react";
import classes from "../../styles/componentStyles/resumeComponents/pdfBox.module.css";
import PdfReact from "./pdfViewer";
import leftSmallIcon from "../../assets/icon_small_left.png";
import rightSmallIcon from "../../assets/icon_small_right.png";
import plusIcon from "../../assets/icon_plus.png";
import minusIcon from "../../assets/icon_minus.png";
import printIcon from "../../assets/icon_print.png";
import downloadIcon from "../../assets/icon_download.png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setNumPages, setPageNumber } from "../../store/slices/resumeSlice";

const PdfBox = (props: { src: string; backClickHandler: any }) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(1);
  const { pageNumber, numPages } = useSelector(
    (state: RootState) => state.resume
  );
  const { mode, screenWidth } = useSelector(
    (state: RootState) => state.container
  );
  const dispatch = useDispatch<AppDispatch>();

  function nextPage() {
    if (pageRef.current) {
      pageRef.current.scrollTo({
        top: (pageRef.current.scrollHeight / numPages) * pageNumber,
        left: 0,
      });
    }
    dispatch(setPageNumber(pageNumber + 1));
  }

  function prevPage() {
    if (pageRef.current) {
      pageRef.current.scrollTo({
        top: (pageRef.current.scrollHeight / numPages) * (pageNumber - 2),
        left: 0,
      });
    }
    dispatch(setPageNumber(pageNumber - 1));
  }

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    dispatch(setNumPages(numPages));
  }

  const pdfButtonOptions = (
    <div className={`${classes.pdf_buttons} ${classes[mode]}`}>
      <button
        onClick={prevPage}
        disabled={pageNumber <= 1}
        className={classes.page_change_button}
      >
        <img
          src={leftSmallIcon}
          className={`${classes.button_img} ${classes[mode]}`}
        />
      </button>
      <span>{`Page ${pageNumber} / ${numPages}`}</span>
      <button
        onClick={nextPage}
        disabled={pageNumber >= (numPages ?? -1)}
        className={classes.page_change_button}
      >
        <img
          src={rightSmallIcon}
          className={`${classes.button_img} ${classes[mode]}`}
        />
      </button>
      |
      <button
        onClick={() => setScale(scale - 0.2)}
        disabled={scale <= 0.75}
        className={classes.zoom_in_out_button}
      >
        <img
          src={minusIcon}
          className={`${classes.button_img} ${classes[mode]}`}
        />
      </button>
      <span className={classes.zoom_percentage}>{`${(scale * 100).toFixed(
        0
      )}%`}</span>
      <button
        onClick={() => setScale(scale + 0.2)}
        disabled={scale >= 1.95}
        className={classes.zoom_in_out_button}
      >
        <img
          src={plusIcon}
          className={`${classes.button_img} ${classes[mode]}`}
        />
      </button>
    </div>
  );

  return (
    <div className={`${classes.pdf_container} ${classes[mode]}`}>
      <div className={classes.pdf_header}>
        <div className={classes.back}>
          <button
            className={classes.back_button}
            onClick={props.backClickHandler}
          >
            {"< Back"}
          </button>
        </div>
        {screenWidth > 768 && pdfButtonOptions}
        <div className={`${classes.print_download_icons} ${classes[mode]}`}>
          <img
            src={printIcon}
            onClick={() => window.open(props.src, "_blank")}
          />
          <a href={props.src} download>
            <img src={downloadIcon} />
          </a>
        </div>
        {screenWidth < 768 && pdfButtonOptions}
      </div>
      <PdfReact
        src={props.src}
        onDocSuccess={onDocumentLoadSuccess}
        scale={scale}
        pageRef={pageRef}
      />
    </div>
  );
};

export default PdfBox;
