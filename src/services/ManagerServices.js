import AxiosService from './common/AxiosService';
import { GET_MANAGER } from '../constants/EndPoints';

class ManagerService {
    getManager() {
        return AxiosService.get(GET_MANAGER);
    }
}

export default new ManagerService();