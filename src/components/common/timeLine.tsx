import classes from "../../styles/componentStyles/common/timeLine.module.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

type timeLineData = {
  key: string;
  title: string;
  subTitle?: string;
  time: string;
  description: string;
};

const TimeLineComponent = (props: { data: timeLineData[] }) => {
  return (
    <Timeline
      className={classes.container}
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.3,
        },
      }}
    >
      {props.data.map((item, i) => (
        <TimelineItem sx={{ height: `calc(100% / ${props.data.length})` }}>
          <TimelineOppositeContent className={classes.time}>
            {item.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            {i !== props.data.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent className={classes.title}>
            <div>{item.title}</div>
            <div className={classes.sub_title}>{item.subTitle}</div>
            <div className={classes.description}>{item.description}</div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimeLineComponent;
