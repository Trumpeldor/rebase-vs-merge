import Rest from './Rest';
import store from '../store';
import Actions from '../store/actions/forecasts';
import server from './server.json';

const getUrl = ({ lat, lon }) => {
  return `${server.http.apiBaseUrl}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=68918060d2b75f2fd16c940b75226d36`;
}

export async function execute(request) {
  const json = await Rest.GET(getUrl(request));
  const { dispatch } = store;
  const data = json.daily.map(o => {
    return { ...o, dt: o.dt * 1000 };
  });
  dispatch(Actions.refresh(data));
}
