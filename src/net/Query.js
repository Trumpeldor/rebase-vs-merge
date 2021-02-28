import Rest from './Rest';
import store from '../store';
import Actions from '../store/actions/forecasts';
import server from './server.json';

export async function execute() {
  const json = await Rest.GET(`${server.http.apiBaseUrl}`);
  const { dispatch } = store;
  const data = json.daily.map(o => {
    return { ...o, dt: o.dt * 1000 };
  });
  dispatch(Actions.refresh(data));
}
