// Speedtest summary component styles
// imports
import { StyleSheet } from "react-native";


const speedSummaryStyle = StyleSheet.create({
  Body: {
    backgroundColor: "grey",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    paddingTop: 15,
  },
  BodyDarkmode: {
    backgroundColor: "#1d3557",
  },

  // Speed Diplays
  SpeedsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: "95%",
    marginLeft: 8,
  },
  DownloadContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  UploadContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    marginLeft: 10,
  },
  SpeedTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "95%",
  },
  SpeedContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: "95%",
  },

  SpeedTypeText: {
    color: "white",
    fontSize: 16,
  },
  SpeedDisplay: {
    color: "white",
    fontSize: 40,
  },
  SpeedUnit: {
    color: "grey",
    fontSize: 20,
    marginBottom: 5,
  },


  // Graphs
  DetailContainer: {
    backgroundColor: "#1d2d44",
    marginTop: 15,
    borderRadius: 10,
    flexDirection: 'column',
    marginLeft: 8,
  },
  DetailContainerTriggered: {
    width: "95%",
  },
  DetailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    width: 110,
  },
  DetailText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  DetailIcon: {
    color: "#48cae4",
    position: "relative",
    left: 0,
  },
  RotateDetailIcon: {
    transform: [{ rotate: '180deg' }],
  },
  DetailContent: {
    width: "95%",
    backgroundColor: "white",
  },
  DetailContentText: {
    color: "black",
    fontSize: 16,
  },



  GraphsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 14,
    paddingTop: 7,
  },
  DownSpeedGraphContainer: {
    width: "95%",
    marginBottom: 5,
    height: 100,
  },
  SpeedGraphInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: "100%",
  },
  SpeedTypeGraphText: {
    color: "white",
    fontSize: 16,
  },
  SpeedUnitGraphText: {
    color: "grey",
    fontSize: 16,
  },
  UpSpeedGraphContainer: {
    width: "95%",
    height: 100,
  },


  // Infos
  InfoContainer: {
    // backgroundColor: "red",
    flexDirection: 'column',
    marginTop: 15,
    marginLeft: 8,
  },
  InfoOperatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
  },
  InfoOperatorTextContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  InfoText: {
    fontSize: 15,
  },
  InfoDeviceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
  },
});

export default speedSummaryStyle;
