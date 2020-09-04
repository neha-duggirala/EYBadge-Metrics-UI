import AxiosService from './common/AxiosService';
import {TEAM_DETAILS_PATH} from '../constants/EndPoints';

class TeamDetailService {
    getTeamDetails() {
        return AxiosService.get(TEAM_DETAILS_PATH);
    }
    getTeamDetailsByid(id) {
        return AxiosService.get(TEAM_DETAILS_PATH+"/"+id);
    }
}

export default new TeamDetailService();