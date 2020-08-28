import AxiosService from './common/AxiosService';
import { EMPLOYEE_PATH } from '../constants/EndPoints';

class ManagerService {
    getAllEmployees() {
        return AxiosService.get(EMPLOYEE_PATH);
    }

    getEmployeeById(id){
        return AxiosService.get(EMPLOYEE_PATH + "/" + id)
    }
}

export default new ManagerService();