import AxiosService from './common/AxiosService';
import { GET_EMPLOYEES, EMPLOYEE_PATH } from '../constants/EndPoints';

class EmployeeService {
    getEmployeeById(id) {
        return AxiosService.get(EMPLOYEE_PATH+"/"+id);
    }
}

export default new EmployeeService();