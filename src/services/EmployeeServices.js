import AxiosService from './common/AxiosService';
import { GET_EMPLOYEES } from '../constants/EndPoints';

class EmployeeService {
    getEmployeeById(id) {
        return AxiosService.get(GET_EMPLOYEES+"/"+id);
    }
}

export default new EmployeeService();