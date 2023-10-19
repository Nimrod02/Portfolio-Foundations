import NetInfo from '@react-native-community/netinfo';
import { PermissionsAndroid } from 'react-native';

export const getAuthorization = async () => {
  const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
  if (granted === true) {
    console.log("Permission granted");
    return true;
  } else {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Permission granted");
        return true;
      } else {
        console.log("Permission denied");
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
};

export const fetchSignalStrength = async () => {
  const networkInfo = await NetInfo.fetch();
  const ssid = networkInfo.details.ssid;
  const strength = networkInfo.details.strength;
  return { ssid, strength }
}